import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import UploadImageDocument from "../../components/widgets/UploadImageDocument";
import { useGetCategoriesQuery } from "../../redux/services/category";
import LoadingComponent from "../../components/widgets/LoadingComponent";
import { useAddProductMutation } from "../../redux/services/product";

export default function AddProduct({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const { id } = useParams();
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const [addProduct] = useAddProductMutation();

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return id ? (
    <UploadImageDocument
      url={`admin/api/edit-product/${id}`}
      formType="product"
      redirectUrl="products"
      editUrl="admin/api/get-product"
      itemId={id}
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
