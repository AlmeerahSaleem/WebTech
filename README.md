# WebTech
### basic stuff i don't want to make a .txt for:
* installations
npm init -y <br>
npm install yarn <br>
yarn add express <br>
yarn add nodemon <br>
yarn add vash <be>
yarn add mongoose <be>
<br>
* to activate nodemon
npx nodemon index.js <br>
*to run a file in terminal 
node index.js <br>

* to activate vash
app.set('views', path.join(__dirname, 'views')); <br>
app.set('view engine', 'vash');

* to run json
app.use(express.urlencoded({ extended: false })); <br>
app.use(express.json());
________________________________________
#### mongodb stuff
yarn add mongoose <br>

* to import db and collection
mongoimport --jsonArray JSON\courses.json -d academic -c courses <br>

* open mongodb shell (i didn't have shell installed)
mongosh <br>
show dbs <br>
show academic <br>
show collections <br>
db.courses.findOne() <br>

* download
course.js <br>
schema.js <br>
* make model
node schema.js courses.json > Course.js <br>
* Course.js added to models
* keep db and schema together
* make index.js > rest continued in mongodb project
<br>
inset (>) <br>
appent (>>) <br>
