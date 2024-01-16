import React from "react";
import { useEffect } from "react";
export default function tracking() {
  useEffect(() => {
    document.title = "Tracking";
  }, []);
  return <div>tracking</div>;
}
