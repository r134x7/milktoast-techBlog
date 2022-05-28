// taken from 14-MVC/28-Stu_Mini-Project/controllers/api/index.js

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes')

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('./comments', commentRoutes);

module.exports = router;
