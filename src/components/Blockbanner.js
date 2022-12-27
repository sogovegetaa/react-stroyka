import React from 'react'

const Blockbanner = () => {
  return (
    <div className='mb-[70px]'>
      <div className="container mx-auto">
        <div className="relative block h-[170px] text-center text-inherit">
          <div className="bg-[url('../public/banner-1.jpg')] text-[#3d464d] bg-cover absolute left-0 right-0 w-full h-full bg-no-repeat ">
            <div className="pt-[28px] text-[30px] leading-[1] font-bold">Сотни</div>
            <div className="pt-[8px] text-[16px]">Молотки, Стамески, Универсальные плоскогубцы, Кусачки, Лобзики, Пилы</div>
            <div className="pt-[20px]"><span className='bg-[#ffd333] text-[#3d464d] py-[0.375rem] px-[1rem] font-medium hover:bg-[#3d464d] hover:text-white duration-200 cursor-pointer'>Купить</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blockbanner