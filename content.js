window.CAMPUS_CONTENT = {
  "missions": [
    {
      "n": 1,
      "verb": "Cadrer",
      "title": "Quelle décision faut-il prendre ?",
      "course": "Partie 1 · Cadrer une démarche d’étude data",
      "slides": "Diapositives 3 à 13",
      "sections": "Cours rédigé : 1.2 à 1.6",
      "intro": "La dirigeante veut agir vite. Votre première mission consiste à transformer son inquiétude en une question précise.",
      "evidence": "<div class=\"email\"><p class=\"from\">Pièce A · Message de Léa Martin, dirigeante · 2 novembre 2026</p><blockquote><p>« Nos offres attirent des clients. Pourtant, j’ai l’impression qu’ils ne reviennent pas assez. Faut-il proposer une nouvelle réduction, mieux organiser le retrait ou revoir la fidélité ? Je peux engager 1 800 € HT pour un test. Le 30 novembre 2026, je veux savoir quelle action vous conseillez de tester et comment nous vérifierons son intérêt. »</p></blockquote></div><p>L’équipe a rassemblé un échantillon de commandes d’avril à septembre. Elle dispose aussi d’avis clients et d’une enquête. Aucun test comparant les trois actions n’a encore été réalisé.</p><div class=\"note\"><b>Une règle fixée par la direction</b><p>Le test doit tenir dans 1 800 €. Pour envisager un déploiement, la direction vise un gain d’au moins <b>5 points de réachat à 30 jours</b> par rapport à un groupe comparable, sans contribution nette négative sur les trois mois de commandes supplémentaires, après le coût du test. Ce sont des objectifs à vérifier, pas des résultats acquis.</p></div>",
      "questions": [
        [
          "Quelle décision Léa doit-elle prendre le 30 novembre 2026 ?",
          "Présentez les trois actions envisagées. Expliquez ce que Léa peut décider maintenant et ce qu’elle devra vérifier avant de généraliser l’action choisie."
        ],
        [
          "Comment allez-vous mesurer le retour des clients ?",
          "Définissez ce qui compte comme un retour, la durée du suivi et les clients à retenir. Indiquez le calcul de votre indicateur et justifiez vos choix."
        ],
        [
          "Pourquoi certains clients pourraient-ils ne pas revenir ?",
          "Proposez trois hypothèses. Pour chacune, indiquez les données ou les informations nécessaires pour la vérifier."
        ],
        [
          "À quelle question votre étude doit-elle répondre ?",
          "Rédigez une question qui précise les clients concernés, la période et la décision à préparer. Vérifiez qu’il est possible d’y répondre avec des résultats mesurables et utiles à Léa."
        ],
        [
          "Quels types d’étude sont utiles dans ce cas ?",
          "Expliquez ce que les avis permettent d’explorer et ce que les tableaux permettent de décrire. Précisez les informations qui manqueraient pour prévoir les comportements futurs."
        ]
      ],
      "output": "Rédigez une fiche de cadrage d’une page. Elle doit présenter la décision à prendre, la question d’étude, les clients et la période concernés, vos trois hypothèses, les indicateurs retenus et les critères de réussite du futur test.",
      "help": "<p>Vous pouvez commencer par : « Pour les clients dont le premier achat est observé entre … et …, quelles différences de … sont liées au réachat dans les … jours, afin de choisir … ? »</p><p>Pour l’objectif décisionnel, reprenez : <b>Décider… pour… avant le… si… sinon…</b>. Le nombre d’abonnés aux réseaux sociaux ne suffit pas à mesurer le retour des clients.</p><p>Un gain de 5 points fait passer un taux de 30 % à 35 %. Une hausse de 5 % le fait passer de 30 % à 31,5 %.</p>",
      "docs": [
        [
          "cas",
          "Le brief complet"
        ],
        [
          "donnees/synthese",
          "Les premiers chiffres"
        ]
      ],
      "role": "Répartissez les rôles : une personne anime, une prend les notes et une vérifie que chaque hypothèse peut être mesurée."
    },
    {
      "n": 2,
      "verb": "Explorer",
      "title": "À quelles données peut-on se fier ?",
      "course": "Partie 2 · Cartographier les données et les sources",
      "slides": "Diapositives 14 à 19",
      "sections": "Cours rédigé : 2.1 à 2.4",
      "intro": "Vous disposez des données des onglets Commandes, Clients, Avis et Enquête. Avant de calculer, cherchez ce qu’elles représentent et ce qui peut fausser leur lecture.",
      "evidence": "<div class=\"note\"><b>Les quatre ensembles de données à consulter</b><p>Ouvrez les pages <a href=\"#donnees/commandes\">Commandes</a>, <a href=\"#donnees/clients\">Clients</a>, <a href=\"#donnees/avis\">Avis</a> et <a href=\"#donnees/enquete\">Enquête</a>. Vous trouverez les mêmes données dans les onglets du <a href=\"data/campus-bowl-donnees.xlsx\" download>classeur Excel à télécharger</a>.</p></div><p>Les commandes décrivent des achats. Le fichier clients suit des personnes identifiées. Les avis décrivent des expériences. L’enquête ne concerne que les personnes qui ont accepté de répondre.</p><div class=\"email\"><p class=\"from\">Pièce B · Note de Sami, responsable marketing</p><blockquote>« Sur 80 réponses à notre enquête, 60 clients donnent une note de 4 ou 5 sur 5. Cela prouve que nos clients sont satisfaits. Je recommande une nouvelle promotion pour attirer plus de monde. »</blockquote></div><p><b>Méthode de l’enquête :</b> lien envoyé le 20 septembre 2026 à 250 abonnés de la newsletter. Réponses volontaires jusqu’au 27 septembre. Une réponse par lien. 80 réponses reçues, dont 64 personnes déclarant au moins deux achats. Aucun client hors newsletter n’a été sollicité.</p><div class=\"note\"><b>Une information à retrouver à l’extérieur</b><p>Choisissez une source INSEE ou enseignement supérieur. Relevez une donnée utile pour décrire le contexte local. Notez son année et son périmètre. Expliquez ce qu’elle ne dit pas sur les clients de Campus Bowl.</p></div>",
      "questions": [
        [
          "À quoi servent les données des onglets Commandes, Clients, Avis et Enquête ?",
          "Pour chaque onglet, indiquez l’origine des données, leur forme, leur utilité pour l’étude et une limite. Présentez votre réponse dans un tableau."
        ],
        [
          "Quelles erreurs faut-il corriger dans l’extrait à nettoyer ?",
          "Relevez au moins quatre problèmes dans l’onglet Nettoyage. Pour chacun, indiquez la ligne, la correction proposée et le ticket qui la justifie."
        ],
        [
          "Peut-on généraliser les résultats de l’enquête à tous les clients ?",
          "Indiquez qui a reçu le questionnaire, qui a répondu et quels clients ne sont pas représentés. Expliquez si la conclusion de Sami est justifiée."
        ],
        [
          "Quelle donnée externe peut aider à comprendre le contexte de Campus Bowl ?",
          "Relevez un chiffre dans une source externe et notez l’organisme, le lien, l’année et la zone concernée. Expliquez son utilité et sa limite pour l’étude."
        ],
        [
          "Quels contrôles faut-il faire en priorité avant d’utiliser les données ?",
          "Choisissez trois contrôles. Pour chacun, précisez ce qu’il faut vérifier, pourquoi et qui doit s’en charger."
        ]
      ],
      "output": "Présentez les sources dans un tableau en précisant leur origine interne ou externe, la forme des données, leur utilité et leurs limites. Ajoutez les contrôles à effectuer et les responsables, ainsi qu’une courte fiche sur la donnée externe que vous avez choisie.",
      "help": "<p>Reprenez les six dimensions de qualité : <b>exactitude, complétude, cohérence, fraîcheur, unicité, validité</b>. Une même erreur peut relever de plusieurs dimensions.</p><p>Une absence d’identifiant n’empêche pas de compter une commande. Elle empêche de l’attribuer avec certitude à une personne. Une donnée publique est une donnée externe ; cela ne garantit pas qu’elle réponde à votre question.</p><p>Sans accès à Internet, utilisez la fiche INSEE de secours dans les ressources et analysez son périmètre.</p>",
      "docs": [
        [
          "donnees/commandes",
          "Commandes"
        ],
        [
          "donnees/clients",
          "Clients"
        ],
        [
          "donnees/avis",
          "Avis"
        ],
        [
          "donnees/enquete",
          "Enquête"
        ],
        [
          "donnees/qualite",
          "L’extrait à nettoyer"
        ],
        [
          "ressources",
          "Les sources externes"
        ]
      ],
      "role": "Le responsable des données présente une source. Les autres cherchent une limite à son utilisation."
    },
    {
      "n": 3,
      "verb": "Collecter",
      "title": "Comment faire circuler les bonnes données ?",
      "course": "Partie 3 · Concevoir l’architecture de collecte",
      "slides": "Diapositives 20 à 26",
      "sections": "Cours rédigé : 3.1 à 3.4",
      "intro": "Les informations existent dans plusieurs outils. Vous devez expliquer comment les réunir et ce qu’il faut encore collecter.",
      "evidence": "<div class=\"email\"><p class=\"from\">Pièce C · Note de Nora, référente informatique</p><blockquote>« La caisse enregistre les achats. La commande en ligne possède son propre numéro de client. Le fichier fidélité utilise encore un troisième code. Nous avons rapproché les identifiants pour le dossier d’étude, mais ce travail est manuel. Il reste 100 commandes sans identifiant. »</blockquote></div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Les outils existants\"><table><thead><tr><th>Outil</th><th>Ce qu’il enregistre</th><th>Fonctionnement actuel</th></tr></thead><tbody><tr><td>Caisse</td><td>Numéro de commande, montant, restaurant, heure</td><td>Export chaque semaine</td></tr><tr><td>Commande en ligne</td><td>Code web, commande, validation et retrait</td><td>Export séparé ; API proposée par l’éditeur</td></tr><tr><td>Fidélité</td><td>Code fidélité, coordonnées, choix de prospection</td><td>Fichier tenu par le marketing</td></tr><tr><td>Service client</td><td>Messages et motifs des demandes</td><td>Classement manuel, sans catégorie commune</td></tr></tbody></table></div><p>Dans le dossier, les codes C0001 à C0460 sont des identifiants fictifs communs déjà préparés. Ce rapprochement facilite votre analyse. Il ne décrit pas encore une solution durable pour l’entreprise.</p><p><b>Ce qui manque :</b> on ne sait pas toujours pourquoi une personne n’est pas revenue, si elle était encore présente sur le campus, ni si certains achats sans carte lui appartiennent.</p>",
      "questions": [
        [
          "Quelles données faut-il utiliser pour calculer chaque indicateur ?",
          "Pour chaque indicateur, indiquez les onglets et les colonnes nécessaires. Si vous utilisez plusieurs onglets, précisez le code commun qui permet de retrouver le même client ou la même commande."
        ],
        [
          "Comment organiser la collecte des données ?",
          "Précisez où recueillir les données, avec quel outil et à quelle fréquence. Justifiez votre choix entre un export de fichiers et une API pour les transmettre."
        ],
        [
          "Quelles questions poser aux clients pour comprendre leur retour ou leur absence de retour ?",
          "Rédigez trois questions claires qui ne suggèrent pas la réponse. Expliquez comment vous contacterez aussi les clients qui ne sont pas revenus."
        ],
        [
          "Que demanderez-vous au service informatique pour préparer l’étude ?",
          "Rédigez une demande en six lignes : objectif, données, utilisateurs, fréquence, date de disponibilité et accès autorisés. Ajoutez un schéma du parcours des données, de leur collecte aux résultats."
        ]
      ],
      "output": "Présentez le parcours des données dans un schéma et rédigez votre demande à la DSI en six lignes. Ajoutez les trois questions d’enquête et expliquez comment vous choisirez les personnes à interroger.",
      "help": "<p>Un identifiant commun relie les achats d’une même personne. Il n’est pas nécessaire d’afficher son nom dans le fichier d’analyse.</p><p>Pour le schéma, utilisez des rectangles et des flèches dans votre document. Au-dessus de chaque flèche, écrivez ce qui circule et à quelle fréquence.</p><p>Évitez « Le délai trop long vous a-t-il déçu ? ». Préférez une question neutre sur l’expérience, puis une question sur la raison du non-retour. Le choix du contact doit être examiné avec le DPO avant une collecte réelle.</p>",
      "docs": [
        [
          "cas",
          "L’organisation de Campus Bowl"
        ],
        [
          "donnees/clients",
          "Le fichier clients"
        ],
        [
          "ressources",
          "Les ressources CNIL"
        ]
      ],
      "role": "Une personne joue la DSI. Elle doit pouvoir comprendre et réaliser votre demande sans deviner les informations manquantes."
    },
    {
      "n": 4,
      "verb": "Analyser",
      "title": "Que montrent les chiffres ?",
      "course": "Partie 4 · Choisir les modalités de traitement",
      "slides": "Diapositives 27 à 32",
      "sections": "Cours rédigé : 4.1 à 4.4",
      "intro": "Vous disposez de tableaux déjà regroupés. Calculez quelques indicateurs, puis confrontez-les aux avis et aux limites des données.",
      "evidence": "<p>Travaillez dans l’onglet <b>Calculs</b> du classeur. Les additions et les divisions suffisent. Les fichiers détaillés servent à vérifier les résultats ; vous n’avez pas à construire un tableau croisé dynamique.</p><div class=\"note\"><b>Le même temps d’observation pour tous</b><p>Sur 460 clients identifiés, 400 ont un premier achat observé entre le 1er avril et le 31 août. Leur suivi à 30 jours est complet au 30 septembre. Les 60 clients arrivés en septembre restent en dehors du calcul principal.</p><p>Un réachat est une nouvelle commande faite un autre jour, de J+1 à J+30 inclus, dans l’un des trois restaurants. Sans historique avant avril, « premier achat observé » ne veut pas forcément dire « nouveau client ».</p></div><div class=\"email\"><p class=\"from\">Pièce D · Synthèse fictive produite par une IA, à critiquer</p><blockquote>« Tous les clients trouvent Campus Bowl trop cher. Les promotions augmentent forcément la fidélité. Les avis prouvent qu’une baisse de prix fera revenir les clients. »</blockquote></div>",
      "questions": [
        [
          "Quel est le taux de réachat dans chaque restaurant ?",
          "Dans l’onglet Calculs, divisez les clients revenus par les clients dont le suivi est complet. Présentez les trois taux en pourcentage dans un graphique en barres."
        ],
        [
          "Le taux de réachat varie-t-il selon l’attente ou la remise reçue ?",
          "Calculez les taux des groupes d’attente, puis ceux des clients avec et sans remise. Donnez les écarts en points et expliquez ce que ces comparaisons permettent de conclure."
        ],
        [
          "Quelle est la contribution de chaque restaurant ?",
          "Dans l’onglet Calculs, soustrayez les coûts variables des ventes nettes. Présentez les trois montants et expliquez pourquoi ils ne correspondent pas au bénéfice."
        ],
        [
          "Quels thèmes ressortent des avis clients ?",
          "Classez les 30 avis en quatre à six thèmes et comptez les avis de chaque thème. Citez deux avis qui soutiennent votre analyse et un qui la nuance."
        ],
        [
          "Quelles conclusions de l’IA ne sont pas démontrées ?",
          "Relevez deux affirmations dans la synthèse fictive de l’IA. Pour chacune, expliquez ce qui pose problème et ce qu’il faudrait vérifier."
        ]
      ],
      "output": "Présentez trois constats chiffrés et deux limites de votre analyse, avec deux graphiques au maximum. Appuyez-vous sur deux avis clients et citez un troisième avis qui nuance votre lecture. Décrivez également les étapes du nettoyage.",
      "help": "<p><b>Taux de réachat</b> = clients revenus ÷ clients observés. Si 12 clients reviennent sur 40, <span class=\"formula\">=12/40</span> donne 30 % après mise en forme en pourcentage.</p><p><b>Panier moyen</b> = ventes nettes ÷ commandes. <b>Contribution</b> = ventes nettes − coûts variables. Les salaires fixes, loyers et autres charges ne sont pas retranchés.</p><p>Pour le total, additionnez les numérateurs et les dénominateurs avant de diviser. Ne faites pas la moyenne simple de taux portant sur des groupes de tailles différentes.</p><p>Une différence observée ne prouve pas une cause. Le restaurant, le créneau, le profil des clients et la période peuvent aussi intervenir. Une IA aide à classer les avis ; une personne vérifie les citations et les catégories.</p>",
      "docs": [
        [
          "donnees/reachat",
          "Les tableaux de réachat"
        ],
        [
          "donnees/synthese",
          "Les ventes et coûts"
        ],
        [
          "donnees/avis",
          "Les avis clients"
        ],
        [
          "aide",
          "Les formules Excel"
        ]
      ],
      "role": "Avant de retenir un constat, une autre personne du groupe vérifie son calcul, son dénominateur et sa formulation.",
      "optional": "<h2>Pour aller plus loin</h2><p>Si vous souhaitez prolonger le travail, proposez une règle simple qui pourrait être automatisée dans le traitement des données. Précisez ce qu’une personne devra vérifier. Cette proposition est facultative.</p>",
      "before": "<div class=\"note\"><b>À savoir avant de commencer</b><p>Les notions de coûts variables, de contribution, de points de pourcentage, de fenêtre d’observation, de suivi complet, de groupe témoin, de tirage au sort et de seuil de rentabilité sont expliquées avec des exemples dans <a href=\"#aide\">Aide et méthode, rubrique Quelques mots utiles</a>.</p></div>"
    },
    {
      "n": 5,
      "verb": "Protéger",
      "title": "Quelles données garder, pour quel usage ?",
      "course": "Partie 5 · Gouvernance des données et RGPD",
      "slides": "Diapositives 33 à 39",
      "sections": "Cours rédigé : 5.1 à 5.4",
      "intro": "Votre étude doit être utile et responsable. Décidez quelles données sont nécessaires, qui peut les utiliser et quelles demandes doivent être revues.",
      "evidence": "<div class=\"email\"><p class=\"from\">Pièce E · Nouvelle demande du marketing</p><blockquote>« Pour mieux cibler, ajoutons le nom, le téléphone, la date de naissance complète, les allergies et la géolocalisation précise. Conservons tout sans date de fin. Nous pourrions aussi copier les messages clients dans notre outil d’IA et envoyer un bon de réduction à toutes les adresses disponibles. »</blockquote></div><p>Alex, DPO externe, demande à votre équipe de préciser les usages avant de répondre. Nora vérifie les accès et les outils. Léa reste responsable de la décision au nom de l’entreprise.</p><div class=\"note\"><b>Deux usages à distinguer</b><p>Analyser les achats pour comprendre le réachat et envoyer une offre promotionnelle sont deux traitements à examiner séparément. Une donnée utile à une étude n’autorise pas automatiquement son utilisation pour une campagne.</p></div><p>Les fichiers pédagogiques contiennent seulement des personnes inventées. Pour l’exercice, raisonnez comme si l’entreprise manipulait des données réelles. Un identifiant remplaçant un nom peut rester une donnée personnelle si une réidentification est possible.</p>",
      "questions": [
        [
          "Quelles données faut-il garder dans le fichier d’étude ?",
          "Pour chaque donnée demandée par le marketing, indiquez si vous la conservez, la rendez moins précise ou l’écartez. Justifiez chaque choix par les besoins de l’étude."
        ],
        [
          "Qui est responsable des données et qui peut y accéder ?",
          "Précisez les rôles de la direction, du marketing, de la DSI et du DPO. Distinguez les personnes qui ont besoin du fichier détaillé de celles qui ont seulement besoin des résultats."
        ],
        [
          "Quand faut-il supprimer le fichier d’étude ?",
          "Proposez une date ou un événement de suppression, en tenant compte du suivi et du bilan économique. Justifiez votre choix et expliquez pourquoi les factures doivent être traitées séparément."
        ],
        [
          "Que faut-il vérifier avant d’envoyer une offre ou d’utiliser un outil d’IA ?",
          "Pour chacun des deux usages, précisez l’objectif, la base légale, l’information et les droits des personnes, ainsi que les garanties du prestataire. Appuyez-vous sur les ressources CNIL."
        ],
        [
          "Quelle réponse adresserez-vous au marketing ?",
          "Rédigez un court message présentant ce que vous proposez, les modifications nécessaires et les points à vérifier avant de commencer."
        ]
      ],
      "output": "Rédigez une note qui précise l’objectif de l’étude, les données retenues, les responsabilités, les accès et la durée de conservation. Expliquez comment les droits des personnes seront respectés et quelles vérifications sont nécessaires avant un nouvel usage.",
      "help": "<p>La minimisation consiste à retenir les données nécessaires à l’objectif. Des catégories larges peuvent suffire là où une information précise serait excessive.</p><p>Les allergies peuvent révéler des données de santé. Leur utilité éventuelle pour préparer un repas ne justifie pas automatiquement leur présence dans une étude de fidélisation.</p><p>Le consentement n’est pas l’unique base légale. L’intérêt légitime nécessite notamment une analyse de nécessité et une mise en balance des droits. Pour une prospection électronique, vérifiez aussi les règles propres au canal.</p><p>Le DPO conseille et contrôle la conformité. Le responsable du traitement reste responsable des choix. Ces repères sont à confronter aux fiches CNIL liées dans les ressources.</p>",
      "docs": [
        [
          "ressources",
          "Les fiches CNIL"
        ],
        [
          "cas",
          "Les rôles dans l’entreprise"
        ]
      ],
      "role": "Organisez une réunion : marketing, DSI, DPO et direction. La direction conclut en expliquant les modifications retenues."
    },
    {
      "n": 6,
      "verb": "Décider",
      "title": "Quelle action conseillez-vous de tester ?",
      "course": "Partie 6 · Construire une démarche décisionnelle",
      "slides": "Diapositives 40 à 44",
      "sections": "Cours rédigé : 6.1 à 6.4",
      "intro": "La dirigeante attend une recommandation courte. Reliez vos constats à une action, puis expliquez comment en vérifier les résultats.",
      "evidence": "<p>Le budget maximal est de <b>1 800 € HT</b>. La direction veut choisir un test avant le 30 novembre. La période de recrutement proposée va du 11 janvier au 7 février 2027. Le dernier client recruté sera observé jusqu’au 9 mars 2027. Un premier bilan du réachat est prévu le 12 mars 2027. Le bilan économique attendra la fin des trois mois de commandes supplémentaires pour tous les clients concernés.</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Les trois options de test\"><table><thead><tr><th>Option</th><th>Hypothèses de coût HT</th><th>Coût maximal</th></tr></thead><tbody><tr><td>A · Réduction ciblée</td><td>Paramétrage : 300 € + 500 bons utilisés au maximum × 2 €</td><td>1 300 €</td></tr><tr><td>B · Retrait mieux organisé</td><td>Signalétique et installation : 600 € + 20 heures de renfort × 25 €</td><td>1 100 €</td></tr><tr><td>C · Fidélité plus visible</td><td>Paramétrage et supports : 700 € + 300 récompenses au maximum × 2 €</td><td>1 300 €</td></tr></tbody></table></div><p>Ces montants sont des hypothèses pédagogiques. Ils incluent les postes décrits et supposent l’équipe habituelle disponible. L’option B est un test sur des créneaux ciblés : vingt heures de renfort ne couvrent pas tous les services du mois.</p><div class=\"note\"><b>Pour un calcul simple de seuil économique</b><p>Retenez une contribution de référence de <b>6 € HT par commande réellement supplémentaire</b>, avant le coût du test. Les remises et récompenses figurent déjà dans le budget : ne les comptez pas une deuxième fois.</p><p><b>L’échantillon est réduit. Pendant les 4 semaines du test, retenez 800 nouveaux clients concernés, quelle que soit l’option testée.</b></p><p><b>Un client qui revient grâce à l’action passe en moyenne 4 commandes supplémentaires sur les 3 mois suivants. La contribution du test se juge sur cette période de 3 mois.</b></p><p>Ce sont des hypothèses de projection. Elles ne modifient pas les commandes ni les clients du dossier historique. Les trois mois suivants commencent au retour du client attribué à l’action.</p><p><b>Commandes supplémentaires = 800 × (gain en points ÷ 100) × 4.</b></p><p>Calculez d’abord le coût du test ÷ 6, arrondi à l’entier supérieur. Divisez ensuite ce nombre de commandes par 4 et arrondissez au client entier supérieur. Divisez enfin ce nombre de clients par 800 et multipliez par 100 pour obtenir le gain minimal en points.</p></div><p>À Centre-ville, l'attente est élevée sur tous les créneaux. Avec 20 heures de renfort, choisissez les créneaux qui concentrent le plus de commandes et justifiez votre choix avec la colonne Commandes.</p>",
      "questions": [
        [
          "Quelle action recommandez-vous de tester, et dans quel restaurant ?",
          "Justifiez votre choix avec deux résultats chiffrés et un avis client. Pour l’option B, indiquez les créneaux retenus et la répartition des 20 heures de renfort."
        ],
        [
          "Quel gain faut-il obtenir pour couvrir le coût du test ?",
          "Calculez le coût, puis les commandes supplémentaires nécessaires, les clients supplémentaires et le gain minimal en points. Vérifiez le respect du budget et indiquez si l’objectif de 5 points suffit, avec les hypothèses fournies."
        ],
        [
          "Comment allez-vous évaluer les résultats du test ?",
          "Décrivez les deux groupes comparés, le calendrier, les indicateurs et les critères pour poursuivre ou arrêter. Distinguez le bilan du réachat du bilan économique."
        ],
        [
          "Qu’est-ce qui pourrait fausser la comparaison entre les deux groupes ?",
          "Présentez deux limites du test proposé. Pour chacune, expliquez son effet possible sur le résultat et la précaution à prendre."
        ],
        [
          "Comment les données permettront-elles de prendre la décision finale ?",
          "Présentez un schéma reliant les sources, les contrôles, les calculs, le tableau de bord et la décision. Indiquez les responsables et les mesures de protection à chaque étape."
        ]
      ],
      "output": "Terminez le dossier écrit à remettre au formateur. Rassemblez vos réponses aux six missions et présentez votre recommandation, ses preuves, le coût et le protocole du test, le parcours des données, puis le suivi des résultats et les limites de votre démarche. Remettez le dossier au format PDF avec le classeur Excel complété.",
      "help": "<p>Un constat décrit un résultat. Un insight relie ce résultat à une explication plausible et à une action. Signalez clairement ce qui reste une hypothèse.</p><p>Le test doit comparer des groupes suffisamment similaires. Une affectation aléatoire, si elle est faisable, réduit certains biais. Un simple avant/après peut être trompeur si le calendrier ou les offres changent.</p><p>Retenez les seuils avant le test : au moins 5 points de gain de réachat et contribution nette non négative après le coût du test. Un petit effectif demande de la prudence, même si le seuil est franchi.</p><p>Ne promettez pas un gain commercial à partir des seules données historiques. Présentez le seuil de rentabilité comme une condition à atteindre.</p><p>Pour l’option B, on ne peut pas tirer au sort les clients d’une même file. Exemple de protocole : renforcer certains jours (lundi, mercredi, vendredi) et pas les autres (mardi, jeudi), en inversant la semaine suivante. On compare ensuite le réachat à 30 jours des nouveaux clients servis les jours renforcés et les jours normaux. Pour les options A et C, un tirage au sort des clients reste possible.</p><p>Les 800 nouveaux clients concernés incluent les jours renforcés et les jours normaux ; le gain se mesure en comparant ces deux groupes.</p><p>Gardez des créneaux, des offres et des conditions comparables. Conservez le groupe du premier achat de chaque nouveau client et signalez ceux qui fréquentent ensuite les deux organisations. Le réachat se mesure à 30 jours ; l’équilibre économique s’évalue sur les trois mois de commandes supplémentaires.</p>",
      "docs": [
        [
          "donnees/reachat",
          "Les résultats à calculer"
        ],
        [
          "cas",
          "Le brief et les options"
        ],
        [
          "aide",
          "Le dossier à remettre"
        ],
        [
          "donnees/reachat",
          "Les délais par créneau"
        ]
      ],
      "role": "Rédigez votre recommandation en équipe. Vérifiez que le dossier contient vos réponses aux six missions, les calculs utiles et les sources, puis remettez-le au formateur.",
      "before": "<div class=\"note\"><b>À savoir avant de commencer</b><p>Les notions de coûts variables, de contribution, de points de pourcentage, de fenêtre d’observation, de suivi complet, de groupe témoin, de tirage au sort et de seuil de rentabilité sont expliquées avec des exemples dans <a href=\"#aide\">Aide et méthode, rubrique Quelques mots utiles</a>.</p></div>"
    }
  ],
  "resources": [
    {
      "type": "Marché local",
      "title": "INSEE · La population de Grenoble",
      "url": "https://www.insee.fr/fr/statistiques/2011101?geo=COM-38185",
      "body": "Un dossier communal pour situer la population, les âges, les revenus et l’activité. Les tableaux précisent leur année de référence.",
      "task": "Relevez un indicateur d’âge et un indicateur de revenu. Notez l’année, l’unité et la zone.",
      "limit": "Les habitants d’une commune ne sont ni tous étudiants ni tous clients. Les trois restaurants sont fictifs : leur zone de chalandise reste à définir."
    },
    {
      "type": "Contexte étudiant",
      "title": "UGA · Les chiffres de l’université",
      "url": "https://decouvrir.univ-grenoble-alpes.fr/notre-identite/chiffres-cles/",
      "body": "Une présentation officielle des effectifs et de l’implantation de l’Université Grenoble Alpes.",
      "task": "Repérez le périmètre couvert par les effectifs annoncés. Est-il limité à Grenoble ?",
      "limit": "Un effectif universitaire ne mesure ni la présence quotidienne autour d’un restaurant ni l’intention d’y manger."
    },
    {
      "type": "Données publiques",
      "title": "Ministère · La carte de l’enseignement supérieur",
      "url": "https://www.data.gouv.fr/datasets/cartographie-de-lenseignement-superieur",
      "body": "Un point d’entrée vers la cartographie et les données d’effectifs de l’enseignement supérieur.",
      "task": "Cherchez Grenoble et examinez l’année ainsi que le niveau géographique disponibles.",
      "limit": "Vérifiez les établissements inclus, la méthode et les éventuelles doubles inscriptions avant d’additionner des effectifs."
    },
    {
      "type": "Protection des données",
      "title": "CNIL · Les six grands principes",
      "url": "https://www.cnil.fr/fr/comprendre-le-rgpd/les-six-grands-principes-du-rgpd",
      "body": "Des repères sur la finalité, la minimisation, la transparence, la conservation, les droits et la sécurité.",
      "task": "Choisissez deux principes et appliquez-les à la demande du marketing.",
      "limit": "Justifiez les choix pour chaque usage prévu dans le cas."
    },
    {
      "type": "Base légale",
      "title": "CNIL · L’intérêt légitime",
      "url": "https://www.cnil.fr/fr/les-bases-legales/interet-legitime",
      "body": "La méthode pour examiner si l’intérêt légitime peut fonder un traitement, avec une analyse de nécessité et des droits des personnes.",
      "task": "Expliquez pourquoi une entreprise ne peut pas simplement affirmer « c’est notre intérêt commercial ».",
      "limit": "L’analyse des achats et la prospection doivent être examinées séparément."
    },
    {
      "type": "Communication commerciale",
      "title": "CNIL · Les messages aux clients",
      "url": "https://www.cnil.fr/fr/communication-electronique-quelles-regles",
      "body": "Les règles distinguent les messages de service, les communications relationnelles et la prospection. La CNIL précise les conditions applicables aux clients existants.",
      "task": "Vérifiez les conditions d’une relance contenant un bon de réduction.",
      "limit": "La présence d’une adresse dans un fichier ne prouve pas que tous les usages sont autorisés."
    },
    {
      "type": "Conservation",
      "title": "CNIL · Les durées de conservation",
      "url": "https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees",
      "body": "Des ressources pour fixer une durée adaptée à l’objectif poursuivi et distinguer utilisation courante et archivage.",
      "task": "Proposez une durée pour le fichier d’étude et expliquez pourquoi elle peut différer de celle des factures.",
      "limit": "Évitez une durée unique appliquée à tous les fichiers sans justification."
    }
  ]
};
