 
# eCommerce Store Website
Welcome to the eCommerce Store Website! This project is built using React, the FakeStore API, and Firebase, allowing users to browse products, add items to the cart, proceed to the payment page, and view their order history.

# Features 
1.  Browse a wide range of products from different categories.
2.  Add products to the cart and review the cart contents.
3.  Proceed to the payment page to complete the purchase.
4. View order history and track previous orders.

# Prerequisites
Node.js and npm are required to run the project.
Firebase account for database and authentication.

# Getting Started
Clone the repository:

  git clone https://github.com/your-username/eCommerceStore.git
  cd eCommerceStore
  Install dependencies:
  npm install
  Set up Firebase:

a. Create a Firebase project and obtain your Firebase configuration.

b. Replace the placeholder Firebase configuration in src/firebaseConfig.js with your actual Firebase configuration.

Run the application:
npm run dev

Open your browser and navigate to http://localhost:3000 to view the website.
# Using Firebase
Firestore Database
Firestore is used to store user orders and order history. Here's how you can use Firestore in your project:

 Import Firebase:

import firebase from "firebase/app";
import "firebase/firestore";
Initialize Firestore:

const firebaseConfig = {
  // Your Firebase configuration
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

Firebase Authentication
Firebase Authentication is used to manage user authentication. Here's how you can set it up:

Import Firebase Auth:

import "firebase/auth";
Initialize Firebase Auth:

const auth = firebase.auth();
Implement user authentication features using auth.

# Contributing
Contributions are welcome! Feel free to submit pull requests.
