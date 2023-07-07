# Sportsee - Projet 12 d'OpenClassrooms

## Description

Sportsee est une application développée avec React qui permet de visualiser l'activité sportive d'un utilisateur. Nous utilisons Recharts pour intégrer des graphiques représentant cette activité.

## Installation

Pour installer le projet localement, suivez ces étapes :

1. Clonez le dépôt en utilisant `git clone https://github.com/5sensprod/sportsee.git`.
2. Naviguez jusqu'au dossier du projet avec `cd sportsee`.
3. Installez les dépendances en utilisant `yarn install` ou `npm install`.

## Variables d'Environnement

Créez un fichier `.env` à la racine du projet et définissez les variables suivantes :

- `PORT=3001`: Le port sur lequel le serveur frontend sera lancé.
- `REACT_APP_USE_MOCK_DATA`: Si cette variable est définie sur `true`, le projet utilisera des données mockées. Si elle est définie sur `false`, le projet utilisera des données provenant de l'API. L'API peut être trouvée [ici](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard).

## Lancement du projet

Pour lancer le projet, utilisez la commande `yarn start` ou `npm start`. Assurez-vous que le backend est lancé sur le port 3000.

## Démo

Une version démo de l'application est disponible [ici](https://5sensprod.github.io/sportsee_mock/).

## Contact

Pour toute question ou problème, vous pouvez contacter [5sensprod@gmail.com](mailto:5sensprod@gmail.com).

## Autres informations

Le projet se concentre sur la version desktop, donc il n'est pas nécessaire de travailler sur la version mobile ou tablette pour l'instant. Cependant, le projet doit être lisible sur des écrans d'au moins 1024 par 780 pixels. Tous les appels HTTP sont faits en dehors des composants React, donc un service séparé a été créé pour cela. Les données de l'API sont modélisées à l'aide d'une classe spécifique pour assurer un formatage correct.
