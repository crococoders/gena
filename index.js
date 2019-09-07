const Slimbot = require("slimbot");
const bot = new Slimbot("TELEGRAM_BOT_TOKEN");

module.exports = app => {
  app.on(["pull_request.opened", "issues.opened"], async context => {
    app.log(context);
    bot.sendMessage(
      "user_id",
      `🆕 pull request by @${context.payload.issue.user.login}`
    );
  });
};

bot.startPolling();
