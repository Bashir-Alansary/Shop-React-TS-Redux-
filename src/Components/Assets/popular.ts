import img1s_1 from "./images/item1s_1.jpg"
import img1s_2 from "./images/item1s_2.jpg"
import img1s_3 from "./images/item1s_3.jpg"
import img1s_4 from "./images/item1s_4.jpg"
import img1b_1 from "./images/item1b_1.jpg"
import img1b_2 from "./images/item1b_2.jpg"
import img1b_3 from "./images/item1b_3.jpg"
import img1b_4 from "./images/item1b_4.jpg"
import img2 from "./images/item2b_1.jpg"
import img2b_1 from "./images/item2b_1.jpg"
import img2b_2 from "./images/item2b_2.jpg"
import img2b_3 from "./images/item2b_3.jpg"
import img2b_4 from "./images/item2b_4.jpg"
import img2s_1 from "./images/item2s_1.jpg"
import img2s_2 from "./images/item2s_2.jpg"
import img2s_3 from "./images/item2s_3.jpg"
import img2s_4 from "./images/item2s_4.jpg"
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


let popular = [
  {
    id: 1,
    name: "Striped Flutter Sleeve",
    category: "Men",
    smallImgs: [
      {id: 1, name: "Boston Blue", img: img1s_1, color: '#4391a3'},
      {id: 2, name: "Patina", img: img1s_2, color: '#4d988e'},
      {id: 3, name: "Viridian Green", img: img1s_3, color: '#5d827c'},
      {id: 4, name: "Oslo Gray", img: img1s_4, color: '#7f9096'}
    ],
    newPrice: 275,
    oldPrice: 300,
    bigImgs: [img1b_1, img1b_2, img1b_3, img1b_4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Jackets",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve",
    category: "Women",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2s_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2s_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2s_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2s_4, color: '#945754'}
    ],
    newPrice: 85,
    oldPrice: 90,
    bigImgs: [img2b_1, img2b_2, img2b_3, img2b_4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Brown",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve",
    category: "Men",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 60,
    oldPrice: 65,
    bigImgs: [img3_1, img3_2, img3_3, img3_4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "T-Shirts",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve",
    category: "Women",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 70,
    oldPrice: 77,
    bigImgs: [img4_1, img4_2, img4_3],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Green",
    type: "T-Shirts",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 5,
    name: "Striped Flutter Sleeve",
    category: "Women",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 82,
    oldPrice: 85,
    bigImgs: [img5, img6_1, img7, img8],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 6,
    name: "Striped Flutter Sleeve",
    category: "Men",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 40,
    oldPrice: 45,
    bigImgs: [img6_1, img6_2],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Jackets",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 7,
    name: "Striped Flutter Sleeve",
    category: "Women",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 95,
    oldPrice: 97,
    bigImgs: [img7, img8, img9, img10],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Metallic Sunburst",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve",
    category: "Women",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 35,
    oldPrice: 36,
    bigImgs: [img8, img9, img10, img11],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 9,
    name: "Striped Flutter Sleeve",
    category: "Men",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 110,
    oldPrice: 113,
    bigImgs: [img9, img10, img11, img1s_1],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Green",
    type: "Shoeses",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 10,
    name: "Striped Flutter Sleeve",
    category: "Women",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 55,
    oldPrice: 58,
    bigImgs: [img10, img10_2],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Pink",
    type: "Shoeses",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 11,
    name: "Striped Flutter Sleeve",
    category: "Women",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 81,
    oldPrice: 85,
    bigImgs: [img11, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Orange",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 12,
    name: "Striped Flutter Sleeve",
    category: "Kids",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 150,
    oldPrice: 160,
    bigImgs: [img1s_1, img2, img3, img4],
    sizes: ["S", "ML", "XL", "XXL"],
    color: "Green",
    type: "Outfits",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 13,
    name: "Men Green Solid Zippered",
    category: "Women",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 64,
    oldPrice: 67,
    bigImgs: [img1s_1, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Pink",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 14,
    name: "Men Green Solid Zippered",
    category: "Kids",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 88,
    oldPrice: 90,
    bigImgs: [img1s_1, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    color: "Brown",
    type: "Outfits",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 15,
    name: "Men Green Solid Zippered",
    category: "Women",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 105,
    oldPrice: 110,
    bigImgs: [img15, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Pink",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 16,
    name: "Men Green Solid Zippered",
    category: "Women",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 140,
    oldPrice: 150,
    bigImgs: [img16, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Pink",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 17,
    name: "Men Green Solid Zippered",
    category: "Women",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 94,
    oldPrice: 96,
    bigImgs: [img17, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 18,
    name: "Men Green Solid Zippered",
    category: "Women",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 135,
    oldPrice: 140,
    bigImgs: [img18, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Pink",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 19,
    name: "Men Green Solid Zippered",
    category: "Men",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 84,
    oldPrice: 87,
    bigImgs: [img19, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Green",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 20,
    name: "Men Green Solid Zippered",
    category: "Men",
    smallImgs: [
      {id: 1, name: "Metallic Sunburst", img: img2b_1, color: '#9e7a48'},
      {id: 2, name: "Deep Taupe", img: img2b_2, color: '#816059'},
      {id: 3, name: "Rose Taupe", img: img2b_3, color: '#70756e'},
      {id: 4, name: "Nickel", img: img2b_4, color: '#945754'}
    ],
    newPrice: 40,
    oldPrice: 42,
    bigImgs: [img20, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Others",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
];

export default popular;
