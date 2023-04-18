import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import CardComponent from "../../components/widgets/CardComponent";

const dragEnter = (event) => {
  event.stopPropagation();
  event.preventDefault();
};

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

export default function Hero({ pageTitle }) {
  const [setTitle] = useOutletContext();

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

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
                <img id="imgPreview" alt="Preview" className="h-full object-cover overflow-hidden" />
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
