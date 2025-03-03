"use client";

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { Upload } from "lucide-react";

const FileUploader: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const uploadFiles = async (filesToUpload: File[]) => {
    if (filesToUpload.length === 0) {
      alert("Please add files to upload!");
      return;
    }

    setUploading(true);
    setUploadSuccess(false);

    const formData = new FormData();
    filesToUpload.forEach((file) => formData.append("files", file));

    try {
      await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploading(false);
      setUploadSuccess(true);
      setFiles([]); // Clear files after successful upload
    } catch (error) {
      console.error("Upload failed:", error);
      setUploading(false);
    }
  };

  const onDrop = async (acceptedFiles: File[]) => {
    // Only image files will be accepted thanks to the `accept` property below.
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    setUploadSuccess(false);
    await uploadFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] }, // Accept only image files
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className="w-full h-32 lg:h-[40vh] border-2 border-dashed border-gray-400 rounded-lg p-5 flex justify-center items-center text-gray-600 bg-gray-50 hover:bg-gray-100 transition-all"
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2">
          <Upload className="w-8 h-8" />
          <p className="text-center">Upload your prescription</p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Selected Files:</h3>
          <ul className="list-disc ml-5">
            {files.map((file, index) => (
              <li key={index} className="text-gray-800">
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </li>
            ))}
          </ul>
        </div>
      )}

      {uploading && <p className="mt-3 text-blue-600">Uploading...</p>}
      {uploadSuccess && (
        <p className="mt-3 text-green-600">Files uploaded successfully!</p>
      )}
    </div>
  );
};

export default FileUploader;
