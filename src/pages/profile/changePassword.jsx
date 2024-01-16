import React from "react";
import Input from "@/components/inputs/Input";
import ProfileLayout from "./layout";
// edge  start
export const runtime = "edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end

function ChangePassword() {
  return (
    <ProfileLayout>
      <div className="profileForm">
        <form>
          <div className="w-100 my-2 topInput">
            <div className="inputBox">
              <Input
                type={"password"}
                holder={""}
                name={"oldPassword"}
                label={"Old Password"}
                value={""}
                classes={"form-control"}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between my-2 changePassword">
            <div className="inputBox">
              <Input
                type={"password"}
                holder={""}
                name={"newPassword"}
                label={"New Password"}
                value={""}
                classes={"form-control"}
              />
            </div>
            <div className="inputBox ">
              <Input
                type={"password"}
                holder={""}
                name={"confirmNewPassword"}
                label={"Confirm new password"}
                value={""}
                classes={"form-control"}
              />
            </div>
          </div>

          <div className="d-flex justify-content-end align-items-center my-3 py-3 saveChangesBox">
            <div className="btnWithIcon  mx-1">
              <button className="btn">Cancel</button>
            </div>
            <div className="btnBox mx-1">
              <button className="btn">Save changes</button>
            </div>
          </div>
        </form>
      </div>
    </ProfileLayout>
  );
}

export default ChangePassword;
