import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import UploadImageDocument from "../../components/widgets/UploadImageDocument";
import { useDispatch, useSelector } from "react-redux";
import { categoryList, getCategoriesAsync } from "../../redux/categorySlice";

export default function AddProduct({ pageTitle }) {
  const [setTitle, setLoading] = useOutletContext();
  const { id } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector(categoryList);

  useEffect(() => {
    setTitle(pageTitle);
    dispatch(getCategoriesAsync("admin/api/get-categories"));
    if(categoryList.length > 0){
      setLoading(false)
    }
  }, [dispatch, pageTitle, setLoading, setTitle]);
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
      categories={categories}
    />
  );
}
