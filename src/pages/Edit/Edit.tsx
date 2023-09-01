import React from "react";
import myImage from "../../assets/My-profile-photo.jpg";

const Edit = () => {
  return (
    <div>
      <div>
        <div className="lg:ml-[330px] md:ml-[120px] pt-[50px] sm:ml-[10px]">
          <h1 className="text-[27px] ">Settings</h1>
          <div className="border-[1px] border-[#b9b9b9] p-[30px]">
            <h1 className="text-[30px] font-[500] ">Edit profile</h1>
            <form action="" className="flex flex-col justify-center mt-[20px]">
              <div className="flex items-center gap-[20px]">
                <img
                  src={myImage}
                  className="w-[40px] h-[40px] rounded-full"
                  alt=""
                />
                <div>
                  <h2>olim_yuldoshev_ooo3</h2>
                  <button>Change profile photo</button>
                </div>
              </div>
              <div>
                <label htmlFor="">Website</label>
                <div>
                  <input type="text" placeholder="Website" />
                  <p>
                    Editing your links is only available on mobile. Visit the
                    Instagram app and edit your profile to change the websites
                    in your bio.
                  </p>
                </div>
              </div>
              <div>
                <label htmlFor="">Bio</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div>
                <label htmlFor="">Gender</label>
                <div>
                  <input type="text" placeholder="Prefer not to say" />
                  <h4>This won't be part of your public profile.</h4>
                </div>
              </div>
              <div>
                <h3>Show account suggestions on profiles</h3>
                <div>
                  <input type="checkbox" name="" id="" />
                  <p>
                    Choose whether people can see similar account suggestions on
                    your profile, and whether your account can be suggested on
                    other profiles.[?]
                  </p>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
