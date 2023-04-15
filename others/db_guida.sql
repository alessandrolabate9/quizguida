-- CREATE DB
CREATE DATABASE scuolaguida;
USE scuolaguida;

-- CREATING TABLES
CREATE TABLE categorie(
	id_categorie INTEGER,
	nome VARCHAR2,
	id_immagine VARCHAR2
);
-- add immage tables?
/* LIST OF IMAGES */
CREATE TABLE immagini(
	id_immagine INTEGER,
	nome VARCHAR2,
	link VARCHAR2
);

/*LIST OF QUESTIONS*/
CREATE TABLE domande(
	id_domande INTEGER,
	testo VARCHAR2,
	id_categorie INTEGER
);
