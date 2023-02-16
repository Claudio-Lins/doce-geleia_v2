// export interface ProductProps {
//   [x: string]: any
//   products: []
//   id: number
//   title: string
//   slug?: string
//   ingredients?: string
//   coverUrl?: string
// }

export interface ProductDetail {
  id:     number;
  weight: string;
  price:  number;
}

export interface Data {
  id:         number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  name:              string;
  alternativeText:   null;
  width:             number;
  height:            number;
  url:               string;
}

export interface Gallery {
  data: Datum[];
}

export interface Datum {
  id:         number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  name:              string;
  alternativeText:   null;
  width:             number;
  height:            number;
  url:               string;
}

export interface Cover {
  data: Data;
}

export interface ProductProps {
  data: any;
  id: number
  attributes: {
    title: string
    slug: string
    likes: number
    destak: boolean
    ingredients: string
    cover: Cover
    gallery: Gallery
    ProductDetails: ProductDetail[]
  }
}