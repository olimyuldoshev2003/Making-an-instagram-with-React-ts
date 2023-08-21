import React from 'react'

//For icons
import {IoMdArrowDropdown} from "react-icons/io"
import {BiEdit} from "react-icons/bi"

const Messages = () => {



  return (
    <div>
      <div className="lg:ml-[330px] md:ml-[120px] pt-[50px]">
        <section className="main">
          <div className="users max-w-[327px]">
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
            <div className="some_users">
              
            </div>
          </div>
          <div className="page_of_messages"></div>
        </section>
      </div>
    </div>
  );
}

export default Messages;