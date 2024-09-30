
# RTSP Livestream & Overlay Management Application

This project is a React-based application designed for managing RTSP livestreams with overlay settings. Users can view a livestream, create overlays (text or image), and manage their positions on the video.

## 📂 File Structure
```
.
├── README.md
├── package-lock.json      # Auto-generated file for tracking dependencies
├── package.json           # Contains project metadata and dependencies
├── public                 # Public directory for assets
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src                    # Source files for the React application
    ├── App.js             # Main app component
    ├── components         # Directory for reusable components
    │   ├── OverlaySettings.js   # Component for managing overlays
    │   └── RTSPPlayer.js        # Component for handling RTSP player
    ├── css                # CSS files for styling components
    │   ├── App.css
    │   ├── OverlaySettings.css
    │   └── RTSPPlayer.css
    └── index.js           # Entry point for the React application
```

## 📜 Description of Files

- **App.js**: Main component that manages the state and displays the RTSP player and overlay settings.
- **OverlaySettings.js**: Handles the creation and management of overlays for the RTSP stream.
- **RTSPPlayer.js**: Displays the RTSP stream and overlays, allowing users to drag and reposition them.
- **index.js**: Entry point that renders the `App` component.
- **CSS files**: Styles for individual components.

## 🛠️ Prerequisites

- Node.js (v14 or later recommended)
- npm (comes with Node.js)

## ⚙️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aishwaryamensinkai/OverlayStream.git
   cd OverlayStream/frontend/
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   This will install all the required packages specified in `package.json`.

## 🚀 Running the Application

1. Start the React development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

3. To test on the website you can use this link `https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8`.

## 🔄 API Integration

The app makes HTTP requests to a backend service running on `http://127.0.0.1:5000` to manage overlay data. Ensure your backend service is running and available at this address.

- **GET /overlay**: Fetches existing overlays.
- **POST /overlay**: Creates a new overlay.
- **DELETE /overlay/:id**: Deletes an overlay by ID.

## 🧩 Key Features

- **RTSPPlayer**: Allows users to input an HLS URL and view the livestream.
- **OverlaySettings**: Users can create text or image overlays, position them on the video, and manage existing overlays.

## 🎨 Styling

The application uses CSS for styling with different stylesheets:
- `App.css`: General styling for the main application layout.
- `OverlaySettings.css`: Styles for the overlay management component.
- `RTSPPlayer.css`: Styles for the RTSP player component.

## 🤝 Contributing

Feel free to fork this repository, create a branch, and submit pull requests. All contributions are welcome!

## 📑 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📝 Author

- Aishwarya Mensinkai

Happy streaming!
