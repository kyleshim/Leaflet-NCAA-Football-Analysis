CREATE TABLE recreuiting (
p_id VARCHAR(30) ,
name VARCHAR(30) ,
rating FLOAT ,
stars VARCHAR(30) ,
position VARCHAR(30) ,
college VARCHAR(30) ,
player_lat VARCHAR(30) ,
player_lon VARCHAR(30),
state VARCHAR(30) ,
country VARCHAR(30),
year VARCHAR(30) ,
school VARCHAR(30) ,
mascot VARCHAR(30) ,
abv VARCHAR(30) ,
conference VARCHAR(30) ,
division VARCHAR(30) ,
color VARCHAR(30) ,
alt_color VARCHAR(30) ,
scool_lat VARCHAR(30) ,
school_lon VARCHAR(30) ,
t_id INT
);

-- Query all fields from the table sort by state and rating
SELECT * FROM recreuiting 
ORDER BY state, rating DESC

