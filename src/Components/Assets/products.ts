import img1 from "./images/item1.jpg"
import img1_1 from "./images/item1_1.jpg"
import img1_2 from "./images/item1_2.jpg"
import img1_3 from "./images/item1_3.jpg"
import img1_4 from "./images/item1_4.jpg"
import img2 from "./images/item2.jpg"
import img2_1 from "./images/item2_1.jpg"
import img2_2 from "./images/item2_2.jpg"
import img2_3 from "./images/item2_3.jpg"
import img2_4 from "./images/item2_4.jpg"
import img3 from "./images/item3.jpg"
import img3_1 from "./images/item3_1.jpg"
import img3_2 from "./images/item3_2.jpg"
import img3_3 from "./images/item3_3.jpg"
import img3_4 from "./images/item3_4.jpg"
import img4 from "./images/item4.jpg"
import img4_1 from "./images/item4_1.jpg"
import img4_2 from "./images/item4_2.jpg"
import img4_3 from "./images/item4_3.jpg"
import img5 from "./images/item5.jpg"
import img6 from "./images/item6.jpg"
import img6_1 from "./images/item6_1.jpg"
import img6_2 from "./images/item6_2.jpg"
import img7 from "./images/item7.jpg"
import img8 from "./images/item8.jpg"
import img9 from "./images/item9.jpg"
import img10 from "./images/item10.jpg"
import img10_2 from "./images/item10_2.avif"
import img11 from "./images/item11.jpg"
import img12 from "./images/item12.jpg"
import img13 from "./images/item13.jpg"
import img14 from "./images/item14.jpg"
import img15 from "./images/item15.jpg"
import img16 from "./images/item16.jpg"
import img17 from "./images/item17.jpg"
import img18 from "./images/item18.jpg"
import img19 from "./images/item19.jpg"
import img20 from "./images/item20.jpg"
import img21 from "./images/item21.jpg"
import img22 from "./images/item22.jpg"
import img23 from "./images/item23.jpg"
import img24 from "./images/item24.jpg"
import img25 from "./images/item25.jpg"
import img26 from "./images/item26.jpg"
import img27 from "./images/item27.jpg"
import img28 from "./images/item28.jpg"
import img29 from "./images/item29.jpg"
import img30 from "./images/item30.jpg"
import img31 from "./images/item31.jpg"
import img32 from "./images/item32.jpg"
import img33 from "./images/item33.jpg"
import img34 from "./images/item34.jpg"
import img35 from "./images/item35.jpg"
import img36 from "./images/item36.jpg"

