import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import swal from "sweetalert";
import { deleteData } from "../../services/apis";

export default function DeleteItemsComponent({ isAdmin, itemId, deleteUrl }) {
  const deleteItem = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const url = deleteUrl +"/" + itemId
    deleteAlert(url);
  };

  const deleteAlert = (url) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteData(url).then(() => {
          swal("Delete Successful", {
            icon: "success",
          }).then(()=>{
            window.location.reload();
          });
        });
      } else {
        swal("Delete Unsuccessful",{
          icon:"info"
        });
      }
    });
  };

  return isAdmin ? (
      <button className="absolute top-8 right-3 w-7" onClick={deleteItem}>
        <TrashIcon className="text-red-300 hover:text-red-700" />
      </button>
  ) : (
    ""
  );
}
