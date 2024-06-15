# Easy Bazaar

This repository contains both the server and user interface code for the Easy Bazaar web application. Easy Bazaar is an online marketplace where users can browse, manage, and purchase products and categories. The backend is built using Node.js, Express.js, and MongoDB, with authentication handled via JWT (JSON Web Tokens). The frontend is built using React.js, providing a user-friendly interface for customers.

## Table of Contents

- [Easy Bazaar](#easy-bazaar)
  - [Table of Contents](#table-of-contents)
  - [Easy Bazaar Server](#easy-bazaar-server)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
    - [Usage](#usage)
    - [API Endpoints](#api-endpoints)
      - [Categories](#categories)
      - [Products](#products)
      - [Users](#users)
    - [License](#license)
  - [Easy Bazaar UI](#easy-bazaar-ui)
    - [Features](#features)
    - [Live Link](#live-link)
    - [Installation](#installation-1)
    - [Technologies Used](#technologies-used)
    - [Contributing](#contributing)
    - [Contact](#contact)

## Easy Bazaar Server

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/easy-bazar-server.git
    cd easy-bazar-server
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Set up the environment variables as described in the [Environment Variables](#environment-variables) section.

4. Start the server:
    ```sh
    npm start
    ```

### Environment Variables

Create a `.env` file in the root directory of your project and add the following environment variables:

```env
PORT=your_port_number
DB_URI=your_mongodb_uri
```

### Usage

To start the server, run:

```sh
npm start
```

The server will be running on the port specified in the `.env` file.

### API Endpoints

#### Categories

- **Create Category**
  - `POST /categories`
  - Request Body: `{ "name": "Category Name" }`
  - Response: JSON object of the created category

- **Get All Categories**
  - `GET /categories`
  - Response: Array of categories

#### Products

- **Create Product**
  - `POST /products`
  - Headers: `{ "Authorization": "Bearer <token>" }`
  - Request Body: `{ "name": "Product Name", "price": 100, "categoryId": "categoryId" }`
  - Response: JSON object of the created product

- **Update Product**
  - `PATCH /products/:id`
  - Headers: `{ "Authorization": "Bearer <token>" }`
  - Request Body: `{ "name": "Updated Product Name", "price": 150 }`
  - Response: JSON object of the updated product

- **Delete Product**
  - `DELETE /products/:id`
  - Headers: `{ "Authorization": "Bearer <token>" }`
  - Response: JSON object with deletion status

- **Get All Products**
  - `GET /products`
  - Response: Array of products

- **Get Product by ID**
  - `GET /products/:id`
  - Response: JSON object of the product

#### Users

- **Create User**
  - `POST /users`
  - Request Body: `{ "email": "user@example.com", "password": "password" }`
  - Response: JSON object with creation status and token

- **Get All Users**
  - `GET /users`
  - Response: Array of users

- **Get User by Email**
  - `GET /users/:email`
  - Response: JSON object of the user

- **Update User**
  - `PATCH /users/:email`
  - Headers: `{ "Authorization": "Bearer <token>" }`
  - Request Body: `{ "name": "Updated User Name" }`
  - Response: JSON object of the updated user

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Easy Bazaar UI

### Features

- Browse products by category
- Search for specific products
- Smooth search with results shown below without changing the page
- See all products
- Add new products
- Edit existing products
- Delete products
- View user details
- Edit user details
- Manage cart products using local storage

### Live Link

[Live](https://easy-bazar-ui.vercel.app/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/easy-bazaar-ui.git
    cd easy-bazaar-ui
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

### Technologies Used

- React.js
- HTML
- CSS
- JavaScript

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

### Contact

For any questions or inquiries, please contact the project team at [mynul.sakil@gmail.com](mailto:mynul.sakil@gmail.com).