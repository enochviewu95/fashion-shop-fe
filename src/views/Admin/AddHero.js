import React, { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import CardComponent from "../../components/widgets/CardComponent";
import { ThemeContext } from "../../themeContext";
import { saveData } from "../../services/apis";

export default function AddHero({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerTitle, setBannerTitle] = useState("");
  const [bannerDescription, setBannerDescription] = useState("");
  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

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
    const image = document.getElementById("image");
    image.target.files = files;
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

      const img = document.getElementById("imgPreview");
      const preview = document.getElementById("preview");
      const dropBox = document.getElementById("dropBox");
      img.file = file;
      preview.classList.replace("hidden", "flex");
      dropBox.classList.replace("flex", "hidden");

      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  };

  const getFormData = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image',bannerImage);
    formData.append('title',bannerTitle);
    formData.append('description',bannerDescription);
    saveData('/admin/api/add-banner',formData)
    .then(response=>{
      console.log(response)
    })
  };

  return (
    <form
      onSubmit={getFormData}
      encType="multipart/form-data"
      className="w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="col-span-1 lg:col-span-2">
          <CardComponent>
            <div>
              <div
                id="dropBox"
                className="border-4 rounded-xl border-dashed h-96 flex flex-col justify-center items-center group hover:border-slate-300"
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
                className="border-4 rounded-xl border-dashed h-96 flex-col justify-center items-center group hover:border-slate-300 hidden"
              >
                <img
                  id="imgPreview"
                  alt="Preview"
                  className="w-full object-cover overflow-hidden"
                />
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
            <div className="h-96">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
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
                      onChange={(event) => setBannerTitle(event.target.value)}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
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
                      onChange={(event) =>
                        setBannerDescription(event.target.value)
                      }
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className={`block w-full rounded-md ${buttonBackground} px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:${buttonHoverBackground} `}
                >
                  Save
                </button>
              </div>
            </div>
          </CardComponent>
        </div>
      </div>
    </form>
  );
}
