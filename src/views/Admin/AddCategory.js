import React, { useEffect } from 'react'
import UploadImageDocument from '../../components/widgets/UploadImageDocument'
import { useOutletContext, useParams } from 'react-router-dom'

export default function AddCategory({pageTitle}) {

  const [setTitle] = useOutletContext();
  const {id} =useParams();
  const url = '/admin/api/add-category'

  useEffect(()=>{
    setTitle(pageTitle);
  },[pageTitle,setTitle])

  return id?(
    <UploadImageDocument url={url} editUrl="admin/api/get-category"
    itemId={id}  redirectUrl="categories"/>
  ):(
    <UploadImageDocument url={url}  redirectUrl="categories"/>
  )
}
