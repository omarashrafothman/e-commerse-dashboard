import React from "react";
import TitleHeader from "@/components/titleHeader/TitleHeader";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const route = useRouter();

  const settingNavigation = [
    { name: "General", to: "/setting", nestedPath: "/setting/*" },
    {
      name: "Channels",
      to: "/setting/channels",
      nestedPath: "/setting/channels/*",
    },
    {
      name: "Suppliers",
      to: "/setting/suppliers",
      nestedPath: "/setting/suppliers/suppliersetting",
    },
    {
      name: "Shipping",
      to: "/setting/shipping",
      nestedPath: "/setting/Shipping/*",
    },
    {
      name: "Pricing rules",
      to: "/setting/Pricingrule",
      nestedPath: "/setting/Pricingrule/*",
    },
    {
      name: "Notification",
      to: "/setting/Notification",
      nestedPath: "/setting/Notification/*",
    },
    { name: "Staff", to: "/setting/Staff", nestedPath: "/setting/Staff/*" },
  ];

  return (
    <div className="main">
      <div className="container3">
        <TitleHeader title={"Setting"} />
        <div className="container1">
          <div className="settingContent">
            <nav className="settingNav">
              <ul>
                {settingNavigation.map((item) => (
                  <li>
                    <Link
                      href={item.to}
                      className={route.pathname === item.to ? "active" : ""}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
