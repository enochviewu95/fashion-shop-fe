import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import UploadImageDocument from "../../components/widgets/UploadImageDocument";
import {
  useGetCategoriesQuery,
  useGetCategoryQuery,
} from "../../redux/services/category";
import LoadingComponent from "../../components/widgets/LoadingComponent";
import {
  useAddProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../redux/services/product";
import UpdateUploadImageDocument from "../../components/widgets/UpdateUploadImageDocument";

export default function AddProduct({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const { id } = useParams();
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const [updateProduct] = useUpdateProductMutation();
  const { data, isLoading: fetchingData } = useGetProductQuery(id, {
    skip: !id ? true : false,
  });
  const [addProduct] = useAddProductMutation();

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

  if (isLoading || fetchingData) {
    return <LoadingComponent />;
  }

  return id ? (
    <UpdateUploadImageDocument
      redirectUrl="products"
      formType="product"
      queryFunc={updateProduct}
      queryResult={data}
      categories={categories}
    />
  ) : (
    <UploadImageDocument
      url="admin/api/add-product"
      formType="product"
      redirectUrl="products"
      queryFunc={addProduct}
      categories={categories}
    />
  );
}
