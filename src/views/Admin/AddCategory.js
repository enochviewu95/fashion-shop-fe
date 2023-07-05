import React, { useEffect } from "react";
import UploadImageDocument from "../../components/widgets/UploadImageDocument";
import { useOutletContext, useParams } from "react-router-dom";

export default function AddCategory({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const { id } = useParams();

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

  return id ? (
    <UploadImageDocument
      url={`/admin/api/edit-category/${id}`}
      editUrl="admin/api/get-category"
      itemId={id}
      redirectUrl="categories"
    />
  ) : (
    <UploadImageDocument
      url="/admin/api/add-category"
      redirectUrl="categories"
    />
  );
}
