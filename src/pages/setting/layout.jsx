import TitleHeader from "@/components/titleHeader/TitleHeader";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Layout = ({ children }) => {
  const route = useRouter();
  useEffect(() => {
    document.title = "Settings";
  }, []);

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
      to: "/setting/pricingrules",
      nestedPath: "/setting/Pricingrule/*",
    },
    {
      name: "Notification",
      to: "/setting/notification",
      nestedPath: "/setting/Notification/*",
    },
    { name: "Staff", to: "/setting/staff", nestedPath: "/setting/Staff/*" },
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
