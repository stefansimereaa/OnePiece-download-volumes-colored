const fs = require('fs');
const path = require('path');

// Percorso console per avviare script
//  >>>cd "C:\Users\Your User\Desktop\Scarica Capitoli"
//  >>>node creaCartelleVolumiCapitoli.js

// Definisci una lista di volumi con i relativi capitoli
const volumi = {
  "Volume 031": [
    "Capitolo 286 - Il demone di Shandora",
"Capitolo 287 - Deicidio",
"Capitolo 288 - Maledizione",
"Capitolo 289 - Plenilunio",
"Capitolo 290 - La luce di Shandora",
"Capitolo 291 - Noi siamo qui",
"Capitolo 292 - Incontrando una mezzaluna tra le nuvole",
"Capitolo 293 - Bolero",
"Capitolo 294 - Raigo",
"Capitolo 295 - Giant Jack",
  ],
  "Volume 032": [
    "Capitolo 296 - Situazione ad alta quota",
"Capitolo 297 - Preghiere da terra",
"Capitolo 298 - Canto d'amore",
"Capitolo 299 - Fantasia",
"Capitolo 300 - Sinfonia",
"Capitolo 301 - Sono stato qui",
"Capitolo 302 - Finale",
"Capitolo 303 - I pirati ricchi sfondati",
"Capitolo 304 - Avventura sull'isola lunga",
"Capitolo 305 - Foxy la volpe argentata",
  ],
  "Volume 033": [
    "Capitolo 306 - Donut race",
    "Capitolo 307 - Pronti, partenza... donut!",
    "Capitolo 308 - Battaglia d'interferenze",
    "Capitolo 309 - Groggy monsters",
    "Capitolo 310 - Groggy ring",
    "Capitolo 311 - Gioco duro",
    "Capitolo 312 - Goal!",
    "Capitolo 313 - L'evento principale",
    "Capitolo 314 - Combattimento!",
    "Capitolo 315 - La stanza segreta",
    "Capitolo 316 - Anima fraterna"
  ],
  "Volume 034": [
    "Capitolo 317 - K.O.",
    "Capitolo 318 - Fine dei giochi",
    "Capitolo 319 - L'ammiraglio Aokiji del quartier generale della marina",
    "Capitolo 320 - Un potere straordinario",
    "Capitolo 321 - Da uomo a uomo",
    "Capitolo 322 - Puffing Tom",
    "Capitolo 323 - Water Seven la città dell'acqua",
    "Capitolo 324 - Avventura nella città d'acqua",
    "Capitolo 325 - Franky Family",
    "Capitolo 326 - Iceburg-san",
    "Capitolo 327 - Il Dock 1 dell'isola dei cantieri navali"
  ],
  "Volume 035": [
    "Capitolo 328 - L'incidente del sequestro del pirata",
    "Capitolo 329 - Il mio nome è Franky",
    "Capitolo 330 - Ho deciso!",
    "Capitolo 331 - Un grande litigio",
    "Capitolo 332 - Rufy vs Usop",
    "Capitolo 333 - Capitano",
    "Capitolo 334 - L'incidente della stanza chiusa a chiave",
    "Capitolo 335 - Avvertimento",
    "Capitolo 336 - Rufy vs Franky"
  ],
  "Volume 036": [
    "Capitolo 337 - I guardiani della città dell'acqua",
    "Capitolo 338 - Coup de vent",
    "Capitolo 339 - Qualche chiacchiera",
    "Capitolo 340 - La donna portatrice di sventura",
    "Capitolo 341 - Diavolo",
    "Capitolo 342 - I messaggeri dell'oscurità",
    "Capitolo 343 - Chiper Pol N°9",
    "Capitolo 344 - Potere contrapposto",
    "Capitolo 345 - Gli infiltrati",
    "Capitolo 346 - La nona giustizia"
  ],
  "Volume 037": [
    "Capitolo 347 - Rokushiki",
    "Capitolo 348 - Forza combattiva",
    "Capitolo 349 - Comune cittadino",
    "Capitolo 350 - Il magazzino sotto il ponte",
    "Capitolo 351 - Klabautermann",
    "Capitolo 352 - Tom's Workers",
    "Capitolo 353 - Il leggendario carpentiere",
    "Capitolo 354 - Il Treno marino",
    "Capitolo 355 - Spandam",
    "Capitolo 356 - Tom-san",
    "Capitolo 357 - Cutty Flam"
  ],
  "Volume 038": [
    "Capitolo 358 - Resurrezione",
    "Capitolo 359 - Bingo",
    "Capitolo 360 - Partenza imminente",
    "Capitolo 361 - P.S.",
    "Capitolo 362 - Riflusso di marea",
    "Capitolo 363 - Acqua laguna",
    "Capitolo 364 - Kokoro",
    "Capitolo 365 - Rocketman!",
    "Capitolo 366 - Si va in scena",
    "Capitolo 367 - Sogeking"
  ],
  "Volume 039": [
    "Capitolo 368 - Battaglia a bordo del treno marino",
    "Capitolo 369 - Ramen Kenpo",
    "Capitolo 370 - Non sei sola",
    "Capitolo 371 - L'ammirevole capitano T-Bone",
    "Capitolo 372 - Parage",
    "Capitolo 373 - Male necessario",
    "Capitolo 374 - Lotta",
    "Capitolo 375 - I superuomini di Enies Lobby",
    "Capitolo 376 - Ho capito!",
    "Capitolo 377 - La grande battaglia decisiva sull'isola giudiziaria"
  ],
  "Volume 040": [
    "Capitolo 378 - Il bilancio delle perdite",
    "Capitolo 379 - Doriki",
    "Capitolo 380 - Espresso per l'isola principale di Enies Lobby",
    "Capitolo 381 - Licenziati",
    "Capitolo 382 - Il covo dei demoni",
    "Capitolo 383 - Rufy vs Blueno",
    "Capitolo 384 - L'ora del contrattacco",
    "Capitolo 385 - C'è solo un modo",
    "Capitolo 386 - Senza precedenti",
    "Capitolo 387 - Gear",
    "Capitolo 388 - Gear Second"
  ],
  "Volume 041": [
    "Capitolo 389 - Risposta ",
    "Capitolo 390 - Contrattacco",
    "Capitolo 391 - La bambina chiamata mostro",
    "Capitolo 392 - Dereshi",
    "Capitolo 393 - Olvia",
    "Capitolo 394 - I demoni di Ohara",
    "Capitolo 395 - Ohara vs governo mondiale",
    "Capitolo 396 - Saul",
    "Capitolo 397 - Raggiungere il futuro",
    "Capitolo 398 - Dichiarazione di guerra",
    "Capitolo 399 - Saltate nella cascata!!",
  ],
  "Volume 042": [
    "Capitolo 400 - La chiave della libertà",
    "Capitolo 401 - Pirati vs CP9",
    "Capitolo 402 - Le manette numero 2",
    "Capitolo 403 - Mister cavalleria",
    "Capitolo 404 - Franky vs Fukuro",
    "Capitolo 405 - Potere",
    "Capitolo 406 - Seimei Kikan",
    "Capitolo 407 - Mostro",
    "Capitolo 408 - Il mostro vs Kumadori",
    "Capitolo 409 - Cattive notizie dalla trasmissione d'emergenza"
],
"Volume 043": [
    "Capitolo 410 - La Nami gigantesca",
    "Capitolo 411 - Nami vs Califa",
    "Capitolo 412 - Occasione persa",
    "Capitolo 413 - Il cacciatore",
    "Capitolo 414 - Sanji vs Jabura",
    "Capitolo 415 - Heat up!",
    "Capitolo 416 - Zoro vs Kaku",
    "Capitolo 417 - Ashura",
    "Capitolo 418 - Rufy vs Rob Lucci",
    "Capitolo 419 - La leggenda dell'eroe"
],
"Volume 044": [
    "Capitolo 420 - Buster Call",
    "Capitolo 421 - Gear Third",
    "Capitolo 422 - Rob Lucci",
    "Capitolo 423 - La leggenda della sirena",
    "Capitolo 424 - Nave per la fuga",
    "Capitolo 425 - Combattimento disperato sul ponte",
    "Capitolo 426 - Nave in attesa del vento",
    "Capitolo 427 - Qui non siamo affatto all'inferno!",
    "Capitolo 428 - Torniamo indietro!",
    "Capitolo 429 - Disfatta totale",
    "Capitolo 430 - Cade una soffice neve di ricordi"
],
"Volume 045": [
    "Capitolo 431 - L'amorevole pugno",
    "Capitolo 432 - Scatola a sorpresa",
    "Capitolo 433 - Il nome di quel mare è...",
    "Capitolo 434 - Barbabianca e il Rosso",
    "Capitolo 435 - Capiamo ciò che provate...",
    "Capitolo 436 - Pants from Frankyhouse",
    "Capitolo 437 - Nudo, ma uomo vero",
    "Capitolo 438 - Orgoglio",
    "Capitolo 439 - Il terzo e il settimo",
    "Capitolo 440 - Pugno di fuoco vs Barbanera"
],
"Volume 046": [
    "Capitolo 441 - Duello sull'isola di Banaro",
    "Capitolo 442 - Avventura nelle acque malefiche",
    "Capitolo 443 - Thriller Bark",
    "Capitolo 444 - Avventura sull'isola fantasma",
    "Capitolo 445 - The Zombie",
    "Capitolo 446 - Il dottor Hogback",
    "Capitolo 447 - Gli Zombie a sorpresa",
    "Capitolo 448 - Moria",
    "Capitolo 449 - I quattro mostri di Thriller Bark"
],
"Volume 047": [
    "Capitolo 450 - General Zombie Night",
    "Capitolo 451 - Il wonder garden di Perona!",
    "Capitolo 452 - Jigoro del vento",
    "Capitolo 453 - Cielo coperto con probabili precipitazioni di ossa",
    "Capitolo 454 - Canterino",
    "Capitolo 455 - Gekko Moria della flotta dei sette",
    "Capitolo 456 - Il demone giunto dal regno dei ghiacci",
    "Capitolo 457 - Caaarneee!",
    "Capitolo 458 - Tutto ma non l'afro!",
    "Capitolo 459 - Non potrei mai dire Scusa tanto, ma siamo morti"
],
"Volume 048": [
    "Capitolo 460 - Recuperarle prima che sorga il sole!",
    "Capitolo 461 - Ghost Buster",
    "Capitolo 462 - L'avventura di Oz",
    "Capitolo 463 - Sanji il pirata vs absolom il misterioso",
    "Capitolo 464 - Il sogno di Sanji",
    "Capitolo 465 - Il pirata Usopp vs la principessa Perona",
    "Capitolo 466 - Concluso",
    "Capitolo 467 - Zoro il pirata vs Ryuma il samurai",
    "Capitolo 468 - Chopper il pirata vs lo spettrale Hogback",
    "Capitolo 469 - Venite fuori Mugiwara!!!",
    "Capitolo 470 - Oz vs Mugiwara"
],
"Volume 049": [
    "Capitolo 471 - My friend",
    "Capitolo 472 - Down",
    "Capitolo 473 - Bartolomew Kuma della flotta dei sette",
    "Capitolo 474 - Non ci resta che farlo!",
    "Capitolo 475 - I pirati della foresta",
    "Capitolo 476 - Nightmare Rufy",
    "Capitolo 477 - 3 8",
    "Capitolo 478 - Rufy vs Rufy",
    "Capitolo 479 - Guerriero della speranza",
    "Capitolo 480 - Intercettamento",
    "Capitolo 481 - Shadow's Asgard"
],
"Volume 050": [
    "Capitolo 482 - Arriva l'alba",
    "Capitolo 483 - Fine di un sogno",
    "Capitolo 484 - Boing",
    "Capitolo 485 - Equipaggio di Cappello di Paglia Zoro il cacciatore di pirati",
    "Capitolo 486 - Pianoforte",
    "Capitolo 487 - Quella canzone",
    "Capitolo 488 - La canzone della vita",
    "Capitolo 489 - L'ottava persona",
    "Capitolo 490 - Ancora li!",
    "Capitolo 491 - I piloti dei pesci volanti"
],
"Volume 051": [
  "Capitolo 492 - Duval dalla maschera di ferro",
  "Capitolo 493 - Mi conosci",
  "Capitolo 494 - La tragedia di Duval",
  "Capitolo 495 - Il Cannone Gaon",
  "Capitolo 496 - La Mangrovia Yarukiman",
  "Capitolo 497 - Avventura nell'isola delle bolle danzanti",
  "Capitolo 498 - Le undici Supernove",
  "Capitolo 499 - Sabaody Park",
  "Capitolo 500 - Le braci ardenti della storia",
  "Capitolo 501 - Il mondo inizia a ribollire",
  "Capitolo 502 - L'incidente dei dragoviani"
],
"Volume 052": [
  "Capitolo 503 - Un'isola nel caos",
  "Capitolo 504 - Pirati in prima linea all'attacco!!",
  "Capitolo 505 - Orso",
  "Capitolo 506 - Roger e Rayleigh",
  "Capitolo 507 - Lo sbarco di Kizaru",
  "Capitolo 508 - L'isola del massacro",
  "Capitolo 509 - Kizaru contro 4 capitani",
  "Capitolo 510 - La squadra di Cappello di Paglia contro la macchina da guerra",
  "Capitolo 511 - Sentomaru e la sua ascia",
  "Capitolo 512 - La scomparsa di Zoro"
],
"Volume 053": [
  "Capitolo 513 - Non ho potuto nemmeno...",
  "Capitolo 514 - Funghi che crescono sul corpo",
  "Capitolo 515 - Avventura nell'isola delle donne",
  "Capitolo 516 - L'imperatrice pirata, Boa Hancock",
  "Capitolo 517 - Il bagno",
  "Capitolo 518 - L'arena",
  "Capitolo 519 - L'indole di un re",
  "Capitolo 520 - L'occhio della Gorgone",
  "Capitolo 521 - L'artiglio dei draghi che si ergono nei cieli",
  "Capitolo 522 - Malattia mortale"
],
"Volume 054": [
  "Capitolo 523 - Inferno",
  "Capitolo 524 - Nessuno può fermarci adesso",
  "Capitolo 525 - Impel Down, la prigione subacquea",
  "Capitolo 526 - Avventura nella grande prigione",
  "Capitolo 527 - Lv.1, l'inferno purpureo",
  "Capitolo 528 - Jinbe, il cavaliere dei mari",
  "Capitolo 529 - L'inferno delle bestie",
  "Capitolo 530 - Da un inferno all'altro",
  "Capitolo 531 - L'inferno dell'inedia",
  "Capitolo 532 - Minotauro, la guardia demoniaca"
],
"Volume 055": [
  "Capitolo 533 - Livello quattro l inferno bollente",
  "Capitolo 534 - Capo guardiano magellan vs il pirata",
  "Capitolo 535 - Amici",
  "Capitolo 536 - L'inferno gelato",
  "Capitolo 537 - Okama all'inferno",
  "Capitolo 538 - Livello cinque virgola cinque il nuovo regno okama",
  "Capitolo 539 - Emporio ormoni del vigore",
  "Capitolo 540 - Livello sei l'inferno eterno",
  "Capitolo 541 - Come mai prima d'ora"
],
"Volume 056": [
  "Capitolo 542 - Solo un altro incidente di cui raccontare",
  "Capitolo 543 - Cappello di paglia e Barbanera",
  "Capitolo 544 - Anche l'inferno chiude per ferie",
  "Capitolo 545 - Verso il mondo esterno, dove splende il sole",
  "Capitolo 546 - Il capitano dei pirati uomini-pesce, Jimbe della flotta dei sette",
  "Capitolo 547 - La grande fuga",
  "Capitolo 548 - Grazie",
  "Capitolo 549 - Rotta verso la battaglia",
  "Capitolo 550 - Il quartier generale della marina",
  "Capitolo 551 - L'imperatore Barbabianca"
],
"Volume 057": [
  "Capitolo 552 - Ace e Barbabianca",
  "Capitolo 553 - La battaglia decisiva tra i più forti",
  "Capitolo 554 - L'ammiraglio akainu",
  "Capitolo 555 - Oars ed il suo cappello",
  "Capitolo 556 - La giustizia prevarrà!!",
  "Capitolo 557 - Rufy e Barbabianca",
  "Capitolo 558 - Fratellino",
  "Capitolo 559 - Destino",
  "Capitolo 560 - I prigionieri di impel down",
  "Capitolo 561 - Luffy vs Mihawk",
  "Capitolo 562 - Pirata vortice del ragno, Squardo"
],
"Volume 058": [
  "Capitolo 563 - Un uomo, un cuore",
  "Capitolo 564 - L'uomo che fa tremare il mondo",
  "Capitolo 565 - Il sentiero di Oars",
  "Capitolo 566 - Assalto",
  "Capitolo 567 - Marineford quartiere generale della marina, piazza Oris",
  "Capitolo 568 - Fai come ti pare, paglia-chan",
  "Capitolo 569 - Mostro",
  "Capitolo 570 - Il ponte della vita",
  "Capitolo 571 - Patibolo",
  "Capitolo 572 - I tempi stanno cambiando",
  "Capitolo 573 - Questa era si chiama ''Barbabianca''"
],
"Volume 059": [
  "Capitolo 574 - La morte di Portgas D. Ace",
  "Capitolo 575 - Neanche una parole, solo rabbia",
  "Capitolo 576 - Il grande pirata, Edward Newgate",
  "Capitolo 577 - Un grande evento dopo l'altro",
  "Capitolo 578 - Un regalo per la nuova era",
  "Capitolo 579 - Istanti di coraggio",
  "Capitolo 580 - La fine della guerra",
  "Capitolo 581 - Futuro strisciante",
  "Capitolo 582 - Rufy e Ace",
  "Capitolo 583 - Il capolinea dell'incertezza, Grey terminal",
  "Capitolo 584 - L'incidente Polchemy"
],
"Volume 060": [
  "Capitolo 585 - Brindisi tra fratelli",
  "Capitolo 586 - Una fetida città",
  "Capitolo 587 - Io non scapperò",
  "Capitolo 588 - L'oceano di Sabo",
  "Capitolo 589 - Gli sforzi per arrivare alla gloria",
  "Capitolo 590 - Hey, fratellino",
  "Capitolo 591 - Sei sicuro che vada bene",
  "Capitolo 592 - Gridare",
  "Capitolo 593 - News",
  "Capitolo 594 - Messaggio"
],
"Volume 061": [
  "Capitolo 595 - Giuramento",
  "Capitolo 596 - Spectrum",
  "Capitolo 597 - 3D2Y",
  "Capitolo 598 - Due anni dopo",
  "Capitolo 599 - I nove pirati",
  "Capitolo 600 - L'isola del nuovo inizio",
  "Capitolo 601 - Romance Dawn for the New World",
  "Capitolo 602 - Timone verso il basso",
  "Capitolo 603 - Conservatelo nel cuore"
],
"Volume 062": [
  "Capitolo 604 - Negli abissi",
  "Capitolo 605 - Il kraken e i pirati",
  "Capitolo 606 - Avventura negli abissi",
  "Capitolo 607 - Diecimila metri sotto i mari",
  "Capitolo 608 - Il paradiso sommerso",
  "Capitolo 609 - Avventura nell'isola degli uomini-pesce",
  "Capitolo 610 - Madame Shirley l'indovina",
  "Capitolo 611 - Hody jones",
  "Capitolo 612 - Accompagnati dallo squalo che avevamo salvato",
  "Capitolo 613 - La principessa sirena nella torre conchiglia",
  "Capitolo 614 - Quel che è fatto è fatto"
],
"Volume 063": [
  "Capitolo 615 - La maledizione target target",
  "Capitolo 616 - L'anniversario della vendetta",
  "Capitolo 617 - Scioccante incidente a colle corallo",
  "Capitolo 618 - Proposta di matrimonio",
  "Capitolo 619 - Alla foresta marina",
  "Capitolo 620 - Il parco divertimenti tanto anelato",
  "Capitolo 621 - Otohine e Tiger",
  "Capitolo 622 - I pirati del sole",
  "Capitolo 623 - Il pirata Fisher Tiger",
  "Capitolo 624 - La regina Otohine",
  "Capitolo 625 - Volontà senza eredi",
  "Capitolo 626 - I tre fratelli Nettuno"
],
"Volume 064": [
  "Capitolo 627 - Te ne sono grato",
  "Capitolo 628 - Purificazione",
  "Capitolo 629 - L'ex-membro della flotta dei 7 non ci sta",
  "Capitolo 630 - A briglia sciolta",
  "Capitolo 631 - Place de la Gyoncorde",
  "Capitolo 632 - Lo sapevo già",
  "Capitolo 633 - Amico o nemico",
  "Capitolo 634 - Dieci contro centomila",
  "Capitolo 635 - Così schifoso da metterti le ali ai piedi",
  "Capitolo 636 - Il generale del paese del futuro"
],
"Volume 065": [
  "Capitolo 637 - L'antica arca",
  "Capitolo 638 - Scappahoshi",
  "Capitolo 639 - Proteggerò ogni cosa",
  "Capitolo 640 - Al di sopra dell'isola degli uomini-pesce",
  "Capitolo 641 - Che cosa sei, tu..!",
  "Capitolo 642 - Perdere la faccia",
  "Capitolo 643 - Phantom",
  "Capitolo 644 - Da zero",
  "Capitolo 645 - Anche la morte è una vendetta",
  "Capitolo 646 - Rana"
],
"Volume 066": [
  "Capitolo 647 - Ferma Noah!",
  "Capitolo 648 - La strada che ci porterà a raggiungere il sole",
  "Capitolo 649 - Danza di orate e di platesse",
  "Capitolo 650 - Due cambiamenti che dovreste sapere",
  "Capitolo 651 - Una voce dal Nuovo Mondo",
  "Capitolo 652 - Si prospettano tempi bui",
  "Capitolo 653 - Il cappello di un eroe",
  "Capitolo 654 - Gam (Piccolo Branco)",
  "Capitolo 655 - Punk Hazard",
  "Capitolo 656 - Avventura sull'isola in fiamme"
],
"Volume 067": [
  "Capitolo 657 - Una testa mozzata",
  "Capitolo 658 - La stanza dei biscotti",
  "Capitolo 659 - A proposito del busto",
  "Capitolo 660 - Trafalgar Law, membro degli Shichibukai",
  "Capitolo 661 - E dal lago spuntano i predoni",
  "Capitolo 662 - Law degli Shichibukai vs Vice Ammiraglio Smoker",
  "Capitolo 663 - CC",
  "Capitolo 664 - Master Caesar Clown",
  "Capitolo 665 - Caramelle",
  "Capitolo 666 - Gli Yeti Cool Brothers",
  "Capitolo 667 - Cool Fight"
],
"Volume 068": [
  "Capitolo 668 - Alleanza pirata",
  "Capitolo 669 - L'operazione ha inizio",
  "Capitolo 670 - Ghiaccio con una porzione di Slime",
  "Capitolo 671 - Gasu Gasu no mi",
  "Capitolo 672 - Il mio nome è Kinemon!!",
  "Capitolo 673 - Vergo e Joker",
  "Capitolo 674 - Spettatori",
  "Capitolo 675 - Il suo nome è ''Shinokuni''",
  "Capitolo 676 - L'arma di distruzione di massa perfetta",
  "Capitolo 677 - Counter Hazard!",
  "Capitolo 678 - Istituto di ricerca, lobby dell'edificio A"
],
"Volume 069": [
  "Capitolo 679 - Lo spirito del G-5",
  "Capitolo 680 - Il capo della base G5 della marina, vergo dal bambù brutale",
  "Capitolo 681 - Rufy vs Master",
  "Capitolo 682 - Burattinaio",
  "Capitolo 683 - La donna di ghiaccio",
  "Capitolo 684 - Fermati, Vegapunk",
  "Capitolo 685 - Il mio nome è momonosuke!",
  "Capitolo 686 - La donna neve nella biscuits room",
  "Capitolo 687 - Animale selvaggio",
  "Capitolo 688 - Mocha",
  "Capitolo 689 - Un'isola che non esiste",
  "Capitolo 690 - SAD"
],
"Volume 070": [
  "Capitolo 691 - Il re del paese della morte",
  "Capitolo 692 - Gli assassini di dressrosa",
  "Capitolo 693 - Muori per me",
  "Capitolo 694 - Un uomo molto pericoloso",
  "Capitolo 695 - Lasciateli a me!",
  "Capitolo 696 - Interessi comuni",
  "Capitolo 697 - Accordo",
  "Capitolo 698 - L'arrivo di Doflamingo",
  "Capitolo 699 - Edizione del mattino",
  "Capitolo 700 - Il suo gioco"
],
"Volume 071": [
  "Capitolo 701 - Avventura nella terra dell'amore, della passione e dei giocattoli",
  "Capitolo 702 - Il colosseo della corrida",
  "Capitolo 703 - Sala d'attesa",
  "Capitolo 704 - Lucy e la statua di Kyros",
  "Capitolo 705 - Maynard l'inseguitore",
  "Capitolo 706 - Non riderò di te",
  "Capitolo 707 - Blocco B",
  "Capitolo 708 - Colosseo di canaglie",
  "Capitolo 709 - King Punch!!",
  "Capitolo 710 - Verso Green Bit",
  "Capitolo 711 - Avventura nella terra dei nani"
],
"Volume 072": [
  "Capitolo 712 - Violet",
  "Capitolo 713 - Usoland",
  "Capitolo 714 - Lucy e Ucy",
  "Capitolo 715 - Battaglia serrata nel blocco C",
  "Capitolo 716 - Don Chinjao",
  "Capitolo 717 - Dimenticati da Dressrosa",
  "Capitolo 718 - L'esercito reale Riku ai campi di fiori",
  "Capitolo 719 - Apriti Chinjao",
  "Capitolo 720 - Gladiatori prigionieri",
  "Capitolo 721 - Rebecca ed il signor Soldatino"
],
"Volume 073": [
  "Capitolo 722 - Stirpe reale",
  "Capitolo 723 - Cambiamento di piani",
  "Capitolo 724 - Il piano di Law",
  "Capitolo 725 - La donna imbattuta",
  "Capitolo 726 - La famiglia Riku",
  "Capitolo 727 - Un eroe che attende nell'ombra",
  "Capitolo 728 - Tutte queste tragedie",
  "Capitolo 729 - Doflamingo della flotta dei 7 contro Law della flotta dei 7",
  "Capitolo 730 - Tre Carte",
  "Capitolo 731 - Dressrosa Operazione S.O.P"
],
"Volume 074": [
  "Capitolo 732 - Il Mondo Sotterraneo",
  "Capitolo 733 - A cosa ambisce Soldatino",
  "Capitolo 734 - Il turbine di Rommel",
  "Capitolo 735 - Le intenzioni di Fujitora",
  "Capitolo 736 - Il capo del personale esecutivo, Diamante",
  "Capitolo 737 - La torre del personale esecutivo",
  "Capitolo 738 - L'agente Sugar, dell'esercito di Trebol",
  "Capitolo 739 - Comandante",
  "Capitolo 740 - Per favore",
  "Capitolo 741 - Usoland il bugiardo",
  "Capitolo 742 - Ti sarò sempre accanto"
],
"Volume 075": [
  "Capitolo 743 - Dressrosa in tumulto",
  "Capitolo 744 - Il generale Dell'Armata Rivoluzionaria",
  "Capitolo 745 - La gabbia per uccelli",
  "Capitolo 746 - Stelle",
  "Capitolo 747 - L'Agente d'elite, Pica",
  "Capitolo 748 - Restituire il favore",
  "Capitolo 749 - Avanzata! L'esercito dei piccoletti",
  "Capitolo 750 - Riprende la battaglia! L'assalto a Dressrosa!",
  "Capitolo 751 - Sabo contro l'Ammiraglio Fujitora",
  "Capitolo 752 - Palmo"
],
"Volume 076": [
  "Capitolo 753 - Guerra",
  "Capitolo 754 - Lieto di fare la tua conoscenza",
  "Capitolo 755 - Un mondo al maschile",
  "Capitolo 756 - Il quarto livello",
  "Capitolo 757 - Asso nella manica",
  "Capitolo 758 - Ignoralo e va avanti",
  "Capitolo 759 - Piano segreto",
  "Capitolo 760 - La stessa scommessa",
  "Capitolo 761 - Il frutto Ope Ope",
  "Capitolo 762 - La città bianca",
  "Capitolo 763 - Dichiarazione di natura umana"
],
"Volume 077": [
  "Capitolo 764 - Il mostro bianco",
  "Capitolo 765 - L'isola del destino, Minion",
  "Capitolo 766 - Smile",
  "Capitolo 767 - Cora-san",
  "Capitolo 768 - Quel grilletto, quel giorno...",
  "Capitolo 769 - Il pirata Bellamy",
  "Capitolo 770 - La lancia di Erbaf",
  "Capitolo 771 - Sai, il leader della marina happo",
  "Capitolo 772 - Cavoli Ishi e Barto",
  "Capitolo 773 - Metà e metà",
  "Capitolo 774 - Leo, il capo dei guerrieri Tontatta",
  "Capitolo 775 - Dare tutto il mio amore a Lucian"
],
"Volume 078": [
  "Capitolo 776 - L'eroe del colosseo",
  "Capitolo 777 - Zoro vs Pica",
  "Capitolo 778 - Ipotesi numero 5",
  "Capitolo 779 - Lo scontro finale",
  "Capitolo 780 - La maledizione del cuore",
  "Capitolo 781 - Il desiderio tanto atteso",
  "Capitolo 782 - Il fascino del male",
  "Capitolo 783 - Intralciare la mia strada",
  "Capitolo 784 - Gear Fourth",
  "Capitolo 785 - Anche con le gambe spezzate",
  "Capitolo 786 - Gatz"
],
"Volume 079": [
  "Capitolo 787 - 4 minuti prima",
  "Capitolo 788 - La mia battaglia",
  "Capitolo 789 - Lucy",
  "Capitolo 790 - Cielo e Terra",
  "Capitolo 791 - Macerie",
  "Capitolo 792 - Inchino",
  "Capitolo 793 - La tigre e il cane",
  "Capitolo 794 - L'avventura di Sabo",
  "Capitolo 795 - Suicidio",
  "Capitolo 796 - La decisione del soldato"
],
"Volume 080": [
  "Capitolo 797 - Rebecca",
  "Capitolo 798 - Cuore",
  "Capitolo 799 - Padre e figli",
  "Capitolo 800 - Scambiare le tazze di sake",
  "Capitolo 801 - Si alzi il sipario!",
  "Capitolo 802 - Zou",
  "Capitolo 803 - Scalando l'elefante",
  "Capitolo 804 - Avventura sul dorso dell'elefante",
  "Capitolo 805 - La razza dei visoni",
  "Capitolo 806 - Alla fortezza dell'addome destro"
],
"Volume 081": [
  "Capitolo 807 - 10 giorni prima",
  "Capitolo 808 - Il duca Canistrice",
  "Capitolo 809 - Il grande Gattovipera",
  "Capitolo 810 - L'arrivo della ciurma di Sopracciglio di Paglia",
  "Capitolo 811 - Roko",
  "Capitolo 812 - Capone ''Gang'' Bege",
  "Capitolo 813 - Un invito al Tea Party",
  "Capitolo 814 - Andiamo a incontrare il Grande Gattovipera!",
  "Capitolo 815 - Portami con te!",
  "Capitolo 816 - Cane contro Gatto"
],
"Volume 082": [
  "Capitolo 817 - Raizo della nebbia",
  "Capitolo 818 - Dentro la balena",
  "Capitolo 819 - Momonosuke, erede del clan Kozuki",
  "Capitolo 820 - La storia di Cane e Gatto",
  "Capitolo 821 - Ricevuto",
  "Capitolo 822 - Scendendo dall'elefante",
  "Capitolo 823 - Un mondo vivace",
  "Capitolo 824 - Giochetti da pirata",
  "Capitolo 825 - La storia illustrata del ''We Times''",
  "Capitolo 826 - 0 e 4",
  "Capitolo 827 - Totland"
],
"Volume 083": [
  "Capitolo 828 - 1 e 2",
  "Capitolo 829 - L'imperatrice Charlotte Linlin",
  "Capitolo 830 - L'uomo su cui scommettono tutti",
  "Capitolo 831 - Avventura nella foresta misteriosa",
  "Capitolo 832 - Regno Germa",
  "Capitolo 833 - Vinsmoke Judge",
  "Capitolo 834 - Il mio sogno",
  "Capitolo 835 - Il paese delle anime",
  "Capitolo 836 - La vivre card che mi ha dato Laura",
  "Capitolo 837 - Rufy vs il comandante Cracker",
  "Capitolo 838 - Fropper"
],
"Volume 084": [
  "Capitolo 839 - Grazie per tutto quello che hai fatto per me",
  "Capitolo 840 - Maschera di ferro",
  "Capitolo 841 - Verso il Mare Orientale",
  "Capitolo 842 - Il potere di uno stomaco pieno",
  "Capitolo 843 - Vinsmoke Sanji",
  "Capitolo 844 - Rufy contro Sanji",
  "Capitolo 845 - L'esercito infuriato",
  "Capitolo 846 - La custodia di Tamago",
  "Capitolo 847 - Rufy e Big Mom",
  "Capitolo 848 - Addio"
],
"Volume 085": [
  "Capitolo 849 - Fropper nel mondo specchio",
  "Capitolo 850 - Raggio di speranza",
  "Capitolo 851 - Mozzicone",
  "Capitolo 852 - Il fallimento del Germa",
  "Capitolo 853 - Non qui!",
  "Capitolo 854 - Che diavolo sto facendo!",
  "Capitolo 855 - Grrrooowwwlll!",
  "Capitolo 856 - Bugiardo",
  "Capitolo 857 - Torre",
  "Capitolo 858 - L'incontro"
],
"Volume 086": [
  "Capitolo 859 - Il piano di assassinio dell'imperatrice",
  "Capitolo 860 - Il party inizia alle 10",
  "Capitolo 861 - L'attore consumato",
  "Capitolo 862 - Un tipo intelligente",
  "Capitolo 863 - Il perfetto gentiluomo",
  "Capitolo 864 - Il piano per il massacro della Famiglia Vinsmoke",
  "Capitolo 865 - Ehy, madre",
  "Capitolo 866 - Nata per distruggere",
  "Capitolo 867 - Buon compleanno",
  "Capitolo 868 - KX Launcher",
  "Capitolo 869 - Sotto assedio"
],
"Volume 087": [
  "Capitolo 870 - Commiato",
  "Capitolo 871 - Forza, Caesar!",
  "Capitolo 872 - Soffice e cremoso",
  "Capitolo 873 - Come dolci in trappola",
  "Capitolo 874 - King Baum",
  "Capitolo 875 - L'onore di una donna",
  "Capitolo 876 - Pudding appare per caso!",
  "Capitolo 877 - Non sono così dolce",
  "Capitolo 878 - Tribù dei visoni, il capo dei guardiani Pedro",
  "Capitolo 879 - Katakuri, uno dei tre dolci comandanti di Big Mom"
],
"Volume 088": [
  "Capitolo 880 - Nessuna via di fuga",
  "Capitolo 881 - La stanza dell'onda",
  "Capitolo 882 - Oltre le aspettative di un imperatore",
  "Capitolo 883 - Merenda",
  "Capitolo 884 - Chi sarebbe",
  "Capitolo 885 - Mi chiamo Brulee!",
  "Capitolo 886 - Queshto e' il mio modo di vivere!",
  "Capitolo 887 - Da qualche parte, c'e' qualcuno che desidera la tua felicità",
  "Capitolo 888 - Leone",
  "Capitolo 889 - Una mama mai vista prima"
],
"Volume 089": [
  "Capitolo 890 - Big Mom sulla nave",
  "Capitolo 891 - Credono in me!",
  "Capitolo 892 - Riconoscere un nemico potente",
  "Capitolo 893 - La trentaseiesima figlia della famiglia Charlotte, Flambe'",
  "Capitolo 894 - Mezzanotte e cinque minuti",
  "Capitolo 895 - Il pirata Rufy contro il dolce comandante",
  "Capitolo 896 - L'ultima richiesta",
  "Capitolo 897 - Il piano di fuga da Cacao Island di Pekoms",
  "Capitolo 898 - Torneremo di sicuro",
  "Capitolo 899 - L'ultima resistenza",
  "Capitolo 900 - Musical dalla brutta fine"
],
"Volume 090": [
  "Capitolo 901 - Anche se dovessi morire, non morire!",
  "Capitolo 902 - Titoli di coda",
  "Capitolo 903 - Il quinto imperatore",
  "Capitolo 904 - L'arrivo dei comandanti dell'armata rivoluzionaria",
  "Capitolo 905 - Un mondo meraviglioso",
  "Capitolo 906 - La terra santa Mary Geoise",
  "Capitolo 907 - Il trono vuoto",
  "Capitolo 908 - Inizia il Reverie",
  "Capitolo 909 - Seppuku",
  "Capitolo 910 - Verso il paese di Wa"
],
"Volume 091": [
  "Capitolo 911 - Una grande avventura nella terra dei samurai!",
  "Capitolo 912 - Il Villaggio Amigasa",
  "Capitolo 913 - Tsuru ricambia il favore",
  "Capitolo 914 - Okobore, la città in rovina",
  "Capitolo 915 - Bakura Town",
  "Capitolo 916 - Un grande incontro di sumo nel paese di Wa",
  "Capitolo 917 - La nave tesoro delle provviste",
  "Capitolo 918 - Luffytaro ripaga il favore",
  "Capitolo 919 - Le rovine del castello di Oden",
  "Capitolo 920 - Amo Oden",
  "Capitolo 921 - Shutenmaru"
],
"Volume 092": [
  "Capitolo 922 - Governatore generale dei pirati delle cento bestie Kaido",
  "Capitolo 923 - L'imperatore Kaido contro Luffy",
  "Capitolo 924 - Ha",
  "Capitolo 925 - Il vuoto",
  "Capitolo 926 - La miniera dei prigionieri",
  "Capitolo 927 - O-Toko, la kamuro",
  "Capitolo 928 - La cortigiana Komurasaki entra in scena",
  "Capitolo 929 - Kurozumi Orochi, Shogun del paese di Wa",
  "Capitolo 930 - La città di Ebisu",
  "Capitolo 931 - O-Soba Mask"
],
"Volume 093": [
  "Capitolo 932 - Lo Shogun e la Cortigiana",
  "Capitolo 933 - La pietà di un samurai",
  "Capitolo 934 - Hyogoro il fiore",
  "Capitolo 935 - Queen",
  "Capitolo 936 - Il gran torneo sumo inferno",
  "Capitolo 937 - Gyukimaru sul ponte Oihagi",
  "Capitolo 938 - Il segreto di una donna",
  "Capitolo 939 - Gli artigli di un vecchio lupo sono sempre affilati",
  "Capitolo 940 - La scintilla della rivolta",
  "Capitolo 941 - Il più amato della città di Ebisu",
  "Capitolo 942 - Yasuie Shimotuski, il daimyo di Hakumai"
],
"Volume 094": [
  "Capitolo 943 - Gli Smile",
  "Capitolo 944 - Compagno",
  "Capitolo 945 - O-Lin",
  "Capitolo 946 - Queen vs O-Lin",
  "Capitolo 947 - La scommessa di Queen",
  "Capitolo 948 - Arriva Kawamatsu il kappa",
  "Capitolo 949 - Mummia",
  "Capitolo 950 - I sogni dei guerrieri",
  "Capitolo 951 - Furia",
  "Capitolo 952 - Hiyori e Kawamatsu",
  "Capitolo 953 - La volpe dal singolo travestimento"
],
"Volume 095": [
  "Capitolo 954 - Come mettere le ali ad un drago",
  "Capitolo 955 - Enma",
  "Capitolo 956 - Big News",
  "Capitolo 957 - Ultimate",
  "Capitolo 958 - Il porto promesso",
  "Capitolo 959 - Samurai",
  "Capitolo 960 - Entra in scena Kozuki Oden",
  "Capitolo 961 - L'incidente dello spirito della montagna",
  "Capitolo 962 - Il Daimyo e i suoi vassalli",
  "Capitolo 963 - Diventare un samurai",
  "Capitolo 964 - L'avventura di Oden"
],
"Volume 096": [
  "Capitolo 965 - La congiura del clan Kurozumi",
  "Capitolo 966 - Roger e Barbabianca",
  "Capitolo 967 - L'avventura di Roger",
  "Capitolo 968 - Il ritorno di Oden",
  "Capitolo 969 - Il lord tonto",
  "Capitolo 970 - Oden vs Kaido",
  "Capitolo 971 - Bolliti vivi",
  "Capitolo 972 - Io sono Oden! Nato per bollire!",
  "Capitolo 973 - Il clan Kozuki",
  "Capitolo 974 - Verso Onigashima!"
],
"Volume 097": [
  "Capitolo 975 - Il piano di Kin'emon",
  "Capitolo 976 - Lasciate che mi presenti",
  "Capitolo 977 - La festa non inizia ora",
  "Capitolo 978 - Entrano in scena i sei volanti",
  "Capitolo 979 - Problemi familiari",
  "Capitolo 980 - Musica da combattimento",
  "Capitolo 981 - Scontro",
  "Capitolo 982 - Da ruffiano a ruffiano",
  "Capitolo 983 - Tuono",
  "Capitolo 984 - La mia rabbia"
],
"Volume 098": [
  "Capitolo 985 - Il progetto nuova Onigashima",
  "Capitolo 986 - Il mio nome",
  "Capitolo 987 - La raffinata veste del vassallo",
  "Capitolo 988 - Scusate il ritardo",
  "Capitolo 989 - Per qualche motivo, non mi sento come se stessimo perdendo",
  "Capitolo 990 - Agente solitario",
  "Capitolo 991 - Lasciaci morire!",
  "Capitolo 992 - Resti",
  "Capitolo 993 - Il sogno di Wano",
  "Capitolo 994 - Puoi chiamarmi Yamato"
],
"Volume 099": [
  "Capitolo 995 - Il giuramento della Kunoichi",
  "Capitolo 996 - L'isola del più forte",
  "Capitolo 997 - Fiamme",
  "Capitolo 998 - Gli Zoan ancestrali",
  "Capitolo 999 - Il sake che ho distillato per bere con te",
  "Capitolo 1000 - Rufy ''Cappello di paglia''",
  "Capitolo 1001 - La battaglia decisiva dei mostri di Onigashima",
  "Capitolo 1002 - Imperatori vs nuova generazione",
  "Capitolo 1003 - La notte su una tavola di Go",
  "Capitolo 1004 - Kibi dango"
],
  // Aggiungi qui gli altri volumi con i relativi capitoli
};

// Loop attraverso i volumi e i capitoli e crea le cartelle
for (const volume in volumi) {
  const cartellaVolume = path.join(__dirname, volume);
  
  if (!fs.existsSync(cartellaVolume)) {
    fs.mkdirSync(cartellaVolume, { recursive: true });
    console.log(`Cartella del volume "${volume}" creata con successo.`);
  }
  
  volumi[volume].forEach(capitolo => {
    const cartellaCapitolo = path.join(cartellaVolume, capitolo);
    
    if (!fs.existsSync(cartellaCapitolo)) {
      fs.mkdirSync(cartellaCapitolo);
      console.log(`Cartella del capitolo "${capitolo}" creata con successo.`);
    } else {
      console.log(`La cartella del capitolo "${capitolo}" esiste già.`);
    }
  });
}
