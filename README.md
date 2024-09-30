# StreamOverlayXpert

This project is a full-stack application designed to provide an RTSP livestream with overlay management options. It includes a backend built with Flask and MongoDB and a frontend created with React to enable users to view livestreams, add overlays, and manage overlay settings.

## 📂 File Structure
.
├── README.md             # General README file
├── backend               # Contains backend code (Flask API and MongoDB integration)
└── frontend              # Contains frontend code (React application for RTSP Player and overlay settings)



## 🛠️ Tech Stack
- **Backend**: Python (Flask), MongoDB
- **Frontend**: React
- **Video Streaming**: RTSP-compatible video streaming

## ⚙️ Prerequisites
- Node.js (v14 or later recommended)
- Python 3.8 or later
- MongoDB (Ensure MongoDB is installed and running)
- npm (comes with Node.js)

## 🚀 Getting Started

**Clone the repository:**

   git clone https://github.com/VaibhavPuri26/StreamOverlayXpert.git
   cd StreamOverlayXpert/


Backend Setup

cd backend

Create a virtual environment:

bash

python3 -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate

Install backend dependencies:

bash

pip install -r requirements.txt

Start the Flask server:

bash

flask run

By default, the Flask server will run on http://127.0.0.1:5000.




Frontend Setup



cd frontend

Install frontend dependencies:

bash

npm install

Start the React development server:

bash

    npm start

    The React app will run on http://localhost:3000.

To test on the website you can use this link https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8


📑 API Documentation

The backend provides a CRUD API to manage overlays.

    POST /overlay: Create a new overlay with text, position, and image (optional).
    GET /overlay: Retrieve all saved overlays.
    PUT /overlay/
    : Update an existing overlay by ID.
    DELETE /overlay/
    : Delete an overlay by ID.

API Usage Example

Create Overlay:
POST http://127.0.0.1:5000/overlay
Content-Type: multipart/form-data
Body:
{
  "text": "Overlay Text",
  "position": "top-left",
  "image": <image-file>
}



🎨 Features

    Playing Livestream: Allows users to input an RTSP URL and view a livestream with basic controls like play, pause, and volume adjustment.
    Overlay Management: Users can add, position, resize, and manage custom overlays such as logos and text.
    CRUD Functionality: Provides complete CRUD operations to create, read, update, and delete overlay settings.

📚 User Documentation
How to Input RTSP URL

    Navigate to the frontend at http://localhost:3000.
    Enter the RTSP URL in the input field and click "Play" to start the livestream.

Managing Overlays

    Add overlays by entering text, selecting a position, and optionally uploading an image.
    Use the 'Create' button to add the overlay to the livestream.
    Existing overlays will be displayed in a list where you can edit or delete them as needed.

🤝 Contributing

Feel free to fork the repository and submit pull requests for any improvements or bug fixes.
📑 License

This project is licensed under the MIT License - see the LICENSE file for details.
📝 Author

    Vaibhav Puri

Enjoy building and streaming!
