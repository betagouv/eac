# Plateforme de l'Éducation Artistique et Culturelle

(_Documentation in French_)

Cette plateforme est en développement.

## Installation

1. Téléchargez les sources : `git clone https://github.com/betagouv/eac.git` ;
2. installez les dépendances de développement : `npm install` ;
3. lancez le _watcher_ qui transpile les fichiers `.js` et `.tags.html` en fichier `.js` ES5 : `npm run watch` ;
4. lancez le serveur : `npm run dev` ;
5. ouvez le navigateur à la page `http://localhost:8080`.

Elle dépend également de [l'API EAC](http://github.com/betagouv/eac-api) qui sert
les données.
Soit en local, soit directement l'API distance (qui est ouverte et en mode CORS).


## Contraintes

Il est recommandé d'utiliser un navigateur à jour pour un meilleur affichage :
[Firefox](https://www.mozilla.org/) 52, [Chromium](https://download-chromium.appspot.com/) 55,
[Brave](https://brave.com/), [Edge](https://developer.microsoft.com/microsoft-edge/) 16,
[Safari](https://developer.apple.com/safari/download/) 10.1,
[Opera](https://www.opera.com/download) 44 ou des versions plus récentes.


## Contribuer

La plateforme utilise :
- [RiotJS](http://riot.js.org/) pour la partie webcomponents ;
- [PageJS](https://visionmedia.github.io/page.js/) pour le routing client ;
- [Awesomplete](https://github.com/LeaVerou/awesomplete) pour l'autocompletion ;
- [Babel](https://babeljs.io/) pour transpiler le code en ES5 ;
- [Express](https://expressjs.com/) pour servir les pages.

Pour [nettoyer](https://standardjs.com/) les sources JS, lancer la commande `npm run lint`. Pour transpiler les fichiers `.js` et `.tags.html` en fichier `.js` ES5, lancer la commande `npm run build`.

L'application est déployée chez [clever cloud](https://www.clever-cloud.com/en/).
