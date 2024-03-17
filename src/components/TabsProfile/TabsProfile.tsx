import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BsBookmark, BsFillGrid3X3GapFill } from "react-icons/bs";
import { BiMoviePlay, BiUserPin } from "react-icons/bi";
import imgForPost from "../../assets/My-photo.jpg";

// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import TelegramIcon from "@mui/icons-material/Telegram";
// import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { Modal } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setModalViewMainPosts } from "../../reducers/profileState/profileState";
import { getMainPostById } from "../../api/profileApi/profileApi";

import { Swiper, SwiperSlide } from "swiper/react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsProfile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const dispatch = useAppDispatch();

  const mainUser = useAppSelector((store) => store.profileState.mainUser);


  const modalViewMainPosts = useAppSelector(
    (store) => store.profileState.modalViewMainPosts
  );

  // const posts = useAppSelector((store) => store.values.posts);
  const mainPostsOfMainUser = useAppSelector(
    (store) => store.profileState.mainPostsOfMainUser
  );

  const mainPostById = useAppSelector(
    (store) => store.profileState.mainPostById
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          // className="flex justify-even"
        >
          <Tab
            label={
              <div className="flex items-center gap-[10px]">
                <BsFillGrid3X3GapFill className="dark:text-[#fff] text-[29px]" />
                <h4 className="uppercase sm:hidden md:block text-[19px] dark:text-[#fff]">
                  Posts
                </h4>
              </div>
            }
            {...a11yProps(0)}
            className="w-[25%]"
          />
          {/* <Tab
            label={
              <div className="flex items-center gap-[10px]">
                <BiMoviePlay className="dark:text-[#fff] text-[29px]" />
                <h4 className="uppercase sm:hidden md:block text-[19px] dark:text-[#fff]">
                  Reels
                </h4>
              </div>
            }
            {...a11yProps(1)}
            className="w-[25%]"
          /> */}
          <Tab
            label={
              <div className="flex items-center gap-[10px]">
                <BsBookmark className="dark:text-[#fff] text-[29px]" />
                <h4 className="uppercase sm:hidden md:block text-[19px] dark:text-[#fff]">
                  Saved
                </h4>
              </div>
            }
            {...a11yProps(2)}
            className="w-[25%]"
          />
          <Tab
            className="md:block sm:hidden w-[25%]"
            label={
              <div className="flex items-center gap-[10px]">
                <BiUserPin className="dark:text-[#fff] text-[29px]" />
                <h4 className="uppercase sm:hidden md:block text-[19px] dark:text-[#fff]">
                  Mentioned
                </h4>
              </div>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
          <div className="grid grid-cols-3 gap-[3px]">
            {mainPostsOfMainUser.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="relative"
                  onClick={() => {
                    dispatch(getMainPostById(item.postId));
                    dispatch(setModalViewMainPosts(true));
                  }}
                >
                  <img
                    src={`${import.meta.env.VITE_API_URL}images/${
                      item.images[0]
                    }`}
                    className="object-full sm:w-full h-[200px] md:w-[200px] object-full"
                  />
                  <div className="absolute sm:w-full h-[200px] md:w-[200px] object-full top-0 cursor-pointer bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 duration-100">
                    <div className="flex flex-col gap-[4px] items-center">
                      <div className="text-white flex gap-[4px]">
                        <AiFillHeart className="text-[24px]" />
                        <p className="font-[800]">{item.postLikeCount}</p>
                      </div>
                      <div className="text-white flex gap-[4px]">
                        <FaComment className="text-[20px]" />
                        <p className="font-[800]">{item.postView}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <Modal
        open={modalViewMainPosts}
        onClose={() => dispatch(setModalViewMainPosts(false))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <Box className="bg-[#fff] outline-none dark:border-[1px] border-[#fff]">
          <div className="flex">
            <div className="w-[350px] h-[518px] border-solid border-[1px] border-gray-400 bg-black">
              {/* {mainPostById?.images?.map((item: any) => {
                return (
                  <img
                    className="h-[100%] w-[100%]"
                    src={`${import.meta.env.VITE_API_URL}${item}`}
                    alt=""
                  />
                );
              })} */}
              <Swiper>
                {mainPostById?.images?.map((item: any) => {
                  return (
                    <SwiperSlide>
                      <div>
                        <img
                          className="h-[100%] w-[100%]"
                          src={`${import.meta.env.VITE_API_URL}images/${item}`}
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
                  {/* {mainUser.id == mainPostById?.userId ? ( */}
                  <div className="flex items-center gap-[10px]">
                    {mainUser.image === "" ? (
                      <img
                        src={`  ${"https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"}`}
                        className="w-[30px] h-[30px] rounded-full"
                      />
                    ) : (
                      <img
                        src={`  ${import.meta.env.VITE_API_URL}images/${
                          mainUser.image
                        }`}
                        className="w-[30px] h-[30px] rounded-full"
                      />
                    )}

                    <h1 className="text-[#000] dark:text-[#fff]">
                      {mainUser.userName}
                    </h1>
                  </div>
                  {/* ) : null} */}

                </div>
                {/* <MoreHorizIcon /> */}
              </nav>
              <div className="h-[300px] overflow-auto px-[3%]">
                {mainPostById?.comments?.length === 0 ? <div><h1 className="">Not commented</h1></div> : mainPostById?.comments?.map((item: any) => {
                  return <h1>{item.comment}</h1>;
                })}
              </div>

              <footer className="py-[10px] px-[2%]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    {/* <FavoriteBorderIcon /> */}
                    {/* <ChatBubbleOutlineIcon /> */}
                    {/* <TelegramIcon /> */}
                  </div>
                  {/* <BookmarkBorderIcon /> */}
                </div>
                <div className="py-[10px] ">
                  <h1>{mainPostById?.postLikeCount}</h1>
                  <h1>{mainPostById?.datePublished}</h1>
                  <p></p>
                </div>
                <div className="flex gap-2 items-center py-[3px] ">
                  {/* <SentimentSatisfiedAltIcon /> */}
                  <input
                    className="w-[330px] outline-none h-[40px]"
                    type="text"
                    placeholder="Add a comment"
                  />

                  <button className="text-blue-600 ">post</button>
                </div>
              </footer>
            </div>
          </div>
        </Box>
      </Modal>
    </Box>
  );
}
