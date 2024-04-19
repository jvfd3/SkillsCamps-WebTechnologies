import React, { useEffect, useState } from "react";

const Upload = () => {
  const token = localStorage.getItem("token");

  const API = "http://zimin404.beget.tech/api-file/files";

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [downloadFiles, setDownloadFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    uploadFiles(selectedFiles);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
    uploadFiles(droppedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const uploadFiles = async (filesToUpload) => {
    setLoading(true);

    const formData = new FormData();
    filesToUpload.forEach((file) => {
      formData.append("files[]", file);
    });

    const bodyOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };

    const fetchData = await fetch(API, bodyOptions);
    const dataFetch = await fetchData.json();

    if (!dataFetch.success) {
      setError(dataFetch.message);
    } else {
      setDownloadFiles(dataFetch.files);
    }
  };

  const handleDownload = (file) => {
    const downloadUrl = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = file.name;
    link.click();
  };

  useEffect(() => {
    setFiles([]);
  }, []);

  return (
    <>
      <main className="main">
        <div className="responsive-wrapper">
          <h1>Upload files</h1>
          <div className="content">
            <div className="content-panel content-panel--success">
              <form className="success card">
                <div className="file-loader">
                  <label onDragOver={handleDragOver} onDrop={handleDrop}>
                    Drag files here
                    <input type="file" multiple onChange={handleFileChange} />
                  </label>
                </div>
                <div className="file-table">
                  {files.length > 0 && (
                    <div>
                      <ul>
                        {files.map((file, index) => (
                          <div key={index} className="file-table_row">
                            <div className="file-table_cell">{file.name}</div>
                          </div>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <button className="base-button">File name</button>
              </form>
            </div>
            <div className="content-main">
              <div className="file-table">
                <div className="file-table__row">
                  <div className="file-table__cell">File name</div>
                  <div className="file-table__cell">Uploaded</div>
                  <div className="file-table__cell"></div>
                </div>
                <div className="file-table__row">
                  <div className="file-table__cell">ananasik.jpg</div>
                  <div className="file-table__cell">Yes</div>
                  <div className="file-table__cell">
                    <button className="icon-button">
                      <img src="../img/download.png" alt="icon" />
                    </button>
                  </div>
                </div>
                <div className="file-table__row">
                  <div className="file-table__cell">kokos.jpg</div>
                  <div className="file-table__cell">No</div>
                  <div className="file-table__cell"></div>
                </div>
                <div className="file-table__row">
                  <div className="file-table__cell">kokosjs.jpg</div>
                  <div className="file-table__cell">No</div>
                  <div className="file-table__cell"></div>
                </div>
                {files.map((file, index) => (
                  <div key={index} className="file-table__row">
                    <div className="file-table__cell">{file.name}</div>
                    <div className="file-table__cell">No</div>
                    <div className="file-table__cell">
                      <button
                        className="icon-button"
                        onClick={() => handleDownload(file)}
                      >
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Upload;
