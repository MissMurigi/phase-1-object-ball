function gameObject(home, away) {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: "o",
          shoe: "16",
          points: "22",
          rebounds: "12",
          assists: "12",
          steals: "3",
          blocks: "1",
          slamDunks: "1",
        },
        "Reggie Evans": {
          number: "30",
          shoe: "14",
          points: "12",
          rebounds: "12",
          assists: "12",
          steals: "12",
          blocks: "12",
          slamDunks: "7",
        },
        "Brook Lopez": {
          number: "11",
          shoe: "17",
          points: "17",
          rebounds: "19",
          assists: "10",
          steals: "3",
          blocks: "1",
          slamDunks: "15",
        },
        "Mason Plumlee": {
          number: "1",
          shoe: "19",
          points: "26",
          rebounds: "12",
          assists: "6",
          steals: "3",
          blocks: "8",
          slamDunks: "1",
        },
        "Jason Terry": {
          number: "31",
          shoe: "15",
          points: "19",
          rebounds: "2",
          assists: "2",
          steals: "3",
          blocks: "",
          slamDunks: "1",
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: "4",
          shoe: "18",
          points: "10",
          rebounds: "1",
          assists: "1",
          steals: "2",
          blocks: "7",
          slamDunks: "2",
        },
        "Bismak Biyombo": {
          number: "0",
          shoe: "16",
          points: "12",
          rebounds: "4",
          assists: "7",
          steals: "7",
          blocks: "15",
          slamDunks: "10",
        },
        "DeSagna Diop": {
          number: "8",
          shoe: "15",
          points: "33",
          rebounds: "3",
          assists: "2",
          steals: "1",
          blocks: "1",
          slamDunks: "0",
        },
        "Brendan Haywood": {
          number: "33",
          shoe: "15",
          points: "6",
          rebounds: "12",
          assists: "12",
          steals: "22",
          blocks: "5",
          slamDunks: "12",
        },
      },
    },
  };
}
function numPointsScored(playerName) {
  const game = gameObject();
  for (let player in game[team].players)
    if (player === playerName) return game[team].players[player].points;
}
function shoeSize(playerName) {
  const game = gameObject();
  for (let player in game[team].players)
    if (player === playerName) return game[team].players[player].shoe;
}
function teamColors(teamName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) return game[team].colors;
  }
}
function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}
function playerNumbers(teamName) {
  const game = gameObj();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      let arrPlayerNumbers = [];
      for (let player in game[team].players) {
        arrPlayerNumbers.push(game[team].players[player].number);
      }
      return arrPlayerNumbers;
    }
  }
  function playerStats(playerName) {
    const game = gameObj();
    for (let player in game[team].players)
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
  }

  function bigShoeRebounds() {
    const game = gameObj();
    let maxShoeSize = 0;
    let playerWithBiggestRebounds = "";
    for (let team in game) {
      for (let player in game[team].players) {
        if (parseInt(game[team].players[player].shoe) > maxShoeSize) {
          maxShoeSize = parseInt(game[team].players[player].shoe);
          playerWithBiggestRebounds = game[team].players[player].number;
        }
      }
    }
  }
}
function mostPointsScored() {
  const game = gameObject();
  let maxPoints = 0;
  let playerName = "";

  for (let team in game) {
    for (let player in game[team].players) {
      let playerPoints = game[team].players[player].points;
      if (playerPoints > maxPoints) {
        maxPoints = playerPoints;
        playerName = player;
      }
    }
  }

  return playerName;
}
function winningTeam() {
  const game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;

  for (let player in game.home.players) {
    homePoints += game.home.players[player].points;
  }

  for (let player in game.away.players) {
    awayPoints += game.away.players[player].points;
  }

  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}
function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";

  for (let team in game) {
    for (let player in game[team].players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }

  return longestName;
}
function doesLongNameStealATon() {
  const game = gameObject();
  const longestName = playerWithLongestName();
  let maxSteals = 0;

  for (let team in game) {
    for (let player in game[team].players) {
      let playerSteals = game[team].players[player].steals;
      if (playerSteals > maxSteals) {
        maxSteals = playerSteals;
      }
    }
  }

  return (
    game.home.players[longestName]?.steals === maxSteals ||
    game.away.players[longestName]?.steals === maxSteals
  );
}
