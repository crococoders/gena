const app = require("./index");
const core = require("./core");
const bot = require("./bot");

const { getReviewers, shuffleTeamsForSprint } = core;
const { reportTeamsForSprint, reportError } = bot;

const createPullRequest = async (username, prname) => {
  const reviewers = await getReviewers(username);
  try {
    await app.createPullRequest(username, prname);
  } catch (e) {
    throw e;
  }
};

const updateTeamsForSprint = async () => {
  try {
    const teams = await shuffleTeamsForSprint();
    reportTeamsForSprint(teams);
  } catch (e) {
    reportError(e);
  }
};

module.exports = { createPullRequest, updateTeamsForSprint };
