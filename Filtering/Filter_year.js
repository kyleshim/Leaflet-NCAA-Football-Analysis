// Get the recuit_team db
const recruit_team = "https://kyleshim.github.io/test/recruit_team.json";

// Fetch the JSON data and console log it
d3.json(recruit_team, function (data) {
    console.log(data);

    // Create a custom function to return players' year with bigger than 2010
    function year_number(recruit_year) {
        return recruit_year.year > 2010;
    }
    // Call the custom function with filter()
    let years = data.filter(year_number);

    // Trace for the recruit_team_data
    let trace2 = {
        names: years.map(column => column.name),
        states: years.map(column => column.state),
        positions: years.map(column => column.position),
        schools: years.map(column => column.school)
    };

    console.log(trace2);

});
