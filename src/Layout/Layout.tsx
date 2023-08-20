import { Link, Outlet } from "react-router-dom";

//For icons
import { GoHomeFill } from "react-icons/go";
import { BiSearch } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { PiMessengerLogoBold } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import {AiOutlineMenu} from "react-icons/ai"

import Switcher from "../components/Switch Ui/Switcher";

//For images
import imgProfileLogo from "../../src/assets/My-profile-photo.jpg";

const Layout = () => {
  return (
    <div className="dark:bg-[#000]">
      <div className="flex_all_elements ">
        <header className="header">
          <div className="header md:flex md:flex-col p-[10px] border-r-[1px] border-r-[#d5d5d5] h-[100vh] lg:w-[280px] sm:w-[100px] dark:border-[#fff] fixed sm:hidden">
            <div className="flex items-center gap-[20px]">
              <Link
                to={`/home`}
                className="flex items-center gap-[20px] lg:w-[120px] sm:w-[100px] mt-[20px] hover:bg-[gray] dark:md:text-[#fff]"
              >
                <span className="sm:block lg:hidden text-[30px]">
                  <BsInstagram />
                </span>
                <h1 className="insta_text text-[24px] sm:hidden lg:block dark:text-[#fff]">
                  Instagram
                </h1>
              </Link>
              <div>
                <Switcher />
              </div>
            </div>
            <ul className="flex flex-col gap-[20px] lg:w-[150px] md:w-[30px] mt-[50px]">
              <li>
                <Link
                  to={`/home`}
                  className="flex items-center gap-[20px] dark:text-[#fff]"
                >
                  <GoHomeFill className="text-[30px]" />
                  <span className="sm:hidden lg:block text-[18px]">Home</span>
                </Link>
              </li>
              <li className="flex items-center gap-[20px] dark:text-[#fff]">
                <BiSearch className="text-[30px]" />
                <span className="sm:hidden lg:block text-[18px]">Search</span>
              </li>
              <li>
                <Link
                  to={"/home/explore"}
                  className="flex items-center gap-[20px] dark:text-[#fff]"
                >
                  <MdOutlineExplore className="text-[30px]" />
                  <span className="sm:hidden lg:block text-[18px]">
                    Explore
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/home/reels"}
                  className="flex items-center gap-[20px] dark:text-[#fff]"
                >
                  <BiMoviePlay className="text-[30px]" />
                  <span className="sm:hidden lg:block text-[18px]">Reels</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`/home/messages`}
                  className="flex items-center gap-[20px] dark:text-[#fff]"
                >
                  <PiMessengerLogoBold className="text-[30px]" />
                  <span className="sm:hidden lg:block text-[18px]">
                    Messages
                  </span>
                </Link>
              </li>
              <li className="flex items-center gap-[20px] dark:text-[#fff]">
                <AiOutlineHeart className="text-[30px]" />
                <span className="sm:hidden lg:block text-[18px]">
                  Notifications
                </span>
              </li>
              <li className="flex items-center gap-[20px] dark:text-[#fff]">
                <CgAddR className="text-[30px]" />
                <span className="sm:hidden lg:block text-[18px]">Create</span>
              </li>
              <li>
                <Link
                  to={`/home/profile`}
                  className="flex items-center gap-[20px] dark:text-[#fff] lg:w-[170px] sm:w-[90px]"
                >
                  <img
                    src={imgProfileLogo}
                    alt=""
                    className="w-[38px] h-[38px] rounded-full"
                  />
                  <span className="sm:hidden lg:block text-[18px]">
                    Profile
                  </span>
                </Link>
              </li>
            </ul>
            <div className="mt-[40px]">
              <button className="flex items-center gap-[20px] dark:text-[#fff] lg:w-[170px] sm:w-[90px]">
                <AiOutlineMenu className="text-[30px]" />
                <span className="sm:hidden lg:block text-[18px]">More</span>
              </button>
            </div>
          </div>
        </header>
        <Outlet />
        <footer className="header md:hidden ">
          <ul className="flex justify-between items-center fixed w-[100%] bottom-0 px-[10px] dark:text-[#fff] bg-[#fff] dark:bg-[#000] border-t-[1px] border-t-[gray] h-[50px]">
            <li>
              <Link to={`/home`}>
                <GoHomeFill className="text-[30px]" />
              </Link>
            </li>
            <li>
              <Link to={"/home/explore"}>
                <MdOutlineExplore className="text-[30px]" />
                <span className="sm:hidden lg:block text-[18px]">Explore</span>
              </Link>
            </li>
            <li>
              <Link to={"/home/reels"}>
                <BiMoviePlay className="text-[30px]" />
                <span className="sm:hidden lg:block text-[18px]">Reels</span>
              </Link>
            </li>
            <li>
              <CgAddR className="text-[30px]" />
            </li>
            <li>
              <Link to={`/home/messages`}>
                <PiMessengerLogoBold className="text-[30px]" />
              </Link>
            </li>
            <li>
              <Link to={`/home/profile`} className="lg:w-[150px] md:w-[30px]">
                <img
                  src={imgProfileLogo}
                  alt=""
                  className="w-[38px] h-[38px] rounded-full"
                />
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
