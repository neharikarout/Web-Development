# Restfull api :

Rules

![image](https://github.com/neharikarout/Web-Development/assets/144371961/98075669-e97d-47e8-9331-1da603efadd1)

### 1. Server client architecture
- both are different entities none of them should be dependent on each other

### 2. html and json
html - ssr (server side rendering) - data dependent on server -fast -use when you know there is only browser's client

json - client can independently render the data

### 3. always respect all http methods:
- GET , POST , PUT , PATCH , DELETE
- eg : get /user - users data read kro and return data
       post /user - handle new user creation
       patch /user - update the user

       (as post can be used to update and create but dont do this)

