// Get the recuit_team db
const recruit_team = "https://kyleshim.github.io/test/recruit_team.json";

// Fetch the JSON data and console log it
d3.json(recruit_team, function (data) {
    console.log(data);

    // Create a custom function to return players' rating with more than 0.7 results
    function rating_number(players) {
        return players.rating > 0.7;
    }
    // Call the custom function with filter()
    let players_rating = data.filter(rating_number);

    // Trace for the recruit_team_data
    let trace1 = {
        names: players_rating.map(column => column.name),
        states: players_rating.map(column => column.state),
        positions: players_rating.map(column => column.position),
        schools: players_rating.map(column => column.school)
    };

    console.log(trace1);

});
