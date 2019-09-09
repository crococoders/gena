const store = require("./store");

const { fetchTeams, fetchReviewers, updateFrequency, updateTeams } = store;

const getReviewers = async username => {
  try {
    const reviewers = await fetchReviewers(username);
    await updateFrequency(reviewers);
    return reviewers;
  } catch (e) {
    throw e;
  }
};

const shuffleTeamsForSprint = async () => {
  try {
    const teams = await fetchTeams();
  } catch (e) {
    throw e;
  }
  // strategy encapsulating shuffling algorithm
  try {
    await updateTeams(teams);
    return teams;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getReviewers,
  shuffleTeamsForSprint
};
