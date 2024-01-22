import Link from "next/link";
import person from "../../assets/images/webp/Dropdown.webp";
import Image from "next/image";
import OfferBox from "../offerBox/OfferBox";
import logo from "../../assets/images/webp/logo.webp";
function Header() {
  return (
    <header className="mainHeader">
      <nav className="navbar">
        <div className="headerContainer d-flex justify-content-between">
          <div className="navBarLogo">
            <Link href="/dashboard">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className="searchBox">
            <div class="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
            </div>
          </div>
          <div className="headerInfoItem">
            <Link href="#">
              <span className="infoItem">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </Link>
            <Link href="/inbox">
              <span className="infoItem">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 12H16L14 15H10L8 12H2M22 12V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V12M22 12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11L2 12"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </Link>
            <Link href="/profile">
              <span className="infoItem imageItem">
                <Image src={person} className="avatarImage" alt="avatar" />
              </span>
            </Link>
          </div>
        </div>
      </nav>
      <OfferBox />
    </header>
  );
}

export default Header;
