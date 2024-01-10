import React from "react";
import Image from "next/image";
import cover from "../../assets/images/profileCover.png";
import profileImage from "../../assets/images/379858993_1077203513297084_7070056361759594293_n-removebg-preview (1).png";
import userPlus from "../../assets/icons/user-plus.png";
import Link from "next/link";
import Input from "@/components/inputs/Input";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const ProfileNavigation = [
    { name: "Personal info", to: "/profile" },
    { name: "Change password", to: "/profile/changePassword" },
    { name: "Plan", to: "/profile/plan" },
    { name: "Billing address", to: "/profile/billingAddress" },
    { name: "Billing history", to: "/profile/billingHistory" },
    { name: "Payment method", to: "/profile/paymentMethod" },
    { name: "Deactive account", to: "/profile/deactivateaccount" },
  ];
  const route = useRouter();

  const formik = useFormik({
    initialValues: { bio: [] },
  });

  return (
    <div className="main">
      <div className="container2">
        <div className="profileCover">
          <Image src={cover} />
        </div>
        <div className="profileImage">
          <Image src={profileImage} />
        </div>
        <div className="profileNameAndDataContainer justify-content-end">
          <div className="profileNameAndData d-flex justify-content-between">
            <div className="userAndEmail d-flex flex-column">
              <h3>Smiths Rhye</h3>
              <p>smiths@gmail.com</p>
            </div>
            <div className="d-flex viewProfile">
              <div className="btnWithIcon mx-1">
                <button className="btn">
                  <Image src={userPlus} />
                  Share
                </button>
              </div>
              <div className="btnBox mx-1">
                <button className="btn">View profile</button>
              </div>
            </div>
          </div>
        </div>
        <div className="infoWithForm d-flex">
          <div className="PersonalInfo">
            <ul>
              {ProfileNavigation.map((item) => {
                return (
                  <li key={item.name}>
                    <Link
                      href={item.to}
                      className={route.pathname === item.to ? "active" : ""}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {children}
        </div>

        {/** <div className="updateProfileAndBio d-flex justify-content-between"></div> */}
      </div>
    </div>
  );
};

export default Layout;