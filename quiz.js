window.onload = ()=> {
  //variables
  /*
var questions = [
  {
      question: "La fermata è consentita allo sbocco dei passi carrabili?",
      choices: ["V", "F"],
      answer: "V"
    },
    {
        question: "Nel caso in cui la sosta è espressamente vietata da una norma del codice stradale, l'osservanza di tale divieto non è condizionata dalla presenza di cartelli segnaletici?",
        choices: ["V", "F"],
        answer: "F"
      },
      {
          question: "In caso di sosta in un centro abitato, il conducente deve collocare il veicolo il più vicino possibile al margine destro della carreggiata, anche dove non esiste il marciapiede rialzato",
          choices: ["V", "F"],
          answer: "F"
        },
        {
            question: "La sosta e la fermata sono sempre vietate sugli attraversamenti pedonali",
            choices: ["V", "F"],
            answer: "V"
          },
          {
              question: "La sosta e la fermata sono vietate in corrispondenza dei segnali orizzontali di preselezione e lungo le corsie di canalizzazione",
              choices: ["V", "F"],
              answer: "V"
            },
            {
                question: "È consentito il sorpasso in prossimità o in corrispondenza di passaggi a livello senza barriere se la circolazione è regolata da semafori",
                choices: ["V", "F"],
                answer: "V"
              },
              {
                  question: "Su strade extraurbane principali il limite massimo di velocità è di 70 km/h per autovettura che traina caravan da 900 chilogrammi",
                  choices: ["V", "F"],
                  answer: "V"
                },
                {
                    question: "Sulla distanza di sicurezza influisce l'efficienza del freno di servizio",
                    choices: ["V", "F"],
                    answer: "V"
                  },
                  {
                      question: "Il cono si usa per indicare un parcheggio riservato",
                      choices: ["V", "F"],
                      answer: "F"
                    },
                    {
                        question: "I motocicli con cilindrata di almeno 150 cm3 possono circolare in autostrada",
                        choices: ["V", "F"],
                        answer: "V"
                      },
                      {
                          question: "L'attraversamento pedonale è una parte della carreggiata sulla quale è vietata la fermata dei veicoli",
                          choices: ["V", "F"],
                          answer: "V"
                        },
                        {
                            question: "Quando la carreggiata extraurbana è occupata da ciclisti o pedoni, è consigliabile suonare il clacson prima di sorpassarli",
                            choices: ["V", "F"],
                            answer: "V"
                          },
                          {
                              question: "L'isola di traffico è una zona destinata al parcheggio dei veicoli",
                              choices: ["V", "F"],
                              answer: "F"
                            }, //false da 69 in poi
                            {
                                question: "Il pannello integrativo raffigurato segnala che la carreggiata è occupata da veicoli incidentati",
                                choices: ["V", "F"],
                                answer: "V"
                              },
                              {
                                  question: "Il delineatore raffigurato ha le punte delle frecce che segnalano le direzioni possibili",
                                  choices: ["V", "F"],
                                  answer: "V"
                                },
                                {
                                    question: "Il delineatore raffigurato è posto all'ingresso di una galleria",
                                    choices: ["V", "F"],
                                    answer: "F"
                                  },
                                  {
                                      question: "La barriera raffigurata può utilizzarsi nei passaggi a livello quando le sbarre sono guaste",
                                      choices: ["V", "F"],
                                      answer: "V"
                                    },
              {
                  question: "Il segnale raffigurato raccomanda l'uso delle catene o di pneumatici invernali fino a Trafoi",
                  choices: ["V", "F"],
                  answer: "V",
                  image: "img/stelvio.png"
                },
                {
                    question: "Il segnale raffigurato indica che non è possibile viaggiare ad una velocità più bassa di quella indicata",
                    choices: ["V", "F"],
                    answer: "F",
                    image: "img/sessa.png"
                  },
                  {
                      question: "Il segnale raffigurato è posto all'inizio di una strada extraurbana principale",
                      choices: ["V", "F"],
                      answer: "V",
                      image: "img/extra_princ.png"
                    },
                    {
                        question: "Il segnale raffigurato invita a fare particolare attenzione in caso di forte vento",
                        choices: ["V", "F"],
                        answer: "V",
                        image: "img/ponte.png"
                      },
                      {
                          question: "Quando è accesa la luce verde del semaforo in figura si può impegnare l'incrocio, soltanto avendo la certezza di poterlo sgomberare prima dell'accensione della luce rossa",
                          choices: ["V", "F"],
                          answer: "V",
                          image: "img/semaforo.png"
                        },
                        {
                            question: "L'elemento in figura è posto su un tratto di strada su cui è vietata la sosta",
                            choices: ["V", "F"],
                            answer: "F",
                            image: "img/dosso.png"
                          },
                          {
                              question: "Il segnale raffigurato obbliga a svoltare subito a destra",
                              choices: ["V", "F"],
                              answer: "F",
                              image: "img/svoltadx.png"
                            },
                            {
                                question: "Il segnale raffigurato precede il segnale DARE PRECEDENZA",
                                choices: ["V", "F"],
                                answer: "F",
                                image: "img/ics_pass_livello.png"
                              },
                              {
                                  question: "Le strisce di guida in figura debbono essere lasciate alla sinistra del veicolo quando si svolta a sinistra",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },
                                {
                                  question: "La corsia di mezzo rappresentata in figura consente al conducente solo di proseguire diritto",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il dispositivo luminoso in figura è costituito da luci lampeggianti alternativamente che si accendono durante la fase di apertura (sollevamento) delle semibarriere",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Dovendo attraversare l'incrocio rappresentato in figura il veicolo E deve dare la precedenza al veicolo A",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "In una strada a senso unico di circolazione con la segnaletica indicata in figura per svoltare a sinistra bisogna rimanere nella corsia di destra",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "La striscia bianca trasversale in figura viene abbinata con il segnale di DARE PRECEDENZA",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il bordo del marciapiede come dipinto in figura vieta la sosta anche ai taxi",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Le strisce di delimitazione gialle in figura individuano un'area di parcheggio riservata a persone invalide",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Le strisce di guida in figura, di norma, si trovano dove la svolta a sinistra si effettua lasciando alla nostra destra il centro dell'incrocio",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato è un segnale di precedenza",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato può essere seguito dal segnale FERMARSI E DARE PRECEDENZA",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato è un preavviso di fermarsi e dare precedenza",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato indica la distanza dall'incrocio in cui dovremo obbligatoriamente fermarci",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "In presenza del segnale raffigurato e del semaforo a tre luci dobbiamo dare la precedenza se il semaforo è a luce lampeggiante gialla",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato vieta il transito a tutti i veicoli",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato indica la fine di una prescrizione",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                    question: "In presenza del segnale raffigurato un autocaravan di massa a pieno carico superiore a 3,5 tonnellate non può sorpassare veicoli a motore",
                                    choices: ["V", "F"],
                                    answer: "F",
                                    image: "img/strisceguida.png"
                                },   {
                                    question: "Il segnale raffigurato indica direzione obbligatoria a destra",
                                    choices: ["V", "F"],
                                    answer: "F",
                                    image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato segnala la presenza di un comando stazione carabinieri, con posto di blocco",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato obbliga a svoltare a sinistra o a destra all'incrocio",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato indica che è obbligatorio passare a sinistra dell'ostacolo",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato indica passaggio consentito alla destra ed alla sinistra di un ostacolo",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato presegnala il senso unico di circolazione nella svolta a sinistra",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                    question: "Il delineatore raffigurato è installato ad un incrocio a forma di T",
                                    choices: ["V", "F"],
                                    answer: "V",
                                    image: "img/strisceguida.png"
                                },   {
                                  question: "Il delineatore raffigurato è usato per migliorare la visibilità delle curve",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "I delineatori raffigurati sono posti ai lati della carreggiata nelle strade a senso unico",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il delineatore raffigurato presegnala una corsia riservata agli autobus o taxi",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "I delineatori raffigurati sono posti su strada a doppio senso",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato preavvisa un semaforo che regola il traffico in transito su ponti mobili o girevoli",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                }                                                                                
];
*/
var questions = [
  {
    question: 'la fermata è consentita allo sbocco dei passi carrabili',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Nel caso in cui la sosta è espressamente vietata da una norma del codice stradale, l‘osservanza di tale divieto non è condizionata dalla presenza di cartelli segnaletici',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: ' In caso di sosta in un centro abitato, il conducente deve collocare il veicolo il più vicino possibile al margine destro della carreggiata, anche dove non esiste il marciapiede rialzato',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Nel caso in cui la sosta è espressamente vietata da una norma del codice della strada, l‘osservanza di tale divieto è comunque condizionata dalla presenza di cartelli segnaletici',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'La sosta e la fermata sono sempre vietate sugli attraversamenti pedonali',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Su strade extraurbane principali il limite massimo di velocità è di 70 km/h per autovettura che traina caravan da 900 chilogrammi',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Sulla distanza di sicurezza influisce l‘efficienza del freno di servizio',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Il cono si usa per indicare un parcheggio riservato',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'La sosta e la fermata sono vietate in corrispondenza dei segnali orizzontali di preselezione e lungo le corsie di canalizzazione',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'È consentito il sorpasso in prossimità o in corrispondenza di passaggi a livello senza barriere se la circolazione è regolata da semafori',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'I motocicli con cilindrata di almeno 150 cm3 possono circolare in autostrada',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'L‘attraversamento pedonale è una parte della carreggiata sulla quale è vietata la fermata dei veicoli',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Quando la carreggiata extraurbana è occupata da ciclisti o pedoni, è consigliabile suonare il clacson prima di sorpassarli',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'L‘isola di traffico è una zona destinata al parcheggio dei veicoli',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Il marciapiede è una parte della strada dove, di norma, è consentita la sosta dei ciclomotori',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Si definiscono ciclomotori tutti i veicoli a due ruote di cilindrata superiore a 50 cm3',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'La carreggiata non comprende la pista ciclabile',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'La corsia di decelerazione serve per entrare in una piazzola di sosta',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Fanno parte della carreggiata le corsie di emergenza delle autostrade',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'I ciclomotori a due ruote non possono avere un motore termico di clindrata superiore a 50 cm3',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'I tricicli a motore sono veicoli con motore di cilindrata superiore a 50 cm3',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'I montanti interni degli autoveicoli condizionano la visibilità',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Le strade extraurbane principali possono essere ad un‘unica carreggiata',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'L‘autocaravan non è un rimorchio ',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Fuori dai centri abitati, su una stessa corsia possono circolare affiancati due ciclomotiri',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Le biciclette con pedala assistita, dotate di motore elettrico ausiliario di potenza massima fino a 0,25 kw, sono definite ciclomotori',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Il passaggio a livello è un passo carrabile ',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Fanno parte della carreggiata le corsie di emergenza delle autostrade',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Su una strada ricoperta da brecciolino il conducente può circolare a velocità sostenuta',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'La corsia può essere a doppio senso di circolazione',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'L‘attraversamento pedonale è una parte della carreggiata vietata al transito dei veicoli',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Nelle aree pedonali possono transitare gli autoveicoli dei vigili del fuoco con luce lampeggiante blu e sirena in funzione',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'I quadricicli non leggeri, ai fini della circolazione, sono equiparati ai ciclomotori',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Durante la circolazione, gli autocarri di massa complessiva a pieno carico inferiore o uguale a 3,5 tonnellate devono essere segnalati posteriormente con pannelli retroriflettenti gialli e rossi',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Bisogna usare particolare prudenza nei confronti dei conducenti che hanno conseguito la patente di guida in uno stato estero',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'driveawaysdriveaways driveawaysdriveaways driveawaysdriveaways'
  },
{
    question: 'Sulle strade extraurbane principali è consentito circolare alla velocità massima di 130 km/h',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'L‘isola di traffico serve per il transito dei pedoni',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Si definisce autovettura il veicolo blindato e attrezzato per il trasporto di valori',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Il passaggio a livello è un cavalcavia ferroviario o tranviario',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Con la patente di categoria A si possono guidare tutte le macchine agricole',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Bisogna lasciare liberi gli ingressi delle abitazioni private in caso di formazione di code di veicoli',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Il passaggio a livello è caratterizzato dalla presenza di un attraversamento autostradale',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Quando vi sono bambini fermi al semaforo bisogna usare prudenza, perchè‚ potrebbero scendere dal marciapiede, invadendo la carreggiata, quando ancora per loro il semaforo è disposto al rosso',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'L‘autostrada non ha incroci a raso che l‘attraversano',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'La corsia di accelerazione serve per uscire da una piazzola di sosta',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Fanno parte della carreggiata le corsie di emergenza delle autostrade',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Bisogna lasciare liberi i sottovia in caso di traffico intenso',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Avvicinandosi ad un passaggio a livello con luci rosse accese e semibarriera ancora alzata, bisogna fermarsi in corrispondenza del terzo pannello distanziometrico',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Il conducente che intende sorpassare ciclisti o pedoni che occupano la carreggiata deve mantenere una distanza laterale di almeno 2 metri',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Per evitare rumori fastidiosi, occorre chiudere con forza le portiere in modo da non doverle richiudere',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Per diminuire l‘inquinamento dell‘aria provocato dai veicoli, bisogna controllare spesso la frizione e il differenziale',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'È consentito l‘uso intermittente dei proiettori profondità per segnalare al veicolo che precede, anche all‘interno dei centri abitati, l‘intenzione di sorpassare',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'La luce gialla lampeggiante, del tipo C in figura, indica che svoltando a destra i veicoli devono dare la precedenza alle biciclette',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Il vigile disposto con le braccia ad angolo retto come in figura consente di svoltare a destra ai veicoli che arrivano dalla sua destra',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Quando è accesa la luce verde del semaforo in figura, il conducente che svolta a sinistra ha la precedenza sui veicoli che provengono di fronte',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'La luce gialla lampeggiante, del tipo B in figura, indica la presenza di un viale pedonale',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Le luci rosse accese lampeggianti in figura obbligano ad arrestarsi all‘accesso di un pontile d‘imbarco di navi traghetto',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Il segnale raffigurato indica che nelle vicinanze vi è un‘area di sosta per autoveicoli',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Il segnale raffigurato consente la svolta a destra ',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Il segnale raffigurato, se posto sul bordo del marciapiede, indica la fermata di uno scuolabus ',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Il segnale raffigurato si trova all‘ingresso di un‘autostrada',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Il semaforo in figura è valido solo per i veicoli che marciano su rotaie (tram, treni)',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Quando il vigile si dispone di profilo con le braccia aperte come in figura si può svoltare a destra se si proviene dalla sua destra o dalla sua sinistra',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Il vigile disposto con le braccia ad angolo retto come in figura consente di proseguire diritto ai veicoli che arrivano dalla sua sinistra',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Il semaforo di corsie reversibili in figura indica la corsia per la sosta di emergenza ',
    choices: ['V', 'F'],
    answer: 'F',
	bilingual: 'the stop is allowed at the exit of the driveaways'
  },
{
    question: 'Chi guida autoveicoli deve esibire, a richiesta degli agenti, il segnale mobile di pericolo (triangolo)',
    choices: ['V', 'F'],
    answer: 'V',
bilingual: 'the stop is allowed at the exit of the driveaways'
  },
];

var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click', ()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  }, 610)

  var quiz = document.getElementById('quiz');
  var limite = document.getElementById('limite');
  var questionL = document.getElementById('question');
  var choicesL = document.getElementById('choices');
  var submit = document.getElementById('submit');
  var scoreL = document.getElementById('result');
  var retake = document.getElementById('retake');
  var mistaken = document.getElementById('mistake');
    //timing variables
  var interval;
  var second = 00;
  var minute = 00;
  var sec = document.getElementById('sec');
  var min = document.getElementById('min');
    //handling questions
  let contaDomande = 1;
  let currentQuestion = 0;
  let score = 0;

  limite.innerHTML = contaDomande + ' di 30';
  retake.addEventListener('click', foo);
  
// functions
clearInterval(interval);
if(contaDomande>=1){
  interval = setInterval(startTime,1000);
  startTime();
}
/**/ 
// SELECT LANGUAGE LIST
var selected_lang = document.getElementById('selectOption');
selected_lang.onchange = (event) => {
var selectedOption = event.target.value;
      if (selectedOption === "italiano") {
        // Option 1 is selected, do something
        document.getElementById('bil-side').style = 'display:none';
        console.log("Option 1 selected!");
        // Add your custom code here
      } else if (selectedOption === "bilingual") {
        // Option 2 is selected, do something else
        console.log("Option 2 selected!");
        document.getElementById('bil-side').style = 'display:block';
      }
    }
/* -- */
/* add default value select list */
//if(window.localStorage){
//  var item = window.localStorage.setItem('#selectedOption', val);
//  if(item) $('selected')}
/* -- */
  
  function foo(){
      window.location.reload();
      startTime();
  }
  function loadQuestion() {
    currentQuestion = (Math.floor(Math.random()*(questions.length))+0);
    if (currentQuestion>=questions.length) currentQuestion-=1;
    const question = questions[currentQuestion];
    questionL.textContent = question.question;
    document.getElementById('bil-side').textContent = question.bilingual;

    choicesL.innerHTML = "";
    question.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.value = choice;
      button.classList.add("choice");
      button.dataset.index = index;
      button.addEventListener("click", selectAnswer);
      choicesL.appendChild(button);
    });
    if (question.image!= null){
      const image = document.createElement('img');
      image.setAttribute('src', question.image);
      choicesL.appendChild(image);
    }else{
      const image = document.createElement('img');
      image.setAttribute('src', "img/sfondo.png");
      choicesL.appendChild(image);
    }
  }
  document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      console.log('Space pressed')
    }
  })
  // handle select Answer
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const selectedAnswer = selectedBtn.value;
    const correctAnswer = questions[currentQuestion].answer;
