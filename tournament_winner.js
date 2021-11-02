// 3 points if team wins and 0 if it loses
// competition = [homeTeam, awayTeam] - team max 30 char
// results = 1 homeTeam won, 0 awayTeam won
// at least 2 teams, compete once with all other team
function tournamentWinner(competitions, results) {
  let teams = addAllteams(competitions); // { HTML: 0, false: 0, 'C#': 0, Python: 0 }
  for (let i = 0; i < competitions.length; i++) {
    if (results[i] === 1) {  //hometeam won
      teams[competitions[i][0]] += 3;
    }
    if (results[i] === 0) {  // awayteam
      teams[competitions[i][1]] += 3;
    }
  }
  // console.log(teams); // { HTML: 0, 'C#': 3, Python: 6 }
  const maxValue = Math.max.apply(null, Object.values(teams));
  let winner = Object.keys(teams).find(key => teams[key] === maxValue);
  return winner
}

function addAllteams(competitions) {
  let teams = {}
  for (let idx = 0; idx < competitions.length; idx++) {
    // "HTML" not yet in the teams object -> add it
    if (!(competitions[idx][0] in teams)) {
      teams[competitions[idx][0]] = 0;
    }  // don't use else if
    if (!(competitions[idx][1] in teams)) {
      teams[competitions[idx][1]] = 0;
    }
  }
  return teams;
}

