import React, { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import UploadImageDocument from "../../components/widgets/UploadImageDocument";

export default function AddHero({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const formUrl = "admin/api/add-banner"

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);


  return <UploadImageDocument url={formUrl} dataType="hero" />;
}
