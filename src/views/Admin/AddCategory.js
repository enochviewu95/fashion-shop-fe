import React from 'react'
import UploadImageDocument from '../../components/widgets/UploadImageDocument'

export default function AddCategory() {

  const url = '/admin/api/add-category'

  return (
    <UploadImageDocument url={url}/>
  )
}
