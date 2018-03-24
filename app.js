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

app.listen(3000, () => {
    console.log('running ....')
})