import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import dashboard from "../../assets/icons/Dashboard.png";
import imports from "../../assets/icons/Imports.png";
import orders from "../../assets/icons/Orders.png";
import products from "../../assets/icons/Products.png";
import tracking from "../../assets/icons/Group.png";
import Link from "next/link";

import { useRouter } from "next/router";

function AccordionSideBar() {
  const navigation = [
    { name: "dashboard", to: "/dashboard", imageSrc: dashboard },
    { name: "orders", to: "/orders", imageSrc: orders },
    { name: "tracking", to: "/tracking", imageSrc: tracking },
    { name: "imports", to: "/imports", imageSrc: imports },
    { name: "products", to: "/products", imageSrc: products },
  ];

  const route = useRouter();

  const [isActive, setIsactive] = useState(false);
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>All Stores</Accordion.Header>
          <Accordion.Body>
            <ul className="AccordionSideBarList">
              {navigation.map((item) => {
                return (
                  <Link href={item.to} key={item.name}>
                    <li
                      className={
                        route.pathname.split("/")[1] === item.name
                          ? "AccordionSideBarListItem active"
                          : "AccordionSideBarListItem"
                      }
                    >
                      <Image src={item.imageSrc} />
                      <p className={route.pathname === item.to ? "active" : ""}>
                        {item.name}
                      </p>
                    </li>
                  </Link>
                );
              })}

              {/* 
            
              {navigation.map((item) => (
              <NavLink key={item.name} href={item.to}>
                <li className="AccordionSideBarListItem">
                  <Image src={item.imageSrc} />
                  <p>{item.name}</p>
                </li>
              </NavLink>
            ))}
            
            
            */}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
export default AccordionSideBar;
