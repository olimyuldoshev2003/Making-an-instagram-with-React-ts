import React from "react";
import imgProfileLogo from "../../assets/My-profile-photo.jpg";
import myFavPhoto1 from "../../assets/My photos/My_fav_photo_1.jpg"
import myFavPhoto2 from "../../assets/My photos/My_fav_photo_2.jpg"
import myFavPhoto3 from "../../assets/My photos/My_fav_photo_3.jpg"
import myFavPhoto4 from "../../assets/My photos/My_fav_photo_4.jpg"
import myFavPhoto5 from "../../assets/My photos/My_fav_photo_5.jpg"

import { FiSettings } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
// import { BsFillGrid3X3GapFill } from "react-icons/bs";
// import { BiMoviePlay } from "react-icons/bi";
// import { BsBookmark } from "react-icons/bs";
// import { BiUserPin } from "react-icons/bi";
import { Box, Modal } from "@mui/material";

//For images
import { Link, useNavigate } from "react-router-dom";
import TabsProfile from "../../components/TabsProfile/TabsProfile";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeLogoutModal, handleCloseLogoutModal, openLogoutModal } from "../../reducers/values";
import { saveToken } from "../../utils/token";

const Profile = () => {
  // const Link:React.ForwardRefExoticComponent<
  //   LinkProps & React.RefAttributes<HTMLAnchorElement>
  // >;

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const posts = useAppSelector((store)=>store.values.posts)
  const follower = useAppSelector((store)=>store.values.follower)
  const following = useAppSelector((store) => store.values.following);
  const modalLogout = useAppSelector((store) => store.values.modalLogout);

  return (
    <div>
      <div className="lg:ml-[330px] md:ml-[120px] pt-[50px] sm:ml-[10px]">
        <header className="navbar sm:flex sm:justify-between sm:items-center sm:flex-wrap md:hidden px-[40px] text-[20px] fixed top-0 z-20 w-full border-b-[1px] border-b-[#cbc8c8] py-[10px] dark:border-b-[#fff] dark:text-[#fff] bg-[#fff] dark:bg-[#000]">
          <FiSettings />
          <button className="flex items-center gap-[10px] sm:text-[14px] md:text-[18px]">
            olim_yuldoshev_ooo3 <IoMdArrowDropdown />
          </button>
          <GrLogout onClick={()=>dispatch(openLogoutModal())} />
        </header>
        <section className="photo_profile_and_all_texts_and_btns mt-[20px]">
          <div className="img_profile flex  md:gap-[50px] sm:gap-[10px] items-center ">
            <div className="border-[#bfbfbf] border-[2px] rounded-full p-[1px]">
              <img
                src={imgProfileLogo}
                alt=""
                className="md:w-[138px] sm:w-[63px] rounded-full"
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
                <Link
                  to={`/home/edit`}
                  className="md:p-[5px_30px] sm:p-[4px_20px] rounded-[10px] bg-[#d0d0d0] md:text-[17px] sm:text-[12px] dark:bg-[gray] dark:text-[#fff] hover:bg-[#bebdbd] dark:hover:bg-[#626262]"
                >
                  Edit profile
                </Link>
                <button className="md:p-[5px_30px] sm:p-[4px_20px] rounded-[10px] bg-[#d0d0d0] md:text-[17px] sm:text-[12px] dark:bg-[gray] dark:text-[#fff] hover:bg-[#bebdbd] dark:hover:bg-[#626262]">
                  Show archieve
                </button>
                <button className="md:p-[5px_30px] sm:p-[4px_20px] rounded-[10px] bg-[#d0d0d0] md:text-[17px] sm:text-[12px] dark:bg-[gray] dark:text-[#fff] hover:bg-[#bebdbd] dark:hover:bg-[#626262]">
                  Advertising tool
                </button>
              </div>
              <div className="md:flex md:items-center md:flex-wrap md:gap-[20px] sm:hidden mt-[10px]">
                <h1 className="text-[20px] dark:text-[#fff]">
                  <span className="font-[700]">{posts}</span> posts
                </h1>
                <h1 className="text-[20px] dark:text-[#fff]">
                  <span className="font-[700]">{follower}</span> Followers
                </h1>
                <h1 className="text-[20px] dark:text-[#fff]">
                  <span className="font-[700]">{following}</span> Following
                </h1>
              </div>
              <div className="mt-[10px] md:flex flex-col md:items-start md:justify-start w-[130px] md:gap-[2px] text-[15px] sm:hidden dark:text-[#fff]">
                <h3 className="text-[14px]">Olim Yuldoshev</h3>
                <h3 className="text-[14px]">Software daveloper </h3>
                <h3 className="font-[500] text-[14px]">
                  Student of TNU <br /> Programmer <br /> Follow
                  <Link to={``} className="ml-[10px]">
                    <span className="font-[500]">
                      @coding_with_olim_yuldoshev
                    </span>
                  </Link>
                  🎂-19.11.2003. <br /> Everything will be, but not immediately.
                </h3>
              </div>
            </div>
          </div>
        </section>
        <div className="texts_in_mobile sm:block md:hidden">
          <div>
            <div className="mt-[10px] flex flex-col items-start justify-start w-[130px] gap-[2px] text-[15px] dark:text-[#fff]">
              <h3 className="text-[14px]">Olim Yuldoshev</h3>
              <h3 className="text-[14px]">Software daveloper </h3>
              <h3 className="font-[500] text-[14px]">
                Student of TNU <br /> Programmer <br /> Follow
                <Link to={``}>
                  <span className="font-[500] ml-[15px]">
                    @coding_with_olim_yuldoshev
                  </span>
                </Link>
                🎂-19.11.2003. Everything will be, but not immediately.
              </h3>
            </div>
            <div className="mt-[10px] flex flex-col gap-[2px]  max-w-[240px]">
              <div className="md:flex md:items-center md:flex-wrap md:gap-[10px] sm:hidden mt-[10px]">
                <h1 className="text-[20px] dark:text-[#fff]">
                  <span className="font-[700]">{posts}</span> posts
                </h1>
                <h1 className="text-[20px] dark:text-[#fff]">
                  <span className="font-[700]">{follower}</span> Followers
                </h1>
                <h1 className="text-[20px] dark:text-[#fff]">
                  <span className="font-[700]">{following}</span> Following
                </h1>
              </div>
            </div>
          </div>
        </div>
        <section className="saved_histories flex items-start md:gap-[30px] sm:gap-[5px] mt-[60px]">
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
          <div className="border-[#bfbfbf] border-[2px] rounded-full p-[1px] md:w-[70px] md:h-[70px] sm:w-[52px] sm:h-[52px] grid place-items-center text-[30px] text-[gray] dark:text-[#fff]">
            <AiOutlinePlus />
          </div>
        </section>
        <div className="sm:flex sm:items-center mt-[40px] sm:justify-between md:flex-wrap sm:flex-wrap md:gap-[10px] md:hidden  p-[20px_30px] border-y-[1px] border-y-[gray] dark:border-y-[#fff]">
          <h1 className="text-[17px] dark:text-[#fff]">
            <span className="font-[700]">{posts}</span> posts
          </h1>
          <h1 className="text-[17px] dark:text-[#fff]">
            <span className="font-[700]">{follower}</span> Followers
          </h1>
          <h1 className="text-[17px] dark:text-[#fff]">
            <span className="font-[700]">{following}</span> Following
          </h1>
        </div>
        <section className="transition_of_the_page_profile flex justify-between items-center mt-[20px] px-[20px]">
          {/* <BsFillGrid3X3GapFill className="dark:text-[#fff] text-[29px]" />
          <BiMoviePlay className="dark:text-[#fff] text-[29px]" />
          <BsBookmark className="dark:text-[#fff] text-[29px]" />
          <BiUserPin className="dark:text-[#fff] text-[29px]" /> */}
          <TabsProfile />
        </section>

        <div className="footer w-[90%] m-auto mt-[50px]">
          <ul className="flex  flex-wrap gap-5 justify-center dark:text-[#fff]">
            <li className="text-[13px] font-[400] opacity-80">
              <Link to={``}>Meta</Link>
            </li>
            <li className="text-[13px] font-[400] opacity-80">
              <Link to={``}>About</Link>
            </li>
            <li className="text-[13px] font-[400] opacity-80">
              <Link to={``}>Blog</Link>
            </li>
            <li className="text-[13px] font-[400] opacity-80">
              <Link to={``}>Blog</Link>
            </li>
            <li className="text-[13px] font-[400] opacity-80">
              <Link to={``}>Help</Link>
            </li>
            <li className="text-[13px] font-[400] opacity-80">
              <Link to={``}>API</Link>
            </li>
            <li className="text-[13px] font-[400] opacity-80">
              <Link to={``}>Privacy</Link>
            </li>
            <li className="text-[13px] font-[400] opacity-80">
              <Link to={``}>Terms</Link>
            </li>
            <li className="text-[13px] font-[400] opacity-80">
              <Link to={``}>Top Accounts</Link>
            </li>
            <li className="text-[13px] font-[400] opacity-80">
              <Link to={``}>Locations</Link>
            </li>
            <li className="text-[13px] font-[400] opacity-80">
              <Link to={``}>Instagram Lite</Link>
            </li>
            <li className="text-[13px] font-[400] opacity-80">
              <Link to={``}>Threads</Link>
            </li>
            <li className="text-[13px] font-[400] opacity-80">
              <Link to={``}>Meta Verified</Link>
            </li>
          </ul>
          <div className="flex justify-center my-[10px] py-5">
            <ul className="dark:text-[#fff]">
              <li className="text-[13px] font-[400] opacity-80">
                <Link to={``}>© 2023 Instagram from Meta</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Modal
        open={modalLogout}
        onClose={() => dispatch(handleCloseLogoutModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <Box className="w-[300px] py-[30px] bg-[#fff] flex items-center justify-center flex-col rounded-[10px] border-none outline-none dark:bg-[#000]">
          <h1 className="mb-[30px] text-center text-[23px] font-[800] dark:text-[#fff]">
            Are you sure to Logout?
          </h1>
          <div className="flex items-center gap-[20px]">
            <button
              className="p-[8px_40px] bg-[green] text-[#fff] outline-none rounded-[30px]"
              onClick={() => {
                saveToken("");
                navigate("/");
                dispatch(closeLogoutModal());
              }}
            >
              Yes
            </button>
            <button
              className="p-[8px_40px] bg-[red] text-[#fff] outline-none rounded-[30px]"
              onClick={() => {
                dispatch(closeLogoutModal());
              }}
            >
              No
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Profile;
