import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import UploadImageDocument from "../../components/widgets/UploadImageDocument";
import { useGetCategoriesQuery } from "../../redux/services/category";
import LoadingComponent from "../../components/widgets/LoadingComponent";
import {
  useAddProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../redux/services/product";
import { useGetCollectionsQuery } from "../../redux/services/collection";
import UpdateUploadImageDocument from "../../components/widgets/UpdateUploadImageDocument";

export default function AddProduct({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const { id } = useParams();
  const { data: categories, isLoading } = useGetCategoriesQuery({
    page: 1,
    limit: 1000,
  });
  const { data: collections, isLoading: fetchingCollections } =
    useGetCollectionsQuery({ page: 1, limit: 1000 });
  const [
    updateProduct,
    { error: updateProductError, isLoading: isUpdatingProduct },
  ] = useUpdateProductMutation();
  const { data, isLoading: fetchingData } = useGetProductQuery(id, {
    skip: !id ? true : false,
  });
  const [addProduct, { error: addProductError, isLoading: isAddingProduct }] =
    useAddProductMutation();

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

  if (
    isLoading ||
    fetchingData ||
    isAddingProduct ||
    isUpdatingProduct ||
    fetchingCollections
  ) {
    return <LoadingComponent />;
  }

  return id ? (
    <UpdateUploadImageDocument
      redirectUrl="products"
      formType="product"
      queryFunc={updateProduct}
      queryResult={data.response}
      categories={categories.response}
      collections = {collections.response}
      error={updateProductError}
    />
  ) : (
    <UploadImageDocument
      url="admin/api/add-product"
      formType="product"
      redirectUrl="products"
      queryFunc={addProduct}
      error={addProductError}
      categories={categories.response}
      collections = {collections.response}
    />
  );
}
