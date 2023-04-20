import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import CardComponent from "../../components/widgets/CardComponent";
import { useDispatch } from "react-redux";
import { getBannersAsync } from "../../redux/bannerSlice";

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

  handleFiles(files);
};

/**
 * The function handles image files by previewing them and hiding the drop box.
 * @param files - an array of files that have been selected by the user through a file input or
 * drag-and-drop interface.
 */
const handleFiles = (files) => {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

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

export default function AddHero({ pageTitle }) {
  const [setTitle] = useOutletContext();

  useEffect(() => {
    setTitle(pageTitle);
  }, [ pageTitle, setTitle]);

  return (
    <form className="w-full">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
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
                  className="h-full object-cover overflow-hidden"
                />
              </div>
            </div>

            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="absolute overflow-hidden h-0 w-0"
            />
          </CardComponent>
        </div>
        <div>
          <CardComponent>
            <div className="h-96"></div>
          </CardComponent>
        </div>
      </div>
    </form>
  );
}
