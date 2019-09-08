const mediator = require("./mediator");

const configureRouter = router => {
  router.use(require("express").static("public"));

  router.post("/pull-request", async (req, res) => {
    const { username, prname } = req.body;
    try {
      await mediator.createPullRequest(username, prname);
      res.status(200).send("Ok!");
    } catch (e) {
      res.status(502).send("Error!");
    }
  });
};

module.exports = { configureRouter };
