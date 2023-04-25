import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editor.css";

const CustomEditor = ({ value = "", setValue }) => {
  const modules = {
    toolbar: [
      [{ header: 1 }],

      ["bold", "italic", "underline", "strike"],
      ["link", "image"],
      [{ list: "ordered" }, { list: "bullet" }],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "link",
    "image",
    "list",
    "bullet",
    "indent",
    "align",
  ];
  return (
    <div className="w-full text-dark">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        formats={formats}
        placeholder="Write a product description here"
        modules={modules}
        className="text-dark min-h-[300px] rounded-xl border border-x-c_F5F5F5 overflow-hidden"
      />
    </div>
  );
};

export default CustomEditor;
