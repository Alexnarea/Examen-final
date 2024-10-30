import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Mi CV' });
});

router.get('/skills', (req, res) => {
    res.render('skills', { title: 'Skills' });
});

router.get('/experience', (req, res) => {
    res.render('experience', { title: 'Experiencia' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contacto' }); // Agrega el título aquí
});

export default router;
