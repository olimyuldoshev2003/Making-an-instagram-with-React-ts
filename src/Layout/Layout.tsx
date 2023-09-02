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
import { IoIosImages } from "react-icons/io";

import Switcher from "../components/Switch Ui/Switcher";

//For images
import imgProfileLogo from "../../src/assets/My-profile-photo.jpg";
import { handleClose, handleCloseMore, openAddModal, openModalMore } from "../reducers/values";
import { useDispatch, useSelector } from "react-redux";
import { Box, Modal } from "@mui/material";

//For elements of material ui

//Drawer
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import React from "react";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Layout = () => {


  const dispatch = useDispatch();

const modalCreate = useSelector((store)=>store.values.modalCreate)
const modalMore = useSelector((store) => store.values.modalMore);

  const [state, setState] = React.useState({
    left: false,
  });

   const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  
const list = (anchor: Anchor) => (
  <Box
    sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
    role="presentation"
    className="px-[20px] dark:bg-[#000]"
  >
    <List>
      <h1 className="mt-[20px] text-[26px] font-[600] dark:text-[#fff]">Search</h1>
      <input
        type="text"
        className="w-[100%] mt-[10px] py-[5px] outline-none bg-[#d9d7d7] text-[#000] placeholder:text-[#000] dark:text-[#fff] dark:placeholder:text-[#fff] px-[10px]  rounded-[30px]"
        placeholder="Search User"
      />
    </List>
    <Divider />
    <List></List>
  </Box>
);




  

  return (
    <div className="dark:bg-[#000]">
      <div className="flex_all_elements">
        <header className="header">
          <div className="header md:flex md:flex-col p-[10px] border-r-[1px] border-r-[#d5d5d5] h-[100vh] lg:w-[280px] sm:w-[56px] dark:border-[#fff] fixed sm:hidden">
            <div className="flex items-center gap-[20px]">
              <Link
                to={`/home`}
                className="flex items-center gap-[20px] lg:w-[120px] sm:w-[100px] mt-[20px] dark:md:text-[#fff]"
              >
                <span className="sm:block lg:hidden text-[30px] w-[44px] hover:bg-[#f0eeee] dark:hover:bg-[gray] p-[10px_10px]  hover:rounded-[20px]">
                  <BsInstagram />
                </span>
                <h1 className="insta_text text-[24px] sm:hidden lg:block dark:text-[#fff] hover:bg-[#f0eeee] dark:hover:bg-[gray] p-[10px_20px]  hover:rounded-[20px]">
                  Instagram
                </h1>
              </Link>
            </div>
            <ul className="flex flex-col gap-[2px] lg:w-[150px] md:w-[30px] mt-[50px]">
              <li>
                <Link
                  to={`/home`}
                  className="flex items-center gap-[20px] dark:text-[#fff] hover:bg-[#f0eeee] dark:hover:bg-[gray] p-[10px_10px] hover:rounded-[20px] sm:w-[40px] lg:w-[170px]"
                >
                  <GoHomeFill className="text-[30px]" />
                  <span className="sm:hidden lg:block text-[18px]">Home</span>
                </Link>
              </li>
              {(["left"] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <li
                    className="flex items-center gap-[20px] dark:text-[#fff] hover:bg-[#f0eeee] dark:hover:bg-[gray] p-[10px_10px]  hover:rounded-[20px] cursor-pointer sm:w-[40px] lg:w-[170px]"
                    onClick={toggleDrawer(anchor, true)}
                  >
                    <BiSearch className="text-[30px]" />
                    <span className="sm:hidden lg:block text-[18px]">
                      Search
                    </span>
                  </li>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
              <li>
                <Link
                  to={"/home/explore"}
                  className="flex items-center gap-[20px] dark:text-[#fff] hover:bg-[#f0eeee] dark:hover:bg-[gray] p-[10px_10px]  hover:rounded-[20px] sm:w-[40px] lg:w-[170px]"
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
                  className="flex items-center gap-[20px] dark:text-[#fff] hover:bg-[#f0eeee] dark:hover:bg-[gray] p-[10px_10px]  hover:rounded-[20px] sm:w-[40px] lg:w-[170px]"
                >
                  <BiMoviePlay className="text-[30px]" />
                  <span className="sm:hidden lg:block text-[18px]">Reels</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`/home/messages`}
                  className="flex items-center gap-[20px] dark:text-[#fff] hover:bg-[#f0eeee] dark:hover:bg-[gray] p-[10px_10px]  hover:rounded-[20px] sm:w-[40px] lg:w-[170px]"
                >
                  <PiMessengerLogoBold className="text-[30px]" />
                  <span className="sm:hidden lg:block text-[18px]">
                    Messages
                  </span>
                </Link>
              </li>
              <li className="flex items-center gap-[10px] dark:text-[#fff] hover:bg-[#f0eeee] dark:hover:bg-[gray] p-[10px_10px]  hover:rounded-[20px] cursor-pointer sm:w-[40px] lg:w-[170px]">
                <AiOutlineHeart className="text-[30px]" />
                <span className="sm:hidden lg:block text-[18px]">
                  Notifications
                </span>
              </li>
              <button
                className="flex items-center gap-[20px] dark:text-[#fff] hover:bg-[#f0eeee] dark:hover:bg-[gray] p-[10px_10px] lg:w-[170px]  hover:rounded-[20px] cursor-pointer sm:w-[40px]"
                onClick={() => dispatch(openAddModal())}
              >
                <CgAddR className="text-[30px]" />
                <span className="sm:hidden lg:block text-[18px]">Create</span>
              </button>
              <li>
                <Link
                  to={`/home/profile`}
                  className="flex items-center gap-[20px] dark:text-[#fff] lg:w-[170px] hover:bg-[#f0eeee] dark:hover:bg-[gray] p-[10px_10px] hover:rounded-[20px] sm:w-[40px]"
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
              <button
                className="flex items-center gap-[20px] dark:text-[#fff] lg:w-[170px] hover:bg-[#f0eeee] dark:hover:bg-[gray] p-[10px_10px]  hover:rounded-[20px] sm:w-[40px]"
                onClick={() => dispatch(openModalMore())}
              >
                <AiOutlineMenu className="text-[30px]" />
                <span className="sm:hidden lg:block text-[18px] ">More</span>
              </button>
            </div>
          </div>
        </header>
        <Outlet />
        <footer className="header md:hidden ">
          <ul className="flex justify-between items-center fixed z-20 w-[100%] bottom-0 px-[10px] dark:text-[#fff] bg-[#fff] dark:bg-[#000] border-t-[1px] border-t-[gray] h-[50px]">
            <li>
              <Link to={`/home`}>
                <GoHomeFill className="text-[30px]" />
              </Link>
            </li>
            <li>
              <Link to={"/home/explore"}>
                <MdOutlineExplore className="text-[30px]" />
              </Link>
            </li>
            <li>
              <Link to={"/home/reels"}>
                <BiMoviePlay className="text-[30px]" />
              </Link>
            </li>
            <li>
              <CgAddR className="text-[30px]" />
            </li>
            <li>
              <Link to={`/home/messages`}>
                <PiMessengerLogoBold
                  onClick={() => dispatch(openAddModal())}
                  className="text-[30px]"
                />
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
      <Modal
        open={modalCreate}
        onClose={() => dispatch(handleClose())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <Box className="  bg-[#fff] outline-none rounded-[10px] dark:bg-[#1c1b1b] dark:border-[1px] dark:border-[#fff]">
          <h1 className="text-center py-[10px] border-y-[1px] border-y-[#000] dark:text-[#fff] dark:border-[#fff]">
            Create new post
          </h1>
          <div className="add_modal_block_2 flex flex-col items-center gap-[14px] md:p-[120px_100px] sm:w-[280px] md:w-[100%] sm:p-[30px]">
            <IoIosImages className="text-[80px] font-[100] dark:text-[#fff]" />
            <h1 className="text-[20px] font-[500] dark:text-[#fff]">
              Drag photos and videos here
            </h1>
            <button className="rounded-[10px] p-[5px_10px] bg-[#0095ff] text-[#fff] text-[16px]">
              Select from computer
            </button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={modalMore}
        onClose={() => dispatch(handleCloseMore())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <Box className="  bg-[#fff] outline-none rounded-[10px] dark:bg-[#1c1b1b] dark:border-[1px] dark:border-[#fff] w-[280px]">
          <div className="flex justify-center items-center gap-[30px]">
            <h1 className="text-[23px] dark:text-[#fff]">Switch appearence</h1>
            <Switcher />
          </div>
        </Box>
      </Modal>
    </div>
  );

  
};

export default Layout;
