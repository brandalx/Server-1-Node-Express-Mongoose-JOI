# server1-Node-Express-Mongoose-JOI

## To run this prject you will have to install all dependencies, use follow command: `npm install`
## Please pay attention: to make this server work properly you should: 
 ### 1. Create Data base in Mongo DB with the name  `fullstack23`.
 ### 2. Create collection inside of it named `s1books`
 - If you want customise those names, you will have to update all dependencies by your own
 ### 3. Add to your created collection `books.json` from folder `json`




## To run the server you should:
- Run the server. Use `debug` option in your VS code or run `npm start` into the console
- After this you should follow to the adress: http://localhost:3001/
- You may also visit directly http://localhost:3001/s1books

## Some options you can do with this simple server:


### Query CRUD "GET" request   http://localhost:3001/s1books?sort=name&page=1&reverse=yes

-  its make possible to show needed amount of pages, but its query is limited by 4 per request, to change it you can edit number at `page=1`
-  you may sort by `sort=search value`  
- you may reverse your search query by `reverse`


### Optional search by `name` and `info`

- You may want to make manual search by `/search` route. To do so you can add `/search?search=searchingvalue` to your query, like so : http://localhost:3001/s1books/search?search=hello

## Thats it! Hope you enjoy my work


