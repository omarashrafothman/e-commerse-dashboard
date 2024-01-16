import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import Input from "@/components/inputs/Input";
import arrow from "../../assets/icons/arrow-left.png";
import Link from "next/link";
import { object, string } from "yup";
import { useEffect } from "react";
import { useFormik } from "formik";
export default function login() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",

      password: "",
    },
    onSubmit: {},
    initialErrors: {
      errrors: {},
    },
    validationSchema: object({
      email: string().required().email(),
      password: string().required(),
    }),
  });
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="login">
      <div className="loginCaontainer">
        <div className="loginCaontainerLogo">
          <Image src={logo} />
        </div>
        <h3>Log in to your account</h3>
        <form className="loginForm">
          <Input
            classes={
              formik.errors.email && formik.touched.email
                ? "form-control is-invalid"
                : "form-control "
            }
            type={"email"}
            holder={""}
            name={"email"}
            label={"Email"}
            value={formik.values.email}
            change={formik.handleChange}
            blur={formik.handleBlur}
            isInvalid={!!formik.errors.email && !!formik.touched.email}
            isValid={formik.touched.email && !formik.errors.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="text-danger mb-3 ">{formik.errors.email}</div>
          ) : null}
          <Input
            type={"password"}
            classes={
              formik.errors.password && formik.touched.password
                ? "form-control is-invalid"
                : "form-control "
            }
            holder={""}
            name={"password"}
            label={"Password"}
            value={formik.values.password}
            change={formik.handleChange}
            blur={formik.handleBlur}
            isInvalid={!!formik.errors.password && !!formik.touched.password}
            isValid={formik.touched.password && !formik.errors.password}
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="text-danger mb-3 ">{formik.errors.password}</div>
          ) : null}
          <div className="submitBtn w-100 my-3">
            <button className={"btn w-100"}>Sign in</button>
          </div>
        </form>
        <Link href="#">
          <Image src={arrow} />
          Back
        </Link>
        <p className="dontHave mb-1">
          Don’t have an account? <Link href="/auth/register">Sign up</Link>
        </p>
        <Link href="/auth/forgetpassword">Forget your password?</Link>
      </div>
    </div>
  );
}
login.getLayout = function pageLayout(page) {
  return <div>{page}</div>;
};
