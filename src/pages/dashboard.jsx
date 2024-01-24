import Widget from "@/components/widget/Widget";
import increase from "../assets/images/webp/Group 233 1.webp";
import decrease from "../assets/images/webp/Group 42.webp";
import TitleHeader from "@/components/titleHeader/TitleHeader";
import Example from "@/components/charts/DashboardChart";
import Input from "@/components/inputs/Input";
import { useEffect } from "react";
import Image from "next/image";
import recta from "../assets/images/product.png";
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}

export default function dashboard() {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div className="main grayBgColor">
      <div className="container3">
        <TitleHeader title={"Dashboard"} />
        <div className="container1">
          <div className="d-flex widgetBoxContainer align-items-center justify-content-between flex-wrap">
            <Widget
              status={"increase"}
              forWhat={"Subscribes"}
              num={"486"}
              source={increase}
              percentage={"+10%"}
            />
            <Widget
              status={"increase"}
              forWhat={"Retention"}
              num={"65%"}
              source={increase}
              percentage={"+12%"}
            />
            <Widget
              status={"decrease"}
              forWhat={"Subscription"}
              num={"256 Days"}
              source={decrease}
              percentage={"-5%"}
            />
            <Widget
              status={"decrease"}
              forWhat={"Per User"}
              num={"$561.16"}
              source={decrease}
              percentage={"-1%"}
            />
          </div>

          <div className="tablesContainer">
            <div className="chartNameAndFilter d-flex align-items-center justify-content-between mb-4">
              <div>
                <h5>New Signups</h5>
              </div>
              <div>
                <select className="form-select dashSelect">
                  <option value="1" selected>
                    30 Days
                  </option>
                  <option value="2">30 - 60 Days</option>
                  <option value="3">All Time</option>
                </select>
              </div>
            </div>
            <Example />
          </div>
          <br />
          <div className="tablesContainer">
            <div className="">
              <h3 className="mb-3">Top Items</h3>
              <div className="searchBox  w-100">
                <span className="searchSvgIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M17.7637 17.5L14.1387 13.875M16.097 9.16667C16.097 12.8486 13.1122 15.8333 9.43034 15.8333C5.74844 15.8333 2.76367 12.8486 2.76367 9.16667C2.76367 5.48477 5.74844 2.5 9.43034 2.5C13.1122 2.5 16.097 5.48477 16.097 9.16667Z"
                      stroke="#667085"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <div class="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for items"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                </div>
              </div>
              <div className="topItems d-flex flex-column">
                <div className="topItem d-flex align-items-center justify-content-between ">
                  <div className="d-flex align-items-center">
                    <div className="itemImageBox">
                      <Image src={recta} alt="item" />
                    </div>
                    <p>Joint Support Knee Pads</p>
                  </div>
                  <div className="d-flex align-items-center itemRightSide">
                    <div>
                      <p className="m-0">5 Pieces</p>
                    </div>
                    <div>
                      <p className="m-0">73.84 USD</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="8"
                        viewBox="0 0 9 8"
                        fill="none"
                      >
                        <path
                          d="M4.5 0.25L8.83013 7.75H0.169873L4.5 0.25Z"
                          fill="#32D583"
                        />
                      </svg>
                      <p className="m-0 itemIncrease">100%</p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="65"
                        height="40"
                        viewBox="0 0 65 40"
                        fill="none"
                      >
                        <path
                          d="M0.5 29C2.12402 28.6063 3.48528 28.272 4.62351 27.9911C9.20642 26.8598 12.9926 25.6365 12.4096 20.9522V20.9522C11.8753 16.6601 16.4165 18.6195 18.7539 20.1358L23.1 22.7924C23.7517 23.1908 24.5007 23.4015 25.2644 23.4015V23.4015C26.7459 23.4015 28.115 22.6118 28.8568 21.3293L31.1289 17.4007C31.779 16.2768 32.6082 15.2247 33.8292 14.7833C35.0128 14.3554 36.7192 14.0242 38.9 14.1874C41.0157 14.3458 42.2337 12.8195 42.8926 11.0064C43.8224 8.44786 44.4464 4.66283 47.018 5.55596C47.6711 5.78281 48.4151 6.22193 49.2513 6.9561C51.0289 8.51675 52.5192 9.49114 53.6313 10.0698C54.8633 10.7109 56.3279 10.5763 57.2649 9.55119C58.2219 8.50427 59.3204 6.74981 60.1702 4.01132C60.3762 3.34744 60.9801 2.88316 61.6734 2.83328C62.062 2.80531 62.4093 2.76451 62.7168 2.71598C63.4974 2.59277 64.5 1.79028 64.5 1V1"
                          stroke="#32D583"
                          stroke-linecap="round"
                        />
                        <path
                          d="M0.5 29C1.64565 28.4543 4.07772 27.7554 6.78055 28.0322C6.40614 26.8799 12.9042 24.9263 12.4096 20.9522C11.8753 16.6601 16.4165 18.6195 18.7539 20.1358L24.0965 23.4015H27.6583L32.1104 15.7037C32.8154 15.0816 35.1602 13.9075 38.9 14.1874C42.6398 14.4674 43.5748 9.48318 43.5748 6.9561C44.0942 5.75088 45.9567 4.06358 49.2513 6.9561C52.5459 9.84862 54.8536 10.7273 55.5957 10.805C56.6345 10.4551 59.0684 8.37903 60.493 2.87391C62.8972 2.87391 64.1661 2.40737 64.5 2.17411V39.5H0.5V29Z"
                          fill="url(#paint0_linear_7541_34801)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_7541_34801"
                            x1="28.5"
                            y1="-13"
                            x2="43.5"
                            y2="24"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#00C98D" stop-opacity="0.3" />
                            <stop
                              offset="0.926537"
                              stop-color="#00C98D"
                              stop-opacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="topItem d-flex align-items-center justify-content-between ">
                  <div className="d-flex align-items-center">
                    <div className="itemImageBox">
                      <Image src={recta} alt="item" />
                    </div>
                    <p>Patience Games 3D Cube Puzzle Maze</p>
                  </div>
                  <div className="d-flex align-items-center itemRightSide">
                    <div>
                      <p className="m-0">2 Pieces</p>
                    </div>
                    <div>
                      <p className="m-0">73.84 USD</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="8"
                        viewBox="0 0 9 8"
                        fill="none"
                      >
                        <path
                          d="M4.5 7.5L0.169873 -8.15666e-07L8.83013 -5.85621e-08L4.5 7.5Z"
                          fill="#FF6161"
                        />
                      </svg>
                      <p className="m-0 itemdecrease">100%</p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="75"
                        height="68"
                        viewBox="0 0 75 68"
                        fill="none"
                      >
                        <path
                          d="M5.8493 23.8109C7.1081 23.9712 9.53192 24.6982 11.6561 26.3923C11.9641 25.2205 18.4868 27.0901 20.2192 23.4795C22.0903 19.5799 24.8512 23.6835 25.9978 26.2227L28.7267 31.8585L31.723 33.7841L39.6302 29.7153C40.5595 29.5731 43.1669 29.8531 46.1617 32.1105C49.1565 34.3679 52.6377 30.6804 54.0039 28.5545C55.0925 27.8215 57.5715 27.4089 58.7793 31.6235C59.9871 35.838 61.4534 37.8249 62.0356 38.2914C63.0987 38.5587 66.2686 38.1281 70.4435 34.2671C72.466 35.5669 73.7856 35.8604 74.1927 35.8447L54.0127 67.2452L0.172548 32.6441L5.8493 23.8109Z"
                          fill="url(#paint0_linear_7541_34815)"
                        />
                        <path
                          d="M5.84931 23.8115C7.42836 24.3583 8.75425 24.813 9.86369 25.1921C14.3307 26.7181 18.1772 27.736 20.2192 23.4801V23.4801C22.0903 19.5805 24.8512 23.684 25.9978 26.2233L28.2177 30.8079C28.5506 31.4953 29.0667 32.0775 29.7092 32.4905V32.4905C30.9555 33.2914 32.5343 33.3672 33.8516 32.6894L37.887 30.6129C39.0415 30.0188 40.3079 29.582 41.5738 29.8708C42.8007 30.1508 44.4153 30.7947 46.1617 32.1111C47.8559 33.3881 49.7058 32.7626 51.2403 31.5936C53.4057 29.9439 55.9771 27.0971 57.6575 29.2387C58.0843 29.7827 58.4728 30.5543 58.7793 31.6241C59.3292 33.5428 59.9326 34.9998 60.4818 36.0618C61.3093 37.6618 62.9703 38.1838 64.5972 37.4107C66.7981 36.3649 69.6509 34.7268 70.3055 34.3478C70.3946 34.2962 70.4987 34.294 70.5918 34.338C70.9581 34.5109 71.9371 34.9696 72.7878 35.336C72.9226 35.394 73.6156 35.7191 73.762 35.7301V35.7301"
                          stroke="#F97066"
                          stroke-linecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_7541_34815"
                            x1="52.1114"
                            y1="3.61633"
                            x2="44.7264"
                            y2="42.8523"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#FF6161" stop-opacity="0.3" />
                            <stop
                              offset="0.926537"
                              stop-color="#FF6161"
                              stop-opacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
