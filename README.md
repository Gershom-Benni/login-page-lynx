# Beautiful Login Page with Firebase Google Authentication

This project features a visually appealing login page built with React.js that uses Firebase for Google Authentication and includes some great hover effects for an enhanced user experience.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Welcome to the beautiful login page project! This login page is designed to be visually appealing and user-friendly. It integrates Firebase for Google Authentication, making it easy to log in with a Google account. The page also includes various hover effects to improve the overall user experience.

## Features

- Firebase Google Authentication
- Visually appealing design
- Smooth hover effects
- 
## Technologies Used

- React.js
- CSS
- Firebase

## Installation

To run this project locally on your machine, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/beautiful-login-page.git
    ```
2. Navigate to the project directory:
    ```sh
    cd login-page-lynx
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Set up Firebase for your project:
    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Create a new project.
    - Enable Google Authentication in the Authentication section.
    - Obtain your Firebase configuration and replace the placeholder in your `.env` file.

2. Create a `.env` file in the root of your project and add your Firebase configuration:
    ```plaintext
    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id
    ```

3. Start the development server:
    ```sh
    npm start
    ```

4. Open your browser and go to `http://localhost:3000` to view the login page.

## Contributing

Contributions are welcome! If you have any ideas or improvements, please fork the repository and submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Thank you for checking out this project! Enjoy the beautiful login page and the seamless Google Authentication experience.
