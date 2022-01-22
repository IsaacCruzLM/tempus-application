const Services = require('../../services/blogposts');

module.exports = async (req, res) => {
  try {
    const { q: searchTerm } = req.query;

    console.log(searchTerm);

    const blogposts = await Services.searchBlogPostByText(searchTerm);

    return res.status(200).send(blogposts);
  } catch (err) {
    console.log(err.message);
    return res.status(500).end();
  }
};