import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import UploadImageDocument from "../../components/widgets/UploadImageDocument";

export default function AddProduct({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const { id } = useParams();
  console.log("Product Id", id);
  const formUrl = "admin/api/add-product";

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);
  return id ? (
    <UploadImageDocument
      url={formUrl}
      formType="product"
      redirectUrl="products"
      editUrl="admin/api/get-product"
      itemId={id}
    />
  ) : (
    <UploadImageDocument
      url={formUrl}
      formType="product"
      redirectUrl="products"
    />
  );
}
