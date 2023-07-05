import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import UploadImageDocument from "../../components/widgets/UploadImageDocument";

export default function AddCollection({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const { id } = useParams();

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

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
    />
  );
}
