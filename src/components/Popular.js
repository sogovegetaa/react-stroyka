
import React from "react";

const Popular = () => {
    const cat = [
        {
            "img": "/category-1.jpg",
            "title": "Power Tools",
            "list1": "Screwdrivers",
            "list2": "Milling Cutters",
            "list3": "Sanding Machines",
            "list4": "Wrenches",
            "list5": "Drills",
        },
        {
            "img": "/category-2.jpg",
            "title": "Hand Tools",
            "list1": "Hammers",
            "list2": "Spanners",
            "list3": "Handsaws",
            "list4": "Paint Tools",
            "list5": "Screwdrivers",
        },
        {
            "img": "/category-3.jpg",
            "title": "Power Machinery",
            "list1": "Generators",
            "list2": "Compressors",
            "list3": "Winches",
            "list4": "Plasma Cutting",
            "list5": "Electric Motors",
        },
        {
            "img": "/category-4.jpg",
            "title": "PMachine Tools",
            "list1": "Lathes",
            "list2": "Milling Machines",
            "list3": "Grinding Machines",
            "list4": "CNC Machines",
            "list5": "Sharpening Machines",
        },
        {
            "img": "/category-5.jpg",
            "title": "Measurement",
            "list1": "Tape Measure",
            "list2": "Theodolites",
            "list3": "Thermal Imagers",
            "list4": "Calipers",
            "list5": "Levels",
        },
        {
            "img": "/category-6.jpg",
            "title": "Clothes and PPE",
            "list1": "Winter Workwear",
            "list2": "Summer Workwear",
            "list3": "Helmets",
            "list4": "Belts and Bags",
            "list5": "Work Shoes",
        },
    ]
  return (
    <div className="pt-[50px] pb-[60px] bg-[#f9f9f9]">
      <div className="container mx-auto">
        <div className="flex items-center mb-[24px]">
          <h3 className="text-[20px] text-[#3d464d]">Popular Categories</h3>
          <div className="grow h-[2px] bg-[#ebebeb] ml-[16px]"></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {cat.map((item)=>(
            <div key={item.title} className="bg-white rounded-[2px] py-[24px] px-[20px] flex">
            <div className="w-[130px] mr-6">
              <img src={item.img} width={130} height={130} />
            </div>
            <div className="flex flex-col">
              <div className="font-medium text-[17px] leading-5">
                {item.title}
              </div>
              <ul className="mt-[14px] list-none mx-0 mb-0 text-sm">
                <li className="text-[#6c757d] text-[14px]">{item.list1}</li>
                <li className="text-[#6c757d] text-[14px]">{item.list2}</li>
                <li className="text-[#6c757d] text-[14px]">{item.list3}</li>
                <li className="text-[#6c757d] text-[14px]">{item.list4}</li>
                <li className="text-[#6c757d] text-[14px]">{item.list5}</li>
              </ul>
              <div className="pt-2 text-blue-400">Show all</div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
