# WebTech
### basic stuff i don't want to make a .txt for:
* installations  <br>
```bash
npm init -y
npm install yarn
yarn add express
yarn add nodemon
yarn add vash
yarn add mongoose
```

* to activate nodemon <br>
```bash
npx nodemon index.js
```
* to run a file in terminal <br>
```bash
node index.js
```

* to activate vash <br>
```bash
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'vash');
```

* to run json <br>
```bash
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
```
________________________________________
#### mongodb stuff
```bash
yarn add mongoose
```

* to import db and collection <br>
```bash
mongoimport --jsonArray JSON\courses.json -d academic -c courses
```

* open mongodb shell (i didn't have shell installed) <br>
```bash
mongosh
show dbs
show academic
show collections
db.courses.findOne()
```

* download <br>
course.js <br>
schema.js <br>
* make model <br>
```bash
node schema.js courses.json > Course.js
```
* Course.js moved to models <br>
* keep db and schema together <br>
* make index.js (rest continued in mongodb project) <br>
inset (>) <br>
append (>>) <br>
