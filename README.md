# Duoc-demo-apirest

## First we clone the repository
we move to the branch:

```bash
git checkout feature/conf_server
```

## Create .env in the root of the project and add
```env
# environment values
PORT=<port_number | example 4000>
# database credentials and location
MONGODB_CNN=<mongo_connection string>
```
## Install dependencies:
```
npm install
```
## We run with 
```bash
node app.js
```
o

```bash
npm install nodemon -g
nodemon app.js
```
