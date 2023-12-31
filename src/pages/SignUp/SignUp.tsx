//For images
import { Link, useNavigate } from "react-router-dom";
import logoInstaSignUp from "../../assets/LOGO (1).png";
import logoAppStore from "../../assets/image 4.png";
import logoGooglePlay from "../../assets/image 5.png";
import { TextField } from "@mui/material";
import googleIcon from "../../assets/google.png";
import { message } from "antd";
import { useState } from "react";
import { axiosRequest } from "../../utils/axiosRequest";

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPasword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const navigate = useNavigate();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const user = {
      userName: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    try {
      const { data } = await axiosRequest.post("/Account/register", user);
      if (
        data.statusCode === 200
        // &&
        // data.data !== "Your username or password is incorrect!!!"
      ) {
        navigate("/");
      }
      // else {
      //   message.error("Wrong password or login !");
      // }
    } catch (error) {}
  }

  return (
    <div>
      <div className="signUp flex justify-center items-center flex-col py-[20px]">
        <div className="flex flex-col justify-center items-center gap-[20px] md:border-[1px] md:border-[#cecece] md:p-[25px_41px] sm:p-[5px] sm:w-[100%] md:w-[350px]">
          <img src={logoInstaSignUp} alt="" />
          <h3 className="text-center text-[16px] text-[gray]">
            Sign up to see photos and videos of your friends.
          </h3>
          <Link
            to={""}
            className="text-[17px] text-[#2356a1] font-[700] outline-none"
          >
            Continue with Facebook
          </Link>
          <Link
            to={`https://myaccount.google.com/`}
            className="bg-[#e4e4e4] text-[#000] text-[15px] p-[10px] w-[280px] rounded-[10px] outline-none font-[700] flex items-center justify-evenly"
          >
            <img src={googleIcon} alt="" />
            Continue with google
          </Link>
          <div className="flex items-center justify-center gap-[20px]">
            <h1 className="pb-[15px]">_______________</h1>
            <h1 className="text-[15px] font-[400] text-[gray]">OR</h1>
            <h1 className="pb-[15px]">_______________</h1>
          </div>
          <form
            action=""
            className="flex flex-col justify-center items-center gap-[20px]   sm:w-[100%] md:w-[350px]"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
              onSubmit(event)
            }
          >
            <TextField
              InputProps={{
                style: {
                  color: "black",
                  width: `280px`,
                  height: `50px`,
                  border: `none`,
                },
              }}
              InputLabelProps={{
                style: {
                  color: "gray",
                  fontSize: `14px`,
                },
              }}
              id="outlined-basic"
              label="Full name"
              variant="filled"
              type="text"
              value={name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setName(event.target.value)
              }
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="filled"
              InputProps={{
                style: {
                  color: "black",
                  width: `280px`,
                  height: `50px`,
                  border: `none`,
                },
              }}
              InputLabelProps={{
                style: {
                  color: "gray",
                  fontSize: `14px`,
                },
              }}
              type="email"
              value={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
            <TextField
              type="password"
              InputProps={{
                style: {
                  color: "black",
                  width: `280px`,
                  height: `50px`,
                  border: `none`,
                },
              }}
              InputLabelProps={{
                style: {
                  color: "gray",
                  fontSize: `14px`,
                },
              }}
              id="outlined-basic"
              variant="filled"
              label="Password"
              value={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPasword(event.target.value)
              }
            />
            <TextField
              id="outlined-basic"
              label="Confirm password"
              type="password"
              variant="filled"
              InputProps={{
                style: {
                  color: "black",
                  width: `280px`,
                  height: `50px`,
                  border: `none`,
                },
              }}
              InputLabelProps={{
                style: {
                  color: "gray",
                  fontSize: `14px`,
                },
              }}
              value={confirmPassword}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(event.target.value)
              }
            />

            <button
              type="submit"
              className="bg-[#307de2] text-[#fff] text-[15px] p-[10px] w-[280px] rounded-[10px]"
            >
              Sign up
            </button>
          </form>
          <p className="text-[14px] text-[gray] text-center">
            People who use our service may have uploaded your contact
            information to Instagram. <Link to={``}>Learn more</Link>
          </p>
          <p className="text-[14px] text-[gray] text-center">
            By signing up, you agree to our Terms, Data Policy and Cookies
            Policy.
          </p>
        </div>
        <div className="mt-[8px] md:border-[1px] md:border-[#cecece] p-[25px_41px] md:w-[350px]">
          <h1 className="text-center text-[15px]">
            Have an account?{" "}
            <Link to={`/`} className="text-[#276fcd]">
              Sign in
            </Link>
          </h1>
        </div>
        <h4 className="text-center mt-[10px] text-[16px] font-[400] md:w-[350px]">
          Get the app.
        </h4>
        <div className="flex justify-center gap-[6px] mt-[10px] md:w-[350px]">
          <Link to={``}>
            <img src={logoAppStore} alt="" />
          </Link>
          <Link to={``}>
            <img src={logoGooglePlay} alt="" />
          </Link>
        </div>
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

export default SignUp;
