import Layout from "./layout";
import Image from "next/image";
import productImage from "../../../../assets/images/product.png";
import Input from "@/components/inputs/Input";
function index() {
  return (
    <Layout>
      <div className="d-flex  justify-content-between  productUpdateBox">
        <div className="editProductImage">
          <Image src={productImage} />
        </div>
        <div className="editProductForm">
          <form>
            <div className="form-group w-100">
              <label htmlFor="productDescription">Title</label>
              <textarea
                className="form-control"
                id="productDescription"
                rows="3"
                value="Chopper Vegetable Salad Cutter Cutting Bowl Vegetable Slices Cut Fruit for Kitchen Tools Accessories Gadgets Kitchen Items"
              ></textarea>
            </div>
            <div className="d-flex align-items-center flex-wrap justify-content-between otherInputsForUpdate">
              <div className="inputItem">
                <Input
                  type={"text"}
                  id={"productTags"}
                  holder={"Insert tags here"}
                />
              </div>
              <div className="inputItem">
                <div className="selectBox ">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1" selected>
                      Choose type
                    </option>
                    <option value="2">11 Hours</option>
                    <option value="3">10 Hours</option>
                  </select>
                </div>
              </div>
              <div className="inputItem">
                <div className="selectBox ">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1" selected>
                      Choose collections
                    </option>
                    <option value="2">11 Hours</option>
                    <option value="3">10 Hours</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default index;
