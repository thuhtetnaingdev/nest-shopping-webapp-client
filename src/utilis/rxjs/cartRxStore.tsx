import axios from "axios";
import { useEffect, useState } from "react";
import {
  BehaviorSubject,
  combineLatestWith,
  concatMap,
  filter,
  from,
  map,
  mergeMap,
  Observable,
  Subject,
  toArray,
} from "rxjs";
import { ajax } from "rxjs/ajax";
import { CartData, Product, UpdateTotal } from "../../cors/types/CartType";
import { RootObject } from "../../cors/types/ItemTypes";

//fetch data and return json observable
export function fetchData<T>(LINK: string): Observable<T> {
  return ajax.getJSON(LINK);
}

//Increase and Decrease on click
export const IncDec$ = new BehaviorSubject<
  {
    productId: number;
    quantity: number;
  }[]
>([]);

export const remove$ = new BehaviorSubject<number[]>([]);

//Update fetched values
export function cartUpdateValue(
  source$: Observable<CartData>,
  IncDec$: BehaviorSubject<UpdateTotal[]>
): [CartData, boolean, string] {
  const [value, setValue] = useState<any>({});
  const [errorMessaage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  //-------------fetch products descriptions----------------
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
  //--------------------------------------------------------

  //update product and make changes on INC and DEC
  const product$ = source$.pipe(
    map((x) => x.products),
    //merge to fetch operator to fetch particular items
    concatMap((y) => FetchMapValue(y)),
    concatMap((data) =>
      remove$.pipe(
        map((value) =>
          data.filter((product) => !value.includes(product.productId))
        )
      )
    ),
    combineLatestWith(IncDec$),
    //update on change
    map(([original, IncDec]) =>
      original.map((data) => {
        const findIncDec = IncDec.find((f) => f.productId === data.productId);
        if (findIncDec) {
          return { ...data, quantity: findIncDec.quantity };
        }
        return data;
      })
    ),
    //calculate single item price
    map((y) =>
      y.map((data) => ({
        ...data,
        total: data.quantity * data.price,
      }))
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
        total: finalTotalPrice + (finalTotalPrice * 5) / 100,
      };
    })
  );
  useEffect(() => {
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
  return [value, loading, errorMessaage];
}
