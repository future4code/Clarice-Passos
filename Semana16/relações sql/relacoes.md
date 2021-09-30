1- 
a)No contexto dos banco de dados, o conceito de chave estrangeira ou chave externa se refere ao tipo de relacionamento entre distintas tabelas de dados do banco de dados. Uma chave estrangeira é chamada quando há o relacionamento entre duas tabelas.

b)
INSERT INTO Rating (id, comment, rate, movie_id)
values(
"a",
"Legal",
7,
"002"),

(
"b",
"Legal",
7,
"003"),

(
"c",
"Legal",
7,
"004");

c)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`lovelace-2147223-clarice-passos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

d) DELETE FROM Movie WHERE id=2;
primeiro tem q deletar a avaliação

2-
a)a tabela referencia outras duas tabelas. de filmes e de atores

3-
a)é uma tabela com as duas infos

SELECT * FROM Movie;

INSERT INTO Rating (id, comment, rate, movie_id)
values(
"a",
"Legal",
7,
"002"),

(
"b",
"Legal",
7,
"003"),

(
"c",
"Legal",
7,
"004");

SELECT * FROM Rating;

INSERT INTO Rating (id, comment, rate, movie_id)
values(
"d",
"Legal",
7,
"010");

ALTER TABLE Movie DROP COLUMN Rating;

DELETE FROM Movie WHERE id=2;

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

SELECT * FROM Movie;

SELECT * FROM Actor;

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"002",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"002",
    "002"
);

DELETE FROM Actor WHERE id=2;

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
