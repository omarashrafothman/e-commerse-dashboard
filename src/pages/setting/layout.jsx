import React from "react";
import TitleHeader from "@/components/titleHeader/TitleHeader";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const route = useRouter();

  const settingNavigation = [
    { name: "General", to: "/setting" },
    { name: "Channels", to: "/setting/channel" },
    { name: "Suppliers", to: "/setting/Suppliers" },
    { name: "Shipping", to: "/setting/Shipping" },
    { name: "Pricing rules", to: "/setting/Pricingrule" },
    { name: "Notification", to: "/setting/Notification" },
    { name: "Staff", to: "/setting/Staff" },
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
