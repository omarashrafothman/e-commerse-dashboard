import React from "react";
import TitleHeader from "@/components/titleHeader/TitleHeader";
import Image from "next/image";
import cover from "../../assets/images/profileCover.png";
import profileImage from "../../assets/images/379858993_1077203513297084_7070056361759594293_n-removebg-preview (1).png";
import userPlus from "../../assets/icons/user-plus.png";
import Link from "next/link";
import Input from "@/components/inputs/Input";
import InputWithIcon from "@/components/inputs/InputWithIcon";
import emailIcon from "../../assets/icons/mail (1).png";
import featureIcon from "../../assets/icons/Featured icon (1).png";
import Uploader from "@/components/uploader/Uploader";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { Changa_One } from "next/font/google";
import ChangePassword from "./changePassword";
import ProfileLayout from "./layout";

function index() {
  return (
    <ProfileLayout>
      <div className="profileForm">
        <form>
          <div className="nameInputs d-flex align-items-center justify-content-between w-100">
            <div className="inputBox">
              <Input
                type={"text"}
                holder={""}
                name={"firstName"}
                label={"First name"}
                value={"Smiths"}
                classes={"form-control"}
              />
            </div>
            <div className="inputBox">
              <Input
                type={"text"}
                holder={""}
                name={"lasttName"}
                label={"Last name"}
                value={"Rhye"}
                classes={"form-control"}
              />
            </div>
          </div>
          <div>
            <div className="w-100">
              <Input
                type={"email"}
                holder={""}
                name={"email"}
                label={"Email"}
                value={"olivia@untitledui.com"}
                classes={"form-control"}
              />
            </div>
          </div>
          <div className="uploadImageBox">
            <div className="imageBoxBeforUpdate">
              <Image src={profileImage} />
            </div>
            <div className="dragBox d-flex flex-column align-items-center py-3">
              <Image src={featureIcon} />
              <div className="dragBoxTextContent">
                <Uploader />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center my-2 py-3 saveChangesBox">
            <div className="btnWithIcon  mx-1">
              <button className="btn">Cancel</button>
            </div>
            <div className="btnBox mx-1">
              <button className="btn">View profile</button>
            </div>
          </div>
        </form>
      </div>
    </ProfileLayout>
  );
}

export default index;
