type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type products<T='get'> = Structure<
T,
{
  /**
   * brandName
   */
  brandName: string
  /**
   * productName
   */
  productName: string
  /**
   * slug
   */
  slug: string
  /**
   * description
   */
  description: string
  /**
   * price
   */
  price: number
  /**
   * colors
   */
  colors: Reference<T,unknown>[]
}>


export interface EndPoints {
  get: {
    'products': products<'get'>
  }
  gets: {
    'products': products<'gets'>
  }
  post: {
    'products': products<'post'>
  }
  put: {
    'products': products<'put'>
  }
  patch: {
    'products': products<'patch'>
  }
}
