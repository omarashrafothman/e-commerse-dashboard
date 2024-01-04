import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import Input from "@/components/inputs/Input";
import arrow from "../../assets/icons/arrow-left.png";
import Link from "next/link";
import { object, string } from "yup";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
export default function ResetPassword() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      newPassword: "",
      confirmnewPassword: "",
    },
    onSubmit: {},
    initialErrors: {
      errrors: {},
    },
    validationSchema: object({
      newPassword: string().required("New password is requierd field").min(8),
      confirmnewPassword: string()
        .required("confirm password must match new password")
        .min(8)
        .oneOf(
          [Yup.ref("newPassword"), null],
          "confirm password must match password"
        ),
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
          Almost done. Enter your new password and you’re good to go
        </p>
        <form className="loginForm">
          <Input
            type={"password"}
            holder={""}
            classes={
              formik.errors.newPassword && formik.touched.newPassword
                ? "form-control is-invalid"
                : "form-control "
            }
            name={"newPassword"}
            label={"New password"}
            value={formik.values.newPassword}
            change={formik.handleChange}
            blur={formik.handleBlur}
            isInvalid={
              !!formik.errors.newPassword && !!formik.touched.newPassword
            }
            isValid={formik.touched.newPassword && !formik.errors.newPassword}
          />
          {formik.errors.newPassword && formik.touched.newPassword ? (
            <div className="text-danger mb-3 ">{formik.errors.newPassword}</div>
          ) : null}
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
            classes={
              formik.errors.confirmnewPassword &&
              formik.touched.confirmnewPassword
                ? "form-control is-invalid"
                : "form-control "
            }
            name={"confirmnewPassword"}
            label={"Confirom New password"}
            value={formik.values.confirmnewPassword}
            change={formik.handleChange}
            blur={formik.handleBlur}
            isInvalid={
              !!formik.errors.confirmnewPassword &&
              !!formik.touched.confirmnewPassword
            }
            isValid={
              formik.touched.confirmnewPassword &&
              !formik.errors.confirmnewPassword
            }
          />
          {formik.errors.confirmnewPassword &&
          formik.touched.confirmnewPassword ? (
            <div className="text-danger mb-3 ">
              {formik.errors.confirmnewPassword}
            </div>
          ) : null}
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
