import React, { useState } from 'react'

import C_MessageUser from "../../components/Message/C_MessageUser";
import { IArr_obj, IMessageUser } from "../../Types/types";

//For icons
import {IoMdArrowDropdown} from "react-icons/io"
import {BiEdit} from "react-icons/bi"

import a from "../../assets/for-message/a.jpeg"
import b from "../../assets/for-message/b.jpg";
import c from "../../assets/for-message/c.jpg";
import d from "../../assets/for-message/d.jpg";
import e from "../../assets/for-message/e.jpg";
import f from "../../assets/for-message/f.jpg";
import g from "../../assets/for-message/g.jpg";
import h from "../../assets/for-message/h.jpg";
import j from "../../assets/for-message/j.jpg";

const Messages = () => {

  const [idx, setIdx] = useState<number>(1);
// users
const [users, setUsers] = useState<IMessageUser[]>([
  {
    id: 1,
    img: a,
    name: "cristiano",
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
      <div className="lg:ml-[330px] md:ml-[120px] pt-[50px]">
        <section className="main">
          <div className="users max-w-[357px]">
            <div className="child_1_of_users flex items-center justify-between">
              <button className="flex items-center gap-[10px] sm:text-[14px] md:text-[21px] font-[700] dark:text-[#fff]">
                olim_yuldoshev_ooo3 <IoMdArrowDropdown />
              </button>
              <button className="flex items-center gap-[10px] sm:text-[14px] md:text-[32px] font-[700] dark:text-[#fff]">
                <BiEdit />
              </button>
            </div>
            <div className="child_2_of_transitions flex items-center justify-between mt-[20px] text-[16px] text-[#000] dark:text-[#fff]">
              <button className="p-[10px_30px] hover:border-b-[1px] hover:border-b-[gray] dark:border-b-[#fff]">
                Primary
              </button>
              <button className="p-[10px_30px] hover:border-b-[1px] hover:border-b-[gray] dark:border-b-[#fff]">
                General
              </button>
              <button className="p-[10px_30px] hover:border-b-[1px] hover:border-b-[gray] dark:border-b-[#fff]">
                Requests
              </button>
            </div>
            <div className="some_users overflow-scroll h-full pb-[110px] duration-300 mt-[15px] md:mt-0">
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
          <div className="page_of_messages"></div>
        </section>
      </div>
    </div>
  );
}

export default Messages;