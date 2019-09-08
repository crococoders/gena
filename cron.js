import { schedule } from "node-cron";

schedule("59 21 * * * 0", function() {
  console.log("running a task every minute");
});

console.log("hui");
