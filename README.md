# WebTech
### basic stuff i don't want to make a .txt for:
npm init -y <br>
npm install yarn <br>
yarn add express <br>
yarn add nodemon <br>
yarn add vash <br> 
npx nodemon index.js <br>
node index.js <br>

* to activate vash

app.set('views', path.join(__dirname, 'views')); <br>
app.set('view engine', 'vash');

* to run json

app.use(express.urlencoded({ extended: false })); <br>
app.use(express.json());
