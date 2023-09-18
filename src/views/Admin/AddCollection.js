import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import UploadImageDocument from "../../components/widgets/UploadImageDocument";
import {
  useAddCollectionMutation,
  useGetCollectionQuery,
  useUpdateCollectionMutation,
} from "../../redux/services/collection";
import LoadingComponent from "../../components/widgets/LoadingComponent";
import UpdateUploadImageDocument from "../../components/widgets/UpdateUploadImageDocument";

export default function AddCollection({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const { id } = useParams();
  const [addCollection, { isLoading }] = useAddCollectionMutation();
  const { data, isLoading: fetchingData } = useGetCollectionQuery(id, {
    skip: !id ? true : false,
  });
  const [updateCollection] = useUpdateCollectionMutation();

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

  if (isLoading || fetchingData) {
    return <LoadingComponent />;
  }

  return id ? (
    <UpdateUploadImageDocument
    redirectUrl="collections"
    queryFunc={updateCollection}
    queryResult={data}
  />
  ) : (
    <UploadImageDocument
      redirectUrl="collections"
      queryFunc={addCollection}
    />
  );
}
