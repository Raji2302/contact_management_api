# CONTACT MANAGEMENT SYSTEM (BACKEND REST API PROJECT)

## Project Documentation

**Submitted by:**  
- RAJA RAJESHWARI A  
- AARUDHRA V  
- NETHRA B  
- PUNITHAVALLI R  

**FROM:**  
II BSC COMPUTER SCIENCE  
DEPARTMENT OF COMPUTER SCIENCE  
QUAID-E-MILLATH GOVERNMENT COLLEGE FOR WOMEN  

---

## Abstract

The Contact Management System is an API application developed using Node.js, Express.js, and MongoDB.  
The purpose of this system is to allow users to manage their personal and professional contacts efficiently.  
Users can register, log in securely, and perform CRUD operations such as creating, reading, updating, and deleting contacts.  
The system stores all data in a MongoDB database and uses Express.js for server-side routing and request handling.  
Thunder Client is used to test and validate API endpoints during development.  
The project follows a modular architecture with routes, controllers, models, and middleware to ensure maintainability and scalability.

---

## Introduction

Managing contacts is an essential requirement in both personal and professional environments. Traditionally, contacts were stored in notebooks or spreadsheets. However, these methods are inefficient when managing large amounts of information.  
A digital contact management system provides better accessibility, security, and organization.  

This project aims to create a backend system that allows users to store and manage contacts using a REST API.  
The system supports authentication features such as user registration and login, ensuring that each user's data is securely managed.  
By implementing modern backend technologies, this project demonstrates the principles of API design, database integration, and server-side programming.

---

## Problem Statement

Many individuals and organizations struggle with organizing and managing large sets of contact information.  
Manual systems lack search capabilities, data security, and efficient management features.  
The Contact Management System addresses this problem by providing a centralized database and API-based access for managing contacts.  
Users can easily perform operations such as adding new contacts, viewing existing contacts, updating information, and deleting outdated records.

---

## Objectives

1. To design a REST API for managing contacts.  
2. To implement user authentication using Node.js.  
3. To store and retrieve data using MongoDB.  
4. To test API endpoints using Thunder Client.  
5. To demonstrate CRUD operations in a backend application.

---

## Technologies Used

- **Node.js:** JavaScript runtime for building scalable backend applications.  
- **Express.js:** Lightweight framework for building APIs and handling HTTP requests.  
- **MongoDB:** NoSQL database used to store contact information.  
- **Mongoose:** Schema-based solution for modeling application data.  
- **Thunder Client:** VS Code extension used to test API endpoints.

---

## Database Design

The system uses two main collections: **Users** and **Contacts**.  

- **Users Collection:** Stores authentication information such as name, email, and password.  
- **Contacts Collection:** Stores contact details including name, email, phone number, and the associated user ID.

---

## API Endpoints

- **Register new user:** `POST /api/auth/register`  
- **User login:** `POST /api/auth/login`  
- **Get all contacts:** `GET /api/contacts`  
- **Create new contact:** `POST /api/contacts`  
- **Update Contact:** `PUT /api/contacts/:id`  
- **Delete Contact:** `DELETE /api/contacts/:id`  

---

## Implementation Details

### Overview

- Backend server developed using Node.js and Express.js  
- Data stored in MongoDB using Mongoose  
- Users can register, login, create, view, update, delete, and search contacts  
- APIs tested using Thunder Client  
- Modular architecture: models, routes, controllers, middleware  

### Development Environment

- **Backend Framework:** Node.js  
- **Web Framework:** Express.js  
- **Database:** MongoDB  
- **ODM Library:** Mongoose  
- **Code Editor:** Visual Studio Code  
- **API Testing Tool:** Thunder Client  

### Project Structure---project 
                      --server.js
                      --db.js
                      --package.json
                      --package-lock.json
                      --models
                             ---usermadels.js
                             --contactmodel.js
                      --routes
                             --authroutes.js
                             --contactroutes.js
                      --middleware
                              --authmiddleware.js
                              --errorhandle.js
                      --.env
                      --node-modules
                      --.gitignore
                      --README.md
                      --gitattirbutes
                      --uploads
                              --My_Video_Final.mp4
                              
## Contact Management Implementation

- **Adding Contacts:** Users provide name, email, phone number → stored in MongoDB.  
- **Viewing Contacts:** Users retrieve all contacts linked to their account.  
- **Updating Contacts:** Modify existing contact info.  
- **Deleting Contacts:** Remove outdated contacts permanently.  
- **Searching Contacts:** Search contacts by name.

---

## Database Implementation

- **Users Collection:** Stores registered user details (name, email, password)  
- **Contacts Collection:** Stores contact info with a user reference ID  
- Ensures secure and isolated user data  
- Mongoose schemas enforce validation and structure  

---

## API Communication

- RESTful API using HTTP methods:  
  - **POST:** Create records  
  - **GET:** Retrieve records  
  - **PUT:** Update records  
  - **DELETE:** Remove records  
- Responses in JSON format  

---

## Testing and Validation

- APIs tested using Thunder Client  
- Test cases include:  
  - Registering new user  
  - Login (valid/invalid)  
  - Adding, retrieving, updating, deleting, searching contacts  
- Verified responses for correctness  

---

## Error Handling

- Invalid input data  
- Authentication failures  
- Database errors  
- Meaningful error messages provided  

---

## Summary of Implementation

- Node.js + Express for scalable backend  
- MongoDB for efficient storage  
- Authentication ensures secure access  
- Modular structure improves maintainability and scalability  
- Ready for future enhancements (frontend, cloud deployment, mobile support)  

---

## System Architecture

1. **Presentation Layer:** User interaction via API testing tool (Thunder Client)  
2. **Application Layer:** Controllers, routes, middleware, authentication  
3. **Data Layer:** MongoDB stores user and contact data  

---

## Advantages

- Organized contact management  
- Secure authentication  
- Quick search and retrieval  
- Scalable backend architecture  
- Modern technologies for performance and maintainability  

---

## Limitations

- Backend-only project, no GUI  
- Requires technical tools to interact  
- Designed for small-scale usage  

---

## Future Enhancements

- Develop frontend user interface  
- Advanced search filters  
- Profile management for users  
- Deploy to cloud platforms  
- Mobile app support  

---

## Conclusion

The Contact Management System successfully demonstrates backend development using Node.js, Express, and MongoDB.  
It provides secure, scalable, and efficient contact management through RESTful APIs.  
The project meets its objectives and forms a solid foundation for future enhancements.
