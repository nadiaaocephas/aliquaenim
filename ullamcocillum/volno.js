const leaderboardObject = {
  top_games: [
    {
      fields: {
        leader_address: "0x1234567890abcdef"
      }
    }
  ]
};

const leaderAddress = leaderboardObject.top_games[0].fields.leader_address;

console.log(leaderAddress); // Output: 0x1234567890abcdef
