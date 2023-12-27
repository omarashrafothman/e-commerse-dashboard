import React from "react";
import { Button } from "react-bootstrap";
import Button from "../components/Buttons/Button";
import TitleHeader from "@/components/titleHeader/TitleHeader";
export default function orders() {
  return (
    <div>
      <TitleHeader />
      <div className="main">
        <TitleHeader title={"Orders"} />
        <div className="orderBigWidget d-flex justify-content-between">
          <div className="orderBigWidgetText">
            <div>
              <h4>2</h4>
            </div>
            <div className="d-flex flex-column">
              <h3>Orders from suppliers have been found.</h3>
              <p>Save time by processing up to 1000 orders at once</p>
            </div>
          </div>
          <div>
            <Button>Order all products</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
