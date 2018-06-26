# Plateforme de l'Éducation Artistique et Culturelle

(_Documentation in French_)

Cette plateforme est en phase de début de développement.

Son objectif est d'être rapidement confrontée aux utilisatrices•eurs afin
de mettre en adéquation l'outil à la finalité de leurs usages.

La philosophie technique de cette plateforme est de faire [_simple_](https://menwithpens.ca/simple-and-easy-blogging/),
modulable, jetable.
De retirer les complexités et les facteurs tiers de [non-](https://github.com/webpack/webpack/issues)[fonctionnement](https://stackoverflow.com/search?q=webpack).


## Installation

1. Téléchargez les sources : `git clone https://github.com/betagouv/eac.git`
2. installez les dépendances de développement (aucune en production) : `npm install`
3. lancez le serveur : `npm start`
4. ouvez le navigateur à la page `http://localhost:8080`.

Elle dépend également de [l'API EAC](http://github.com/betagouv/eac-api) qui sert
les données.
Soit en local, soit directement l'API distance (qui est ouverte et en mode CORS).


## Contraintes

Le prix à payer pour ne pas avoir de transpilation et de pouvoir coder vite et
propre, c'est d'avoir un navigateur à jour.
[Firefox](https://www.mozilla.org/) 52, [Chromium](https://download-chromium.appspot.com/) 55,
[Brave](https://brave.com/), [Edge](https://developer.microsoft.com/microsoft-edge/) 16,
[Safari](https://developer.apple.com/safari/download/) 10.1,
[Opera](https://www.opera.com/download) 42 ou des versions plus récentes.


## Contribuer

La plateforme est faite en [VanillaJS](http://vanilla-js.com/) saupoudrée de :
- [RiotJS](http://riot.js.org/) pour la partie webcomponents
- [PageJS](https://visionmedia.github.io/page.js/) pour le routing client
- [Awesomplete](https://github.com/LeaVerou/awesomplete) pour l'autocompletion

Pour nettoyer les sources JS, lancer la commande `npm run lint`
