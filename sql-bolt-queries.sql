--Exercise 1 — Tasks
--Find the title of each film ✓
SELECT title FROM movies;

--Find the director of each film ✓
SELECT director FROM movies;

--Find the title and director of each film ✓
SELECT title,director FROM movies;

--Find the title and year of each film ✓
SELECT title,year FROM movies;

--Find all the information about each film ✓
SELECT * FROM movies;

------------------------------------------------------------------
--Exercise 2 — Tasks
--Find the movie with a row id of 6 ✓
  SELECT * FROM movies where id=6;

--Find the movies released in the years between 2000 and 2010 ✓
  SELECT * FROM movies where year between 2000 and 2010

--Find the movies not released in the years between 2000 and 2010 ✓
  SELECT * FROM movies where year not between 2000 and 2010

--Find the first 5 Pixar movies and their release year ✓
  SELECT * FROM movies order by year limit 5;
  
-------------------------------------------------------------------
--Exercise 3 — Tasks
--Find all the Toy Story movies ✓
SELECT * FROM movies where title like 'Toy%';

--Find all the movies directed by John Lasseter ✓
SELECT * FROM movies where director like 'John Lasseter%';

--Find all the movies (and director) not directed by John Lasseter ✓
SELECT * FROM movies where director not like 'John Lasseter%';

--Find all the WALL-* movies ✓
SELECT * FROM movies where title like 'WALL-%';


-------------------------------------------------------------------
--Exercise 4 — Tasks
--List all directors of Pixar movies (alphabetically), without duplicates ✓
SELECT distinct director FROM movies order by director;

--List the last four Pixar movies released (ordered from most recent to least) ✓
SELECT * FROM movies order by year desc limit 4;

--List the first five Pixar movies sorted alphabetically ✓
SELECT * FROM movies order by title asc limit 5;

--List the next five Pixar movies sorted alphabetically ✓
SELECT * FROM movies order by title asc LIMIT 5 OFFSET 5;

-------------------------------------------------------------------
--Exercise 5 — Tasks (Review 1)

--List all the Canadian cities and their populations ✓
SELECT city,population FROM north_american_cities where country ='Canada';

--Order all the cities in the United States by their latitude from north to south ✓
--SELECT * FROM north_american_cities where country = 'United States' order by latitude desc;

--List all the cities west of Chicago, ordered from west to east ✓
SELECT * FROM north_american_cities where longitude <-87.629798 order by longitude;

--List the two largest cities in Mexico (by population) ✓
SELECT * FROM north_american_cities where country ='Mexico' order by population desc limit 2;

--List the third and fourth largest cities (by population) in the United States and their population ✓
SELECT city,population FROM north_american_cities where country ='United States' order by population desc limit 2 offset 2;



-------------------------------------------------------------------
--Exercise 6 — Tasks (inner joins)
--Find the domestic and international sales for each movie ✓
SELECT m1.*,Domestic_sales,International_sales FROM movies m1,Boxoffice bo1 where bo1.movie_id=m1.id;

--Show the sales numbers for each movie that did better internationally rather than domestically ✓
SELECT m1.*,Domestic_sales,International_sales FROM movies m1,Boxoffice bo1 where bo1.movie_id=m1.id and Domestic_sales<International_sales;

--	List all the movies by their ratings in descending order ✓
SELECT m1.*,Domestic_sales,International_sales FROM movies m1,Boxoffice bo1 where bo1.movie_id=m1.id order by rating desc;


-------------------------------------------------------------------
--Exercise 7 — Tasks (outer joins)
--Find the list of all buildings that have employees ✓
SELECT distinct b1.* FROM buildings b1 left join employees e1 where building_name=building;

--Find the list of all buildings and their capacity ✓
SELECT * FROM buildings b1;

--List all buildings and the distinct employee roles in each building (including empty buildings) ✓
SELECT distinct b1.*,role
FROM Buildings b1
LEFT JOIN Employees e1 
    ON b1.building_name = e1.building;
--ORDER BY column, … ASC/DESC
