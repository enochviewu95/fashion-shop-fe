import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import UploadImageDocument from "../../components/widgets/UploadImageDocument";
import { useAddCollectionMutation } from "../../redux/services/collection";
import LoadingComponent from "../../components/widgets/LoadingComponent";

export default function AddCollection({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const { id } = useParams();
  const [addCollection, {isLoading}] = useAddCollectionMutation();

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return id ? (
    <UploadImageDocument
      url={`/admin/api/edit-collection/${id}`}
      editUrl="admin/api/get-collection"
      itemId={id}
      redirectUrl="collections"
    />
  ) : (
    <UploadImageDocument
      url="/admin/api/add-collection"
      redirectUrl="collections"
      queryFunc={addCollection}
    />
  );
}
