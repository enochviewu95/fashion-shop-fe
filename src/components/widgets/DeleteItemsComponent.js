import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import swal from "sweetalert";
import { dialogAlert } from "../../utils/DialogAlert";

export default function DeleteItemsComponent({
  isAdmin,
  itemId,
  deleteFunc = null,
  disableDelete,
}) {
  const deleteItem = (event) => {
    event.preventDefault();
    event.stopPropagation();
    deleteAlert();
  };

  const deleteAlert = async () => {
    try {
      const willDelete = await swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      if (willDelete) {
        try {
          await deleteFunc(itemId);
          swal("Delete Successful", {
            icon: "success",
          });
        } catch (error) {
          dialogAlert({ msg: error });
        }
      } else {
        swal("Delete Unsuccessful", {
          icon: "warning",
        });
      }
    } catch (error) {
      dialogAlert({ msg: error });
    }
  };

  return isAdmin ? (
    <button
      className="absolute top-8 right-3 w-7 disabled:opacity-75"
      onClick={deleteItem}
      disabled={disableDelete}
    >
      <TrashIcon
        className={
          disableDelete ? "text-red-50" : "text-red-300 hover:text-red-700"
        }
      />
    </button>
  ) : (
    ""
  );
}
