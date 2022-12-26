import React from "react";
import Closeheader from "../components/Closeheader";
import { useStateValue } from "../components/StateProvider";

function Chainsaw() {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: "2",
        title: "Ash`s Chainsaw 3.5KW",
        price: "666",
        img: "/product-12.jpg",
      },
    });
  };
  return (
    <div>
      <Closeheader />
      <div className="container mx-auto">
        <div className="pb-[32px] pt-[16px]">
          <ol className="bg-transparent p-0 text-[14px] mb-0 flex">
            <li className="text-[14px] pr-8">Home</li>
            <li className="text-[14px] pr-8">Breadcrumb</li>
            <li className="text-[14px] text-[#999999]">Brandix</li>
          </ol>
        </div>
        
          <div className="grid grid-cols-2 gap-5">
          <div className="border-2 border-gray-300 rounded-md">
            <img src="/product-12.jpg" alt="" />
          </div>
          <div className="ml-5">
            <h1 className="text-4xl font-bold mb-8">Ash`s Chainsaw 3.5KW</h1>
            <div className="text-center text-[#999999] text-md py-5">
              7 Reviews
            </div>
            <div className="text-[16px] w-11/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              cupiditate sapiente illo dolorum accusantium, sequi, nemo nobis
              eaque aliquam sit debitis vel hic, consequuntur distinctio!
            </div>
            <br />
            <hr />
            <div className="flex pt-3">
              <div className="text-gray-400 font-medium pr-5">
                Aviability: <span className="text-green-500">In Stock</span>
              </div>
              <div className="text-gray-400 font-medium pr-5">
                Brand: Wakita
              </div>
              <div className="text-gray-400 font-medium">SKU: 83690/32</div>
            </div>
            <div className="text-4xl pt-9 font-bold text-dark">$666</div>
            <div className="text-gray-400 pt-9 font-medium text-xl mb-4">
              Color:
            </div>
            <input
              type="checkbox"
              class="accent-gray-200 w-8 h-8 mx-2"
              id="1"
            />
            <input
              type="checkbox"
              class="accent-yellow-500 w-8 h-8 mx-2"
              id="1"
            />
            <input type="checkbox" class="accent-red-500 w-8 h-8 mx-2" id="1" />
            <input
              type="checkbox"
              class="accent-blue-500 w-8 h-8 mx-2"
              id="1"
            />
            <div className="text-gray-400 pt-9 font-medium text-xl mb-4">
              Material:
            </div>
            <div className="flex">
              <div className="bg-[#E0E0E0] mr-4 px-5 py-2 rounded-lg text-md font-medium color-[#3d464d]">
                Metal
              </div>
              <div className="bg-[#F0F0F0] mr-4 px-5 py-2 rounded-lg text-md font-medium color-[#3d464d]">
                Wood
              </div>
              <div className="bg-[#F7F7F7] mr-4 px-5 py-2 rounded-lg text-md font-medium color-[#3d464d]">
                Plastic
              </div>
            </div>
            <button onClick={addToBasket} className="bg-[#ffd333] my-10 text-2xl font-bold px-8 py-3 rounded-sm hover:bg-black hover:text-white duration-200">
              Add to cart
            </button>
          </div>
        </div>
   
      </div>
    </div>
  );
}

export default Chainsaw;
