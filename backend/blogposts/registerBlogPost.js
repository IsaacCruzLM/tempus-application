const Services = require('../../services/blogposts');

module.exports = async (req, res) => {
  try {
    const response = await Services.registerBlogPost(req.body, req.user.dataValues.id);

    return res.status(201).send(response.blogPost);
  } catch (err) {
    console.log(err.message);
    return res.status(500).end();
  }
};