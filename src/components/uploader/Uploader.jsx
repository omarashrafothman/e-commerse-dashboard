import React from "react";
import Input from "../inputs/Input";

function Uploader() {
  return (
    <div className="uploderBox">
      <Input
        type={"file"}
        classes={"form-control fileInput "}
        name={"profileImage"}
        accept={"image/*"}
        label={
          <div>
            <span>Upload File </span>
            or drag and drop <br /> SVG, PNG, JPG or GIF (max. 800x400px)
          </div>
        }
        id={"file"}
      />
    </div>
  );
}

export default Uploader;
