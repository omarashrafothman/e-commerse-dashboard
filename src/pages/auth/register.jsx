import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import Input from "../../components/inputs/Input";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "../../components/Buttons/Button";
import { object, string } from "yup";
import * as Yup from "yup";
import Link from "next/link";
import { useFormik } from "formik";
import { useEffect } from "react";
// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

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
            <svg
              className="logoSvg"
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="33"
              viewBox="0 0 45 33"
              fill="none"
            >
              <path
                d="M42.8928 14.6694C42.0727 14.0264 41.2133 13.4622 40.3276 12.9702L40.0652 5.97665H38.1298C35.2826 5.97665 32.4747 6.59334 29.9029 7.76768C29.1353 6.50805 28.1972 5.34684 27.095 4.31683C24.1034 1.53517 20.2065 0 16.1127 0C12.0255 0 8.12194 1.53517 5.1369 4.31683C2.16498 7.08538 0.354269 10.838 0.0459236 14.8727C0.0131209 15.2795 0 15.6994 0 16.1192C0 20.915 2.11905 25.4352 5.80607 28.5055C8.69271 30.9132 12.3535 32.2319 16.1192 32.2319C19.885 32.2319 23.5458 30.9067 26.4324 28.5055C29.7914 25.7107 31.8448 21.7219 32.186 17.4117C33.8524 18.5007 35.3088 19.8981 36.4766 21.5448L37.9265 23.5983L44.5264 15.9355L42.8928 14.6694Z"
                fill="white"
              />
              <path
                d="M30.2181 15.0308C29.6605 7.72234 23.5592 1.96875 16.1064 1.96875C8.65366 1.96875 2.55892 7.72234 2.00128 15.0308C1.97504 15.3916 1.96191 15.7524 1.96191 16.1198C1.96191 20.4891 3.9432 24.4058 7.05945 26.9972C9.51309 29.0441 12.6687 30.2709 16.113 30.2709C19.5573 30.2709 22.7129 29.0441 25.1665 26.9972C28.2828 24.3992 30.2641 20.4891 30.2641 16.1198C30.2641 15.7524 30.2509 15.3916 30.2181 15.0308Z"
                fill="#364049"
              />
              <path
                d="M28.9449 18.4162C28.9383 18.6786 28.9186 18.9476 28.8924 19.2166C28.5119 22.7133 26.3403 25.3507 24.031 25.1014C23.6111 25.0554 23.211 24.9177 22.8501 24.7012C22.7189 24.6028 22.5811 24.5044 22.4434 24.4125C22.4434 24.4125 22.4434 24.4125 22.4368 24.4059C20.6064 23.1726 18.4677 22.464 16.1912 22.464C13.9147 22.464 11.7891 23.166 9.95867 24.3994C9.81434 24.4978 9.67001 24.5962 9.52568 24.7012C9.16485 24.9111 8.77122 25.0489 8.3579 25.0948C6.05516 25.3441 3.87706 22.7133 3.49655 19.21C3.47686 19.0001 3.45718 18.7967 3.45062 18.5867C3.44406 18.4096 3.4375 18.239 3.4375 18.0685C3.44406 17.3074 4.02795 16.658 4.78897 16.6055C4.82177 16.6055 4.85458 16.6055 4.88738 16.6055C5.05139 16.6055 5.20228 16.6973 5.35318 16.7629C5.53031 16.8416 5.70745 16.9138 5.89114 16.986C7.72153 17.7208 9.73562 18.2587 11.8678 18.5736C13.2586 18.777 14.7085 18.8885 16.1912 18.8885C17.6739 18.8885 19.1172 18.7836 20.5146 18.5736C22.6271 18.2587 24.6215 17.7273 26.4387 17.0057C26.6093 16.9401 26.7733 16.8679 26.9439 16.8023C27.0292 16.7695 27.1079 16.7301 27.1932 16.6973C27.2719 16.6645 27.3638 16.6186 27.4556 16.6186C27.9805 16.6186 28.4397 16.881 28.7087 17.2878C28.8661 17.5239 28.9449 17.806 28.9449 18.0882C28.9514 18.1931 28.9514 18.3046 28.9449 18.4162Z"
                fill="white"
              />
              <path
                d="M27.2066 17.1758C26.3997 17.9434 24.7858 18.6257 23.1194 19.1767C21.932 19.5704 20.7248 19.8918 19.7539 20.128C18.6058 20.4101 17.7988 20.5676 17.7988 20.5676C18.4746 20.8628 19.1306 21.0203 19.767 21.0727C19.99 21.9322 20.7708 22.5685 21.6958 22.5685C22.798 22.5685 23.6902 21.6763 23.6902 20.5741C23.6902 20.4429 23.6771 20.3117 23.6508 20.1871C25.8158 19.0324 27.2066 17.1758 27.2066 17.1758Z"
                fill="#364049"
              />
              <path
                d="M5.20898 17.1758C6.01593 17.9434 7.62982 18.6257 9.2962 19.1767C10.4837 19.5704 11.6908 19.8918 12.6618 20.128C13.8098 20.4101 14.6168 20.5676 14.6168 20.5676C13.9411 20.8628 13.285 21.0203 12.6486 21.0727C12.4256 21.9322 11.6449 22.5685 10.7198 22.5685C9.61767 22.5685 8.72543 21.6763 8.72543 20.5741C8.72543 20.4429 8.73855 20.3117 8.76479 20.1871C6.59326 19.0324 5.20898 17.1758 5.20898 17.1758Z"
                fill="#364049"
              />
              <path
                d="M29.9032 12.9571C26.5114 15.7584 21.5844 17.5232 16.1064 17.5232C10.6283 17.5232 5.70137 15.7584 2.30957 12.9571C2.58511 11.75 3.01155 10.6084 3.57575 9.53906C6.88226 10.9233 11.3237 11.7631 16.1982 11.7631C21.0005 11.7631 25.3764 10.943 28.6698 9.59811C29.2209 10.6478 29.6342 11.7696 29.9032 12.9571Z"
                fill="#E20075"
              />
              <path
                d="M29.0566 10.4252C29.2928 10.9566 29.5028 11.5143 29.6733 12.0785C30.9986 11.7636 32.3828 11.593 33.8065 11.593C35.3679 11.593 36.8834 11.7964 38.3332 12.1769L38.1758 7.94535H38.1299C34.8102 7.93879 31.7137 8.84414 29.0566 10.4252Z"
                fill="#E20075"
              />
              <path
                d="M29.791 12.4852C29.9353 13.0232 30.0534 13.5808 30.1322 14.145C33.3468 15.4243 36.1022 17.6221 38.0704 20.4104L41.6787 16.2182C38.6609 13.8629 34.8689 12.459 30.7423 12.459C30.4274 12.459 30.1059 12.4655 29.791 12.4852Z"
                fill="#E20075"
              />
            </svg>
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
              <li>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    English (US)
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">English (US)</Dropdown.Item>
                    <Dropdown.Item href="#">Arabic (KSA)</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
            {isLastStep ? "Sign Up" : "Continue"}
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
