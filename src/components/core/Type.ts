export type Milestone = {
    id: string | number;
    year: string;
    img: string;
    description: string;
    width: number;
    height: number;
}

export type Cultures = {
    id: string | number;
    title: string;
    description: string;
    image: string;
    width: number;
    height: number;
    
}

export type Teams = {
    id: string | number;
    name: string;
    role: string;
    description: string;
    image: string;
    width: number;
    height: number;
}

export type ImageProduct = {
    id?: string;
    url: string;
    width: number;
    height: number;
    description?: string;
};

export type Product = {
    id: string | number;
    title: string;
    description: string;
    product: ImageProduct[];
    color: string;
    shadow: string;
}

export type Products = Product[];

export type ProductDetail = {
    id: string | number;
    bgcolor: string;
    bgimage: string;
    width: number;
    height: number;
    title: string;
    description: string;
    product: ImageProduct[];
}

export type ProductsDetail = ProductDetail[];

export type Testimony = {
    id: string | number;
    name: string;
    role: string;
    description: string;
    image: string;
    width: number;
    height: number;
}