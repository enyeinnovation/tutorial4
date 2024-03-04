const express = require("express")

const app = express()

app.use(express.static("frontend"))

app.listen(3000, console.info("server in http://localhost:3000"))