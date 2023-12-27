import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import dashboard from "../../assets/images/Dashboard.png";
import imports from "../../assets/images/Imports.png";
import orders from "../../assets/images/Orders.png";
import products from "../../assets/images/Products.png";
import tracking from "../../assets/images/Group.png";

function AccordionSideBar() {
  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>All Stores</Accordion.Header>
          <ul className="AccordionSideBarList">
            <a href="#">
              <li className="AccordionSideBarListItem">
                <Image src={dashboard} />
                <p>dashboard</p>
              </li>
            </a>
            <a href="#">
              <li className="AccordionSideBarListItem">
                <Image src={orders} />
                <p>Orders</p>
              </li>
            </a>
            <a href="#">
              <li className="AccordionSideBarListItem">
                <Image src={tracking} />
                <p>Tracking</p>
              </li>
            </a>
            <a href="#">
              <li className="AccordionSideBarListItem">
                <Image src={imports} />
                <p>Imports</p>
              </li>
            </a>
            <a href="#">
              <li className="AccordionSideBarListItem">
                <Image src={products} />
                <p>Products</p>
              </li>
            </a>
          </ul>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
export default AccordionSideBar;
