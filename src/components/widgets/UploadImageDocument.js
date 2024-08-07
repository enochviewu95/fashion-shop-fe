import React, { useContext, useState } from "react";
import CardComponent from "../../components/widgets/CardComponent";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ThemeContext } from "../../context/themeContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { dialogAlert } from "../../utils/DialogAlert";

export default function UploadImageDocument({
  dataType,
  formType,
  redirectUrl,
  queryFunc,
  categories,
  collections,
  response = null,
  error = null,
}) {
  const [image, setBannerImage] = useState(null);
  const [imageUrl, setBannerImageUrl] = useState("");
  const [title, setBannerTitle] = useState("");
  const [price, setPrice] = useState(0.0);
  const [selected, setSelected] = useState(false);
  const [description, setBannerDescription] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [collection, setCollection] = useState("");
  const [item, setItem] = useState(null);
  const navigate = useNavigate();
  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  /**
   * The function prevents default behavior and stops event propagation for a drag enter event.
   * @param event - The event parameter is an object that contains information about the event that
   * occurred, such as the type of event, the target element, and any additional data related to the
   * event. In this case, the event parameter is used in a drag and drop function to handle the dragEnter
   * event.
   */
  const dragEnter = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  /**
   * The function prevents default drag behavior and stops event propagation.
   * @param event - The event parameter is an object that contains information about the event that
   * occurred, such as the type of event, the target element, and any additional data related to the
   * event. In this specific code snippet, the event parameter is used in the dragOver function to
   * prevent the default behavior of the browser when
   */
  const dragOver = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const drop = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const data = event.dataTransfer;
    const files = data.files;
    const imageInput = document.getElementById("image");
    imageInput.files = files;
    handleFiles(files);
  };

  const getFiles = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const data = event.target.files;
    handleFiles(data);
  };

  /**
   * The function handles image files by previewing them and hiding the drop box.
   * @param files - an array of files that have been selected by the user through a file input or
   * drag-and-drop interface.
   */
  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setBannerImage(file);
      if (!file.type.startsWith("image/")) {
        continue;
      }
      let img = displayPreviewController();
      img.file = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const displayPreviewController = () => {
    const img = document.getElementById("imgPreview");
    const preview = document.getElementById("preview");
    const dropBox = document.getElementById("dropBox");
    preview.classList.replace("hidden", "flex");
    dropBox.classList.replace("flex", "hidden");
    return img;
  };

  const removeImage = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const preview = document.getElementById("preview");
    const dropBox = document.getElementById("dropBox");
    preview.classList.replace("flex", "hidden");
    dropBox.classList.replace("hidden", "flex");
    setBannerImageUrl("");
    setBannerImage(null);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formType === "product" && formData.append("price", price);
    formType === "product" && formData.append("details", details);
    formType === "product" && formData.append("category", category);
    formType === "product" && formData.append("collection", collection);
    formData.append("title", title);
    formData.append("description", description);
    formType === "hero" && formData.append("selected", selected);

    try {
      const willSave = await swal({
        title: "Are you sure?",
        text: "Do you want to save this item?",
        icon: "info",
        buttons: true,
        dangerMode: false,
      });
      if (willSave) {
        const addResponse = await queryFunc(formData);
        console.log("Add response", addResponse);
        if (
          addResponse != null &&
          addResponse.data &&
          addResponse.data.msg === "success"
        ) {
          await swal("Saved Successfully", {
            icon: "success",
          });
          navigate(`/admin/home/${redirectUrl}`);
        } else if (error != null) {
          // const errorDetails = new Error();
          // errorDetails.message = "Please check empty fields";
          // errorDetails.name = error.data.msg;
          // throw errorDetails;
          swal("Please check empty fields", { icon: "warning" });
        }
      } else {
        swal("Unable to save", {
          icon: "info",
        });
      }
    } catch (error) {
      dialogAlert({
        title: error.name.toUpperCase(),
        msg: error.message,
      });
    }
  };

  return (
    <form
      onSubmit={submitForm}
      method="post"
      encType="multipart/form-data"
      className="w-full"
    >
      <div
        className={
          dataType === "hero"
            ? "grid grid-cols-1 lg:grid-cols-3 gap-5"
            : "grid grid-cols-1 lg:grid-cols-2 gap-5"
        }
      >
        <div
          className={
            dataType === "hero"
              ? "col-span-1 lg:col-span-2"
              : "col-span-1 lg:col-span-1"
          }
        >
          <CardComponent>
            <div>
              <div
                id="dropBox"
                className="border-4 rounded-xl border-dashed h-[26rem] flex flex-col justify-center items-center group hover:border-slate-300"
                onDragEnter={dragEnter}
                onDragOver={dragOver}
                onDrop={drop}
              >
                <p className="text-slate-500 group-hover:text-slate-700 font-medium text-lg">
                  Drag and Drop Here
                </p>
                <label
                  className="rounded-lg shadow group-hover:bg-slate-600 bg-slate-400 px-5 py-2 text-white my-2 cursor-pointer"
                  htmlFor="image"
                >
                  Upload
                </label>
              </div>
              <div
                id="preview"
                className="border-4 rounded-xl border-dashed h-[26rem] flex-col relative justify-center items-center group hover:border-slate-300 hidden"
              >
                <div className="absolute w-full h-full">
                  <img
                    id="imgPreview"
                    alt="Preview"
                    src={imageUrl}
                    className="w-full h-full object-cover overflow-hidden "
                  />
                </div>
                <button className="relative w-20 h-20" onClick={removeImage}>
                  <XMarkIcon className=" rounded-full bg-orange-500/50 text-white/50 lg:bg-orange-500/10 group-hover:bg-orange-500 lg:text-white/10 group-hover:text-white" />
                </button>
              </div>
            </div>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="absolute overflow-hidden h-0 w-0"
              onChange={getFiles}
            />
          </CardComponent>
        </div>
        <div>
          <CardComponent>
            <div className="lg:h-[26rem]">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div
                  className={
                    formType === "product"
                      ? "sm:col-span-2 sm:gap-6 lg:grid lg:grid-cols-2 lg:gap-5"
                      : "sm:col-span-2 "
                  }
                >
                  <div className="w-full">
                    <label
                      htmlFor="title"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Title
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(event) => setBannerTitle(event.target.value)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  {formType === "product" ? (
                    <div className="w-full">
                      <label
                        htmlFor="collection"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Collection
                      </label>
                      <div className="mt-2.5 w-full">
                        <select
                          onChange={(event) =>
                            setCollection(event.target.value)
                          }
                          value={collection}
                          id="collection"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option value="">Choose a collection</option>
                          {collections.map((collection) => {
                            return (
                              <option
                                key={collection._id}
                                value={collection._id}
                              >
                                {collection.title}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {formType === "product" ? (
                  <div className="sm:col-span-2 sm:gap-6  lg:grid lg:grid-cols-2 lg:gap-5 ">
                    <div className="w-full">
                      <label
                        htmlFor="price"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Price
                      </label>
                      <div className="mt-2.5 w-full">
                        <input
                          type="number"
                          min="0.00"
                          step="0.01"
                          name="price"
                          id="price"
                          value={price}
                          onChange={(event) => setPrice(event.target.value)}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="category"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Category
                      </label>
                      <div className="mt-2.5 w-full">
                        <select
                          onChange={(event) => setCategory(event.target.value)}
                          value={category}
                          id="category"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option value="">Choose a category</option>
                          {categories.map((category) => {
                            return (
                              <option key={category._id} value={category._id}>
                                {category.title}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="description"
                      id="description"
                      value={description}
                      onChange={(event) =>
                        setBannerDescription(event.target.value)
                      }
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                {item ? (
                  <button
                    type="submit"
                    className={`block w-full rounded-md ${buttonBackground} px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:${buttonHoverBackground} `}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={`block w-full rounded-md ${buttonBackground} px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:${buttonHoverBackground} `}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </CardComponent>
        </div>
      </div>
      {formType === "product" ? (
        <CardComponent>
          <div className="h-[26rem] text-editor">
            <ReactQuill
              modules={modules}
              formats={formats}
              className="h-96 mb-5"
              theme="snow"
              value={details}
              onChange={setDetails}
            />
          </div>
        </CardComponent>
      ) : (
        ""
      )}
    </form>
  );
}
