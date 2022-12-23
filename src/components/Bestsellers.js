import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";
import Product from "./Product";
import { Link } from "react-router-dom";
const Bestsellers = () => {


  return (
    <div className="my-[70px]">
      <div className="container mx-auto">
        <div className="flex items-center mb-[24px]">
          <h3 className="text-[20px] text-[#3d464d]">Bestsellers</h3>
          <div className="grow h-[2px] bg-[#ebebeb] ml-[16px]"></div>
        </div>
        <div className="flex">
          <div className="flex-col w-[36%] shrink-0">
            <div className="flex grow h-full">
              <div className="w-full shrink-0 relative p-[1px] flex  bg-white">
                <div className=" flex flex-col items-start z-[1] border-2 border-[#ebebeb] rounded-[2px] hover:border-[#ffd333] duration-300">
                  <div className="bg-[#37f] text-white text-[11px] rounded-[1.5px] pt-[5px] px-[8px] pb-[4px] font-medium uppercase mb-[4px] mr-[4px] absolute left-[18px] top-[18px]">
                    New
                  </div>
                  <div className="p-[25px]">
                    <img width={500} height={500} src="/product-1.jpg" />
                  </div>
                  <div className=" px-[30px]">
                    <p className="text-[#3d464d] text-xl leading-[19px] pt-8 mt-9">
                      Electric Planer Brandix KL370090G 300 Watts
                    </p>
                    <p className="text-center text-[#b3b3b3] text-sm">
                      9 Reviews
                    </p>
                    <p className=" font-bold text-3xl mt-11">$749.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-[6px]">
            <div className="grid grid-cols-3 grid-rows-2 gap-3">   
            <Link to="#"><Product
              id="234123781"
              title="Undefined Tool IRadix DPS3000SY 2700 Watts"
              img="/product-2.jpg"
              price={1019.00}
            /></Link>
            <Product
              id="234123782"
              title="Drill Screwdriver Brandix ALX7054 200 Watts"
              img="/product-3.jpg"
              price={850.00}
            />
            <Product
              id="234123783"
              title="Drill Series 3 Brandix KSR4590PQS 1500 Watts"
              img="/product-4.jpg"
              price={749.00}
            />
            <Product
              id="234123784"
              title="Brandix Router Power Tool 2017ERXPK"
              img="/product-5.jpg"
              price={1700.00}
            />
            <Product
              id="234123785"
              title="Brandix Drilling Machine DM2019KW4 4kW"
              img="/product-6.jpg"
              price={3199.00}
            />
            <Product
              id="234123786"
              title="Brandix Pliers"
              img="/product-69).jpg"
              price={24.00}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
