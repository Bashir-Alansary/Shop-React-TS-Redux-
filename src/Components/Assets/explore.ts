import menImg from "./images/explore_men.png";
import womenImg from "./images/explore_women.png";
import kidsImg from "./images/explore_kids.png";
import bcImg1 from "./images/explore_bc_img1.svg";
import bcImg2 from "./images/explore_bc_img2.svg";
import bcImg3 from "./images/explore_bc_img3.svg";
import products from "./products";

const menItemsLength = products.filter(item => item.category === "Men").length;
const womenItemsLength = products.filter(item => item.category === "Women").length;
const KidsItemsLength = products.filter(item => item.category === "Kids").length;

export const explore = [
    {
        id:1,
        name:"Men categories",
        path: "/men",
        img: menImg,
        bcImg: bcImg1,
        num: menItemsLength,
    },
    {
        id:2,
        name:"Women categories",
        path: "/women",
        img:womenImg,
        bcImg: bcImg2,
        num: womenItemsLength,
    },
    {
        id:3,
        name:"Kids categories",
        path: "/kids",
        img: kidsImg,
        bcImg: bcImg3,
        num: KidsItemsLength,
    }
]