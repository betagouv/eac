# Plateforme de l'Éducation Artistique et Culturelle

(_Documentation in French_)

Cette plateforme est en développement.

Son objectif est d'être rapidement confrontée aux utilisatrices•eurs afin
de mettre en adéquation l'outil à leurs usages.

D'un point de vue technique, l'application s'efforce de rester [_simple_](https://menwithpens.ca/simple-and-easy-blogging/),
modulable, jetable, en limitant les complexités et les facteurs tiers de [non-](https://github.com/webpack/webpack/issues)[fonctionnement](https://stackoverflow.com/search?q=webpack).


## Installation

1. Téléchargez les sources : `git clone https://github.com/betagouv/eac.git`.
2. Installez les dépendances de développement : `npm install`.
3. Lancez le _watcher_ qui transpile les fichiers `.js` et `.tags.html` en fichier `.js` ES5 : `npm run watch`.
4. Lancez le serveur : `npm start`.
5. Ouvez le navigateur à la page `http://localhost:8080`.

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

La plateforme est faite en [VanillaJS](http://vanilla-js.com/) saupoudrée de :
- [RiotJS](http://riot.js.org/) pour la partie webcomponents,
- [PageJS](https://visionmedia.github.io/page.js/) pour le routing client,
- [Awesomplete](https://github.com/LeaVerou/awesomplete) pour l'autocompletion.

Pour [nettoyer](https://standardjs.com/) les sources JS, lancer la commande `npm run lint`.
