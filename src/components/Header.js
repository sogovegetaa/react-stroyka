import React from "react";
import logo from "../images/logo.svg";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  const list = [
    { name: "Электроинструменты", link: "/" },
    { name: "Ручные инструменты", link: "/" },
    { name: "Станки", link: "/" },
    { name: "Строительные инструменты", link: "/" },
    { name: "Электрический", link: "/" },
    { name: "Энергетическое оборудование", link: "/" },
    { name: "Measurement", link: "/" },
    { name: "Одежда % СИЗ", link: "/" },
    { name: "Водопровод", link: "/" },
    { name: "Хранение и организация", link: "/" },
    { name: "Сварка и пайка", link: "/" },
  ];
  const nav = [
    { name: "Главная", link: "/" },
    { name: "Каталог", link: "/" },
    { name: "Магазин", link: "/" },
    { name: "Блог", link: "/" },
    { name: "Старницы", link: "/" },
    { name: "Контакты", link: "/" },
    { name: "О нас", link: "/" },
  ];
  return (
    <>
      <div className="container mx-auto h-[104px] flex items-center justify-between">
        <div className="site-header__logo">
          <Link to="/">
            <img src={logo} width={196} height={26} />{" "}
          </Link>
        </div>
        <div className="align-right ml-80">
          <div className="text-[14px] text-[#999] mb-[6px]">
            Обслуживание клиентов
          </div>
          <div className="text-[20px] font-bold">8 771 060-0790</div>
        </div>
      </div>
      <div className="h-[54px]">
        <div className="h-[54px] bg-[#ffd333] text-[#3d464d]">
          <div className="container mx-auto h-full">
            {/* departaments */}
            <div className="flex items-center relative h-full">
              <div className="shrink-0">
                <div className="w-[255px] h-[42px] text-white relative">
                  <div className="h-[458px] w-full pt-[42px] absolute bg-[#3d464d] rounded-[2px]">
                    <div className="overflow-visible h-auto opacity-100">
                      <ul className="relative list-none p-[0 0 14px] m-[6px 0 0]">
                        {list.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={`${item.link}`}
                              style={{ textDecoration: "none" }}
                              className="text-inherit font-normal relative block py-[10px] px-[16px] text-[14px] leading-4 tracking-[.02em]"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button className="text-left border-0 bg-transparent text-inherit text-[15px] relative z-[1] w-full h-full cursor-default font-medium pr-[32px] pl-[47px]">
                    Категорий
                  </button>
                </div>
              </div>
              <div className="mx-[18px] h-full">
                <ul className="h-inherit  list-none p-0 m-0 h-full grid grid-cols-7 gap-8">
                  {nav.map((item) => (
                    <li
                      key={item.name}
                      className=" flex items-center justify-center text-[15px] font-bold  hover:bg-[#FFE894] hover:my-3 cursor-pointer duration-300"
                    >
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`${item.link}`}
                        className="text-inherit "
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="header__nav">
                <Link to={!user && "/login"}>
                  <div
                    onClick={handleAuthentication}
                    className="header__option"
                  >
                    <span className="header__optionOne">
                      Привет {user ? user.email : "Guest"}
                    </span>
                    <span className="header__optionTwo">
                      {user ? "Выйти" : "Войти"}
                    </span>
                  </div>
                </Link>

                <div className="header__option">
                  <span className="header__optionOne">Возврат </span>
                  <span className="header__optionTwo">& Заказы</span>
                </div>

                <div className="header__option">
                  <span className="header__optionOne">Ваши</span>
                  <span className="header__optionTwo">Заказы</span>
                </div>

                <Link to="/checkout">
                  <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionTwo header__basketCount">
                      {basket?.length}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grow'>
        <div className="mb-[70px] relative">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 ">
                    <div className="col-span-3"></div>
                    <div className="col-span-9">
                        <div className='ml-[-15px] mt-4 w-[840px]'>
                            <div className="h-[395px] bg-[url('../public/slide-3.jpg')] relative">
                                <div className="absolute left-[46px] bottom-[46px]">
                                    <div className="leading-[34px] text-[30px] font-bold mb-3" dangerouslySetInnerHTML={{__html: 'One more <br> Unique Header'}} />
                                    <div className='opacity-[1] leading-[1.625] font-medium' dangerouslySetInnerHTML={{__html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Etiam pharetra laoreet dui quis molestie.'}}/>
                                    <div className="mt-[40px]">
                                        <span className='cursor-pointer bg-[#ffd333] text-[#3d646d] text-[1.125rem] py-[0.8125rem] px-8 font-medium hover:bg-[#3d464d] hover:text-white duration-300'>Купить</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Header;
