const Slimbot = require("slimbot");
const bot = new Slimbot("TOKEN");

const notifyOpenedPR = context => {
  bot.sendMessage(
    "user_id",
    `🆕 pull request by @${context.payload.pull_request.user.login}\n
    title: ${context.payload.pull_request.title}\n
    reviewers: ${context.payload.pull_request.requested_reviewers.forEach(
      developer => {
        `@${crococoders[developer]}`;
      }
    )}\n
    avaiable at: ${context.payload.pull_request.url}`
  );
};

const notifyMergedPR = context => {
  bot.sendMessage(
    "user_id",
    `"${context.payload.pull_request.title}" pull request by @${context.payload.pull_request.user.login} was merged\n
    avaiable at: ${context.payload.pull_request.url}`
  );
};

const startBot = () => {
  bot.startPolling();
};

module.exports = {
  notifyMergedPR,
  notifyOpenedPR,
  startBot
};
