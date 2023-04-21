mysql -u root -P

show databases;
use quiz;


-- CREATE DB
CREATE DATABASE scuolaguida;
USE scuolaguida;

-- CREATING TABLES
CREATE TABLE categorie(
	id_categoria INTEGER,
	nome VARCHAR(100),
	id_immagine VARCHAR(100)
);
-- add immage tables?
/* LIST OF IMAGES */
CREATE TABLE immagini(
	id_immagine INTEGER,
	nome VARCHAR(100),
	link VARCHAR(100)
);

/*LIST OF QUESTIONS*/
CREATE TABLE domande(
	id_domanda INTEGER,
	testo VARCHAR(100),
	id_categoria INTEGER
);
-- ADDING ONE MORE FIELD FOR domande TABLE
ALTER TABLE domande
ADD COLUMN RISPOSTA VARCHAR(2);