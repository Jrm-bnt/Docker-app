const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const app = express()

const db = mysql.createPool({
  host: 'customlink-db',
  user: 'root',
  password: 'root',
  database: 'mydatabase',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

app.use(cors())

app.get('/', (req, res) => {
  const query = 'SELECT * FROM clients'

  db.query(query, (err, rows) => {
    if (err) {
      console.error('Request error : ' + err)
      res.status(500).send('Error')
    } else {
      res.json(rows)
    }
  })
})

// Démarrez le serveur Express
const port =  3050
app.listen(port, () => {
  console.log(`Server Express : ${port}`)
})
