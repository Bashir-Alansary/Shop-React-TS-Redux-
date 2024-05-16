interface Product {
    id: number,
    name: string,
    category: string,
    img: string,
    newPrice: string,
    oldPrice: string,
    imgs: string[],
    sizes: string[],
    color: string,
    type: string,
    tags: string[],
    info: {style: string, composition: string, weight: string, dimensions: string,}[],
    desc: string,
}

export type { Product as ProductType }


