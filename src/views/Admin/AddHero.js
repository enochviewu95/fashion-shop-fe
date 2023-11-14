import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import UploadImageDocument from "../../components/widgets/UploadImageDocument";
import {
  useAddBannerMutation,
  useGetBannerQuery,
  useUpdateBannerMutation,
} from "../../redux/services/banner";
import LoadingComponent from "../../components/widgets/LoadingComponent";
import UpdateUploadImageDocument from "../../components/widgets/UpdateUploadImageDocument";

export default function AddHero({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const { id } = useParams();
  const [addBanner, { isLoading }] = useAddBannerMutation();
  const [updateBanner] = useUpdateBannerMutation();
  const { data, isLoading: fetchingData } = useGetBannerQuery(id, {
    skip: !id ? true : false,
  });

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

  if (isLoading || fetchingData) {
    return <LoadingComponent />;
  }

  return id ? (
    <UpdateUploadImageDocument
      dataType="hero"
      redirectUrl="hero"
      formType='hero'
      queryFunc={updateBanner}
      queryResult={data.response}
    />
  ) : (
    <UploadImageDocument
      queryFunc={addBanner}
      url="admin/api/add-banner"
      dataType="hero"
      redirectUrl="hero"
    />
  );
}
