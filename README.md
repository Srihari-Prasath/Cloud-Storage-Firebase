# Cloud-File-Storage-Local

This project provides a simple local file storage system that allows you to upload, download, and delete files using a web interface. It simulates cloud storage but runs entirely on a local network or machine.

## Tech Stack

- **Frontend**:
  - **HTML**: Used for the structure of the user interface.
  - **CSS**: Used for styling and making the UI visually appealing.
  - **JavaScript**: Handles frontend logic, interacts with the backend, and performs asynchronous operations.

- **Backend**:
  - **Node.js**: A JavaScript runtime used to create the backend server.
  - **Express.js**: A lightweight web framework for Node.js that handles HTTP requests.
  - **Multer**: A middleware for handling file uploads in Node.js.

- **Local File Storage**: Files are stored locally on your computer, simulating a cloud storage experience without using any cloud provider.

## Installation

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Srihari-Prasath/Cloud-Storage-Firebase.git
cd Cloud-Storage-Firebase
```

### 2. Install dependencies

Install the required dependencies by running:

```bash
npm install
```

### 3. Run the server

Start the server with:

```bash
node server.js
```

The server will run on [http://localhost:3000](http://localhost:3000).

## Usage

### Accessing the Application Locally

1. **Upload a File**:
   - Open [http://localhost:3000](http://localhost:3000) in your browser.
   - Under the **Upload a File** section, click the "Choose File" button and select a file.
   - Click the "Upload" button to upload the file to the local storage.
   - You will see a log message confirming the upload.

2. **Download a File**:
   - Under the **Download a File** section, enter the **exact name** of the file you wish to download.
   - Click the "Download" button to download the file.
   - The download will initiate and the file will be downloaded to your local machine.

3. **Delete a File**:
   - In the **Delete a File** section, enter the **exact name** of the file you want to delete.
   - Click the "Delete" button to remove the file from local storage.
   - A confirmation message will be displayed in the logs.

### Accessing the Application on the Same Network

To make the application accessible to other devices on the same local network, follow these steps:

1. **Find your local IP address**:
   - On **Windows**:
     1. Open Command Prompt (cmd) and type `ipconfig`.
     2. Look for the **IPv4 Address** under your active network connection (e.g., `192.168.x.x`).
   - On **Mac/Linux**:
     1. Open the terminal and type `ifconfig` (for Mac) or `ip a` (for Linux).
     2. Look for the **inet** address under your active network connection (e.g., `192.168.x.x`).

2. **Modify the server to listen on your local IP**:
   - Open the `server.js` file.
   - Replace this line:
     ```js
     app.listen(3000, 'localhost', () => {
     ```
     with:
     ```js
     app.listen(3000, '0.0.0.0', () => {
     ```
   This will allow the server to accept connections from devices other than the local machine.

3. **Access the application from other devices**:
   - On any device connected to the same network, open a web browser and enter the following URL:
     ```
     http://<your-local-ip>:3000
     ```
     For example, if your local IP is `192.168.1.10`, you would enter:
     ```
     http://192.168.1.10:3000
     ```
   - The application will now be accessible on the same network.

### Notes:

- Make sure that your firewall or security settings allow connections to port `3000` on your local machine if you're having trouble connecting.
- Ensure all devices are connected to the same Wi-Fi network.

## Project Structure

```
local-file-storage/
├── index.html        # The main HTML page
├── script.js         # JavaScript file for handling interactions
├── styles.css        # CSS file for styling the page
└── server.js         # Node.js server for file handling (upload, download, delete)
```

## License

This project is licensed under the MIT License.

---

Now, the README includes detailed instructions for running the application on the same network and ensuring it's accessible from other devices connected to that network.

Let me know if you need further adjustments!