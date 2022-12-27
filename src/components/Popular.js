
import React from "react";

const Popular = () => {
    const cat = [
      {
        "img": "/category-1.jpg ",
        "title": "Электроинструменты",
        "list1": "Отвертки",
        "list2": "Фрезы",
        "list3": "Шлифовальные станки",
        "list4": "Гаечные ключи",
        "list5": "Сверла",
        },
        {
        "img": "/category-2.jpg ",
        "title": "Ручные инструменты",
        "list1": "Молотки",
        "list2": "Гаечные ключи",
        "list3": "Ручные пилы",
        "list4": "Малярные инструменты",
        "list5": "Отвертки",
        },
        {
        "img": "/category-3.jpg ",
        "title": "Энергетическое оборудование",
        "list1": "Генераторы",
        "list2": "Компрессоры",
        "list3": "Лебедки",
        "list4": "Плазменная резка",
        "list5": "Электродвигатели",
        },
        {
        "img": "/category-4.jpg ",
        "title": "PСтанки",
        "list1": "Токарные станки",
        "list2": "Фрезерные станки",
        "list3": "Шлифовальные станки",
        "list4": "Станки с ЧПУ",
        "list5": "Заточные станки",
        },
        {
        "img": "/category-5.jpg ",
        "title": "Измерение",
        "list1": "Рулетка",
        "list2": "Теодолиты",
        "list3": "Тепловизоры",
        "list4": "Штангенциркули",
        "list5": "Уровни",
        },
        {
        "img": "/category-6.jpg ",
        "title": "Одежда и СИЗ",
        "list1": "Зимняя спецодежда",
        "list2": "Летняя спецодежда",
        "list3": "Шлемы",
        "list4": "Ремни и сумки",
        "list5": "Рабочая обувь",
        },
    ]
  return (
    <div className="pt-[50px] pb-[60px] bg-[#f9f9f9]">
      <div className="container mx-auto">
        <div className="flex items-center mb-[24px]">
          <h3 className="text-[20px] text-[#3d464d]">Популярные Категорий</h3>
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
              <div className="pt-2 text-blue-400">Показать все</div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
