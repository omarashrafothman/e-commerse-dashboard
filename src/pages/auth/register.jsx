import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import Input from "../../components/inputs/Input";
import Button from "../../components/Buttons/Button";
import { object, string } from "yup";
import * as Yup from "yup";
import Link from "next/link";
import { useFormik } from "formik";
import { useEffect } from "react";
// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end
export default function signup() {
  const steps = [
    {
      heading: "Get started with DS Ninja",
      paragraph:
        "Join thousands of ecommerce enterprenurs achieving dropshipping success",
      id: 1,
    },
    {
      heading: "Get started with DS Ninja",
      paragraph:
        "Join thousands of ecommerce enterprenurs achieving dropshipping success",
      id: 2,
    },
    {
      heading: "Get started with DS Ninja",
      paragraph:
        "Join thousands of ecommerce enterprenurs achieving dropshipping success",
      id: 3,
    },
  ];
  useEffect(() => {
    document.title = "Register";
  }, []);

  const [activeStepIndex, setActiveStepIndex] = useState(1);
  const isFirstStep = activeStepIndex === 1;
  const isLastStep = activeStepIndex >= steps.length;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      legalName: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: {},
    initialErrors: {
      errrors: {},
    },
    validationSchema: object({
      ...(activeStepIndex === 1
        ? {
            email: string().required().email(),
          }
        : {}),
      ...(activeStepIndex === 2
        ? {
            legalName: string().required(),
          }
        : {}),
      ...(activeStepIndex === 3
        ? {
            password: string().required().min(8),
            confirmPassword: string()
              .required()
              .min(8)
              .oneOf(
                [Yup.ref("password"), null],
                "confirm password must match password"
              ),
          }
        : {}),
    }),
  });
  return (
    <div className="signup d-flex">
      <div className="signUpLeft">
        <div className="d-flex flex-column justify-content-between">
          <div>
            <Image src={logo} />
            <h3>Sign up and come on in.</h3>
            <p>
              The Ultimate Dropshipping Solution: Empowering Your Success with
              DS Ninja!
            </p>
            <Link href="/dashboard">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M15.8337 10.2318H4.16699M4.16699 10.2318L10.0003 16.0651M4.16699 10.2318L10.0003 4.39844"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Return to dsninja.com
            </Link>
          </div>
          <div className="TermsAndConditionsList">
            <ul>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="signUpRight">
        <div className="topLink d-flex justify-content-end">
          <p>
            Already have an account? <Link href="/auth/login">Log in</Link>
          </p>
        </div>
        {activeStepIndex === 1 ? (
          <div className="signUpContent">
            <h3>{steps[0].heading}</h3>
            <p>{steps[0].paragraph}</p>
            <form>
              <Input
                classes={
                  formik.errors.email && formik.touched.email
                    ? "form-control is-invalid"
                    : "form-control "
                }
                type={"email"}
                holder={"me@example.com"}
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
            </form>
          </div>
        ) : activeStepIndex === 2 ? (
          <div className="signUpContent">
            <h3>{steps[1].heading}</h3>
            <p>{steps[1].paragraph}</p>
            <form>
              <Input
                type={"text"}
                classes={
                  formik.errors.legalName && formik.touched.legalName
                    ? "form-control is-invalid"
                    : "form-control "
                }
                holder={"John Son"}
                name={"legalName"}
                label={"Full legal name"}
                value={formik.values.legalName}
                change={formik.handleChange}
                blur={formik.handleBlur}
                isInvalid={
                  !!formik.errors.legalName && !!formik.touched.legalName
                }
                isValid={formik.touched.legalName && !formik.errors.legalName}
              />
              {formik.errors.legalName && formik.touched.legalName ? (
                <div className="text-danger mb-3 ">
                  {formik.errors.legalName}
                </div>
              ) : null}
            </form>
          </div>
        ) : activeStepIndex === 3 ? (
          <div className="signUpContent">
            <h3>{steps[2].heading}</h3>
            <p>{steps[2].paragraph}</p>
            <form>
              <Input
                type={"password"}
                classes={
                  formik.errors.password && formik.touched.password
                    ? "form-control is-invalid"
                    : "form-control"
                }
                holder={""}
                name={"password"}
                label={"Create Password"}
                value={formik.values.password}
                change={formik.handleChange}
                blur={formik.handleBlur}
                isInvalid={
                  !!formik.errors.password && !!formik.touched.password
                }
                isValid={formik.touched.password && !formik.errors.password}
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="text-danger mb-3 ">
                  {formik.errors.password}
                </div>
              ) : null}
              <Input
                classes={
                  formik.errors.confirmPassword &&
                  formik.touched.confirmPassword
                    ? "form-control is-invalid"
                    : "form-control "
                }
                type={"password"}
                holder={""}
                name={"confirmPassword"}
                label={"Return Password"}
                value={formik.values.confirmPassword}
                change={formik.handleChange}
                blur={formik.handleBlur}
                isInvalid={
                  !!formik.errors.confirmPassword &&
                  !!formik.touched.confirmPassword
                }
                isValid={
                  formik.touched.confirmPassword &&
                  !formik.errors.confirmPassword
                }
              />
              {formik.errors.confirmPassword &&
              formik.touched.confirmPassword ? (
                <div className="text-danger mb-3 ">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </form>
          </div>
        ) : (
          <div></div>
        )}
        <div className="submitBtn">
          <button
            className={"btn w-100"}
            type={isLastStep ? "submit" : "button"}
            onClick={
              !isLastStep
                ? () => setActiveStepIndex((prev) => prev + 1)
                : undefined
            }
          >
            {isLastStep ? "Signup" : "Continue"}
          </button>
        </div>
        <div className="termsAndConditionBox">
          <p>
            This site is protected by reCAPTCHA and the Google
            <Link href="#">Privacy Policy </Link> and
            <Link href="#">Terms of Service</Link>
            apply.
          </p>
        </div>
      </div>
    </div>
  );
}
signup.getLayout = function pageLayout(page) {
  return <div>{page}</div>;
};
