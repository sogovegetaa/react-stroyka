import React from "react";
import logo from "../images/logo.svg";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";
import { useState } from "react";

function Closeheader() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [menu, setMenu] = useState(false)
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  const list = [
    { name: "Power Tools", link: "/" },
    { name: "Hand Tools", link: "/" },
    { name: "Machine Tools", link: "/" },
    { name: "Building Tools", link: "/" },
    { name: "Electrical", link: "/" },
    { name: "Power Machinery", link: "/" },
    { name: "Measurement", link: "/" },
    { name: "Clothes % PPE", link: "/" },
    { name: "Plumbing", link: "/" },
    { name: "Storage & Organization", link: "/" },
    { name: "Welding & Soldering", link: "/" },
  ];
  const nav = [
    { name: "Home", link: "/" },
    { name: "Megamenu", link: "/" },
    { name: "Shop", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Pages", link: "/" },
    { name: "Contact Us", link: "/" },
    { name: "About me", link: "/" },
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
            Customer Service
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
                {menu && <div className="h-[458px] w-full pt-[42px] absolute bg-[#3d464d] rounded-[2px]">
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
                  </div>}
                  <button onClick={()=>setMenu(!menu)} className="bg-[#3d464d] text-left border-0  text-inherit text-[15px] relative z-[1] w-full h-full cursor-default font-medium pr-[32px] pl-[47px]">
                    Shop by Category
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
                        className="text-inherit"
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
                      Hello {user ? user.email : "Guest"}
                    </span>
                    <span className="header__optionTwo">
                      {user ? "Sign Out" : "Sign In"}
                    </span>
                  </div>
                </Link>

                <div className="header__option">
                  <span className="header__optionOne">Return</span>
                  <span className="header__optionTwo">& Orders</span>
                </div>

                <div className="header__option">
                  <span className="header__optionOne">Your</span>
                  <span className="header__optionTwo">Prime</span>
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
    
    </>
  );
}

export default Closeheader;
