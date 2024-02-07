import React from "react";
import Layout from "./layout";
import Image from "next/image";
import shopify from "../../assets/images/shopify.png";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Input from "../../components/inputs/Input";

function staff() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Layout>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        className="addStuffMember"
      >
        <div>
          <Offcanvas.Body>
            <div className="addStuffMemberHeading">
              <h4>Add staff member</h4>
              <p>
                Give your staff members access to your store by sending them and
                invitation.
              </p>
            </div>
            <Input
              label={"Email address"}
              holder={"olivia@gmail.com"}
              type={"email"}
              name={"email"}
              id={"email"}
              classes={"form-control"}
            />
            <br />

            <div className="generalContent">
              <div className="d-flex flex-column boxWithRadio">
                <div className="d-flex  radioBox">
                  <input type="radio" className="" />
                  <div className="d-flex flex-column">
                    <label>Full access</label>
                    <p>They will have full access but no admin rights.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="generalContent">
              <div className="d-flex flex-column boxWithRadio">
                <div className="d-flex  radioBox">
                  <input type="radio" className="" />
                  <div className="d-flex flex-column">
                    <label>Admin</label>
                    <p>They will have full access but no admin rights.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="generalContent">
              <div className="d-flex flex-column boxWithRadio">
                <div className="d-flex  radioBox">
                  <input type="radio" className="" />
                  <div className="d-flex flex-column">
                    <label>Limited access</label>
                    <p>Select pages they will have access to.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end  cancelAndInviteBox">
              <div className="deleteAndEdit d-flex align-items-center">
                <div className="btnWithIcon  mx-2">
                  <button className="btn" onClick={handleClose}>
                    Cancel
                  </button>
                </div>
                <div className="importsBtns">
                  <button className="editBtn btn" onClick={handleShow}>
                    invite
                  </button>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
      <div className="channelTabel">
        <div className="channelTabelHeading d-flex justify-content-between">
          <h4>Staff Members</h4>
          <div className="d-flex">
            <div className="selectBox ">
              <select class="form-select" aria-label="Default select example">
                <option value="1" selected>
                  More Actions
                </option>
                <option value="2">11 Hours</option>
                <option value="3">10 Hours</option>
              </select>
            </div>
            <div className="importsBtns">
              <button className="editBtn btn" onClick={handleShow}>
                Add staff
              </button>
            </div>
          </div>
        </div>
        <div className="tableBox">
          <table class=" channelTable">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Access Level</th>
                <th scope="col">Store</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="w-100">
                <td className=" ">
                  <div className="d-flex align-items-center settingTable">
                    <label class="control control-checkbox m-0 ">
                      <input type="checkbox" />
                      <div class="control_indicator"></div>
                    </label>
                    <label>
                      <Image src={shopify} htmlFor="productCheck" />
                    </label>
                  </div>
                </td>
                <td>Max Smith</td>
                <td>mygmail.com</td>

                <td className="accesstokenStatusSuccess">Limited</td>
                <td>Shopify</td>
                <td></td>
                <td></td>
                <td></td>

                <td className="">
                  <div className="billingAddressBoxStatus m-0">Active</div>
                </td>
              </tr>
              <tr className="w-100">
                <td className=" ">
                  <div className="d-flex align-items-center settingTable">
                    <label class="control control-checkbox m-0 ">
                      <input type="checkbox" />
                      <div class="control_indicator"></div>
                    </label>
                    <label>
                      <Image src={shopify} htmlFor="productCheck" />
                    </label>
                  </div>
                </td>
                <td>Max Smith</td>
                <td>mygmail.com</td>

                <td className="accesstokenStatusSuccess">Limited</td>
                <td>Shopify</td>
                <td></td>
                <td></td>
                <td></td>

                <td className="">
                  <div className="billingAddressBoxStatus m-0">Active</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default staff;
