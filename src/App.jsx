import React, { createContext, useState } from 'react';
import Cart from './Components/Cart';

export const mycontext = createContext('')
const App = () => {
  
  let product=[
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg", 
        "images": [
            "https://i.pinimg.com/originals/84/ee/48/84ee48dbb18b783a991c2a22103b5649.jpg",
            
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": [
        "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg"
        ]
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
            "https://imageio.forbes.com/blogs-images/gordonkelly/files/2018/08/Screenshot-2018-08-10-at-03.58.50.png?height=474&width=711&fit=bounds"
        ]
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
            "https://darlingretail.com/cdn/shop/products/TeHuJiTT1qwTCgAl.jpg?v=1663914851"
        ]
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [

            "https://m.media-amazon.com/images/I/61jJeZBliWL._AC_UF1000,1000_QL80_.jpg"
        ]
    }
]
const[data,setdata]=useState(product)
  return(
    <div>
      <mycontext.Provider value={[data,setdata]}>
      <Cart />
      </mycontext.Provider>

    </div>
  );

};
    
  

export default App;