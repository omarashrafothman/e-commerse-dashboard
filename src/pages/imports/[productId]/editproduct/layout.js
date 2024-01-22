import TitleHeader from "@/components/titleHeader/TitleHeader";
import Link from "next/link";
import Image from "next/image";
import arrowLeft from "../../../../assets/icons/arrow-left black.png";
import { useRouter } from "next/router";

function Layout({ children }) {
  const route = useRouter();

  const editProductgNavigation = [
    { name: "Product", to: "/imports/1/editproduct" },
    {
      name: "Description",
      to: "/imports/1/editproduct/description",
      count: "",
      haveCount: false,
    },

    {
      name: "Variants",
      to: "/imports/1/editproduct/variants",
      count: "5",
      haveCount: true,
    },
    {
      name: "Images",
      to: "/imports/1/editproduct/images",
      count: "10",
      haveCount: true,
    },
  ];
  return (
    <div className="main">
      <div className="container3 ">
        <TitleHeader title={"Imports"} />

        <div className="container1 ">
          <Link href="/imports" className="backLink">
            <Image src={arrowLeft} />
          </Link>
          <div className="editProductNavigation d-flex align-items-center flex-wrap  justify-content-between">
            <div className="editProductNavigationBtns">
              <div className="leftRightBtnBox my-3">
                {editProductgNavigation.map((item) => (
                  <button className="">
                    <Link
                      href={item.to}
                      className="d-flex justify-content-between"
                    >
                      {item.haveCount ? (
                        <div className="numberOfItems">
                          {" "}
                          <p className="my-0 ">{item.count}</p>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.name}
                    </Link>
                  </button>
                ))}
              </div>
            </div>
            <div className="editProductNavigationSelect d-flex align-items-center">
              <div className="selectBox mx-2">
                <select class="form-select" aria-label="Default select example">
                  <option value="1" selected>
                    More Actions
                  </option>
                  <option value="2">11 Hours</option>
                  <option value="3">10 Hours</option>
                </select>
              </div>
              <div className="selectBox mx-2">
                <select class="form-select" aria-label="Default select example">
                  <option value="1" selected>
                    Import to store
                  </option>
                  <option value="2">11 Hours</option>
                  <option value="3">10 Hours</option>
                </select>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
