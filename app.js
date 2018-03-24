const express = require('express');
const app = express()


app.set('views', './views')
app.set('view engine', 'ejs')
// app.set("view options", { layout: "mylayout.ejs" });

app.get('/', (req, res) => {
    res.render('index', { layout: 'mylayout' })
})
app.get('/scan', (req, res) => {
    res.render('scan')
})
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('running ....')
})