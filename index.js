import "babel-polyfill"
import express         from "express"
import compression     from "compression"
import morgan          from "morgan"
import bodyParser      from "body-parser"
import { createStore } from "redux"

var PORT = Number( process.env.PORT || 4000 )
var app  = express()

app.use(morgan("combined"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(compression())

var send = name => (req, res) =>
  res.sendFile(`${ __dirname }/static/${ name }`)

app.get("/", send("index.html"))
app.get("/app.js", send("app.js"))
app.get("/app.css", send("app.css"))

var __counters = {}

// counters index
app.get("/api/v1/counters", (req, res) => {
  res.json(__counters)
})

// counters delete all
app.delete("/api/v1/counters", (req, res) => {
  __counters = {}
  res.json({ status:200 })
})

// counters create
app.post("/api/v1/counters", (req, res) => {
  __counters[req.body.id] = req.body
  res.json({ status:200 })
})

// counter inc
app.post("/api/v1/counter/inc", (req, res) => {
  var { id } = req.body
  __counters[id].count = __counters[id].count + 1
  res.json({ status:200 })
})

app.post("/api/v1/counter/dec", (req, res) => {
  var { id } = req.body
  __counters[id].count = __counters[id].count - 1
  res.json({ status:200 })
})

app.delete("/api/v1/counter", (req, res) => {
  var { id } = req.body
  delete __counters[id]
  res.json({ status:200 })
})

app.listen(PORT, console.log.bind(null, `PORT: ${ PORT }`))
