import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import Input from "@/components/inputs/Input";
import arrow from "../../assets/icons/arrow-left.png";
import Link from "next/link";
import { object, string } from "yup";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
export default function ForgetPassword() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
    },
    onSubmit: {},
    initialErrors: {
      errrors: {},
    },
    validationSchema: object({
      email: string().required().email(),
    }),
  });
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
            classes={
              formik.errors.email && formik.touched.email
                ? "form-control is-invalid"
                : "form-control "
            }
            holder={""}
            name={"email"}
            label={"Email address"}
            value={formik.values.email}
            change={formik.handleChange}
            blur={formik.handleBlur}
            isInvalid={!!formik.errors.email && !!formik.touched.email}
            isValid={formik.touched.email && !formik.errors.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="text-danger mb-3 ">{formik.errors.email}</div>
          ) : null}
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
