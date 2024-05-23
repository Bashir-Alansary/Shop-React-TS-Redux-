import visa from "./images/visa.png"
import mastercard from "./images/mastercard.png"
import paypal from "./images/paypal.png"
import amazon from "./images/amazon.png"
import ebay from "./images/ebay.png"
import discover from "./images/discover.png"
import facebook from "./images/facebook.png"
import instagram from "./images/instagram.png"
import whatsapp from "./images/whatsapp.png"
import youtube from "./images/youtube.png"
import twitter from "./images/twitter.png"
import google from "./images/google.png"
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const pages = [
    {
        id: 1,
        link: '/about',
        name: "about",
    },
    {
        id: 2,
        link: '/contact',
        name: "contact",
    },
    {
        id: 3,
        link: '/',
        name: "about",
    },
    {
        id: 4,
        link: '/',
        name: "about",
    },
]

export const media = [
    {
        id: 1,
        link: '#',
        icon: facebook,
    },
    {
        id: 2,
        link: '#',
        icon: instagram,
    },
    {
        id: 3,
        link: '#',
        icon: whatsapp,
    },
    {
        id: 4,
        link: '#',
        icon: youtube,
    },
    {
        id: 5,
        link: '#',
        icon: twitter,
    },
    {
        id: 6,
        link: '#',
        icon: google,
    },
]
export const paymentWays = [
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
    },
]

export const contactWays = [
    {
        id:1,
        name: "New admistration Capital, Egypt",
        icon: <IoLocationOutline />,
    },
    {
        id:2,
        name: "+201 501 904 932 / +201 201 840 860",
        icon: <FaPhoneAlt />,
    },
    {
        id:3,
        name: "bashiralansary306@gmail.com",
        icon: <MdOutlineEmail />,
    },
]