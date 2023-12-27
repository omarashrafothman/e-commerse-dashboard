import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import Input from "../../components/inputs/Input";
import Button from "../../components/Buttons/Button";
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

  const [activeStepIndex, setActiveStepIndex] = useState(1);
  const isFirstStep = activeStepIndex === 1;
  const isLastStep = activeStepIndex >= steps.length;

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
            <a href="#">
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
            </a>
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
            Already have an account? <a href="#">Log in</a>
          </p>
        </div>
        {activeStepIndex === 1 ? (
          <div className="signUpContent">
            <h3>{steps[0].heading}</h3>
            <p>{steps[0].paragraph}</p>
            <form>
              <Input
                type={"email"}
                holder={"me@example.com"}
                name={"email"}
                label={"Email"}
              />
            </form>
          </div>
        ) : activeStepIndex === 2 ? (
          <div className="signUpContent">
            <h3>{steps[1].heading}</h3>
            <p>{steps[1].paragraph}</p>
          </div>
        ) : activeStepIndex === 3 ? (
          <div className="signUpContent">
            <h3>{steps[2].heading}</h3>
            <p>{steps[2].paragraph}</p>
          </div>
        ) : (
          <div></div>
        )}
        <div className="submitBtn">
          <Button content={"Continue"} classes={" btn w-100 "} />
        </div>
      </div>
    </div>
  );
}
