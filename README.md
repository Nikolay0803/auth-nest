# Learn Lingo

**Learn Lingo** is an interactive language learning application that integrates user registration, authentication, and content access features. Developed with a Nest.js backend and a Next.js frontend, it offers a robust and user-friendly interface for language learning.

## Technology Stack

### Backend

- **Nest.js**: A scalable and maintainable backend framework with a modular architecture.
- **JWT (JSON Web Tokens)**: Provides secure authentication with access and refresh tokens.
- **Prisma ORM**: Simplifies database interactions, including data modeling and migrations.
- **Swagger**: Automatically generates API documentation, making API testing and integration more straightforward.

### Frontend

- **Next.js**: Framework for server-side rendering (SSR) and static site generation (SSG) to ensure optimal performance and SEO.
- **Next-auth**: Manages user authentication and session management, supporting multiple authentication providers and tokens.
- **React**: A library for building user interfaces with a component-based approach.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive and visually appealing designs.
- **React-toastify**: Displays real-time notifications for user interactions such as registration confirmations and error messages.

## Key Features

- **User Registration and Authentication**:
  - Allows users to create accounts and log in using JWT tokens.
  - Ensures secure password storage and session management.
![User Registration and Authentication](https://github.com/Nikolay0803/auth-next/blob/master/photos-app/reg-lin.png)
![User Registration and Authentication](https://github.com/Nikolay0803/auth-next/blob/master/photos-app/log-lin.png)
  

- **Home Page**:
  - Available to all users.
  - Provides main content and information about the application.
  ![Home Page](https://github.com/Nikolay0803/auth-next/blob/master/photos-app/home-lin.png)

- **Teachers Page**:
  - Restricted to authenticated users.
  - Features specialized information and resources accessible only after login.
  ![Teachers Page](https://github.com/Nikolay0803/auth-next/blob/master/photos-app/teach-lin.png)

- **API Documentation**:
  - Swagger facilitates automatic API documentation generation for easy verification and testing.
  ![Teachers Page](https://github.com/Nikolay0803/auth-next/blob/master/photos-app/swag-lin.png)

## Setup and Running


- **Running the Frontend**:
```bash
# Clone
$ git clone <repositorie>
```
  - add your .env
  ```bash
#Install
$ npm install
``` 
```bash
#Start
$ npm run dev
```
 
- **Running the Frontend**:
```bash
# Clone
$ git clone <repositorie>
```
  - add your .env
  ```bash
#Install
$ npm install
``` 
```bash
#Start
$ npm run start:dev
```
