1-
a)deletaria a coluna salario
b)mudaria a coluna gênero para sexo
c) mudaria a extensão máxima da coluna gênero para 255

2-
d) a mudança nao afetou nenhuma coluna pq o id nao existe

5-
a) agrupou os atores em duas categorias de gênero

7-
a) 3
b)9
c)0
d)0
e)10
f)8

SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

ALTER TABLE Actor CHANGE genero gender VARCHAR(100);

UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123";

UPDATE Actor
SET name = "Clarice", birth_date = "1988-03-24" 
WHERE id = "003";

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

UPDATE Actor 
SET hometown = "Rio de Janeiro"
WHERE id = "015"; 

show tables;

SELECT * FROM Actor;

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

SELECT COUNT(*) FROM Actor;

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT AVG(salary) FROM Actor;

SELECT * FROM Actor LIMIT 3;

SELECT * FROM Actor ORDER BY name ASC;

SELECT * FROM Actor ORDER BY name ASC LIMIT 4;

SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, name FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

ALTER TABLE Movie ADD playing_limit_date DATE;

ALTER TABLE Movie CHANGE rating rating FLOAT;

UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";

UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "002";

DELETE FROM Movie WHERE id = "001";

UPDATE Movie
SET
	synopsis = "2020-12-31"
WHERE id = "001";

SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

SELECT AVG(rating) FROM Movie;

SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();

SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();

SELECT MAX(rating) FROM Movie;

SELECT MIN(rating) FROM Movie;

SELECT * FROM Movie ORDER BY title;

SELECT * FROM Movie ORDER BY title LIMIT 5;

SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;

SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
