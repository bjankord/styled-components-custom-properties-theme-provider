const profilerLogger = (
  id,
  phase,
  actualTime,
  baseTime,
  startTime,
  commitTime,
  interactions
) => {
  console.log("--------- logProfile fired -----------");
  console.log(`${id}'s ${phase.toUpperCase()} phase:`);
  console.log(`Actual time: ${actualTime} ms`);
  console.log(`Base time: ${baseTime} ms`);
  console.log(`Start time (since component mounted): ${startTime} ms`);
  console.log(`Commit time (since component mounted): ${commitTime} ms`);
};

export default profilerLogger;