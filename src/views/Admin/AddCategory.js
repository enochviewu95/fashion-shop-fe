import React, { useEffect } from "react";
import UploadImageDocument from "../../components/widgets/UploadImageDocument";
import { useOutletContext, useParams } from "react-router-dom";
import { useAddCategoryMutation } from "../../redux/services/category";

export default function AddCategory({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const { id } = useParams();
  const [addCategory, { isLoading }] = useAddCategoryMutation();

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
      queryFunc={addCategory}
      redirectUrl="categories"
    />
  );
}
