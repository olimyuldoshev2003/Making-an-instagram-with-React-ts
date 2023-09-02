// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

// The `state` arg is correctly typed as `RootState` already
import Switcher from "../../components/Switch Ui/Switcher";
import { Link } from "react-router-dom";

//for images
import imgProfileLogo from "../../assets/My-profile-photo.jpg";
import imgForPost from "../../assets/My-photo.jpg";

//For icons
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { LuSend } from "react-icons/lu";
import { BsBookmark } from "react-icons/bs";

const Home = () => {

  return (
    <div>
      <div className="lg:ml-[330px] md:ml-[120px] pt-[50px] sm:ml-[10px]">
        <section className="section_1">
          <div className="sm:flex sm:justify-between sm:items-center sm:flex-wrap md:hidden sm:gap-[10px] p-[10px]">
            <div className="flex items-center gap-[20px]">
              <button className="insta_text text-[32px] dark:text-[#fff]">
                Instagram
              </button>
              <Switcher />
            </div>
            <div className="flex items-center gap-[15px]">
              <input
                type="search"
                name=""
                id=""
                className="outline-none bg-[#cecece] placeholder:text-[gray] dark:placeholder:text-[#fff] dark:bg-[#000] dark:text-[#fff] dark:border-[1px]  rounded-[20px] p-[10px_24px]"
                placeholder="Search"
              />
              <button>
                <AiOutlineHeart className="text-[30px] dark:text-[#fff]" />
              </button>
            </div>
          </div>
          <div className="main flex justify-between ">
            <div className="block_1 xl:w-[60%] sm:w-[100%] dark:bg-[#000]">
              <div className="swiper_home mt-[30px] dark:bg-[#000]">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={2}
                  // pagination={{
                  //   // clickable: true,
                  // }}
                  breakpoints={{
                    290: {
                      slidesPerView: 4,
                      spaceBetween: 6,
                    },
                    370: {
                      slidesPerView: 6,
                      spaceBetween: 6,
                    },
                    560: {
                      slidesPerView: 9,
                      spaceBetween: 6,
                    },
                    640: {
                      slidesPerView: 10,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 10,
                      spaceBetween: 8,
                    },
                    1024: {
                      slidesPerView: 10,
                      spaceBetween: 10,
                    },
                    1280: {
                      slidesPerView: 8,
                      spaceBetween: 10,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="flex flex-col justify-center items-center gap-[5px] dark:bg-[#000] ">
                      <div className="border-[#f75757] border-[2px] rounded-full p-[1px]">
                        <img
                          src={imgProfileLogo}
                          alt=""
                          className="w-[38px] h-[38px] rounded-full"
                        />
                      </div>
                      <h1 className="text-[14px] dark:text-[#fff]">My Story</h1>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col justify-center items-center gap-[5px] dark:bg-[#000]  ">
                      <div className="border-[#f75757] border-[2px] rounded-full p-[1px]">
                        <img
                          src={imgProfileLogo}
                          alt=""
                          className="w-[38px] h-[38px] rounded-full"
                        />
                      </div>
                      <h1 className="text-[14px] text-center dark:text-[#fff]">
                        olim_yul...
                      </h1>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col justify-center items-center gap-[5px] dark:bg-[#000] ">
                      <div className="border-[#f75757] border-[2px] rounded-full p-[1px]">
                        <img
                          src={imgProfileLogo}
                          alt=""
                          className="w-[38px] h-[38px] rounded-full"
                        />
                      </div>
                      <h1 className="text-[14px] text-center dark:text-[#fff]">
                        olim_yul...
                      </h1>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col justify-center items-center gap-[5px] dark:bg-[#000] ">
                      <div className="border-[#f75757] border-[2px] rounded-full p-[1px]">
                        <img
                          src={imgProfileLogo}
                          alt=""
                          className="w-[38px] h-[38px] rounded-full"
                        />
                      </div>
                      <h1 className="text-[14px] text-center dark:text-[#fff]">
                        olim_yul...
                      </h1>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col justify-center items-center gap-[5px] dark:bg-[#000] ">
                      <div className="border-[#f75757] border-[2px] rounded-full p-[1px]">
                        <img
                          src={imgProfileLogo}
                          alt=""
                          className="w-[38px] h-[38px] rounded-full"
                        />
                      </div>
                      <h1 className="text-[14px] text-center dark:text-[#fff]">
                        olim_yul...
                      </h1>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col justify-center items-center gap-[5px] dark:bg-[#000] ">
                      <div className="border-[#f75757] border-[2px] rounded-full p-[1px]">
                        <img
                          src={imgProfileLogo}
                          alt=""
                          className="w-[38px] h-[38px] rounded-full"
                        />
                      </div>
                      <h1 className="text-[14px] text-center dark:text-[#fff]">
                        olim_yul...
                      </h1>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col justify-center items-center gap-[5px] dark:bg-[#000] ">
                      <div className="border-[#f75757] border-[2px] rounded-full p-[1px]">
                        <img
                          src={imgProfileLogo}
                          alt=""
                          className="w-[38px] h-[38px] rounded-full"
                        />
                      </div>
                      <h1 className="text-[14px] text-center dark:text-[#fff]">
                        olim_yul...
                      </h1>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col justify-center items-center gap-[5px] dark:bg-[#000] ">
                      <div className="border-[#f75757] border-[2px] rounded-full p-[1px]">
                        <img
                          src={imgProfileLogo}
                          alt=""
                          className="w-[38px] h-[38px] rounded-full"
                        />
                      </div>
                      <h1 className="text-[14px] text-center dark:text-[#fff]">
                        olim_yul...
                      </h1>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col justify-center items-center gap-[5px] dark:bg-[#000] ">
                      <div className="border-[#f75757] border-[2px] rounded-full p-[1px]">
                        <img
                          src={imgProfileLogo}
                          alt=""
                          className="w-[38px] h-[38px] rounded-full"
                        />
                      </div>
                      <h1 className="text-[14px] text-center dark:text-[#fff]">
                        olim_yul...
                      </h1>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col justify-center items-center gap-[5px] dark:bg-[#000] ">
                      <div className="border-[#f75757] border-[2px] rounded-full p-[1px]">
                        <img
                          src={imgProfileLogo}
                          alt=""
                          className="w-[38px] h-[38px] rounded-full"
                        />
                      </div>
                      <h1 className="text-[14px] text-center dark:text-[#fff]">
                        olim_yul...
                      </h1>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col justify-center items-center gap-[5px] dark:bg-[#000] ">
                      <div className="border-[#f75757] border-[2px] rounded-full p-[1px]">
                        <img
                          src={imgProfileLogo}
                          alt=""
                          className="w-[38px] h-[38px] rounded-full"
                        />
                      </div>
                      <h1 className="text-[14px] text-center dark:text-[#fff]">
                        olim_yul...
                      </h1>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col justify-center items-center gap-[5px] dark:bg-[#000] ">
                      <div className="border-[#f75757] border-[2px] rounded-full p-[1px]">
                        <img
                          src={imgProfileLogo}
                          alt=""
                          className="w-[38px] h-[38px] rounded-full"
                        />
                      </div>
                      <h1 className="text-[14px] text-center dark:text-[#fff]">
                        olim_yul...
                      </h1>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col justify-center items-center gap-[5px] dark:bg-[#000] ">
                      <div className="border-[#f75757] border-[2px] rounded-full p-[1px]">
                        <img
                          src={imgProfileLogo}
                          alt=""
                          className="w-[38px] h-[38px] rounded-full"
                        />
                      </div>
                      <h1 className="text-[14px] text-center dark:text-[#fff]">
                        olim_yul...
                      </h1>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="posts_in_home_page mt-[50px] xl:w-[80%] md:w-[60%] sm:w-[80%] m-[0_auto]">
                <div className="post_1">
                  <div className="block_1 flex items-center justify-between">
                    <div className="texts flex items-center">
                      <Link
                        to={`/home/profile`}
                        className="border-[#f75757] border-[2px] rounded-full p-[1px]"
                      >
                        <img
                          src={imgProfileLogo}
                          alt=""
                          className="w-[28px] h-[28px] rounded-full"
                        />
                      </Link>
                      <div className="ml-[15px] flex items-center gap-[10px] flex-wrap">
                        <Link
                          to={`/home/profile`}
                          className="text-[14px] font-[700] dark:text-[#fff]"
                        >
                          olim_yuldoshev_ooo3
                        </Link>
                        <h3 className="text-[13px] font-[400] dark:text-[#fff]">
                          <span className="mr-[5px]">1</span>min. ago
                        </h3>
                      </div>
                    </div>
                    <div>
                      <button>
                        <BsThreeDots className="text-[21px] font-[400] text-[#8c8c8c] dark:text-[#fff]" />
                      </button>
                    </div>
                  </div>
                  <div className="block_2 mt-[10px] bg-[#cecece]">
                    <img src={imgForPost} alt="" />
                  </div>
                  <div className="block_3 mt-[15px]">
                    <div className="func_icons flex justify-between">
                      <div className="icons_1_block flex items-center gap-[14px]">
                        <button>
                          <FiHeart className="dark:text-[#fff] text-[25px]" />
                        </button>
                        <button>
                          <AiOutlineMessage className="dark:text-[#fff] text-[25px]" />
                        </button>
                        <button>
                          <LuSend className="dark:text-[#fff] text-[25px]" />
                        </button>
                      </div>
                      <div className="icon_save">
                        <button>
                          <BsBookmark className="dark:text-[#fff] text-[25px]" />
                        </button>
                      </div>
                    </div>
                    <div className="likes mt-[10px]">
                      <h1 className="text-[14px] dark:text-[#fff]">
                        <span>150</span> Likes
                      </h1>
                    </div>
                    <div className="comments mt-[10px]">
                      <h1 className="text-[14px] font-[700] dark:text-[#fff]">
                        <Link to={`/home/profile`}>olim_yuldoshev_ooo3 </Link>
                        <span className="ml-[5px] font-[400]">
                          If you wanna be what you want, just work hard and
                          never give up
                          <br />
                          <br />
                          👉Follow for more👈
                          <br /> Like please❤️
                          <br /> Commentary don't forget✍️
                          <br />
                          <br /> #follow4follow #love #funny #memes #followme
                          #cute #fun #music #viral #follower #followｍe
                          #following #likeme #liketime #like4likes #likeforlikes
                          #liking #likesforlike #like4follow #likesforfollow
                          #liker #likers #liking #like4likes #follow4followback
                          #followalways #followbackalways #followfriday
                          #followlikes #followus #school_number_3_hisor_castle
                          #olim_yuldoshev
                        </span>
                      </h1>
                    </div>
                    <div className="input_and_btn_for_comment mt-[10px]">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[100%] outline-none border-b-[1px] border-b-[#000] dark:bg-[#000] dark:border-b-[#fff] dark:text-[#fff] text-[16px] dark:placeholder:text-[#fff] px-[20px] pb-[20px]"
                        placeholder="Add a comment"
                      />
                    </div>
                  </div>
                </div>
                <div className="post_2 mt-[30px]">
                  <div className="block_1 flex items-center justify-between">
                    <div className="texts flex items-center">
                      <Link
                        to={`/home/profile`}
                        className="border-[#f75757] border-[2px] rounded-full p-[1px]"
                      >
                        <img
                          src={imgProfileLogo}
                          alt=""
                          className="w-[28px] h-[28px] rounded-full"
                        />
                      </Link>
                      <div className="ml-[15px] flex items-center gap-[10px] flex-wrap">
                        <Link
                          to={`/home/profile`}
                          className="text-[14px] font-[700] dark:text-[#fff]"
                        >
                          olim_yuldoshev_ooo3
                        </Link>
                        <h3 className="text-[13px] font-[400] dark:text-[#fff]">
                          <span className="mr-[5px]">3</span>min. ago
                        </h3>
                      </div>
                    </div>
                    <div>
                      <button>
                        <BsThreeDots className="text-[21px] font-[400] text-[#8c8c8c] dark:text-[#fff]" />
                      </button>
                    </div>
                  </div>
                  <div className="block_2 mt-[10px] bg-[#cecece]">
                    <img src={imgForPost} alt="" />
                  </div>
                  <div className="block_3 mt-[15px]">
                    <div className="func_icons flex justify-between">
                      <div className="icons_1_block flex items-center gap-[14px]">
                        <button>
                          <FiHeart className="dark:text-[#fff] text-[25px]" />
                        </button>
                        <button>
                          <AiOutlineMessage className="dark:text-[#fff] text-[25px]" />
                        </button>
                        <button>
                          <LuSend className="dark:text-[#fff] text-[25px]" />
                        </button>
                      </div>
                      <div className="icon_save">
                        <button>
                          <BsBookmark className="dark:text-[#fff] text-[25px]" />
                        </button>
                      </div>
                    </div>
                    <div className="likes mt-[10px]">
                      <h1 className="text-[14px] dark:text-[#fff]">
                        <span>100</span> Likes
                      </h1>
                    </div>
                    <div className="comments mt-[10px]">
                      <h1 className="text-[14px] font-[700] dark:text-[#fff]">
                        <Link to={`/home/profile`}>olim_yuldoshev_ooo3 </Link>
                        <span className="ml-[5px] font-[400]">
                          If you wanna be what you want, just work hard and
                          never give up
                          <br />
                          <br />
                          👉Follow for more👈
                          <br /> Like please❤️
                          <br /> Commentary don't forget✍️
                          <br />
                          <br /> #follow4follow #love #funny #memes #followme
                          #cute #fun #music #viral #follower #followｍe
                          #following #likeme #liketime #like4likes #likeforlikes
                          #liking #likesforlike #like4follow #likesforfollow
                          #liker #likers #liking #like4likes #follow4followback
                          #followalways #followbackalways #followfriday
                          #followlikes #followus #school_number_3_hisor_castle
                          #olim_yuldoshev
                        </span>
                      </h1>
                    </div>
                    <div className="input_and_btn_for_comment mt-[10px]">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[100%] outline-none border-b-[1px] border-b-[#000] dark:bg-[#000] dark:border-b-[#fff] dark:text-[#fff] text-[16px] dark:placeholder:text-[#fff] px-[20px] pb-[20px]"
                        placeholder="Add a comment"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_2_s_1 w-[30%] sm:hidden xl:flex xl:flex-col xl:gap-[10px] mr-[20px]">
              <div className="flex justify-between items-center">
                <div className="border-[#bfbfbf] border-[2px] rounded-full p-[1px]  ">
                  <img
                    src={imgProfileLogo}
                    alt=""
                    className="w-[38px] h-[38px] rounded-full"
                  />
                </div>
                <div className="ml-[15px]">
                  <Link
                    to={`/home/profile`}
                    className="text-[14px] font-[700] dark:text-[#fff]"
                  >
                    olim_yuldoshev_ooo3
                  </Link>
                  <h3 className="text-[11px] font-[400] dark:text-[#fff]">
                    Olim Yuldosghev
                  </h3>
                </div>
                <button className="ml-[30px] text-[#26c2e5]">Switch</button>
              </div>
              <div className="child_2_block_2_s_1 flex flex-col gap-[10px]">
                <div className="text_btn flex justify-between">
                  <h1 className="text-[15px] dark:text-[#fff]">
                    Recommendations for you
                  </h1>
                  <button className="dark:text-[#fff] text-[16px]">All</button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="border-[#bfbfbf] border-[2px] rounded-full p-[1px]  ">
                    <img
                      src={imgProfileLogo}
                      alt=""
                      className="w-[38px] h-[38px] rounded-full"
                    />
                  </div>
                  <div className="ml-[15px]">
                    <Link
                      to={`/home/profile`}
                      className="text-[14px] font-[700] dark:text-[#fff]"
                    >
                      olim_yuldoshev_ooo3
                    </Link>
                    <h3 className="text-[11px] font-[400] dark:text-[#fff]">
                      Followed by galibr
                    </h3>
                  </div>
                  <button className="ml-[30px] text-[#26c2e5]">Follow</button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="border-[#bfbfbf] border-[2px] rounded-full p-[1px]">
                    <img
                      src={imgProfileLogo}
                      alt=""
                      className="w-[38px] h-[38px] rounded-full"
                    />
                  </div>
                  <div className="ml-[15px]">
                    <Link
                      to={`/home/profile`}
                      className="text-[14px] font-[700] dark:text-[#fff]"
                    >
                      olim_yuldoshev_ooo3
                    </Link>
                    <h3 className="text-[11px] font-[400] dark:text-[#fff]">
                      Followed by galibr
                    </h3>
                  </div>
                  <button className="ml-[30px] text-[#26c2e5]">Follow</button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="border-[#bfbfbf] border-[2px] rounded-full p-[1px]  ">
                    <img
                      src={imgProfileLogo}
                      alt=""
                      className="w-[38px] h-[38px] rounded-full"
                    />
                  </div>
                  <div className="ml-[15px]">
                    <Link
                      to={`/home/profile`}
                      className="text-[14px] font-[700] dark:text-[#fff]"
                    >
                      olim_yuldoshev_ooo3
                    </Link>
                    <h3 className="text-[11px] font-[400] dark:text-[#fff]">
                      Followed by galibr
                    </h3>
                  </div>
                  <button className="ml-[30px] text-[#26c2e5]">Follow</button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="border-[#bfbfbf] border-[2px] rounded-full p-[1px]  ">
                    <img
                      src={imgProfileLogo}
                      alt=""
                      className="w-[38px] h-[38px] rounded-full"
                    />
                  </div>
                  <div className="ml-[15px]">
                    <Link
                      to={`/home/profile`}
                      className="text-[14px] font-[700] dark:text-[#fff]"
                    >
                      olim_yuldoshev_ooo3
                    </Link>
                    <h3 className="text-[11px] font-[400] dark:text-[#fff]">
                      Followed by galibr
                    </h3>
                  </div>
                  <button className="ml-[30px] text-[#26c2e5]">Follow</button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="border-[#bfbfbf] border-[2px] rounded-full p-[1px]  ">
                    <img
                      src={imgProfileLogo}
                      alt=""
                      className="w-[38px] h-[38px] rounded-full"
                    />
                  </div>
                  <div className="ml-[15px]">
                    <Link
                      to={`/home/profile`}
                      className="text-[14px] font-[700] dark:text-[#fff]"
                    >
                      olim_yuldoshev_ooo3
                    </Link>
                    <h3 className="text-[11px] font-[400] dark:text-[#fff]">
                      Followed by galibr
                    </h3>
                  </div>
                  <button className="ml-[30px] text-[#26c2e5]">Follow</button>
                </div>
              </div>
              <div className="links flex justify-between items-center flex-wrap text-[12px]  text-[#d4d4d4] mt-[20px] dark:text-[#fff]">
                <Link to={``}>Information.</Link>
                <Link to={``}>Help.</Link>
                <Link to={``}>Press.</Link>
                <Link to={``}>API.</Link>
                <Link to={``}>Jobs.</Link>
                <Link to={``}>Confidentiality.</Link>
                <Link to={``}>Conditions.</Link>
                <Link to={``}>Places.</Link>
                <Link to={``}>Language .</Link>
                <Link to={``}>Meta Verified.</Link>
              </div>
              <div className="text text-[14px] text-[#d4d4d4] mt-[10px] dark:text-[#fff]">
                <h1>© 2023 INSTAGRAM FROM META</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
