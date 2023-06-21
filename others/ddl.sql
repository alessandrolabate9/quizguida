CREATE TABLE domande(
id_domanda integer,
testo varchar2(300),
id_categoria integer,
id_immagine integer,
risposta varchar2(2),
biling varchar2(300)
);

CREATE TABLE immagini(
	id_immagine integer,
	nome varchar2(150),
	link varchar2(200)
);

select testo, biling, risposta
from domande inner join immagini on (d.id_immagine=i.id_immagine)
where i.id_domanda= $numero