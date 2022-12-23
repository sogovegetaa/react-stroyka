import React from "react";
import Features from "./Features";
import "./Home.css";
import Product from "./Product";
import product from "../product.json";
import Blockbanner from "./Blockbanner";
import Bestsellers from "./Bestsellers";
import Popular from "./Popular";
function Home() {
  return (
    <>
      <Features />
      <div className="mb-[70px]">
        <div className="container mx-auto">
          <div className="flex items-center mb-[24px]">
            <div className="mb-0 text-xl">Featured Products</div>
            <div className="ml-[16px] grow h-[2px] bg-[#ebebeb] mr-[12px]"></div>
            <ul className="flex list-none m-0 p-0 text-sm font-medium whitespace-nowrap">
              <li>
                <button className="cursor-default bg-transparent border-2 border-[#ffd333] block pt-[2px] px-[11px] pb-[1px] rounded-[12px]">
                  All
                </button>
              </li>
              <li>
                <button className="cursor-default bg-transparent border-2 border-transparent block pt-[2px] px-[11px] pb-[1px] rounded-[12px] hover:border-[#ebebeb]">
                  Power Tools
                </button>
              </li>
              <li>
                <button className="cursor-default bg-transparent border-2 border-transparent block pt-[2px] px-[11px] pb-[1px] rounded-[12px] hover:border-[#ebebeb]">
                  Hand Tools
                </button>
              </li>
              <li>
                <button className="cursor-default bg-transparent border-2 border-transparent block pt-[2px] px-[11px] pb-[1px] rounded-[12px] hover:border-[#ebebeb]">
                  Plumbing
                </button>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <Product
              id="23412378"
              title="Brandix Pliers"
              img="/product-7.jpg"
              price={24.00}
            />
            <Product
              id="2354578"
              title="Water Tap"
              img="/product-10.jpg"
              price={15.00}
            />
            <Product
              id="234689578"
              title="Ash`s Chainsaw 3.5KW"
              img="/product-12.jpg"
              price={666.99}
            />
            <Product
              id="2312578"
              title="Brandix Angle Grinder KZKX3890PQW"
              img="/product-13.jpg"
              price={649.00}
            />
          </div>
        </div>
      </div>
      <Blockbanner />
      <Bestsellers />
      <Popular />
    </>
  );
}

export default Home;
