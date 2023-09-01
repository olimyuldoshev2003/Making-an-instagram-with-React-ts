import React, { useState } from 'react'

import C_MessageUser from "../../components/Message/C_MessageUser";
import { IArr_obj, IMessageUser } from "../../Types/types";

//For icons
import {IoMdArrowDropdown} from "react-icons/io"
import {BiEdit} from "react-icons/bi"
import { VscSmiley } from "react-icons/vsc";
import { HiOutlineMicrophone } from "react-icons/hi";
import { PiImageLight } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";

import a from "../../assets/for-message/a.jpeg"
import b from "../../assets/for-message/b.jpg";
import c from "../../assets/for-message/c.jpg";
import d from "../../assets/for-message/d.jpg";
import e from "../../assets/for-message/e.jpg";
import f from "../../assets/for-message/f.jpg";
import g from "../../assets/for-message/g.jpg";
import h from "../../assets/for-message/h.jpg";
import j from "../../assets/for-message/j.jpg";
import BasicTabs from '../../components/Tabs/Tabs';

const Messages = () => {

  const [idx, setIdx] = useState<number>(1);
// users
const [users, setUsers] = useState<IMessageUser[]>([
  {
    id: 1,
    img: a,
    name: "Cristiano",
    status: "Online 24 hours ago",
    online: false,
    messages: [
      {
        hwo: "me",
        message: "Hello",
      },
      {
        hwo: "friend",
        message: "Hi, the best programmer",
      },
    ],
  },
  {
    id: 2,
    img: b,
    name: "Eminem",
    status: "Online 5 hours ago",
    online: false,
    messages: [
      {
        hwo: "me",
        message: "Hello the best rapper, Eminem how are you?",
      },
      {
        hwo: "friend",
        message: "I'm grate",
      },
    ],
  },
  {
    id: 3,
    img: c,
    name: "Leonel Messi",
    status: "Online just now",
    online: true,
    messages: [
      {
        hwo: "me",
        message: "Hello Leo. Messi what's up?",
      },
      {
        hwo: "friend",
        message: "Hi, I'm perfect",
      },
    ],
  },
  {
    id: 4,
    img: d,
    name: "Kevin Systrom",
    status: "Online 1 hours ago",
    online: false,
    messages: [
      {
        hwo: "me",
        message: "Hello the best inventor of Instagram, how are you?",
      },
      {
        hwo: "friend",
        message: "Hi, I'm good. What about you?",
      },
    ],
  },
  {
    id: 5,
    img: e,
    name: "Mark Zuckerberg",
    status: "Online 55 min ago",
    online: false,
    messages: [
      {
        hwo: "me",
        message: "Hello the best inventor of Facebook, how are you?",
      },
      {
        hwo: "friend",
        message: "Hi",
      },
    ],
  },
  {
    id: 6,
    img: f,
    name: "Bill Gates",
    status: "Online",
    online: true,
    messages: [
      {
        hwo: "me",
        message: "Hello the best inventor of the Windows OS, how are you?",
      },
      {
        hwo: "friend",
        message: "Hi",
      },
    ],
  },
  {
    id: 7,
    img: g,
    name: "Neymar Jr.",
    status: "Online 2 days ago",
    online: false,
    messages: [
      {
        hwo: "me",
        message: "Hello the best footballer Neymar Junior how are you?",
      },
      {
        hwo: "friend",
        message: "Hi, I'm awesome.",
      },
    ],
  },
  {
    id: 8,
    img: j,
    name: "Jan Koum",
    status: "Online 2 hours ago",
    online: true,
    messages: [
      {
        hwo: "me",
        message: "Hello the best inventer of Whatsapp, how are you?",
      },
      {
        hwo: "friend",
        message: "Hi, I'm grate, what about you?",
      },
    ],
  },
  {
    id: 9,
    img: h,
    name: "Mohammad Salah",
    status: "Online",
    online: true,
    messages: [
      {
        hwo: "me",
        message: "Hello the best footballer Mohammad Salah how are you?",
      },
      {
        hwo: "friend",
        message: "Hi, I'm good. You?",
      },
    ],
  },
]);


  return (
    <div>
      <div className="lg:ml-[330px] md:ml-[90px] pt-[50px]">
        <section className="main flex">
          <div className="users ml-[16px]">
            <div className="child_1_of_users flex items-center lg:justify-between sm:justify-center">
              <button className="lg:flex lg:items-center lg:gap-[10px] sm:hidden md:text-[21px] font-[700] dark:text-[#fff]">
                olim_yuldoshev_ooo3 <IoMdArrowDropdown />
              </button>
              <button className="flex items-center gap-[10px] sm:text-[34px] md:text-[32px] font-[700] dark:text-[#fff] ">
                <BiEdit />
              </button>
            </div>
            <div className="child_2_of_transitions md:flex items-center md:justify-between sm:hidden mt-[20px] text-[16px] text-[#000] dark:text-[#fff]">
              {/* <button className="p-[10px_30px] hover:border-b-[1px] hover:border-b-[gray] dark:border-b-[#fff]">
                Primary
              </button>
              <button className="p-[10px_30px] hover:border-b-[1px] hover:border-b-[gray] dark:border-b-[#fff]">
                General
              </button>
              <button className="p-[10px_30px] hover:border-b-[1px] hover:border-b-[gray] dark:border-b-[#fff]">
                Requests
              </button> */}

              <BasicTabs />
            </div>
            <div className="some_users h-full pb-[110px] mt-[15px] md:mt-0 sm:w-[120px] ">
              {users.map((user: IMessageUser) => {
                return (
                  <C_MessageUser
                    user={user}
                    setIdx={(id: number) => setIdx(id)}
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-[78px] w-[60%] ml-[20px] md:ml-[50px] sm:ml-[60px] pt-[35px] px-[5px] md:w-[70%] sm:w-[100%] md:block">
            {/* top */}
            <div className="flex flex-col items-center">
              {/* img */}
              <div className="rounded-full w-[100px] h-[100px]">
                <img
                  src={users[idx - 1].img}
                  className="rounded-full w-[100px] h-[100px]"
                />
              </div>
              {/* nam */}
              <p className="text-[20px] mt-[10px] font-[500] dark:text-[#fff]">
                {users[idx - 1].name}
              </p>
              {/* status */}
              {users[idx - 1].online ? (
                <p className="dark:text-[#fff] md:hidden lg:block">
                  Online now
                </p>
              ) : (
                <p className="dark:text-[#fff] md:hidden lg:block">
                  {users[idx - 1].status}
                </p>
              )}
              {/* btn */}
              <button className="font-[500] outline-none text-[14px] mt-[5px] px-[16px] py-[6px] bg-gray-200 duration-100 hover:bg-gray-300 rounded-[7px]">
                View profile
              </button>
            </div>
            {/* messages */}
            <div className="flex flex-col w-[100%] gap-[30px] mt-[50px]">
              {users[idx - 1].messages.map((mess: IArr_obj) => {
                return (
                  <div>
                    {mess.hwo === "me" ? (
                      <div className="flex justify-end">
                        <p className="rounded-full px-[8px] py-[4px] bg-sky-500 text-[#fff] md:text-[14px] sm:text-[10px]">
                          {mess.message}
                        </p>
                      </div>
                    ) : (
                      <div className="flex gap-[5px]">
                        <div>
                          <p className="rounded-full px-[8px] py-[4px] bg-gray-200 text-[#000] md:text-[14px] sm:text-[10px]">
                            {mess.message}
                          </p>
                        </div>
                      </div>
                    )}
                    <div className=" sm:w-[67%] lg:w-[38%] xl:w-[48%] md:w-[72%]  ml-[20px] bg-white py-[12px] pl-[5px]   sm:pr-[10px]  fixed bottom-[55px] md:bottom-0 right-0 dark:bg-[#000]">
                      <form className="border pl-[15px] flex items-center border-gray-300 justify-between gap-[15px] pr-[20px] py-[10px] rounded-full">
                        <div className="flex items-center gap-[15px] w-[100%]">
                          <VscSmiley className="text-[30px] cursor-pointer dark:text-[#fff]" />
                          {/* Input Message */}
                          <form className="w-[100%]">
                            <input
                              type="text"
                              placeholder="Write a massege..."
                              className="outline-none w-[100%] dark:bg-[#000] dark:text-[#fff]"
                            />
                          </form>
                        </div>
                        <div className="flex items-center gap-[10px]">
                          <HiOutlineMicrophone className="text-[25px] cursor-pointer sm:hidden md:block dark:text-[#fff]" />
                          <PiImageLight className="text-[32px] cursor-pointer sm:hidden md:block dark:text-[#fff]" />
                          <BsHeart className="text-[22px] cursor-pointer ml-[2px] sm:hidden md:block dark:text-[#fff]" />
                        </div>
                      </form>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Messages;