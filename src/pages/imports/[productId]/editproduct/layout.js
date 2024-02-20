import TitleHeader from "@/components/titleHeader/TitleHeader";
import Link from "next/link";
import Image from "next/image";
import arrowLeft from "../../../../assets/icons/arrow-left black.png";
import { useRouter } from "next/router";
import { NavLink } from "@/components/navLink/NavLink";
// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end

function Layout({ children }) {
  const router = useRouter();
  const { productId } = router.query;

  // Function to check if the link is active
  const isActive = (categoryId, currentId) => {
    return categoryId === currentId;
  };

  {
    /* const editProductgNavigation = [
    { name: "product", to: `/imports/${productId}/editproduct` },
    {
      name: "description",
      to: `/imports/${productId}/editproduct/description`,
      count: "",
      haveCount: false,
    },

    {
      name: "variants",
      to: `/imports/${productId}/editproduct/variants`,
      count: "5",
      haveCount: true,
    },
    {
      name: "images",
      to: `/imports/${productId}/editproduct/images`,
      count: "10",
      haveCount: true,
    },
  ]; */
  }

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
                <NavLink
                  href={`/imports/${productId}/editproduct`}
                  exact
                  className=""
                >
                  Product
                </NavLink>
                <NavLink
                  href={`/imports/${productId}/editproduct/description`}
                  exact
                  className=""
                >
                  Description
                </NavLink>
                <NavLink
                  href={`/imports/${productId}/editproduct/variants`}
                  exact
                  className=""
                >
                  variants
                </NavLink>
                <NavLink
                  href={`/imports/${productId}/editproduct/images`}
                  exact
                  className=""
                >
                  Images
                </NavLink>
                {/*     <button
                  className={
                    router.pathname === `/imports/${productId}/editproduct`
                      ? "btnactive"
                      : ""
                  }
                >
                  <Link
                    href={`/imports/${productId}/editproduct`}
                    className="d-flex justify-content-between itemName"
                  >
                    Product
                  </Link>
                </button>
                <button
                  className={
                    router.pathname ===
                    `/imports/${productId}/editproduct/description`
                      ? "btnactive"
                      : ""
                  }
                >
                  <Link
                    href={`/imports/${productId}/editproduct/description`}
                    className="d-flex justify-content-between itemName"
                  >
                    Description
                  </Link>
                </button>

                <button
                  className={
                    router.pathname ===
                    `/imports/${productId}/editproduct/variants`
                      ? "btnactive"
                      : ""
                  }
                >
                  <Link
                    href={`/imports/${productId}/editproduct/variants`}
                    className="d-flex justify-content-between itemName"
                  >
                    <div className="numberOfItems">
                      <p className="my-0 ">5</p>
                    </div>
                    Variants
                  </Link>
                </button>

                <button
                  className={
                    router.pathname ===
                    `/imports/${productId}/editproduct/images`
                      ? "btnactive"
                      : ""
                  }
                >
                  <Link
                    href={`/imports/${productId}/editproduct/images`}
                    className="d-flex justify-content-between itemName"
                  >
                    <div className="numberOfItems">
                      <p className="my-0 ">10</p>
                    </div>
                    Images
                  </Link>
                </button> */}

                {/*  {editProductgNavigation.map((item) => (
                  <button
                    className={
                      route.pathname.split("/")[4] === item.name
                        ? "btnactive"
                        : ""
                    }
                  >
                    <Link
                      href={item.to}
                      className="d-flex justify-content-between itemName"
                    >
                      {item.haveCount ? (
                        <div className="numberOfItems">
                          <p className="my-0 ">{item.count}</p>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.name}
                    </Link>
                  </button>
                ))} */}
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
