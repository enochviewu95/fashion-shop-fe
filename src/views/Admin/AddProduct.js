import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import UploadImageDocument from "../../components/widgets/UploadImageDocument";

export default function AddProduct({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const formUrl = "admin/api/add-product";

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);
  return <UploadImageDocument url={formUrl} formType="product"/>;
}
