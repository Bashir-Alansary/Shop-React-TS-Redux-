interface SmallImg {
    id: number,
    name: string,
    img: string,
    color: string,
}

interface Info {
    style: string, 
    composition: string, 
    weight: string, 
    dimensions: string,
}

interface Product {
    id: number,
    name: string,
    category: string,
    smallImgs: SmallImg[],
    newPrice: string,
    oldPrice: string,
    bigImgs: string[],
    sizes: string[],
    color: string,
    type: string,
    tags: string[],
    info: Info,
    desc: string,
}

export const isItemExist = (id: number, list: Product[]): boolean => {
    const theItem:Product | undefined = list.find((item) => item.id === id);
    if (theItem === undefined) {
        return false
    } else {
        return true
    }
  }

export type { Product as ProductType, SmallImg as SmallImgType, Info as InfoType}

