<div align="center">
  <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="Spotify Logo" width="300" />
  
  # 🎵 Full-Stack Spotify Clone
  
  *A comprehensive Spotify clone built with the MERN stack (MongoDB, Express, React, Node.js) and Cloudinary for media storage.*
</div>

---

## 🌟 Features

- **User Interface**: Beautiful and responsive UI built with React, heavily inspired by Spotify's iconic design.
- **Audio Player**: Fully functional custom audio player with play, pause, next, previous, shuffle, and volume controls.
- **Admin Dashboard**: A dedicated, secure admin panel to manage albums and songs effortlessly.
- **Media Storage**: Audio files and images are securely uploaded and served globally via Cloudinary.
- **Database**: MongoDB for storing song metadata, album details, and application data.

## 🛠️ Technology Stack

- **Frontend**: React.js, Vite, Context API for state management.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Mongoose ODM).
- **Cloud Storage**: Cloudinary (for song audio files and cover images).
- **File Uploads**: Multer.

## 📂 Project Structure

This repository is structured into three main directories, each serving a specific role:

- 🎨 **`/frontend`** - The main user-facing application where users can browse, discover, and play music.
- ⚙️ **`/backend`** - The RESTful API built with Express, connecting to MongoDB and handling media uploads to Cloudinary.
- 🎛️ **`/spotify-clone admin`** - The internal admin dashboard for adding, editing, and deleting songs and albums.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) URI (Local or Atlas cluster)
- [Cloudinary](https://cloudinary.com/) Account credentials

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Onotoki/Spotify-Clone.git
   cd Spotify-Clone
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory and add your secret credentials:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   CLOUDINARY_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
   PORT=4000
   ```
   Start the backend development server:
   ```bash
   npm run server
   ```

3. **Frontend Setup**
   Open a new terminal window:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Admin Dashboard Setup**
   Open another terminal window:
   ```bash
   cd "spotify-clone admin"
   npm install
   npm run dev
   ```

## 📸 Screenshots

*(Add screenshots of your amazing UI here! You can drag and drop images directly into GitHub)*

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).
