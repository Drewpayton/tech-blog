const { Blog, User} = require('../models');
const router = require('express').Router();
const Auth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {

        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('homepage', {
            blogs,
            loggedin: req.session.logged_in
        })

    } catch (err) {
        res.status(500).json(err)

    }
})

module.exports = router