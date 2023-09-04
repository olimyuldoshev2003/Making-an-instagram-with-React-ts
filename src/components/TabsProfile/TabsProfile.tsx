import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BsBookmark, BsFillGrid3X3GapFill } from "react-icons/bs";
import { BiMoviePlay, BiUserPin } from "react-icons/bi";
import imgForPost from "../../assets/My-photo.jpg";

import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { Modal } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { handleCloseViewMyPostsOfProfileModal, openModalViewPostMine } from "../../reducers/values";

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

  const dispatch = useAppDispatch()

  const modalViewPosts = useAppSelector((store) => store.values.modalViewPosts);

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
          <div className="relative">
            <img src={imgForPost} className="object-cover w-full h-full" />
            <div
              className="absolute w-full h-full top-0 cursor-pointer bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 duration-100"
              onClick={() => dispatch(openModalViewPostMine())}
            >
              <div className="flex flex-col gap-[4px] items-center">
                <div className="text-white flex gap-[4px]">
                  <AiFillHeart className="text-[24px]" />
                  <p className="font-[800]">104</p>
                </div>
                <div className="text-white flex gap-[4px]">
                  <FaComment className="text-[20px]" />
                  <p className="font-[800]">5</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={imgForPost} className="object-cover w-full h-full" />
            <div
              className="absolute w-full h-full top-0 cursor-pointer bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 duration-100"
              onClick={() => dispatch(openModalViewPostMine())}
            >
              <div className="flex flex-col gap-[4px] items-center">
                <div className="text-white flex gap-[4px]">
                  <AiFillHeart className="text-[24px]" />
                  <p className="font-[800]">117</p>
                </div>
                <div className="text-white flex gap-[4px]">
                  <FaComment className="text-[20px]" />
                  <p className="font-[800]">14</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={imgForPost} className="object-cover w-full h-full" />
            <div
              className="absolute w-full h-full top-0 cursor-pointer bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 duration-100"
              onClick={() => dispatch(openModalViewPostMine())}
            >
              <div className="flex flex-col gap-[4px] items-center">
                <div className="text-white flex gap-[4px]">
                  <AiFillHeart className="text-[24px]" />
                  <p className="font-[800]">150</p>
                </div>
                <div className="text-white flex gap-[4px]">
                  <FaComment className="text-[20px]" />
                  <p className="font-[800]">10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Four
      </CustomTabPanel>
      <Modal
        open={modalViewPosts}
        onClose={() => dispatch(handleCloseViewMyPostsOfProfileModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <Box className="w-[300px] py-[30px] bg-[#fff] flex items-center justify-center flex-col rounded-[10px] border-none outline-none dark:bg-[#000]"></Box>
      </Modal>
    </Box>
  );
}
