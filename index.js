const bot = require("./bot");
const configurator = require("./configurator");

const { notifyMergedPR, notifyOpenedPR, startBot } = bot;

module.exports = app => {
  app.on("pull_request.opened", async context => {
    notifyOpenedPR(context);
  });

  app.on("pull_request.merged", async context => {
    notifyMergedPR(context);
  });

  // Get an express router to expose new HTTP endpoints
  const router = app.route("/gena");
  configurator.configureRouter(router);
};

startBot();
