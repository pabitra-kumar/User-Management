
# UserMagnet

## Tech-Stacks: 
1. React.js
2. Redux
3. Node.js
4. Express
5. MongoDB

## BackEnd-API

### CRUD 
(Create, Read, Update, Delete) operations for managing the user data.

- GET /api/users: Retrieve all users with pagination (upto 20 users) support.
- GET /api/users/:id: Retrieve a specific user by ID.
- POST /api/users: Create a new user.
- PUT /api/users/:id: Update an existing user.
- DELETE /api/users/:id: Delete a user.

### Implemented filtering, searching, and pagination on the backend
- #### Implement filtering logic to filter users based on the provided filter criteria (Domain, Gender, and Availability)
  - GET /api/users?domain=`IT`: Retrieve all users of domain `IT` with pagination.
  - GET /api/users?gender=`Male`: Retrieve all `Male` users with pagination
  - GET /api/users?available=`true`: Retrieve all `available` users with pagination
- #### Implement searching logic to search for users by their names.
    - GET /api/users?name=`any`: Retrieve all users with pagination and having key-word `any` in name
- #### Implement pagination logic to retrieve a specific number of users per page.
    - - GET /api/users?page=`4`: Retrieve all users in Page `4` (only if there is more than `(4-1)*20 = 60` users)
#### Deployed Link:   [click here to see api](https://user-management-backend-ovx4.onrender.com/api/users?page=1)

## FrontEnd
