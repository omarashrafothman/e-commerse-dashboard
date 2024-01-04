import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import Input from "@/components/inputs/Input";
import arrow from "../../assets/icons/arrow-left.png";
import Link from "next/link";
export default function Success() {
  return (
    <div className="login">
      <div className="loginCaontainer">
        <div className="loginCaontainerLogo">
          <Image src={logo} />
        </div>
        <h3>Success!</h3>
        <p className="forgetpassworddescription">
          Your password has been updated and is secure. You now log in again.
        </p>

        <div className="submitBtn w-100 my-3">
          <button className={"btn w-100 "}>
            <Link href="/auth/login" sx={{ color: "#fff" }}>
              Return to log in
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
Success.getLayout = function pageLayout(page) {
  return <div>{page}</div>;
};