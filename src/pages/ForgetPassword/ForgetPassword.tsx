import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BiLockAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { axiosRequest } from "../../utils/axiosRequest";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const [emailUser, setEmailUser] = useState<string>("");

  async function forgotPasswordDelete(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const { data } = await axiosRequest.delete(
        `Account/ForgotPassword/${emailUser}`
      );
      navigate("/reset-password");
    } catch (error) {}
  }

  // useEffect(()=> {
  //   forgotPasswordDelete()
  // }, [])

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <form
          action=""
          className="flex flex-col items-center justify-center md:p-[20px] sm:p-[2px] gap-[20px]   border-[1px] border-[#c9c8c8]"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
            forgotPasswordDelete(event)
          }
        >
          <div className="border-[1px] border-[#000] rounded-full p-[14px]">
            <BiLockAlt className="text-[65px]" />
          </div>
          <h4 className="text-[22px] font-[600]">Trouble logging in?</h4>
          <h3 className="max-w-[280px] text-[16px] font-[400] text-center">
            Enter your email, phone, or username and we'll send you a link to
            get back into your account.
          </h3>
          <TextField
            value={emailUser}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmailUser(event.target.value)
            }
            label="Email"
            type="email"
            variant="outlined"
            sx={{ width: `100%` }}
          />
          <Button
            type="submit"
            variant="contained"
            color="info"
            sx={{ width: `100%`, padding: `10px 0` }}
          >
            Send login link
          </Button>
          <div className="flex items-center justify-center gap-[20px]">
            <h1 className="pb-[15px]">_______________</h1>
            <h1 className="text-[15px] font-[400] text-[gray]">OR</h1>
            <h1 className="pb-[15px]">_______________</h1>
          </div>
          <Link to={`/signup`} className="text-[14px] text-[#000]">
            Create new account
          </Link>
        </form>

        <Link to={`/`}>
          <button className="w-[260px] p-[20px_0px] border-[1px] border-[#c9c8c8] sm:w-[280px] md:w-[321px] mt-[10px] text-[17px] font-[600]">
            Back to login
          </button>
        </Link>
      </div>
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
  );
};

export default ForgetPassword;
