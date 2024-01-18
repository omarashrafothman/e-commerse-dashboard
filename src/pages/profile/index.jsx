import Image from "next/image";

import profileImage from "../../assets/images/webp/379858993_1077203513297084_7070056361759594293_n-removebg-preview (1).webp";

import Input from "@/components/inputs/Input";
import featureIcon from "../../assets/icons/Featured icon (1).png";
import Uploader from "@/components/uploader/Uploader";

import ProfileLayout from "./layout";

// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end
function index() {
  return (
    <ProfileLayout>
      <div className="d-flex flex-column w-100  align-items-center">
        <div className="profileForm w-100 ">
          <form className="w-100">
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
                  <div className="dragBoxContent"></div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-center my-2 py-3 saveChangesBox">
              <div className="btnWithIcon  mx-1">
                <button className="btn ">Cancel</button>
              </div>
              <div className="btnBox mx-1">
                <button className="btn">View profile</button>
              </div>
            </div>
          </form>
        </div>
        <div className="profileForm w-100">
          <form></form>
        </div>
      </div>
    </ProfileLayout>
  );
}

export default index;
