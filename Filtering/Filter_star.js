// Get the recuit_team db
const recruit_team = "https://kyleshim.github.io/test/recruit_team.json";

// Fetch the JSON data and console log it
d3.json(recruit_team, function (data) {
    console.log(data);

    // Create a custom function to return players' star with bigger than 2
    function star_number(recruit_star) {
        return recruit_star.stars > 2;
    }
    // Call the custom function with filter()
    let stars_number = data.filter(star_number);

    // Trace for the recruit_team_data
    let trace3 = {
        names: stars_number.map(column => column.name),
        states: stars_number.map(column => column.state),
        positions: stars_number.map(column => column.position),
        schools: stars_number.map(column => column.school)
    };

    console.log(trace3);
});
