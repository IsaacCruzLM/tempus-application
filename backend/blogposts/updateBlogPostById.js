const Services = require('../../services/blogposts');

module.exports = async (req, res) => {
  try {
    const { postId } = req.params;
    const { id } = req.user.dataValues;
    console.log(id);

    const response = await Services.updateBlogPostById(req.body, postId, id);

    if (response.message) return res.status(401).send(response);

    return res.status(200).send(response);
  } catch (err) {
    console.log(err.message);
    return res.status(500).end();
  }
};