var redis = require("redis");
var client = redis.createClient();
const TEAMS_ID = "teams";

const fetchReviewers = username => {
  return ["@nugmanoff", "@danabeknar"];
};

const fetchTeams = async () => {
  const teams = client.lrange(TEAMS_ID, 0, -1, e => {
    throw e;
  });

  return teams;
};

const updateFrequency = async reviewers => {};

const updateTeams = async teams => {
  client.rpush(TEAMS_ID, teams, e => {
    if (e) {
      throw e;
    }
  });
};

module.exports = {
  fetchReviewers,
  fetchTeams,
  updateFrequency,
  updateTeams
};
