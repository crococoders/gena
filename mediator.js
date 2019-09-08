import probot from "./index";
import core from "./core";
import bot from "./bot";

const createPullRequest = async (username, prname) => {
  const reviewers = await core.getReviewers(username);
  try {
    await probot.createPullRequest(username, prname);
    return true;
  } catch (e) {
    return false;
  }
};

const updateTeamsForSprint = async () => {
  try {
    const teams = await core.shuffleTeamsForSprint();
    bot.reportTeamsForSprint(teams);
  } catch (e) {
    bot.reportError(e);
  }
};

module.exports = { createPullRequest, updateTeamsForSprint };
