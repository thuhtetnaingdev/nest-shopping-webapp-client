import axios from "axios";
import {
  BehaviorSubject,
  combineLatestWith,
  concatMap,
  from,
  map,
  mergeMap,
  Subject,
  toArray,
} from "rxjs";
import { RootObject } from "../cors/types/ItemTypes";

interface Product {
  productId: number;
  quantity: number;
  description?: string;
  img?: string;
  price?: number;
  title?: string;
  total?: number;
}

interface CartData {
  id: number;
  userId: number;
  date: Date;
  products: Product[];
  total?: number;
  __v: number;
}

export const rawData$ = new BehaviorSubject<Product[]>([]);
export const loading$ = new BehaviorSubject<boolean>(true);
export const total$ = new Subject<CartData>();

export const mergeData$ = rawData$.pipe(mergeMap((val) => fetchData(val)));

const fetchData = (val: Product[]) => {
  return from(val).pipe(
    map(async (data) => {
      const fetchData: RootObject = await axios
        .get(`https://fakestoreapi.com/products/${data.productId}`)
        .then((res) => res.data)
        .catch((err) => {
          throw new Error(err);
        });

      return {
        ...data,
        description: fetchData.description,
        title: fetchData.title,
        price: fetchData.price,
        img: fetchData.image,
      };
    }),
    concatMap(async (value) => {
      loading$.next(false);
      return await value;
    }),
    toArray(),
    map((val) => {
      return val;
    })
  );
};

export const IncDec$ = new BehaviorSubject<
  {
    productId: number;
    quantity: number;
  }[]
>([]);

export const cartData$ = mergeData$.pipe(
  combineLatestWith(IncDec$),
  map(([mergeData, IncDec]) =>
    mergeData.map((cart) => {
      const findIncDec = IncDec.find((f) => f.productId === cart.productId);
      if (findIncDec) {
        return {
          ...cart,
          quantity: findIncDec.quantity,
        };
      }
      return cart;
    })
  ),
  map((data) =>
    data.map((value) => ({ ...value, total: value.price * value.quantity }))
  ),
  combineLatestWith(total$),
  map(([data, total]) => {
    const allPrices = data.map((v) => v.total);
    const totalPrice = allPrices.reduce((preVal, curVal) => preVal + curVal, 0);
    return {
      ...total,
      products: data,
      total: totalPrice,
    };
  })
);
