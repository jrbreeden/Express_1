const express = require("express")
const app = express();
app.get('/greeting/:name', (req, res) => {
    console.log(req)
    // console.log(req.params)
    res.send('hello' + req.params.name)
})







app.listen(8000, () => {
    console.log("Listening on port 8000!!!")
})