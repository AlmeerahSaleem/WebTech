# WebTech
### basic stuff i don't want to make a .txt for:
* installations  <br>
> npm init -y <br>
> npm install yarn <br>
> yarn add express <br>
> yarn add nodemon <br>
> yarn add vash <br>
> yarn add mongoose <br>

* to activate nodemon <br>
> npx nodemon index.js <br>
* to run a file in terminal <br>
> node index.js <br>

* to activate vash <br>
> app.set('views', path.join(__dirname, 'views')); <br>
> app.set('view engine', 'vash');

* to run json <br>
> app.use(express.urlencoded({ extended: false })); <br>
> app.use(express.json());
________________________________________
#### mongodb stuff
> yarn add mongoose <br>

* to import db and collection <br>
> mongoimport --jsonArray JSON\courses.json -d academic -c courses <br>

* open mongodb shell (i didn't have shell installed) <br>
> mongosh <br>
> show dbs <br>
> show academic <br>
> show collections <br>
> db.courses.findOne() <br>

* download <br>
course.js <br>
schema.js <br>
* make model <br>
> node schema.js courses.json > Course.js <br>
* Course.js moved to models <br>
* keep db and schema together <br>
* make index.js (rest continued in mongodb project) <br>
inset (>) <br>
append (>>) <br>
