# Flask Application with PyMongo Integration

This repository contains a basic Flask application with MongoDB integration using PyMongo. The application has been structured with the following components:

## 📂 File Structure
```
.
├── app.py              # Main application entry point
├── config.py           # Configuration settings for Flask and MongoDB
├── requirements.txt    # Required Python packages
├── routes.py           # Application routes definitions
└── uploads             # Directory for storing uploaded files
```

## 📜 Description of Files

- **app.py**: This is the main entry point for the application, initializing Flask and setting up routes.
- **config.py**: Contains configuration settings for the Flask application and MongoDB connection.
- **routes.py**: Defines the routes/endpoints for the application.
- **requirements.txt**: Lists all the required dependencies for running this application.
- **uploads/**: A directory for storing uploaded files like images.

## 🛠️ Prerequisites

Before running this project, ensure you have the following installed:
- Python 3.11 or later
- pip (Python package manager)
- MongoDB (for database storage)

## ⚙️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aishwaryamensinkai/OverlayStream.git
   cd OverlayStream/backend/
   ```

2. **Create a virtual environment:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **Install the required packages:**
   ```bash
   pip install -r requirements.txt
   ```

   The `requirements.txt` file includes:
   ```
   Flask==2.0.1
   flask-cors==3.0.10
   pymongo==3.12.0
   ```

## 🚀 Running the Application

1. Start your MongoDB server if it's not already running.
2. Run the Flask application:
   ```bash
   python app.py
   ```
3. By default, the application will run on `http://localhost:5000`.

## 🔄 Available Routes

The available routes for this application are defined in `routes.py`. They interact with the MongoDB database and perform basic CRUD (Create, Read, Update, Delete) operations.

## 🛡️ Configuration

You can modify the MongoDB configuration settings in `config.py` to connect to your desired database.

## 🖼️ Handling File Uploads

The `uploads` directory is used to store uploaded files such as `DSC00620.jpg` and `logo.png`. You can add or remove files as needed.

## 🔧 Additional Information

- **Python Cache Files**: The `__pycache__` folder contains Python's compiled bytecode files. You can safely ignore or delete this folder if needed.

## 📑 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Feel free to submit issues, fork the repository, and make pull requests for any improvements or bug fixes.

## 📝 Author

- Aishwarya Mensinkai

Enjoy coding!
