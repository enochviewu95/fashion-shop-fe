import swal from "sweetalert";

export const dialogAlert = ( title, msg ) => {
  return swal({
    title: title,
    text: msg,
    icon: "warning",
    button: "Okay",
  });
};
