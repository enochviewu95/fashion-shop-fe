import React, { useEffect } from "react";
import UploadImageDocument from "../../components/widgets/UploadImageDocument";
import { useOutletContext, useParams } from "react-router-dom";
import {
  useAddCategoryMutation,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} from "../../redux/services/category";
import UpdateUploadImageDocument from "../../components/widgets/UpdateUploadImageDocument";
import LoadingComponent from "../../components/widgets/LoadingComponent";

export default function AddCategory({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const { id } = useParams();
  const [addCategory, { isLoading }] = useAddCategoryMutation();
  const { data, isLoading: fetchingData } = useGetCategoryQuery(id, {
    skip: !id ? true : false,
  });
  const [updateCategory] = useUpdateCategoryMutation();

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

  if (isLoading || fetchingData) {
    return <LoadingComponent />;
  }

  return id ? (
    <UpdateUploadImageDocument
      dataType="hero"
      redirectUrl="categories"
      queryFunc={updateCategory}
      queryResult={data.response}
    />
  ) : (
    <UploadImageDocument
     dataType="hero"
      url="/admin/api/add-category"
      queryFunc={addCategory}
      redirectUrl="categories"
    />
  );
}
