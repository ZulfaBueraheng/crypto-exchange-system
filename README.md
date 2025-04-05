# Cryptocurrency Exchange System

A backend system for exchanging cryptocurrencies such as **Bitcoin (BTC)**, **Ethereum (ETH)**, **XRP**, and **Dogecoin (DOGE)**. This system allows users to buy/sell cryptocurrencies with Fiat currencies (THB, USD), transfer cryptocurrencies within the platform, and transfer to external addresses. The platform supports user accounts, transactions, and records of buy/sell/exchange activities.

## Features
- **User Account Management**: Users can register and manage their accounts.
- **Cryptocurrency Exchange**: Users can buy/sell cryptocurrencies using Fiat currencies and exchange cryptocurrencies with other users.
- **Wallet Management**: Users have wallets that hold cryptocurrencies, and they can transfer funds within the platform or to external addresses.
- **Transaction History**: All buy/sell and transfer transactions are logged for tracking and history.
- **Multi-Currency Support**: Cryptocurrencies supported: **BTC**, **ETH**, **XRP**, **DOGE**.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Framework for building the RESTful API.
- **Sequelize**: ORM to interact with MySQL database.
- **MySQL**: Database for storing user data, wallet information, and transactions.
- **dotenv**: To manage environment variables.

## Setup Instructions

### 1. Clone the Repository
Clone the repository to your local machine:
git clone https://github.com/ZulfaBueraheng/crypto-exchange-system.git

### 2. Install Dependencies
Navigate to the project directory:
cd crypto-exchange-system
Install all required dependencies:
npm install

### 3. Configure Environment Variables
Create a .env file in the root of your project with the following content:
DB_NAME=crypto_exchange_db
DB_USER=root
DB_PASS=your_password
DB_HOST=localhost
DB_DIALECT=mysql

### 4. Setup the Database
Make sure your MySQL server is running. Then run the following to sync the schema and seed the data:
node seed.js

### 6. Start the Server
Run the application using:
npm start