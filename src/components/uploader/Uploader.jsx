import React from "react";
import Input from "../inputs/Input";

function Uploader() {
  return (
    <form
      onClick={() => document.querySelector(".input-field").click()}
      className="uploaderForm"
    >
      <Input
        type={"file"}
        classes={"form-control fileInput"}
        name={"profileImage"}
        accept={"image/*"}
      />
    </form>
  );
}

export default Uploader;
