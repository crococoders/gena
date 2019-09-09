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

const updateFrequency = async reviewers => {};

const updateTeams = async teams => {};

module.exports = {
  fetchReviewers,
  fetchTeams,
  updateFrequency,
  updateTeams
};
