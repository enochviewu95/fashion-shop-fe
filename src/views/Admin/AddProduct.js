import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import UploadImageDocument from "../../components/widgets/UploadImageDocument";

export default function AddProduct({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const { id } = useParams();

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);
  return id ? (
    <UploadImageDocument
      url={`admin/api/edit-product/${id}`}
      formType="product"
      redirectUrl="products"
      editUrl="admin/api/get-product"
      itemId={id}
    />
  ) : (
    <UploadImageDocument
      url="admin/api/add-product"
      formType="product"
      redirectUrl="products"
    />
  );
}
