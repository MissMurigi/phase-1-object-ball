console.log("Advanced debugging example running.");
debugger;

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    for (let gameKey in gameObject) {
      console.log("gameKey:", gameKey);
      // are you ABSOLUTELY SURE what 'gameKey' is?
      // use the debugger to find out!
      debugger;
      let teamObj = game[gameKey];
      for (let teamKey in teamObj) {
        for (let teamkey in teamObj) console.log("teamKey:", teamKey);

        // are you ABSOLUTELY SURE what 'teamKey' is?
        // use debugger to find out!
        debugger;

        // what is 'data' at each loop through out this block?
        // when will the following line of code work and when will it break?
        let data = teamObj.player;
        for (let key in data) {
          for(let Key in data){
            console.log("player:", key, "status:", data[key])
          }
          debugger;
        }
      }
    }
  }
}
// then, call the function so it runs!
goodPractices();
