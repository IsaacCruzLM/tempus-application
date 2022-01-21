const Services = require('../../services/blogposts');

const NOT_FOUND = { message: 'Post does not exist' };

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const blogpost = await Services.getBlogPostById(id);

    if (!blogpost) return res.status(404).send(NOT_FOUND);

    return res.status(200).send(blogpost);
  } catch (err) {
    console.log(err.message);
    return res.status(500).end();
  }
};