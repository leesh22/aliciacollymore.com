/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreatePage = async ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {
      if (page.path.match(/^\/case-studies/)) {
        page.layout = "caseStudies";
        createPage(page);
      }
      resolve();
    });
  };