# Plateforme de l'Éducation Artistique et Culturelle

(_Documentation in French_)

Cette plateforme est en phase de début de développement.

Son objectif est d'être rapidement confrontée aux utilisatrices•eurs afin
de mettre en adéquation l'outil à la finalité de leurs usages.

La philosophie technique de cette plateforme est de faire [_simple_](https://menwithpens.ca/simple-and-easy-blogging/),
modulable, jetable.
De retirer les complexités et les facteurs tiers de [non-](https://github.com/webpack/webpack/issues)[fonctionnement](https://stackoverflow.com/search?q=webpack).


## Installation

Téléchargez les sources:

```sh
git clone https://github.com/betagouv/eac.git
```

Et ouvrez le fichier eac/index.html avec votre navigateur web.

Il n'y a rien à installer.
Pas de dépendence externe.
Pas non plus de transpilation ou post-processeur. [_Ça juste marche_](https://fr.wikipedia.org/wiki/N%C3%A9ologisme).


## Contraintes

Le prix à payer pour ne pas avoir de transpilation et de pouvoir coder vite et
propre, c'est d'avoir un navigateur digne de ce nom, et à jour, _future-proof_.
[Firefox](https://www.mozilla.org/) 52, [Chromium](https://download-chromium.appspot.com/) 55,
[Brave](https://brave.com/), [Edge](https://developer.microsoft.com/microsoft-edge/) 16,
[Safari](https://developer.apple.com/safari/download/) 10.1,
[Opera](https://www.opera.com/download) 42 ou des versions plus récentes.


## Contribuer

La plateforme est faite en [VanillaJS](http://vanilla-js.com/) saupoudrée de :
- [RiotJS](http://riot.js.org/) pour la partie webcomponents
- [RioJS Route](https://riot.js.org/api/route/) pour le routing client
- [Airtable API](https://airtable.com/api) pour le stockage des données
- [FuseJS](http://fusejs.io/) pour le moteur de recherche.
