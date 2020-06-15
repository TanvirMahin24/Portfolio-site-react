const routes = require("next-routes");

module.exports = routes()
  .add("portfolioNew", "/portfolios/new")
  .add("portfolio", "/portfolio/:id")
  .add("portfolioEdit", "/portfolios/:id/edit")
  .add("userBlogs", "/blogs/dashboard")
  .add("blogEditor", "/blogs/new")
  .add("blogDetail", "/blogs/:slug")
  .add("blogEditorUpdate", "/blogs/:id/edit");
