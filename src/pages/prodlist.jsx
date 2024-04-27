import React from "react";
import ProdCard from "../components/cards/prod";
import NavBar from "../components/navigation/navbar";
import ProductFillter from "../components/sorting/productFillter";
import Heading from "../components/text/heading";
import f1 from "../assets/produce/f1.png";
import f2 from "../assets/produce/f2.png";
import f3 from "../assets/produce/f3.png";
import f5 from "../assets/produce/f5.png";
import f6 from "../assets/produce/f6.png";
import f7 from "../assets/produce/f7.png";
import f8 from "../assets/produce/f8.png";
import f9 from "../assets/produce/f9.png";
import f10 from "../assets/produce/f10.png";
import f11 from "../assets/produce/f11.png";
import f12 from "../assets/produce/f12.png";
import f13 from "../assets/produce/f13.png";
import f14 from "../assets/produce/f14.png";
import f15 from "../assets/produce/f15.png";
import f17 from "../assets/produce/f17.png";
import f18 from "../assets/produce/f18.png";

export default function ProdList() {
  // Dummy product data for demonstration
  const prods = [
    {
      id: 1,
      img:  f1  ,
      price: "₦3000",
      description: "Product description 1",
      farm: "Farm 1",
    },
    {
      id: 2,
      img:  f2 ,
      price: "₦3500",
      description: "Product description 2",
      farm: "Farm 2",
    },
    {
      id: 3,
      img:  f3 ,
      price: "₦3000",
      description: "Product description 1",
      farm: "Farm 1",
    },
    {
      id: 5,
      img:  f5 ,
      price: "₦3500",
      description: "Product description 2",
      farm: "Farm 2",
    },
    {
      id: 6,
      img:  f6 ,
      price: "₦4500",
      description: "Product description 1",
      farm: "Farm 5",
    },
    {
      id: 7,
      img:  f7,
      price: "₦3200",
      description: "Product description 2",
      farm: "Farm 2",
    },
    {
      id: 8,
      img:  f8 ,
      price: "₦300",
      description: "Product description 1",
      farm: "Farm 1",
    },
    {
      id: 9,
      img:  f9 ,
      price: "₦890",
      description: "Product description 2",
      farm: "Farm 2",
    },
    {
      id: 10,
      img:  f10 ,
      price: "₦3000",
      description: "Product description 1",
      farm: "Farm 1",
    },
    {
      id: 11,
      img:  f11,
      price: "₦3500",
      description: "Product description 2",
      farm: "Farm 2",
    },
    {
      id: 12,
      img:  f12 ,
      price: "₦3000",
      description: "Product description 1",
      farm: "Farm 1",
    },
    {
      id: 13,
      img:  f13 ,
      price: "₦3500",
      description: "Product description 2",
      farm: "Farm 2",
    },
    {
      id: 14,
      img:  f14 ,
      price: "₦3000",
      description: "Product description 1",
      farm: "Farm 1",
    },
    {
      id: 15,
      img:  f15 ,
      price: "₦3500",
      description: "Product description 2",
      farm: "Farm 2",
    },

    {
      id: 17,
      img:  f17 ,
      price: "₦3500",
      description: "Product description 2",
      farm: "Farm 2",
    },
    {
      id: 18,
      img:  f18 ,
      price: "₦3000",
      description: "Product description 1",
      farm: "Farm 1",
    },
    // the commented objects has no imported images, Neon :)
    // {
    //   id: 19,
    //   img: {f19},
    //   price: '₦3500',
    //   description: 'Product description 2',
    //   farm: 'Farm 2',
    // },
    // {
    //   id: 20,
    //   img: {f20},
    //   price: '₦3000',
    //   description: 'Product description 1',
    //   farm: 'Farm 1',
    // },
    // {
    //   id: 21,
    //   img: {f21},
    //   price: '₦3500',
    //   description: 'Product description 2',
    //   farm: 'Farm 2',
    // },
    // Add more products as needed
  ];

  return (
    <div>
      {/* filter options */}
      <NavBar />
      <div className="py-28 flex flex-col px-10 max-md:px-5 gap-5">
        <Heading
          text="Our Products"
          styles="text-4xl mt-4 max-md:text-center"
        />
        <ProductFillter />
        <div className="grid grid-cols-3 max-md:grid-cols-2 gap-20 max-md:gap-10">
          {/* Iterate over products array and render ProductCard for each product */}
          {prods.map((prod) => (
            <ProdCard
              key={prod.id} // Provide a unique key for each ProductCard
              img={prod.img}
              price={prod.price}
              description={prod.description}
              farm={prod.farm}
            />
          ))}
        </div>
      </div>
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Get help on WhatsApp"
            href="https://www.wa.link/rhxdcf"
            target="_blank"
            rel="noopener noreferrer" // Add rel attribute for security
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
              alt="WhatsApp Icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
