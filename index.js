const { request } = require('express');
const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json');
const languageDetail = require('./data/languageDetail.json')

app.get('/', (req, res) => {
    res.send('language API Running');
})

app.get('/language-categories', (req, res) =>{
    res.send(categories);
})

app.get('/course/:id', (req, res) =>{
    const id = req.params.id;
    const selectedLanguage = languageDetail.find( language => language.id === id)
    res.send(selectedLanguage);
})

app.get('/languageDetail/', (req, res) =>{
    res.send(languageDetail);
})

app.listen(port, () => {
    console.log('Learn language server running', port);
})