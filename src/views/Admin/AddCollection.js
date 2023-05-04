import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';
import UploadImageDocument from '../../components/widgets/UploadImageDocument';

export default function AddCollection({pageTitle}) {
    const [setTitle] = useOutletContext();
    const formUrl = "admin/api/add-collection"
  
    useEffect(() => {
      setTitle(pageTitle);
    }, [pageTitle, setTitle]);
  
  
    return <UploadImageDocument url={formUrl}  redirectUrl="collections"/>;
}
