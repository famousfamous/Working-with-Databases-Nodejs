// const { render } = require('ejs');
const express = require('express');

//inport the connection we created in the 'data' folder name 'database.js'
const db = require('../data/database');

const router = express.Router();

router.get('/', function(req, res){
res.redirect('/posts')
});

router.get('/posts', function(req, res){
    res.render('posts-list');
});

router.get('/new-post', async function(req, res){
  const [authors] = await db.query('SELECT * FROM authors');
    res.render('create-post', {authors: authors});
});

module.exports = router;