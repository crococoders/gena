const bot = require("./bot");
const { notifyMergedPR, notifyOpenedPR, startBot } = bot;

module.exports = app => {
  app.on("pull_request.opened", async context => {
    notifyOpenedPR(context);
  });

  app.on("pull_request.merged", async context => {
    notifyMergedPR(context);
  });
};

startBot();
