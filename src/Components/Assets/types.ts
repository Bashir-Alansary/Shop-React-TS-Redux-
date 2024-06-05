import React from "react";

interface SmallImgType {
    id: number,
    name: string,
    img: string,
    color: string,
}

interface InfoType {
    style: string, 
    composition: string, 
    weight: string, 
    dimensions: string,
}

interface ProductType {
    id: number,
    name: string,
    category: string,
    smallImgs: SmallImgType[],
    newPrice: number,
    oldPrice: number,
    bigImgs: string[],
    sizes: string[],
    color: string,
    type: string,
    tags: string[],
    info: InfoType,
    desc: string,
}

interface IDColor {
    id: number,
    color: SmallImgType,
}

interface IDSizeColor extends IDColor {
    size: string,
}

type SortShownVal = string | number;

interface SortShownType {
    id: number;
    name: string;
    value: SortShownVal;
}

interface FilterProps {
    filterColors: (e: React.ChangeEvent<HTMLInputElement>) => void,
    filterTypes: (e: React.ChangeEvent<HTMLInputElement>) => void,
    categoryData: ProductType[],
}

interface RangeType {
    minRange: number,
    maxRange: number,
}

export type { ProductType, 
    SmallImgType,
    InfoType,
    IDColor,
    IDSizeColor,
    FilterProps,
    RangeType,
    SortShownType,
    SortShownVal
}

