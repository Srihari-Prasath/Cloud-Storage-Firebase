const log = document.getElementById("log");

function logMessage(message) {
  const p = document.createElement("p");
  p.textContent = message;
  log.appendChild(p);
}

document.getElementById("uploadBtn").addEventListener("click", async () => {
  const fileInput = document.getElementById("fileInput");
  if (fileInput.files.length > 0) {
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });
      const message = await response.text();
      logMessage(message);
    } catch (error) {
      logMessage(`Error uploading file: ${error.message}`);
    }
  } else {
    logMessage("Please select a file to upload.");
  }
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  const fileName = document.getElementById("fileName").value;
  if (fileName) {
    window.open(`/download/${fileName}`, "_blank");
    logMessage(`Download initiated for file "${fileName}".`);
  } else {
    logMessage("Please enter a file name to download.");
  }
});

document.getElementById("deleteBtn").addEventListener("click", async () => {
  const fileName = document.getElementById("deleteFileName").value;
  if (fileName) {
    try {
      const response = await fetch(`/delete/${fileName}`, {
        method: "DELETE",
      });
      const message = await response.text();
      logMessage(message);
    } catch (error) {
      logMessage(`Error deleting file: ${error.message}`);
    }
  } else {
    logMessage("Please enter a file name to delete.");
  }
});
