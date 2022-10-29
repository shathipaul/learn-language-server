const { request } = require('express');
const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json');
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('course API Running');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})
app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(courses)
    }
    else {
        const coursesID = courses.filter(course => course.id === id)
        res.send(coursesID);
    }

})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const coursesID = courses.find(course => course.user_id === id)
        res.send(coursesID);
})


app.listen(port, () => {
    console.log('Learn language server running', port);
})