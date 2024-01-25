import React from "react";
import Image from "next/image";
import productImage from "../../assets/images/product.png";
import StarRating from "../starRating/StarRating";
import Link from "next/link";
import editIcon from "../../assets/icons/editIcon.png";
import trashIcon from "../../assets/icons/trashIcon.png";

import shareIcon from "../../assets/icons/shareIcon.png";
import tagIcon from "../../assets/icons/tagIcon.png";

export default function Product({
  name,
  price,
  sale,
  descreption,
  imgSrc,
  stockStatus,
  rate,
  reviews,
  colors,
  brandName,
  supplier,
  ShippingTo,
  offerPercent,
  id,
}) {
  return (
    <div className="productBox d-flex flex-column">
      <Link href={`/imports/${id}`}>
        <div className="catIcon">
          <Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="37"
              viewBox="0 0 26 27"
              fill="none"
            >
              <path
                d="M21.125 21.851H4.875C3.95417 21.851 3.25 21.1469 3.25 20.226V5.54687C3.25 4.62604 3.95417 3.92188 4.875 3.92188H21.125C22.0458 3.92188 22.75 4.62604 22.75 5.54687V20.226C22.75 21.0927 22.0458 21.851 21.125 21.851Z"
                fill="#FF8F00"
              />
              <path
                d="M21.125 23.4225H4.875C3.95417 23.4225 3.25 22.7184 3.25 21.7975V8.25586C3.25 7.33503 3.95417 6.63086 4.875 6.63086H21.125C22.0458 6.63086 22.75 7.33503 22.75 8.25586V21.7975C22.75 22.7184 22.0458 23.4225 21.125 23.4225Z"
                fill="#DD2C00"
              />
              <path
                d="M8.12533 8.79688C7.83801 8.79688 7.56246 8.91101 7.35929 9.11418C7.15613 9.31734 7.04199 9.59289 7.04199 9.88021C7.04199 10.1675 7.15613 10.4431 7.35929 10.6462C7.56246 10.8494 7.83801 10.9635 8.12533 10.9635C8.41264 10.9635 8.68819 10.8494 8.89136 10.6462C9.09452 10.4431 9.20866 10.1675 9.20866 9.88021C9.20866 9.59289 9.09452 9.31734 8.89136 9.11418C8.68819 8.91101 8.41264 8.79688 8.12533 8.79688ZM17.8753 8.79688C17.588 8.79688 17.3125 8.91101 17.1093 9.11418C16.9061 9.31734 16.792 9.59289 16.792 9.88021C16.792 10.1675 16.9061 10.4431 17.1093 10.6462C17.3125 10.8494 17.588 10.9635 17.8753 10.9635C18.1626 10.9635 18.4382 10.8494 18.6414 10.6462C18.8445 10.4431 18.9587 10.1675 18.9587 9.88021C18.9587 9.59289 18.8445 9.31734 18.6414 9.11418C18.4382 8.91101 18.1626 8.79688 17.8753 8.79688Z"
                fill="#B71C1C"
              />
              <path
                d="M12.9997 15.2962C10.0205 15.2962 7.58301 12.8587 7.58301 9.87956C7.58301 9.55456 7.79967 9.33789 8.12467 9.33789C8.44967 9.33789 8.66634 9.55456 8.66634 9.87956C8.66634 12.2629 10.6163 14.2129 12.9997 14.2129C15.383 14.2129 17.333 12.2629 17.333 9.87956C17.333 9.55456 17.5497 9.33789 17.8747 9.33789C18.1997 9.33789 18.4163 9.55456 18.4163 9.87956C18.4163 12.8587 15.9788 15.2962 12.9997 15.2962Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        {/*    <div className="saleBox d-flex align-items-center justify-content-center ">
          <p>{offerPercent}</p>
        </div> */}
        <div className="saleBox d-flex align-items-center justify-content-center ">
          <span className="saleBoxp">
            <p>12% off</p>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="45"
            viewBox="0 0 46 45"
            fill="none"
          >
            <path
              d="M12.7757 1.87039C13.8326 0.936145 15.1848 0.404152 16.595 0.367841L27.9629 0.0751163C29.373 0.0388059 30.7509 0.500497 31.8544 1.37911L40.7509 8.46199C41.8545 9.3406 42.6132 10.5799 42.8938 11.9624L45.1561 23.1067C45.4367 24.4891 45.2213 25.9262 44.5477 27.1656L39.1173 37.1568C38.4436 38.3962 37.3549 39.3586 36.0422 39.875L25.46 44.0381C24.1473 44.5545 22.6947 44.5919 21.3571 44.1438L10.5747 40.5308C9.23719 40.0826 8.10034 39.1775 7.36382 37.9744L1.42639 28.276C0.689864 27.0729 0.400772 25.6488 0.609882 24.2538L2.29561 13.0078C2.50472 11.6127 3.19866 10.336 4.25556 9.40174L12.7757 1.87039Z"
              fill="#DD2590"
            />
          </svg>
        </div>

        <div className="productImage">
          <Image src={productImage} />
        </div>
        <div className="productContent">
          <h3>{name}</h3>
          <p className="price">
            ${price} <s className="sale">${sale}</s>
          </p>
          <div className="productReview d-flex">
            <StarRating rating={rate} Dimension={21} spacing={1} />
            <p className="">{reviews} reviews</p>
          </div>
          <div className="addBtnBox">
            <button className="btn w-100 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 21"
                fill="none"
                className="mx-3"
              >
                <path
                  d="M0.833008 1.50586H4.16634L6.39967 12.6642C6.47588 13.0479 6.6846 13.3925 6.9893 13.6378C7.29399 13.8831 7.67526 14.0134 8.06634 14.0059H16.1663C16.5574 14.0134 16.9387 13.8831 17.2434 13.6378C17.5481 13.3925 17.7568 13.0479 17.833 12.6642L19.1663 5.67253H4.99967M8.33301 18.1725C8.33301 18.6328 7.95991 19.0059 7.49967 19.0059C7.03944 19.0059 6.66634 18.6328 6.66634 18.1725C6.66634 17.7123 7.03944 17.3392 7.49967 17.3392C7.95991 17.3392 8.33301 17.7123 8.33301 18.1725ZM17.4997 18.1725C17.4997 18.6328 17.1266 19.0059 16.6663 19.0059C16.2061 19.0059 15.833 18.6328 15.833 18.1725C15.833 17.7123 16.2061 17.3392 16.6663 17.3392C17.1266 17.3392 17.4997 17.7123 17.4997 18.1725Z"
                  stroke="#344054"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Add to my store
            </button>
          </div>
          <div className="productIcons d-flex align-items-center justify-content-between mt-3">
            <span>
              <Link href="#">
                <Image src={editIcon} />
              </Link>
            </span>
            <span>
              <Link href="#">
                <Image src={shareIcon} />
              </Link>
            </span>
            <span>
              <Link href="#">
                <Image src={tagIcon} />
              </Link>
            </span>
            <span>
              <Link href="#">
                <Image src={trashIcon} />
              </Link>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
