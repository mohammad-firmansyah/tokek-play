const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const corsOptions = {
  origin: "*"
} 
const db = require("./app/models")

app.use(cors(corsOptions))
app.use(express.json())

db.mongoose.connect(db.url,{
  'useNewUrlParser': true,
   'useUnifiedTopology': true
})
.then(() => console.log("database connected"))
.catch(err => {
  console.log(`gagal konek database : ${err.message}`);
  process.exit()
})

require('./app/routes')(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