let products = [
  {
    id: 1,
    name: "Striped Flutter Sleeve",
    category: "Men",
    img: img1,
    newPrice: 275,
    oldPrice: 300,
    imgs: [img1_1, img1_2, img1_3, img1_4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Jackets",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve",
    category: "Women",
    img: img2,
    newPrice: 85,
    oldPrice: 90,
    imgs: [img2_1, img2_2, img2_3, img2_4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Brown",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve",
    category: "Men",
    img: img3,
    newPrice: 60,
    oldPrice: 65,
    imgs: [img3_1, img3_2, img3_3, img3_4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "T-Shirts",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve",
    category: "Women",
    img: img4,
    newPrice: 70,
    oldPrice: 77,
    imgs: [img4_1, img4_2, img4_3],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Green",
    type: "T-Shirts",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 5,
    name: "Striped Flutter Sleeve",
    category: "Women",
    img: img5,
    newPrice: 82,
    oldPrice: 85,
    imgs: [img5, img6_1, img7, img8],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 6,
    name: "Striped Flutter Sleeve",
    category: "Men",
    img: img6,
    newPrice: 40,
    oldPrice: 45,
    imgs: [img6_1, img6_2],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Jackets",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 7,
    name: "Striped Flutter Sleeve",
    category: "Women",
    img: img7,
    newPrice: 95,
    oldPrice: 97,
    imgs: [img7, img8, img9, img10],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Red",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve",
    category: "Women",
    img: img8,
    newPrice: 35,
    oldPrice: 36,
    imgs: [img8, img9, img10, img11],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 9,
    name: "Striped Flutter Sleeve",
    category: "Men",
    img: img9,
    newPrice: 110,
    oldPrice: 113,
    imgs: [img9, img10, img11, img1],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Green",
    type: "Shoeses",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 10,
    name: "Striped Flutter Sleeve",
    category: "Women",
    img:  img10,
    newPrice: 55,
    oldPrice: 58,
    imgs: [img10, img10_2],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Pink",
    type: "Shoeses",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 11,
    name: "Striped Flutter Sleeve",
    category: "Women",
    img:  img11,
    newPrice: 81,
    oldPrice: 85,
    imgs: [img11, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Orange",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 12,
    name: "Striped Flutter Sleeve",
    category: "Kids",
    img:  img12,
    newPrice: 150,
    oldPrice: 160,
    imgs: [img1, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Green",
    type: "Outfits",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 13,
    name: "Men Green Solid Zippered",
    category: "Women",
    img:  img13,
    newPrice: 64,
    oldPrice: 67,
    imgs: [img1, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Pink",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 14,
    name: "Men Green Solid Zippered",
    category: "Kids",
    img: img14,
    newPrice: 88,
    oldPrice: 90,
    imgs: [img1, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    color: "Brown",
    type: "Outfits",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 15,
    name: "Men Green Solid Zippered",
    category: "Women",
    img:  img15,
    newPrice: 105,
    oldPrice: 110,
    imgs: [img15, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Pink",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 16,
    name: "Men Green Solid Zippered",
    category: "Women",
    img:  img16,
    newPrice: 140,
    oldPrice: 150,
    imgs: [img16, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Pink",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 17,
    name: "Men Green Solid Zippered",
    category: "Women",
    img:  img17,
    newPrice: 94,
    oldPrice: 96,
    imgs: [img17, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 18,
    name: "Men Green Solid Zippered",
    category: "Women",
    img:  img18,
    newPrice: 135,
    oldPrice: 140,
    imgs: [img18, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Pink",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 19,
    name: "Men Green Solid Zippered",
    category: "Men",
    img:  img19,
    newPrice: 84,
    oldPrice: 87,
    imgs: [img19, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Green",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 20,
    name: "Men Green Solid Zippered",
    category: "Men",
    img: img20,
    newPrice: 40,
    oldPrice: 42,
    imgs: [img20, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Others",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 21,
    name: "Men Green Solid Zippered",
    category: "Men",
    img:  img21,
    newPrice: 190,
    oldPrice: 200,
    imgs: [img21, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Green",
    type: "Jackets",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 22,
    name: "Men Green Solid Zippered",
    category: "Men",
    img:  img22,
    newPrice: 185,
    oldPrice: 190,
    imgs: [img22, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "T-Shirts",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 23,
    name: "Men Green Solid Zippered",
    category: "Women",
    img:  img23,
    newPrice: 205,
    oldPrice: 215,
    imgs: [img23, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Pink",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 24,
    name: "Men Green Solid Zippered",
    category: "Women",
    img:  img24,
    newPrice: 105,
    oldPrice: 110,
    imgs: [img24, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 25,
    name: "Boys Orange Colourblocked",
    category: "Kids",
    img:  img25,
    newPrice: 107,
    oldPrice: 110,
    imgs: [img25, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Pink",
    type: "Outfits",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 26,
    name: "Boys Orange Colourblocked",
    category: "Women",
    img:  img26,
    newPrice: 91,
    oldPrice: 98,
    imgs: [img26, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Brown",
    type: "T-Shirts",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 27,
    name: "Boys Orange Colourblocked",
    category: "Women",
    img: img27,
    newPrice: 100,
    oldPrice: 102,
    imgs: [img27, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Pink",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 28,
    name: "Boys Orange Colourblocked",
    category: "Women",
    img: img28,
    newPrice: 215,
    oldPrice: 230,
    imgs: [img28, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Orange",
    type: "Shoeses",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 29,
    name: "Boys Orange Colourblocked",
    category: "Women",
    img: img29,
    newPrice: 110,
    oldPrice: 120,
    imgs: [img29, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Pink",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 30,
    name: "Boys Orange Colourblocked",
    category: "Kids",
    img: img30,
    newPrice: 180,
    oldPrice: 190,
    imgs: [img30, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Brown",
    type: "Outfits",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 31,
    name: "Boys Orange Colourblocked",
    category: "Women",
    img:  img31,
    newPrice: 104,
    oldPrice: 108,
    imgs: [img31, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Brown",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 32,
    name: "Boys Orange Colourblocked",
    category: "Women",
    img:  img32,
    newPrice: 88,
    oldPrice: 90,
    imgs: [img32, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Green",
    type: "Others",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 33,
    name: "Boys Orange Colourblocked",
    category: "Men",
    img: img33,
    newPrice: 95,
    oldPrice: 100,
    imgs: [img33, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Blue",
    type: "Others",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 34,
    name: "Boys Orange Colourblocked",
    category: "Kids",
    img:  img34,
    newPrice: 250,
    oldPrice: 270,
    imgs: [img34, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Pink",
    type: "Outfits",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked",
    category: "Women",
    img:  img35,
    newPrice: 85.0,
    oldPrice: 120.5,
    imgs: [img35, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Brown",
    type: "Pants",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 36,
    name: "Boys Orange Colourblocked",
    category: "Women",
    img:  img36,
    newPrice: "115.00",
    oldPrice: 120,
    imgs: [img36, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Pink",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: [{style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",}],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
];

export default products;
