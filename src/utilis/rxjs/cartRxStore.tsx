import { original } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  BehaviorSubject,
  combineLatestWith,
  concatMap,
  from,
  map,
  mergeMap,
  Observable,
  toArray,
} from "rxjs";
import { ajax } from "rxjs/ajax";
import { CartData, Product, UpdateTotal } from "../../cors/types/CartType";
import { RootObject } from "../../cors/types/ItemTypes";

interface ErrorHandler {
  isError: boolean;
  message: string;
}

export function fetchData<T>(LINK: string): Observable<T> {
  return ajax.getJSON(LINK);
}

export function useSubject<T>(source$: Observable<T>) {}
export const IncDec$ = new BehaviorSubject<
  {
    productId: number;
    quantity: number;
  }[]
>([]);

export function cartUpdateValue(
  source$: Observable<CartData>,
  IncDec$: BehaviorSubject<UpdateTotal[]>
) {
  const [value, setValue] = useState<any>({});
  const [errorMessaage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  function FetchMapValue(value: Product[]) {
    return from(value).pipe(
      concatMap((x) =>
        axios
          .get(`https://fakestoreapi.com/products/${x.productId}`)
          .then((res) => res.data)
          .then((res: RootObject) => ({
            ...x,
            description: res.description,
            img: res.image,
            price: res.price,
            title: res.title,
          }))
      ),
      toArray()
    );
  }
  const product$ = source$.pipe(
    map((x) => x.products),
    mergeMap((y) => FetchMapValue(y)),
    combineLatestWith(IncDec$),
    map(([original, IncDec]) =>
      original.map((data) => {
        const findIncDec = IncDec.find((f) => f.productId === data.productId);
        if (findIncDec) {
          return { ...data, quantity: findIncDec.quantity };
        }
        return data;
      })
    ),
    map((y) =>
      y.map((data) => ({ ...data, total: data.quantity * data.price }))
    )
  );
  const finalData = source$.pipe(
    combineLatestWith(product$),
    map(([originalSource, products]) => {
      const totalPriceArray = products.map((p) => p.total);
      const finalTotalPrice = totalPriceArray.reduce(
        (pre, cur) => pre + cur,
        0
      );
      return {
        ...originalSource,
        products: products,
        total: finalTotalPrice,
      };
    })
  );
  useEffect(() => {
    console.log('i got called')
    const source = finalData.subscribe(
      (x) => {
        setValue(x);
        setLoading(false);
      },
      (err) => setErrorMessage(err)
    );
    return () => {
      source.unsubscribe();
    };
  }, [source$]);
  return [value, loading, errorMessaage] as const;
}
