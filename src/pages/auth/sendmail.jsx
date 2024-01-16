import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import { useEffect } from "react";
import arrow from "../../assets/icons/arrow-left.png";
import Link from "next/link";
// edge  start
export const runtime = "edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end
export default function SendMail() {
  useEffect(() => {
    document.title = "Send Mail";
  }, []);
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
