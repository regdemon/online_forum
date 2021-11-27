<p align="center">
  <img height="300px"src="assets/banner.png" />
</p>
<hr />

> ## Deployment
- Application deployed at: [Application](https://studento.netlify.app/)

> ## Demo Video
- [Demo video]()

> ## Tech Stack 
- ReactJS with Redux: Frontend
- Material UI: Frontend styling and components
- Node.js, Express.js: Backend
- MongoDB: Database

> ## Features
1. User authentication using Google credentials or email_id-password 
2. Pagination
4. Create/Edit/Delete Post
5. Like/Comment on Post
6. Search posts by title/tags
7. Recommended posts

> ## Local Setup
- client
```sh
   cd client
   npm install 
   Replace base url in line 3 of ./src/api/index.js with 'http://localhost:5000/'
   npm start
```

- server
```sh
   cd server
   npm install 
   npm start
```

> ## Deployment
- Frontend is deployed to Netlify
- Server is deployed to Heroku
- MongoDb is deployed to MongoAtlas