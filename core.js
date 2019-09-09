const store = require("./store");

const { fetchReviewers, updateFrequency } = store;

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
  const teams = store.fetchTeams();
  // strategy encapsulating shuffling algorithm
  try {
    await store.updateTeams(teams);
    return teams;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getReviewers,
  shuffleTeamsForSprint
};
