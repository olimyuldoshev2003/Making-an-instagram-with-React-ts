import { Link, Outlet } from "react-router-dom";
import logoHeader from "/src/assets/Instagram_logo.png";


//For icons
import {GoHomeFill} from "react-icons/go"
 import {BiSearch} from "react-icons/bi" 
import {MdOutlineExplore} from "react-icons/md"
import  {BiMoviePlay} from "react-icons/bi"
import {PiMessengerLogoBold} from "react-icons/pi"
import { AiOutlineHeart } from "react-icons/ai"
import {CgAddR} from "react-icons/cg"
// import Switcher from "../components/Switch Ui/Switcher";


const Layout = () => {
  return (
    <div>
      <header className="header flex flex-col p-[20px] border-r-[1px] border-r-[#d5d5d5] fixed h-[100vh] w-[300px]">
        <div>
          <Link
            to={`/home`}
            className="flex items-center gap-[20px] w-[170px] mt-[20px] hover:bg-[gray]"
          >
            <img src={logoHeader} alt="" className="w-[170px]" />
          </Link>
          {/* <Switcher/> */}
        </div>
        <ul className="flex flex-col gap-[20px] w-[150px]">
          <li>
            <Link to={`/home`} className="flex items-center gap-[20px]">
              <GoHomeFill className="text-[26px]" />
              <span>Home</span>
            </Link>
          </li>
          <li className="flex items-center gap-[20px]">
            <BiSearch className="text-[26px]" />
            Search
          </li>
          <li>
            <Link to={"/home/explore"} className="flex items-center gap-[20px]">
              <MdOutlineExplore className="text-[26px]" />
              <span>Explore</span>
            </Link>
          </li>
          <li>
            <Link to={"/home/reels"} className="flex items-center gap-[20px]">
              <BiMoviePlay className="text-[26px]" />
              <span>Reels</span>
            </Link>
          </li>
          <li>
            <Link
              to={`/home/messages`}
              className="flex items-center gap-[20px]"
            >
              <PiMessengerLogoBold className="text-[26px]" />
              <span>Messages</span>
            </Link>
          </li>
          <li className="flex items-center gap-[20px]">
            <AiOutlineHeart className="text-[26px]" />
            <span>Notifications</span>
          </li>
          <li className="flex items-center gap-[20px]">
            <CgAddR className="text-[26px]" />
            <span>Create</span>
          </li>
          <li>
            <Link to={`/home/profile`} className="flex items-center gap-[20px]">
              <img src="" alt="" />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </header>
      <Outlet />
      <footer className="footer"></footer>
    </div>
  );
};

export default Layout;
