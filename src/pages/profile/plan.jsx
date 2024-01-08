import React from "react";
import ProfileLayout from "./layout";
import Image from "next/image";
import checkIcon from "../../assets/icons/Icon.png";
function Plan() {
  return (
    <ProfileLayout>
      <div className="profileForm">
        <div className="upgradePlanTitle">
          <h4>Upgrade plan</h4>
          <p>
            Your current plan is<span> Startup</span>
          </p>
        </div>
        <div className="upgradePlanTitle">
          <h4>Active until Dec 09, 2023</h4>
          <p>We will send you a notification upon Subscription expiration</p>

          <div className="leftRightBtnBox">
            <button className="leftBtn">Monthly</button>
            <button className="rightBtn">Annual</button>
          </div>
        </div>
        <div className="plansOptions">
          <div className="planBox">
            <div className="planBoxHeader">
              <h5>Startup</h5>
              <p>Best for startups</p>
            </div>
            <div className="planBoxPrice">
              <p>
                <span>$39 </span>/ Month
              </p>
            </div>
            <div className="planBoxFeatures">
              <div className="option d-flex align-items-center">
                <div className="checkbox">
                  <Image src={checkIcon} />
                </div>
                <p>Up to 10 Active Users</p>
              </div>
              <div className="option d-flex align-items-center">
                <div className="checkbox">
                  <Image src={checkIcon} />
                </div>
                <p>Up to 10 Active Users</p>
              </div>
              <div className="option d-flex align-items-center">
                <div className="checkbox">
                  <Image src={checkIcon} />
                </div>
                <p>Up to 10 Active Users</p>
              </div>
              <div className="option d-flex align-items-center">
                <div className="checkbox">
                  <Image src={checkIcon} />
                </div>
                <p>Up to 10 Active Users</p>
              </div>
              <div className="option d-flex align-items-center">
                <div className="checkbox">
                  <Image src={checkIcon} />
                </div>
                <p>Up to 10 Active Users</p>
              </div>
            </div>
            <div className="upgradeBtn">
              <button className="btn current">Current plan</button>
            </div>
          </div>
          <div className="planBox">
            <div className="planBoxHeader">
              <h5>Advanced</h5>
              <p>Best for 100+ team</p>
            </div>
            <div className="planBoxPrice">
              <p>
                <span>$299</span> / Month
              </p>
            </div>
            <div className="planBoxFeatures">
              <div className="option d-flex align-items-center">
                <div className="checkbox">
                  <Image src={checkIcon} />
                </div>
                <p>Up to 10 Active Users</p>
              </div>
              <div className="option d-flex align-items-center">
                <div className="checkbox">
                  <Image src={checkIcon} />
                </div>
                <p>Up to 10 Active Users</p>
              </div>
              <div className="option d-flex align-items-center">
                <div className="checkbox">
                  <Image src={checkIcon} />
                </div>
                <p>Up to 10 Active Users</p>
              </div>
              <div className="option d-flex align-items-center">
                <div className="checkbox">
                  <Image src={checkIcon} />
                </div>
                <p>Up to 10 Active Users</p>
              </div>
              <div className="option d-flex align-items-center">
                <div className="checkbox">
                  <Image src={checkIcon} />
                </div>
                <p>Up to 10 Active Users</p>
              </div>
            </div>
            <div className="upgradeBtn">
              <button className="btn upgrade">Upgrade plan</button>
            </div>
          </div>
          <div className="planBox">
            <div className="planBoxHeader">
              <h5>Enterprise</h5>
              <p>Best value for 1000+ team</p>
            </div>
            <div className="planBoxPrice">
              <p>
                <span>$599</span> / Month
              </p>
            </div>
            <div className="planBoxFeatures">
              <div className="option d-flex align-items-center">
                <div className="checkbox">
                  <Image src={checkIcon} />
                </div>
                <p>Up to 10 Active Users</p>
              </div>
              <div className="option d-flex align-items-center">
                <div className="checkbox">
                  <Image src={checkIcon} />
                </div>
                <p>Up to 10 Active Users</p>
              </div>
              <div className="option d-flex align-items-center">
                <div className="checkbox">
                  <Image src={checkIcon} />
                </div>
                <p>Up to 10 Active Users</p>
              </div>
              <div className="option d-flex align-items-center">
                <div className="checkbox">
                  <Image src={checkIcon} />
                </div>
                <p>Up to 10 Active Users</p>
              </div>
              <div className="option d-flex align-items-center">
                <div className="checkbox">
                  <Image src={checkIcon} />
                </div>
                <p>Up to 10 Active Users</p>
              </div>
            </div>
            <div className="upgradeBtn">
              <button className="btn upgrade">Upgrade plan</button>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}

export default Plan;
