import myImage from "../../assets/My-profile-photo.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { BiExit } from "react-icons/bi";
import { Link } from "react-router-dom";

const Edit = () => {
  return (
    <div className="max-w-[700px] sm:mx-auto md:ml-[105px] lg:ml-[380px]">
      {/* navbar */}
      <nav className="border-b md:hidden border-gray-300 top-0 fixed justify-center w-full py-[8px] px-[20px] bg-white flex items-center dark:bg-[#000]">
        <Link
          to="/home/profile"
          className="absolute left-[10px] text-[25px] cursor-pointer dark:text-[#fff]"
        >
          <IoIosArrowBack />
        </Link>
        <p className="text-center text-[18px] font-[500] dark:text-[#fff]">
          Edit profile
        </p>
      </nav>
      {/* /// */}
      <div className="flex items-center justify-between  dark:text-[#fff]">
        <p className="px-[20px] py-[24px] text-[24px] font-[500] dark:text-[#fff]">
          Settings
        </p>
        <Link
          to="/home/profile"
          className="text-[25px] cursor-pointer px-[10px] dark:text-[#fff]"
        >
          <BiExit />
        </Link>
      </div>
      <div className="border rounded mx-[10px] border-gray-300 p-[20px] dark:text-[#fff]">
        <p className="px-[30px] text-[24px] py-[8px] dark:text-[#fff]">
          Edit profile
        </p>
        <div className="mt-[35px] dark:text-[#fff]">
          {/* me */}
          <div className="flex items-center gap-[20px]">
            <div className="w-[38px] h-[38px]">
              <img src={myImage} className="rounded-full w-full h-full" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="leading-[16px] dark:text-[#fff]">
                olim_yuldoshev_ooo3
              </p>
              <p className="text-sky-500 cursor-pointer hover:text-[black] text-[14px] font-[500] leading-[14px] dark:text-[#fff]">
                Change profile photo
              </p>
            </div>
          </div>
          {/* form */}
          <form className="mt-[16px] max-w-[350px] mb-[50px]">
            {/* web site */}
            <p className="font-[500] dark:text-[#fff]">Website</p>
            <input
              type="text"
              placeholder="Website"
              className="bg-gray-200/70 outline-none mt-[4px] border border-gray-300 px-[10px] py-[2px] rounded w-full"
            />
            <p className="text-[12px] leading-[14px] text-gray-500 mt-[6px] dark:text-[#fff]">
              Links can only be changed in the mobile version. Go to the
              Instagram app and tap "Edit Profile".
            </p>
            {/* about me */}
            <p className="font-[500] mt-[28px] dark:text-[#fff]">About Me</p>
            <textarea className="mt-[4px] border outline-none border-gray-300 px-[10px] py-[2px] rounded w-full"></textarea>
            <p className="text-[12px] leading-[14px] text-gray-500 mt-[6px] dark:text-[#fff]">
              0 / 150
            </p>
            {/* Floor */}
            <p className="font-[500] mt-[14px] dark:text-[#fff]">Floor</p>
            <input
              type="text"
              value={"man"}
              placeholder="man"
              className="outline-none mt-[4px] border border-gray-300 px-[10px] py-[2px] rounded w-full"
            />
            <p className="text-[12px] leading-[14px] text-gray-500 mt-[6px] dark:text-[#fff]">
              This information will not appear on your public profile.
            </p>
            {/* //// */}
            <p className="mt-[8px] font-[500] dark:text-[#fff]">
              Show recommended accounts in profiles
            </p>
            <div className="flex items-center gap-[10px] mt-[6px]">
              <input type="checkbox" checked={true} />
              <p className="leading-[16px] text-[14px] font-[500] dark:text-[#fff]">
                Select if you want people to see similar recommended accounts on
                your profile and have your account recommended on other
                profiles.{" "}
                <span className="text-sky-600 cursor-pointer dark:text-[#fff]">
                  [?]
                </span>
              </p>
            </div>
            <button
              type="submit"
              className="bg-sky-500/30 text-[14px] rounded-[8px] px-[14px] py-[4px] text-white mt-[25px]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;