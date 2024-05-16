import ProductDescription from "./ProductDescription/ProductDescription";
import ProductMoreInfo from "./ProductMoreInfo/ProductMoreInfo";
import ProductReviews from "./ProductReviews/ProductReviews";

export const parties = [
    {
        id:1,
        name: "description",
        comp: <ProductDescription />
    },
    {
        id:2,
        name: "more info",
        comp: <ProductMoreInfo />
    },
    {
        id:3,
        name: "reviews",
        comp: <ProductReviews />
    }
]