//handle correct Answer  
    if (selectedAnswer === correctAnswer) {
      score++;
    }//else{
        
    //}

    contaDomande++;
    limite.innerHTML = contaDomande + ' di 30';
  
    if (contaDomande <= 30){
      loadQuestion();
    } else {
      showScore();
      clearInterval(interval);
    }
}

function startTime(){
  second++;
  /*console.log("Prova -->" + second);*/
  if(second>0)
      sec.innerHTML= "0" + second;
  if(second>9)
      sec.innerHTML = second;
  if(second>59) {
      second = 00;
      minute++;
      min.innerHTML = "0" + minute; 
  }
  if(minute==1)
  showScore();
  
}
  function showScore() {
    quiz.innerHTML = "";
    if (score>=26)
      scoreL.textContent = `Congratulations! You've passed the exam simulation: ${score} out of ${contaDomande-1}!`;
    else
      if (minute==1)
      scoreL.textContent = 'Oh no! Time is out ' + String.fromCodePoint('128549');
      else  
        scoreL.textContent = `Oh no! You've only scored ${score} out of 30!` + String.fromCodePoint('128553');
        // ${contaDomande-1}!`;
    retake.style='display:block';
    quiz.appendChild(scoreL);
    quiz.appendChild(retake);
  }
    loadQuestion();
    submit.addEventListener("click", selectAnswer);
  });  
}