import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import UploadImageDocument from "../../components/widgets/UploadImageDocument";

export default function AddHero({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const { id } = useParams();

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

  return id ? (
    <UploadImageDocument
      url={`admin/api/edit-banner/${id}`}
      dataType="hero"
      redirectUrl="hero"
      editUrl="admin/api/get-banner"
      itemId={id}
    />
  ) : (
    <UploadImageDocument url="admin/api/add-banner" dataType="hero" redirectUrl="hero" />
  );
}
