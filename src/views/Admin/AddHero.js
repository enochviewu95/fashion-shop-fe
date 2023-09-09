import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import UploadImageDocument from "../../components/widgets/UploadImageDocument";
import { useAddBannerMutation } from "../../redux/services/banner";
import LoadingComponent from "../../components/widgets/LoadingComponent";

export default function AddHero({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const { id } = useParams();
  const [addBanner, {isLoading}]= useAddBannerMutation();

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

  if(isLoading){
    <LoadingComponent/>
  }

  return id ? (
    <UploadImageDocument
      url={`admin/api/edit-banner/${id}`}
      dataType="hero"
      redirectUrl="hero"
      editUrl="admin/api/get-banner"
      itemId={id}
    />
  ) : (
    <UploadImageDocument queryFunc={addBanner} url="admin/api/add-banner" dataType="hero" redirectUrl="hero" />
  );
}
