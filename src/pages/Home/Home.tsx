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

//For icons
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { LuSend } from "react-icons/lu";
import { BsBookmark } from "react-icons/bs";
import { axiosRequest } from "../../utils/axiosRequest";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
// import Checkbox from "@mui/material/Checkbox";

import { getToken } from "../../utils/token";
import {
  addLikedPost,
  deletePost,
  getPosts,
  getUsers,
  followUser,
  unfollowUser,
  getPostsById,
  getStoriesById,
  addComment,
} from "../../api/homeApi/homeApi";
import {
  closeModalSettingsOfPost,
  handleCloseSettingsOfPost,
  openModalSettingsOfPost,
  setInpAddComment,
  setInpAddCommentInsideModal,
  setModalComments,
  setPostIdComment,
} from "../../reducers/homeState/homeState";

const Home = () => {
  // const like = useAppSelector((store) => store.values.like);
  const dispatch = useAppDispatch();

  //States from the function createAsyncThunk Red
  // const followings = useAppSelector((store) => store.profileState.followings);
  const posts = useAppSelector((store) => store.homeState.posts);
  const postsById = useAppSelector((store) => store.homeState.postsById);
  const postIdComment = useAppSelector((store) => store.homeState.postIdComment);

  const stories = useAppSelector((store) => store.homeState.stories);
  console.log(stories);

  //States from redux
  const postId = useAppSelector((store) => store.homeState.postId);
  const userId = useAppSelector((store) => store.homeState.userId);

  const token = getToken();

  const modalSettingsOfPost = useAppSelector(
    (store) => store.homeState.modalSettingsOfPost
  );
  const users = useAppSelector((store) => store.homeState.users);
  const mainUser = useAppSelector((store) => store.profileState.mainUser);
  const inpAddComment = useAppSelector(
    (store) => store.homeState.inpAddComment
  );
  const inpAddCommentInsideModal = useAppSelector(
    (store) => store.homeState.inpAddCommentInsideModal
  );
  const modalComments = useAppSelector(
    (store) => store.homeState.modalComments
  );

  async function addCommentPost(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let newObj = {
      postId: postId,
      userId: userId,
      // comment: comments,
    };

    try {
      const { data } = await axiosRequest.post(
        `PostComment/add-postComment`,
        newObj
      );
      getPosts();

      console.log(data);

      dispatch(closeModalSettingsOfPost());
    } catch (error) {}
  }

  // const [avatar, setAvatar]   = useState(null)

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
                      slidesPerView: 7,
                      spaceBetween: 6,
                    },
                    640: {
                      slidesPerView: 8,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 9,
                      spaceBetween: 8,
                    },
                    1024: {
                      slidesPerView: 8,
                      spaceBetween: 10,
                    },
                    1280: {
                      slidesPerView: 7,
                      spaceBetween: 10,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide className="cursor-pointer">
                    <div className="flex flex-col justify-center items-center gap-[5px] dark:bg-[#000] ">
                      <div className="border-[#f75757] border-[2px] p-[1px] w-[65px] h-[65px] rounded-full flex justify-center">
                        <button className="outline-none text-[40px]">+</button>
                      </div>
                      <h1 className="text-[14px] dark:text-[#fff]">
                        Add your story
                      </h1>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="cursor-pointer">
                    <div className="flex flex-col justify-center items-center gap-[5px] dark:bg-[#000] ">
                      <div className="border-[#f75757] border-[2px] rounded-full p-[1px]">
                        {mainUser.image === "" ? (
                          <img
                            src={`  ${"https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"}`}
                            className=" w-[60px] h-[60px] rounded-full"
                          />
                        ) : (
                          <img
                            src={`${import.meta.env.VITE_API_URL}images/${
                              mainUser.image
                            }`}
                            alt=""
                            className="w-[60px] h-[60px] rounded-full"
                          />
                        )}
                      </div>
                      <h1 className="text-[14px] dark:text-[#fff]">
                        Your story
                      </h1>
                    </div>
                  </SwiperSlide>
                  {stories.map((item: any) => {
                    return (
                      <SwiperSlide className="cursor-pointer">
                        <div key={item.id}>
                          <div className="flex flex-col justify-center items-center gap-[5px] bg:[#fff] dark:bg-[#000]">
                            <div
                              className="border-[#f75757] border-[2px] rounded-full "
                              onClick={() => dispatch(getStoriesById())}
                            >
                              {item.userPhoto === "" ? (
                                <img
                                  src={`  ${"https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"}`}
                                  className="w-[60px] h-[60px] rounded-full"
                                />
                              ) : (
                                <img
                                  src={`  ${
                                    import.meta.env.VITE_API_URL
                                  }images/${item.userPhoto}`}
                                  className="w-[60px] h-[60px] rounded-full"
                                />
                              )}
                            </div>
                            <h1 className="text-[14px] text-center dark:text-[#fff] text-ellipsis whitespace-nowrap overflow-hidden w-[60px]">
                              {item.userName}
                            </h1>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="posts_in_home_page mt-[50px] xl:w-[80%] md:w-[60%] sm:w-[80%] m-[0_auto]">
                {posts.map((item: any) => {
                  return (
                    <div className="posts mt-[30px]">
                      <div className="block_1 flex items-center justify-between">
                        {users.map((e: any) => {
                          if (e.id == item.userId) {
                            return (
                              <div className="flex items-center gap-[10px]">
                                {e.avatar === "" ? (
                                  <img
                                    src={`  ${"https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"}`}
                                    className="w-[30px] h-[30px] rounded-full"
                                  />
                                ) : (
                                  <img
                                    src={`  ${
                                      import.meta.env.VITE_API_URL
                                    }images/${e.avatar}`}
                                    className="w-[30px] h-[30px] rounded-full"
                                  />
                                )}

                                <h1 className="text-[#000] dark:text-[#fff]">
                                  {e.userName}
                                </h1>
                              </div>
                            );
                          }
                        })}
                        {token?.sid == item.userId ? (
                          <div className="flex items-center gap-[10px]">
                            {mainUser.image === "" ? (
                              <img
                                src={`  ${"https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"}`}
                                className="w-[30px] h-[30px] rounded-full"
                              />
                            ) : (
                              <img
                                src={`  ${import.meta.env.VITE_API_URL}images/${
                                  mainUser.iamge
                                }`}
                                className="w-[30px] h-[30px] rounded-full"
                              />
                            )}

                            <h1 className="text-[#000] dark:text-[#fff]">
                              {mainUser.userName}
                            </h1>
                          </div>
                        ) : null}
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
                      <div className="block_2 mt-[10px]">
                        <Swiper>
                          {item.images.map((element: any) => {
                            return (
                              <SwiperSlide>
                                <div>
                                  <img
                                    className=""
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
                            <button>
                              <FiHeart
                                className={`${
                                  item.postLike
                                    ? `dark:text-[red]`
                                    : `dark:text-[#fff] text-[25px]`
                                } text-[25px]`}
                                onClick={() =>
                                  dispatch(addLikedPost(item.postId))
                                }
                              />
                            </button>
                            <button className="outline-none">
                              <AiOutlineMessage
                                className="dark:text-[#fff] text-[25px]"
                                onClick={() => {
                                  dispatch(getPostsById(item.postId));
                                  dispatch(setPostIdComment(item.postId));
                                  dispatch(setModalComments(true));
                                }}
                              />
                            </button>
                            <button className="outline-none">
                              <LuSend className="dark:text-[#fff] text-[25px]" />
                            </button>
                          </div>
                          <div className="icon_save">
                            <button className="outline-none">
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
                            {users.map((e: any) => {
                              if (e.id == item.userId) {
                                return (
                                  <span
                                    key={item.id}
                                    className="text-[#000] dark:text-[#fff]"
                                  >
                                    {e.userName}
                                  </span>
                                );
                              }
                            })}
                            <span className="ml-[5px] font-[400]">
                              {/* If you wanna be what you want, just work hard and
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
                              #school_number_3_hisor_castle #olim_yuldoshev */}
                            </span>

                            <div className="inline">
                              <span className="ml-[5px] font-[400] text-[16px]">
                                {item.title}
                              </span>
                              <h1 className="ml-[5px] font-[400]">
                                {item.content}
                              </h1>
                            </div>
                            <div></div>
                          </h1>
                        </div>
                        <div className="input_and_btn_for_comment mt-[10px]">
                          <form
                            action=""
                            onSubmit={(
                              event: React.FormEvent<HTMLFormElement>
                            ) => addCommentPost(event)}
                            className={`flex items-center`}
                          >
                            <input
                              type="text"
                              name=""
                              id=""
                              className="w-[100%] outline-none border-b-[1px] border-b-[#000] dark:bg-[#000] dark:border-b-[#fff] dark:text-[#fff] text-[16px] dark:placeholder:text-[#fff] px-[20px] pb-[20px]"
                              placeholder="Add a comment"
                              value={inpAddComment}
                              onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                              ) =>
                                dispatch(setInpAddComment(event.target.value))
                              }
                            />
                            <button className={`outline-none text-[blue]`}>
                              Add Comment
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="block_2_s_1 w-[30%] sm:hidden xl:flex xl:flex-col xl:gap-[10px] mr-[20px]">
              <div className="flex justify-between items-center">
                <div className="border-[#bfbfbf] border-[2px] rounded-full p-[1px]  ">
                  {mainUser.image === "" ? (
                    <img
                      src={`  ${"https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"}`}
                      className="w-[30px] h-[30px] rounded-full"
                    />
                  ) : (
                    <img
                      src={`  ${import.meta.env.VITE_API_URL}images/${
                        mainUser.iamge
                      }`}
                      className="w-[30px] h-[30px] rounded-full"
                    />
                  )}
                </div>
                <div className="ml-[15px]">
                  <Link
                    to={`/home/profile`}
                    className="text-[14px] font-[700] dark:text-[#fff]"
                  >
                    {mainUser.userName}
                  </Link>
                  <h3 className="text-[11px] font-[400] dark:text-[#fff]">
                    {mainUser.fullName}
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
                {users.map((item: any) => {
                  return (
                    <div
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <div className="border-[#bfbfbf] border-[2px] rounded-full p-[1px]  ">
                        {item.avatar === "" ? (
                          <img
                            src={`  ${"https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"}`}
                            className="w-[30px] h-[30px] rounded-full"
                          />
                        ) : (
                          <img
                            src={`  ${import.meta.env.VITE_API_URL}images/${
                              item.avatar
                            }`}
                            className="w-[30px] h-[30px] rounded-full"
                          />
                        )}
                      </div>
                      <div className="ml-[15px]">
                        <p className="text-[14px] font-[700] dark:text-[#fff]">
                          {item.userName}
                        </p>
                        <h3 className="text-[11px] font-[400] dark:text-[#fff]">
                          Followed by galibr
                        </h3>
                      </div>
                      <button
                        className="ml-[30px] text-[#26c2e5]"
                        onClick={() => {
                          item.subscriptions === false
                            ? dispatch(followUser(item.id))
                            : dispatch(unfollowUser(item.id));
                        }}
                      >
                        {item.subscriptions === true
                          ? `Following`
                          : item.subscriptions === false
                          ? `Follow`
                          : null}
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

          {/* Modal Settings of post */}
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
              {userId?.toString() === token?.sid ? (
                <button
                  className="dark:text-[#fff] py-[10px] border-[1px]"
                  onClick={() => {
                    dispatch(deletePost(postId));
                    dispatch(closeModalSettingsOfPost());
                  }}
                >
                  Delete
                </button>
              ) : null}
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

          {/* Modal Comments */}
          <Modal
            open={modalComments}
            onClose={() => dispatch(setModalComments(false))}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center items-center"
          >
            <Box className="bg-[#fff] outline-none dark:border-[1px] border-[#fff]">
              <div className="flex">
                <div className="w-[350px] h-[518px] border-solid border-[1px] border-gray-400 bg-black">
                  <Swiper>
                    {postsById?.images?.map((item: any) => {
                      return (
                        <SwiperSlide>
                          <div>
                            <img
                              className="h-[100%] w-[100%]"
                              src={`${
                                import.meta.env.VITE_API_URL
                              }images/${item}`}
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
                <div className="bg-[#fff] dark:bg-[#000000]">
                  <nav className=" flex justify-between  h-[60px] w-[450px] border-solid border-[1px] border-gray-400 items-center px-[2%]">
                    <div className="flex gap-3 items-center">
                      <div className="flex items-center gap-[10px]">
                        {users.map((e: any) => {
                          if (e.id == postsById.userId) {
                            return (
                              <div className="flex items-center gap-[10px]">
                                {e.avatar === "" ? (
                                  <img
                                    src={`  ${"https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"}`}
                                    className="w-[30px] h-[30px] rounded-full"
                                  />
                                ) : (
                                  <img
                                    src={`  ${
                                      import.meta.env.VITE_API_URL
                                    }images/${e.avatar}`}
                                    className="w-[30px] h-[30px] rounded-full"
                                  />
                                )}

                                <h1 className="text-[#000] dark:text-[#fff]">
                                  {e.userName}
                                </h1>
                              </div>
                            );
                          }
                        })}
                        {token?.sid === postsById.userId ? (
                          <div className="flex items-center gap-[10px]">
                            {mainUser.image === "" ? (
                              <img
                                src={`  ${"https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"}`}
                                className="w-[30px] h-[30px] rounded-full"
                              />
                            ) : (
                              <img
                                src={`  ${import.meta.env.VITE_API_URL}images/${
                                  mainUser.iamge
                                }`}
                                className="w-[30px] h-[30px] rounded-full"
                              />
                            )}

                            <h1 className="text-[#000] dark:text-[#fff] max-w-[200px]">
                              {mainUser.userName}
                            </h1>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </nav>
                  <div className="for_comments h-[300px] overflow-auto px-[3%]">
                    {postsById?.comments?.length === 0 ? (
                      <div className="max-w-[200px]">
                        <h1 className="">Not commented</h1>
                      </div>
                    ) : (
                      postsById?.comments?.map((item: any) => {
                        return (
                          <div className="max-w-[200px]">
                            <h1 className="max-w-[200px]">{item.comment}</h1>
                          </div>
                        );
                      })
                    )}
                  </div>

                  <footer className="py-[10px] px-[2%]">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3"></div>
                    </div>
                    <div className="py-[10px] ">
                      <h1>{postsById?.postLikeCount}</h1>
                      <h1>{postsById?.datePublished}</h1>
                      <p></p>
                    </div>
                    <div className="flex gap-2 items-center py-[3px] ">
                      <form
                        action=""
                        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                          event.preventDefault();

                          let newComment = {
                            comment: inpAddCommentInsideModal,
                            postId: postIdComment,
                          };

                          dispatch(addComment(newComment));
                        }}
                      >
                        <input
                          className="w-[330px] outline-none h-[40px]"
                          type="text"
                          placeholder="Add a comment"
                          value={inpAddCommentInsideModal}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            dispatch(
                              setInpAddCommentInsideModal(event.target.value)
                            );
                          }}
                        />

                        <button className="text-blue-600 " type="submit">
                          post
                        </button>
                      </form>
                    </div>
                  </footer>
                </div>
              </div>
            </Box>
          </Modal>
        </section>
      </div>
    </div>
  );
};

export default Home;
