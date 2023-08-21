import imgLogin from "/src/assets/photo_2023-08-19_13-32-59.jpg";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "../../App.css";

//For images
import logoInstaSignIn from "../../assets/LOGO (1).png";
import logoAppStore from "../../assets/image 4.png";
import logoGooglePlay from "../../assets/image 5.png";

const SignIn = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center p-[20px_0]">
        <div className="block_1 sm:hidden md:block">
          <img src={imgLogin} alt="" className="max-w-[350px]" />
        </div>
        <div className="block_2">
          <div className="flex flex-col justify-center items-center gap-[20px] md:border-[1px] md:border-[#cecece] md:p-[25px_41px] sm:p-[5px] sm:w-[100%]">
            <img src={logoInstaSignIn} alt="" />
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
              label="Phone, username or email adress"
              variant="filled"
            />
            <TextField
              id="outlined-basic"
              label="Password"
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
            />

            <Link to={`/home`}>
              <button className="bg-[#307de2] text-[#fff] text-[15px] p-[10px] w-[280px] rounded-[10px]">
                Sign in
              </button>
            </Link>
            <div className="flex items-center justify-center gap-[20px]">
              <h1 className="pb-[15px]">_______________</h1>
              <h1 className="text-[15px] font-[400] text-[gray]">OR</h1>
              <h1 className="pb-[15px]">_______________</h1>
            </div>
            <Link to={""} className="text-[17px] text-[#2356a1] font-[700]">
              Login with Facebook
            </Link>
            <Link to={``} className="text-[13px]">
              Forgot your password
            </Link>
          </div>
          <div className="mt-[8px] md:border-[1px] md:border-[#cecece] p-[25px_41px]">
            <h1 className="text-center text-[15px]">
              Don't have an account yet?{" "}
              <Link to={`/signup`} className="text-[#276fcd]">
                Sign up
              </Link>
            </h1>
          </div>
          <h4 className="text-center mt-[10px] text-[16px] font-[400]">
            Install the app.
          </h4>
          <div className="flex justify-center gap-[6px] mt-[10px]">
            <Link to={``}>
              <img src={logoAppStore} alt="" />
            </Link>
            <Link to={``}>
              <img src={logoGooglePlay} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer w-[90%] m-auto mt-[50px]">
        <ul className="flex  flex-wrap gap-5 justify-center">
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
          <ul>
            <li className="text-[13px] font-[400] opacity-80">
              <Link to={``}>© 2023 Instagram from Meta</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
