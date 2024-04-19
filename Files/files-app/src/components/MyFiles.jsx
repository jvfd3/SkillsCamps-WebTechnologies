import React, { useState } from "react";

const MyFiles = () => {
  const token = localStorage.getItem("token");

  const [isFiles, setFiles] = useState([]);
  const [isNotification, setNotification] = useState(false);

  const downloadFile = async (e, file_id, file_name) => {
    e.preventDefault();
    // method GET
    const apiUrl = `http://zimin404.beget.tech/api-file/files/${file_id}`;

    const bodyOption = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const fetchFile = await fetch(apiUrl, bodyOption);

    const blob = await fetchFile.blob();
  };
  const destroyFile = async (e, file_id) => {
    const apiUrl = `http://zimin404.beget.tech/api-file/files/${file_id}`;
  };
  const getFiles = async () => {
    const apiUrl = `http://zimin404.beget.tech/api-file/files/disk`;
  };

  return (
    <main class="main">
      <div class="responsive-wrapper">
        <h1>Список файлов пользователя</h1>
        <div class="content-header">
          <div class="content-header-actions">
            <a href="#" class="base-button">
              <span>+ Загрузить файл </span>
            </a>
          </div>
        </div>
        <div class="content">
          <div class="content-panel">
            <div class="vertical-tabs">
              <a href="#" class="active">
                Мои файлы
              </a>
              <a href="#">Доступные файлы</a>
            </div>
          </div>
          <div class="content-main">
            <div class="file-table">
              <div class="file-table__row">
                <div class="file-table__cell">id</div>
                <div class="file-table__cell">Имя файла</div>
                <div class="file-table__cell"></div>
              </div>
              <div class="file-table__row">
                <div class="file-table__cell">QwsEdRRF</div>
                <div class="file-table__cell">Фото.pdf</div>
                <div class="file-table__cell">
                  <button class="icon-button">
                    <img src="assets/img/download.png" alt="icon"></img>
                  </button>
                  <button class="icon-button icon-button--secondary">
                    <img src="assets/img/edit.png" alt="icon"></img>
                  </button>
                  <button class="icon-button">
                    <img src="assets/img/user.png" alt="icon"></img>
                  </button>
                  <button class="icon-button icon-button--delete">
                    <img src="assets/img/delete.png" alt="icon"></img>
                  </button>
                </div>
              </div>
              <div class="file-table__row">
                <div class="file-table__cell">QwsEdRRF</div>
                <div class="file-table__cell">Фото.pdf</div>
                <div class="file-table__cell">
                  <button class="icon-button">
                    <img src="assets/img/download.png" alt="icon"></img>
                  </button>
                  <button class="icon-button icon-button--secondary">
                    <img src="assets/img/edit.png" alt="icon"></img>
                  </button>
                  <button class="icon-button">
                    <img src="assets/img/user.png" alt="icon"></img>
                  </button>
                  <button class="icon-button icon-button--delete">
                    <img src="assets/img/delete.png" alt="icon"></img>
                  </button>
                </div>
              </div>
              <div class="file-table__row">
                <div class="file-table__cell">QwsEdRRF</div>
                <div class="file-table__cell">Фото.pdf</div>
                <div class="file-table__cell">
                  <button class="icon-button">
                    <img src="assets/img/download.png" alt="icon"></img>
                  </button>
                  <button class="icon-button icon-button--secondary">
                    <img src="assets/img/edit.png" alt="icon"></img>
                  </button>
                  <button class="icon-button">
                    <img src="assets/img/user.png" alt="icon"></img>
                  </button>
                  <button class="icon-button icon-button--delete">
                    <img src="assets/img/delete.png" alt="icon"></img>
                  </button>
                </div>
              </div>
              <div class="file-table__row">
                <div class="file-table__cell">QwsEdRRF</div>
                <div class="file-table__cell">Фото.pdf</div>
                <div class="file-table__cell">
                  <button class="icon-button">
                    <img src="assets/img/download.png" alt="icon"></img>
                  </button>
                  <button class="icon-button icon-button--secondary">
                    <img src="assets/img/edit.png" alt="icon"></img>
                  </button>
                  <button class="icon-button">
                    <img src="assets/img/user.png" alt="icon"></img>
                  </button>
                  <button class="icon-button icon-button--delete">
                    <img src="assets/img/delete.png" alt="icon"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyFiles;
