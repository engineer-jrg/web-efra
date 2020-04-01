
const express =  require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index.html', {title: 'Efrain RODRIGUEZ'});
});

router.get('/contact', (req, res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('contact.html', {title: 'Efrain RODRIGUEZ | Contact'});
});

router.get('/publications/journalpapers', (req, res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('publications/journalpapers.html', {title: 'Efrain RODRIGUEZ | Publications'});
});

router.get('/publications/conferencepapers', (req, res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('publications/conferencepapers.html', {title: 'Efrain RODRIGUEZ | Publications'});
});

router.get('/publications/theses', (req, res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('publications/theses.html', {title: 'Efrain RODRIGUEZ | Publications'});
});

router.get('/publications/workshops', (req, res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('publications/workshops.html', {title: 'Efrain RODRIGUEZ | Publications'});
});

router.get('/ISO-10303-238', (req, res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('ISO-10303-238.html', {title: 'Efrain RODRIGUEZ | Projects'});
});

module.exports = router;