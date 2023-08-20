import React from "react";
import imgProfileLogo from "../../assets/My-profile-photo.jpg";
import { FiSettings } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlinePlus  } from "react-icons/ai";

const Profile = () => {
  return (
    <div>
      <div className="lg:ml-[330px] md:ml-[120px] pt-[50px] sm:ml-[10px] h-[190vh]">
        <header className="navbar flex justify-between items-center flex-wrap px-[40px] text-[20px] fixed top-0 lg:w-[70%] md:w-[90%] sm:w-[100%] border-b-[1px] border-b-[#cbc8c8] py-[10px] dark:border-b-[#fff] dark:text-[#fff] bg-[#fff] dark:bg-[#000]">
          <FiSettings />
          <button className="flex items-center gap-[10px] sm:text-[14px] md:text-[18px]">
            olim_yuldoshev_ooo3 <IoMdArrowDropdown />
          </button>
          <FiUserPlus />
        </header>
        <section className="photo_profile_and_all_texts_and_btns mt-[20px]">
          <div className="img_profile flex  md:gap-[50px] sm:gap-[10px] items-center ">
            <div className="border-[#bfbfbf] border-[2px] rounded-full p-[1px]">
              <img
                src={imgProfileLogo}
                alt=""
                className="md:w-[138px] md:h-[138px] sm:w-[52px] sm:h-[52px] rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center  md:gap-[10px]">
                <h1 className="md:text-[24px] sm:text-[18px] font-[700] dark:text-[#fff]">
                  olim_yuldoshev_ooo3
                </h1>
                <FiSettings className="md:text-[20px] sm:text-[16px] ml-[10px] dark:text-[#fff]" />
              </div>
              <div className="btns flex items-center flex-wrap md:gap-[20px] sm:gap-[4px] mt-[10px] sm:max-w-[300px] md:max-w-[100%]">
                <button className="md:p-[5px_30px] sm:p-[4px_20px] rounded-[10px] bg-[#d0d0d0] md:text-[17px] sm:text-[12px] dark:bg-[gray] dark:text-[#fff] hover:bg-[gray] dark:hover:bg-[#626262]">
                  Edit profile
                </button>
                <button className="md:p-[5px_30px] sm:p-[4px_20px] rounded-[10px] bg-[#d0d0d0] md:text-[17px] sm:text-[12px] dark:bg-[gray] dark:text-[#fff] hover:bg-[gray] dark:hover:bg-[#626262]">
                  Show archieve
                </button>
                <button className="md:p-[5px_30px] sm:p-[4px_20px] rounded-[10px] bg-[#d0d0d0] md:text-[17px] sm:text-[12px] dark:bg-[gray] dark:text-[#fff] hover:bg-[gray] dark:hover:bg-[#626262]">
                  Advertising tool
                </button>
              </div>
              <div className="md:flex md:items-center md:flex-wrap md:gap-[10px] sm:hidden mt-[10px]">
                <h1 className="text-[20px] dark:text-[#fff]">
                  <span className="font-[700]">0</span> posts
                </h1>
                <h1 className="text-[20px] dark:text-[#fff]">
                  <span className="font-[700]">1000</span> Followers
                </h1>
                <h1 className="text-[20px] dark:text-[#fff]">
                  <span className="font-[700]">100</span> Following
                </h1>
              </div>
              <div className="mt-[10px] md:flex flex-col md:items-start md:justify-start w-[130px] md:gap-[2px] text-[15px] sm:hidden dark:text-[#fff]">
                <h3 className="font-[700]">Olim Yuldoshev</h3>
                <h3>Software daveloper</h3>
                <h4 className="font-[700]">Student of TNU</h4>
                <h4 className="font-[700]">Programmer</h4>
              </div>
              <div className="md:mt-[10px] md:flex md:flex-col md:gap-[2px] sm:hidden max-w-[240px]">
                <h3 className="font-[700] dark:text-[#fff]">
                  Follow{" "}
                  <span className="font-[500]">
                    @coding_with_olim_yuldoshev
                  </span>
                </h3>
                <h3 className="text-[14px] dark:text-[#fff] font-[400]">
                  🎂-19.11.2003.
                </h3>
                <h4 className="text-[17px] font-[400] dark:text-[#fff]">
                  Everything will be, but not immediately.
                </h4>
              </div>
            </div>
          </div>
        </section>
        <div className="texts_in_mobile sm:block md:hidden">
          <div>
            <div className="mt-[10px] flex flex-col items-start justify-start w-[130px] gap-[2px] text-[15px] dark:text-[#fff]">
              <h3 className="font-[700]">Olim Yuldoshev</h3>
              <h3>Software daveloper</h3>
              <h4 className="font-[700]">Student of TNU</h4>
              <h4 className="font-[700]">Programmer</h4>
            </div>
            <div className="mt-[10px] flex flex-col gap-[2px]  max-w-[240px]">
              <h3 className="font-[700] flex items-center gap-[10px] flex-wrap dark:text-[#fff]">
                Follow{" "}
                <span className="font-[500]">@coding_with_olim_yuldoshev</span>
              </h3>
              <h3 className="text-[14px] dark:text-[#fff] font-[400]">
                🎂-19.11.2003.
              </h3>
              <h4 className="text-[17px] font-[400] dark:text-[#fff]">
                Everything will be, but not immediately.
              </h4>
              <div className="md:flex md:items-center md:flex-wrap md:gap-[10px] sm:hidden mt-[10px]">
                <h1 className="text-[20px] dark:text-[#fff]">
                  <span className="font-[700]">0</span> posts
                </h1>
                <h1 className="text-[20px] dark:text-[#fff]">
                  <span className="font-[700]">1000</span> Followers
                </h1>
                <h1 className="text-[20px] dark:text-[#fff]">
                  <span className="font-[700]">100</span> Following
                </h1>
              </div>
            </div>
          </div>
        </div>
        <section className="saved_histories flex items-start gap-[30px]  mt-[60px]">
          <div className="flex flex-col justify-center items-center gap-[5px]">
            <div className="border-[#bfbfbf] border-[2px] rounded-full p-[1px]">
              <img
                src={imgProfileLogo}
                alt=""
                className="md:w-[68px] md:h-[68px] sm:w-[45px] sm:h-[45px] rounded-full"
              />
            </div>
            <h1 className="text-[14px] text-center dark:text-[#fff]">
              Class 11V
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-[5px]">
            <div className="border-[#bfbfbf] border-[2px] rounded-full p-[1px]">
              <img
                src={imgProfileLogo}
                alt=""
                className="md:w-[68px] md:h-[68px] sm:w-[45px] sm:h-[45px] rounded-full"
              />
            </div>
            <h1 className="text-[14px] text-center dark:text-[#fff]">TNU</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-[5px]">
            <div className="border-[#bfbfbf] border-[2px] rounded-full p-[1px]">
              <img
                src={imgProfileLogo}
                alt=""
                className="md:w-[68px] md:h-[68px] sm:w-[45px] sm:h-[45px] rounded-full"
              />
            </div>
            <h1 className="text-[14px] text-center dark:text-[#fff]">SLC</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-[5px]">
            <div className="border-[#bfbfbf] border-[2px] rounded-full p-[1px]">
              <img
                src={imgProfileLogo}
                alt=""
                className="md:w-[68px] md:h-[68px] sm:w-[45px] sm:h-[45px] rounded-full"
              />
            </div>
            <h1 className="text-[14px] text-center dark:text-[#fff]">BS</h1>
          </div>
          <div className="border-[#bfbfbf] border-[2px] rounded-full p-[1px] w-[70px] h-[70px] grid place-items-center text-[30px] text-[gray] dark:text-[#fff]">
            <AiOutlinePlus />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
