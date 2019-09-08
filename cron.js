import { schedule } from "node-cron";
import mediator from "./mediator";

schedule("59 21 * * * 0", async () => {
  mediator.updateTeamsForSprint();
});
