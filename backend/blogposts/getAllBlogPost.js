const Services = require('../../services/blogposts');

module.exports = async (req, res) => {
  try {
    const blogposts = await Services.getAllBlogPost();

    return res.status(200).send(blogposts);
  } catch (err) {
    console.log(err.message);
    return res.status(500).end();
  }
};