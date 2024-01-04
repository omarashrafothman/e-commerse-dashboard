import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import Input from "@/components/inputs/Input";
import arrow from "../../assets/icons/arrow-left.png";
import Link from "next/link";
export default function ResetPassword() {
  return (
    <div className="login">
      <div className="loginCaontainer">
        <div className="loginCaontainerLogo">
          <Image src={logo} />
        </div>
        <h3>Forgot password?</h3>
        <p className="forgetpassworddescription">
          Almost done. Enter your new password and you’re good to go
        </p>
        <form className="loginForm">
          <Input
            type={"password"}
            holder={""}
            name={"newPassword"}
            label={"New password"}
          />
        </form>
        <div className="regList">
          <ul className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column  leftList">
              <li>Lowercase characters.</li>
              <li>Numbers.</li>
            </div>
            <div className="d-flex flex-column rightList">
              <li>Uppercase characters.</li>
              <li>12 characters minimum.</li>
            </div>
          </ul>
        </div>
        <form className="loginForm">
          <Input
            type={"password"}
            holder={""}
            name={"confirmnewPassword"}
            label={"Confirom New password"}
          />
        </form>
        <div className="submitBtn w-100 my-3">
          <button className={"btn w-100"}>Reset</button>
        </div>
      </div>
    </div>
  );
}
ResetPassword.getLayout = function pageLayout(page) {
  return <div>{page}</div>;
};
