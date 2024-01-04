import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import Input from "@/components/inputs/Input";
import arrow from "../../assets/icons/arrow-left.png";
import Link from "next/link";
export default function ForgetPassword() {
  return (
    <div className="login">
      <div className="loginCaontainer">
        <div className="loginCaontainerLogo">
          <Image src={logo} />
        </div>
        <h3>Forgot password?</h3>
        <p className="forgetpassworddescription">
          All good. Enter your account’s email address and we’ll send you a link
          to reset your password.
        </p>
        <form className="loginForm">
          <Input
            type={"email"}
            holder={""}
            name={"email"}
            label={"Email address"}
          />

          <div className="submitBtn w-100 my-3">
            <button className={"btn w-100"}>Send reset link</button>
          </div>
        </form>
        <Link href="/auth/login">
          <Image src={arrow} />
          Return to log in
        </Link>
      </div>
    </div>
  );
}
ForgetPassword.getLayout = function pageLayout(page) {
  return <div>{page}</div>;
};
