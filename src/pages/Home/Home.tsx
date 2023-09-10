// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { Box, Modal } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { useState } from "react";

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
import { axiosRequest } from "../../utils/axiosRequest";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Checkbox from "@mui/material/Checkbox";
import {
  closeModalSettingsOfPost,
  handleCloseSettingsOfPost,
  likeActive,
  openModalSettingsOfPost,
  setPosts,
} from "../../reducers/values";

const Home = () => {
  const like = useAppSelector((store) => store.values.like);
  const dispatch = useAppDispatch();

  const posts = useAppSelector((store) => store.values.posts);
  console.log(posts);
  
  const dataUserName = useAppSelector((store) => store.values.dataUserName);
  const postId = useAppSelector((store) => store.values.postId);
  const userId = useAppSelector((store) => store.values.userId);


  const token = JSON.parse(
    atob(localStorage.getItem("access_token").split(".")[1])
  );

const label = { inputProps: { "aria-label": "Checkbox demo" } };

  interface IUsers {
    id: string;
    dateRegistred: string;
    userName: number;
    email: string;
    userType: number;
  }

  const modalSettingsOfPost = useAppSelector(
    (store) => store.values.modalSettingsOfPost
  );

  const [users, setUsers] = useState<IUsers>([]);

  async function getUsers() {
    try {
      const { data } = await axiosRequest.get(`/User/get-users?PageSize=${25}`);
      console.log(data.data);
      setUsers(data.data);
    } catch (error) {}
  }
  
  
  async function getPosts() {
    try {
      const { data } = await axiosRequest.get("Post/get-posts");
      console.log(data.data);
      dispatch(setPosts(data.data))
    } catch (error) {}
  }

  async function deletePost(postId) {
    try {
      const { data } = await axiosRequest.delete(`Post/delete-post?id=${postId}`);
      getPosts()

      dispatch(closeModalSettingsOfPost())
    } catch (error) {}
  }

  async function addLikedPost(id) {
    try {
      const { data } = await axiosRequest.post(`Post/like-Post?postId=${id}`);
      getPosts()

      dispatch(closeModalSettingsOfPost())
    } catch (error) {}
  }


  const [avatar, setAvatar]   = useState(null)
  useEffect(() => {
    getUsers();
    getPosts()
    
  }, []);

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
                {posts.map((item) => {
                  // console.log("item");
                  // console.log(item);

                  // const [users, setUsers] = useState({})
                  // const [nickname, setNickname] = useState({})

                  // async function getNicknameInsidePosts() {
                  //   try {
                  //     const { data } = await axiosRequest.get(
                  //       `User/get-User-by-id?userId=${item.userId}`
                  //     );

                  //     setNickname(data.data)

                  //   } catch(error) {}
                  // }

                  // async function addLikedPost() {
                  //   try {
                  //     const { data } = await axiosRequest.post(
                  //       `Post/like-Post?postId=${token}`
                  //     );
                  //   } catch (error) {
                  //   }
                  // }

                  // useEffect(() => {
                  //   getUsersInsidePosts();
                  //   getNicknameInsidePosts();
                  //   addLikedPost()
                  // }, [])

                  return (
                    <div className="posts mt-[30px]">
                      <div className="block_1 flex items-center justify-between">
                        {users.map((e) => {
                          if (e.id == item.userId) {
                            return (
                              <div className="flex items-center gap-[10px]">
                                <img
                                  src={`${import.meta.env.VITE_API_URL}images/${
                                    item.images[0]
                                  }`}
                                  className="w-[30px] h-[30px] rounded-full"
                                ></img>
                                <h1>{e.userName}</h1>
                              </div>
                            );
                          }
                          [];
                        })}

                        <div>
                          <button
                            onClick={() =>
                              dispatch(openModalSettingsOfPost(item))
                            }
                          >
                            <BsThreeDots className="text-[21px] font-[400] text-[#8c8c8c] dark:text-[#fff]" />
                          </button>
                        </div>
                      </div>
                      <div className="block_2 mt-[10px] bg-[#cecece]">
                        <Swiper>
                          {item.images.map((element) => {
                            return (
                              <SwiperSlide>
                                <div>
                                  <img
                                    src={`${
                                      import.meta.env.VITE_API_URL
                                    }images/${element}`}
                                  ></img>
                                </div>
                              </SwiperSlide>
                            );
                          })}
                        </Swiper>
                      </div>
                      <div className="block_3 mt-[15px]">
                        <div className="func_icons flex justify-between">
                          <div className="icons_1_block flex items-center gap-[14px]">
                            <button onClick={() => dispatch(likeActive())}>
                              <FiHeart
                                className="dark:text-[#fff] text-[25px]"
                                onClick={() => addLikedPost(item.postId)}
                              />
                              {/* <Checkbox
                                {...label}
                                icon={
                                  <div>
                                  <div className="">
                                  <svg
                                  aria-label="Нравится"
                                  className="x1lliihq x1n2onr6"
                                  color="rgb(245, 245, 245)"
                                  fill="rgb(245, 245, 245)"
                                  height="24"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="24"
                                      >
                                        <title>Like</title>
                                        <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                }
                                checkedIcon={
                                  <svg
                                    aria-label="Не нравится"
                                    className="x1lliihq x1n2onr6"
                                    color="rgb(255, 48, 64)"
                                    fill="rgb(255, 48, 64)"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 48 48"
                                    width="24"
                                  >
                                    <title>Unlike</title>
                                    <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                  </svg>
                                }
                                onClick={() => addLikedPost(item.postId)}
                              /> */}
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
                            <span>{item.postLikeCount}</span> Likes
                          </h1>
                          <h1 className="text-[14px] dark:text-[#fff]">
                            <span>{item.commentCount}</span> Comments
                          </h1>
                        </div>
                        <div className="comments mt-[10px]">
                          <h1 className="text-[14px] font-[700] dark:text-[#fff]">
                            {/* <h2>{element.userName}</h2> */}
                        <span>{ item.userName}</span>
                            <span className="ml-[5px] font-[400]">
                              If you wanna be what you want, just work hard and
                              never give up
                              <br />
                              <br />
                              👉Follow for more👈
                              <br /> Like please❤️
                              <br /> Commentary don't forget✍️
                              <br />
                              <br /> #follow4follow #love #funny #memes
                              #followme #cute #fun #music #viral #follower
                              #followｍe #following #likeme #liketime
                              #like4likes #likeforlikes #liking #likesforlike
                              #like4follow #likesforfollow #liker #likers
                              #liking #like4likes #follow4followback
                              #followalways #followbackalways #followfriday
                              #followlikes #followus
                              #school_number_3_hisor_castle #olim_yuldoshev
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
                  );
                })}
                {/* Post 2 */}
                {/* <div className="post_2 mt-[30px]">
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
                </div> */}
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
                    Suggested for you
                  </h1>
                  <button className="dark:text-[#fff] text-[16px]">All</button>
                </div>
                {/* Recommendations */}
                {users.map((item: IUsers) => {
                  return (
                    <div className="flex justify-between items-center">
                      <div className="border-[#bfbfbf] border-[2px] rounded-full p-[1px]  ">
                        <img
                          src={imgProfileLogo}
                          alt=""
                          className="w-[38px] h-[38px] rounded-full"
                        />
                      </div>
                      <div className="ml-[15px]">
                        <p className="text-[14px] font-[700] dark:text-[#fff]">
                          {item.userName}
                        </p>
                        <h3 className="text-[11px] font-[400] dark:text-[#fff]">
                          Followed by galibr
                        </h3>
                      </div>
                      <button className="ml-[30px] text-[#26c2e5]">
                        Follow
                      </button>
                    </div>
                  );
                })}
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
          <Modal
            open={modalSettingsOfPost}
            onClose={() => dispatch(handleCloseSettingsOfPost())}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center items-center"
          >
            <Box className="  bg-[#fff] outline-none dark:bg-[#1c1b1b] dark:border-[1px] dark:border-[#fff] w-[280px] flex flex-col justify-center rounded-[30px]">
              <button className="text-[red] py-[10px] border-[1px] rounded-[30px_30px_0_0]">
                Report
              </button>
              <button className="dark:text-[#fff] py-[10px] border-[1px]">
                Add to favorite
              </button>
              {
                userId === token.sid ? <button
                className="dark:text-[#fff] py-[10px] border-[1px]"
                onClick={() => deletePost(postId)}
              >
                Delete
              </button> : null
              }
              <button className="dark:text-[#fff] py-[10px] border-[1px]">
                Go to post
              </button>
              <button className="dark:text-[#fff] py-[10px] border-[1px]">
                Share
              </button>
              <button className="dark:text-[#fff] py-[10px] border-[1px]">
                Copy link
              </button>
              <button className="dark:text-[#fff] py-[10px] border-[1px]">
                Paste to website
              </button>
              <button
                className="dark:text-[#fff] py-[10px] border-[1px] rounded-[0_0_30px_30px]"
                onClick={() => dispatch(closeModalSettingsOfPost())}
              >
                Cancel
              </button>
            </Box>
          </Modal>
        </section>
      </div>
    </div>
  );
};

export default Home;
