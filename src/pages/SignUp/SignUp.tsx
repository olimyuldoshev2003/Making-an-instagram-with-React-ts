


//For images
import { Link } from "react-router-dom";
import logoInstaSignUp from "../../assets/LOGO (1).png";
import logoAppStore from "../../assets/image 4.png";
import logoGooglePlay from "../../assets/image 5.png";
import { TextField } from "@mui/material";
import googleIcon from "../../assets/google.png"

const SignUp = () => {
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
              label="Mobile number or Email"
              variant="filled"
              type="email"
            />
            <TextField
              id="outlined-basic"
              label="Full name"
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
              label="Username"
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
}

export default SignUp;