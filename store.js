// create redis instance

const fetchReviewers = username => {
  return ["@nugmanoff", "@danabeknar"];
};

const fetchTeams = () => {
  return [
    ["@nugmanoff", "@danabeknar"],
    ["@nugmanoff", "@danabeknar"],
    ["@nugmanoff", "@nugmanoff", "@danabeknar"]
  ];
};

const updateFrequency = reviewers => {};

const updateTeams = teams => {};

module.exports = {
  fetchReviewers,
  fetchTeams,
  updateFrequency,
  updateTeams
};
