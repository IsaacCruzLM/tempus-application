const Services = require('../../services/blogposts');

module.exports = async (req, res) => {
  try {
    const { postId } = req.params;
    const { id } = req.user.dataValues;

    const response = await Services.deleteBlogPostById(postId, id);

    if (response.message === 'Post does not exist') return res.status(404).send(response);
    if (response.message === 'Unauthorized user') return res.status(401).send(response);

    return res.status(204).end();
  } catch (err) {
    console.log(err.message);
    return res.status(500).end();
  }
};