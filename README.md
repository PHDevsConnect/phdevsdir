# phdevsdir
A Directory app for web devs in Port Harcourt, Nigeria. Built with React, Express and MongoDB

# API DOCS

`POST` `https://phdevsdir.herokuapp.com/api/v1/developers` - create a new developer

Params

- `first_name` (String) `required`,
- `last_name` (String) `required`
- `email` (String) `required`
- `stack` (Comma Delimited String) `optional`
- `github_url` (String) `required`

`GET` `https://phdevsdir.herokuapp.com/api/v1/developers` - display all developers

# Contributing
- Fork the repo
- Make your changes
- Create a PR

# Using Postman to test routes
- Install Postman (Google Chrome Required) https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en
- Launch the app from chrome://apps
- Paste the app link in the url bar, set the request method (POST, GET, PUT, UPDATE, etc)
- Hit "send"
