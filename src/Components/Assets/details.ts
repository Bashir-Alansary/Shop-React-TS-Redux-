import visa from "./images/visa.png"
import mastercard from "./images/mastercard.png"
import paypal from "./images/paypal.png"
import amazon from "./images/amazon.png"
import ebay from "./images/ebay.png"
import discover from "./images/discover.png"

const paymentMethods = [
    {
        id:1,
        name: "visa",
        img: visa,
    },
    {
        id:2,
        name: "mastercard",
        img: mastercard,
    },
    {
        id:3,
        name: "paypal",
        img: paypal,
    },
    {
        id:4,
        name: "amazon",
        img: amazon,
    },
    {
        id:5,
        name: "ebay",
        img: ebay,
    },
    {
        id:6,
        name: "discover",
        img: discover,
    }
]

export default paymentMethods;