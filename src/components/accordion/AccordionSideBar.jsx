import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import dashboard from "../../assets/icons/Dashboard.png";
import imports from "../../assets/icons/Imports.png";
import orders from "../../assets/icons/Orders.png";
import products from "../../assets/icons/Products.png";
import tracking from "../../assets/icons/Group.png";
import Link from "next/link";
import { NavLink } from "react-bootstrap";

function AccordionSideBar() {
  const navigation = [
    { name: "dashboard", to: "/dashboard", imageSrc: { dashboard } },
    { name: "orders", to: "/orders", imageSrc: { orders } },
    { name: "tracking", to: "/tracking", imageSrc: { tracking } },
    { name: "imports", to: "/imports", imageSrc: { imports } },
    { name: "products", to: "/products", imageSrc: { products } },
  ];

  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>All Stores</Accordion.Header>
          <Accordion.Body>
            <ul className="AccordionSideBarList">
              <Link href="/dashboard">
                <li className="AccordionSideBarListItem">
                  <Image src={dashboard} />
                  <p>dashboard</p>
                </li>
              </Link>
              <Link href="/orders">
                <li className="AccordionSideBarListItem">
                  <Image src={orders} />
                  <p>Orders</p>
                </li>
              </Link>
              <Link href="/tracking">
                <li className="AccordionSideBarListItem">
                  <Image src={tracking} />
                  <p>Tracking</p>
                </li>
              </Link>
              <Link href="/imports">
                <li className="AccordionSideBarListItem">
                  <Image src={imports} />
                  <p>Imports</p>
                </li>
              </Link>
              <Link href="/products">
                <li className="AccordionSideBarListItem">
                  <Image src={products} />
                  <p>Products</p>
                </li>
              </Link>
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
