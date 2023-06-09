### Lender System Software

To install dependencies
-npm install

Commands to establish sequelize in the project
-npx sequelize init: this is used to create the important directories like models,migrations,seeders and config.json

Create a file ".env" and declare a variable "PORT=<PORT_NUMBER>" to run the node server
To create a db model

To create a users model
-npx sequelize model:generate --name Users --attributes authId:String,panId:String,password:String,isActive:String,createdOn:Date,createdBy:String,updatedOn:Date,updatedBy:String,isDeleted:String
