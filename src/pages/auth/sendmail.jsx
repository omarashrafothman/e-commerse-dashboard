import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import Input from "@/components/inputs/Input";
import arrow from "../../assets/icons/arrow-left.png";
import Link from "next/link";
export default function SendMail() {
  return (
    <div className="login">
      <div className="loginCaontainer">
        <div className="loginCaontainerLogo">
          <Image src={logo} />
        </div>
        <h3>Email on the way!</h3>
        <p className="forgetpassworddescription">
          We sent you password reset instructions. If it doesn’t show up soon,
          check your spam folder. We sent it from the email address
          no-reply@dsninja.com
        </p>

        <Link href="/auth/login">
          <Image src={arrow} />
          Return to log in
        </Link>
      </div>
    </div>
  );
}
SendMail.getLayout = function pageLayout(page) {
  return <div>{page}</div>;
};
