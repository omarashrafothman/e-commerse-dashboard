import Image from "next/image";
import Layout from "./layout";
import prosuctImage from "../../../../assets/images/product.png";
import right from "../../../../assets/icons/Icon.png";
// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end
function images() {
  return (
    <Layout>
      <div>
        <p className="my-3">Please choose Images</p>
        <div className="d-flex align-items-center justify-content-between flex-wrap  productGallery">
          <div className="productGalleryImage">
            <input
              type="checkbox"
              class="btn-check"
              name="options1"
              id="option1"
            />
            <label class="btn " for="option1">
              <div className="blurBox">
                <span className="selectedFlag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect width="32" height="32" rx="16" fill="#E9FFFA" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.7952 9.8542L13.2485 19.0675L10.7152 16.3609C10.2485 15.9209 9.51522 15.8942 8.98188 16.2675C8.46188 16.6542 8.31522 17.3342 8.63522 17.8809L11.6352 22.7609C11.9285 23.2142 12.4352 23.4942 13.0085 23.4942C13.5552 23.4942 14.0752 23.2142 14.3685 22.7609C14.8485 22.1342 24.0085 11.2142 24.0085 11.2142C25.2085 9.98753 23.7552 8.90753 22.7952 9.84086V9.8542Z"
                      fill="#78EED5"
                    />
                  </svg>
                </span>
              </div>
              <Image src={prosuctImage} />
            </label>
          </div>
          <div className="productGalleryImage">
            <input
              type="checkbox"
              class="btn-check"
              name="options2"
              id="option2"
            />
            <label class="btn " for="option2">
              <div className="blurBox">
                <span className="selectedFlag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect width="32" height="32" rx="16" fill="#E9FFFA" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.7952 9.8542L13.2485 19.0675L10.7152 16.3609C10.2485 15.9209 9.51522 15.8942 8.98188 16.2675C8.46188 16.6542 8.31522 17.3342 8.63522 17.8809L11.6352 22.7609C11.9285 23.2142 12.4352 23.4942 13.0085 23.4942C13.5552 23.4942 14.0752 23.2142 14.3685 22.7609C14.8485 22.1342 24.0085 11.2142 24.0085 11.2142C25.2085 9.98753 23.7552 8.90753 22.7952 9.84086V9.8542Z"
                      fill="#78EED5"
                    />
                  </svg>
                </span>
              </div>
              <Image src={prosuctImage} />
            </label>
          </div>
          <div className="productGalleryImage">
            <input
              type="radio"
              class="btn-check"
              name="options3"
              id="option3"
            />
            <label class="btn " for="option3">
              <div className="blurBox">
                <span className="selectedFlag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect width="32" height="32" rx="16" fill="#E9FFFA" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.7952 9.8542L13.2485 19.0675L10.7152 16.3609C10.2485 15.9209 9.51522 15.8942 8.98188 16.2675C8.46188 16.6542 8.31522 17.3342 8.63522 17.8809L11.6352 22.7609C11.9285 23.2142 12.4352 23.4942 13.0085 23.4942C13.5552 23.4942 14.0752 23.2142 14.3685 22.7609C14.8485 22.1342 24.0085 11.2142 24.0085 11.2142C25.2085 9.98753 23.7552 8.90753 22.7952 9.84086V9.8542Z"
                      fill="#78EED5"
                    />
                  </svg>
                </span>
              </div>
              <Image src={prosuctImage} />
            </label>
          </div>
          <div className="productGalleryImage">
            <input
              type="checkbox"
              class="btn-check"
              name="options4"
              id="option4"
            />
            <label class="btn " for="option4">
              <div className="blurBox">
                <span className="selectedFlag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect width="32" height="32" rx="16" fill="#E9FFFA" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.7952 9.8542L13.2485 19.0675L10.7152 16.3609C10.2485 15.9209 9.51522 15.8942 8.98188 16.2675C8.46188 16.6542 8.31522 17.3342 8.63522 17.8809L11.6352 22.7609C11.9285 23.2142 12.4352 23.4942 13.0085 23.4942C13.5552 23.4942 14.0752 23.2142 14.3685 22.7609C14.8485 22.1342 24.0085 11.2142 24.0085 11.2142C25.2085 9.98753 23.7552 8.90753 22.7952 9.84086V9.8542Z"
                      fill="#78EED5"
                    />
                  </svg>
                </span>
              </div>
              <Image src={prosuctImage} />
            </label>
          </div>
          <div className="productGalleryImage">
            <input
              type="checkbox"
              class="btn-check"
              name="options5"
              id="option5"
            />
            <label class="btn " for="option5">
              <div className="blurBox">
                <span className="selectedFlag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect width="32" height="32" rx="16" fill="#E9FFFA" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.7952 9.8542L13.2485 19.0675L10.7152 16.3609C10.2485 15.9209 9.51522 15.8942 8.98188 16.2675C8.46188 16.6542 8.31522 17.3342 8.63522 17.8809L11.6352 22.7609C11.9285 23.2142 12.4352 23.4942 13.0085 23.4942C13.5552 23.4942 14.0752 23.2142 14.3685 22.7609C14.8485 22.1342 24.0085 11.2142 24.0085 11.2142C25.2085 9.98753 23.7552 8.90753 22.7952 9.84086V9.8542Z"
                      fill="#78EED5"
                    />
                  </svg>
                </span>
              </div>
              <Image src={prosuctImage} />
            </label>
          </div>
          <div className="productGalleryImage">
            <input
              type="checkbox"
              class="btn-check"
              name="options6"
              id="option6"
            />
            <label class="btn " for="option6">
              <div className="blurBox">
                <span className="selectedFlag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect width="32" height="32" rx="16" fill="#E9FFFA" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.7952 9.8542L13.2485 19.0675L10.7152 16.3609C10.2485 15.9209 9.51522 15.8942 8.98188 16.2675C8.46188 16.6542 8.31522 17.3342 8.63522 17.8809L11.6352 22.7609C11.9285 23.2142 12.4352 23.4942 13.0085 23.4942C13.5552 23.4942 14.0752 23.2142 14.3685 22.7609C14.8485 22.1342 24.0085 11.2142 24.0085 11.2142C25.2085 9.98753 23.7552 8.90753 22.7952 9.84086V9.8542Z"
                      fill="#78EED5"
                    />
                  </svg>
                </span>
              </div>
              <Image src={prosuctImage} />
            </label>
          </div>
          <div className="productGalleryImage">
            <input
              type="checkbox"
              class="btn-check"
              name="options7"
              id="option7"
            />
            <label class="btn " for="option7">
              <div className="blurBox">
                <span className="selectedFlag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect width="32" height="32" rx="16" fill="#E9FFFA" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.7952 9.8542L13.2485 19.0675L10.7152 16.3609C10.2485 15.9209 9.51522 15.8942 8.98188 16.2675C8.46188 16.6542 8.31522 17.3342 8.63522 17.8809L11.6352 22.7609C11.9285 23.2142 12.4352 23.4942 13.0085 23.4942C13.5552 23.4942 14.0752 23.2142 14.3685 22.7609C14.8485 22.1342 24.0085 11.2142 24.0085 11.2142C25.2085 9.98753 23.7552 8.90753 22.7952 9.84086V9.8542Z"
                      fill="#78EED5"
                    />
                  </svg>
                </span>
              </div>
              <Image src={prosuctImage} />
            </label>
          </div>
          <div className="productGalleryImage">
            <input
              type="checkbox"
              class="btn-check"
              name="options8"
              id="option8"
            />
            <label class="btn " for="option8">
              <div className="blurBox">
                <span className="selectedFlag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect width="32" height="32" rx="16" fill="#E9FFFA" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.7952 9.8542L13.2485 19.0675L10.7152 16.3609C10.2485 15.9209 9.51522 15.8942 8.98188 16.2675C8.46188 16.6542 8.31522 17.3342 8.63522 17.8809L11.6352 22.7609C11.9285 23.2142 12.4352 23.4942 13.0085 23.4942C13.5552 23.4942 14.0752 23.2142 14.3685 22.7609C14.8485 22.1342 24.0085 11.2142 24.0085 11.2142C25.2085 9.98753 23.7552 8.90753 22.7952 9.84086V9.8542Z"
                      fill="#78EED5"
                    />
                  </svg>
                </span>
              </div>
              <Image src={prosuctImage} />
            </label>
          </div>
          <div className="productGalleryImage">
            <input
              type="checkbox"
              class="btn-check"
              name="options9"
              id="option9"
            />
            <label class="btn " for="option9">
              <div className="blurBox">
                <span className="selectedFlag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect width="32" height="32" rx="16" fill="#E9FFFA" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.7952 9.8542L13.2485 19.0675L10.7152 16.3609C10.2485 15.9209 9.51522 15.8942 8.98188 16.2675C8.46188 16.6542 8.31522 17.3342 8.63522 17.8809L11.6352 22.7609C11.9285 23.2142 12.4352 23.4942 13.0085 23.4942C13.5552 23.4942 14.0752 23.2142 14.3685 22.7609C14.8485 22.1342 24.0085 11.2142 24.0085 11.2142C25.2085 9.98753 23.7552 8.90753 22.7952 9.84086V9.8542Z"
                      fill="#78EED5"
                    />
                  </svg>
                </span>
              </div>
              <Image src={prosuctImage} />
            </label>
          </div>
          <div className="productGalleryImage">
            <input
              type="checkbox"
              class="btn-check"
              name="options10"
              id="option10"
            />
            <label class="btn " for="option10">
              <div className="blurBox">
                <span className="selectedFlag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect width="32" height="32" rx="16" fill="#E9FFFA" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.7952 9.8542L13.2485 19.0675L10.7152 16.3609C10.2485 15.9209 9.51522 15.8942 8.98188 16.2675C8.46188 16.6542 8.31522 17.3342 8.63522 17.8809L11.6352 22.7609C11.9285 23.2142 12.4352 23.4942 13.0085 23.4942C13.5552 23.4942 14.0752 23.2142 14.3685 22.7609C14.8485 22.1342 24.0085 11.2142 24.0085 11.2142C25.2085 9.98753 23.7552 8.90753 22.7952 9.84086V9.8542Z"
                      fill="#78EED5"
                    />
                  </svg>
                </span>
              </div>
              <Image src={prosuctImage} />
            </label>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default images;
