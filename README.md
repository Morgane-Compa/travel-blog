# TravelBlog by Morgane Compa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Projet Blog de voyage 🗺️

Une photographe et globe trotteuse vous propose ce site pour partager avec vous ses point de vue et astuces quand aux voyages qu'elle à effectué

## Contenu du site : 

### Contenu des pages :arrow_down:
Header :

- Sur mobile : fixé en haut de l'écran,
- Sur desktop : fixé à 180° à gauche de l'écran. 
Dans les deux cas, la largeur de la zone où se trouve la température doit être adapté à la taille du nom de la ville.


#### Home Page : 

- Le dernier article doit être affiché en haut de la page afin d'être mise en valeur,
- En cliquant sur l'image, l'utilisateur est redirigé vers la page article (également sur l'intégralité de l'article),
- en dessous de l'article principale il y a plusieurs article de plus petite taille disposé en quadrillages.


#### Article Page : 

Un bouton retour est visible pour pouvoir revenir en arrière, sur la page home. 
- Sur mobile : fixé en haut à gauche, 
- Sur desktop : fixé en bas à droite. 

Sections : Le voyage/Résumé

- Ces deux sections utilisent un même composant qui prennent un titre et un contenu texte. 
Le conteneur s'ajuste à la taille du texte. 

Section : Notre avis

- Cette section est composé de trois listes qui viennent des données de l'article : Les plus, les moins, notre conseil.
- si lune des listes est vide alors la liste ainsi que le titre de cette dernière ne s'affiche pas.

Section : Pour voyager un peu plus

Cette section comporte les autres images du voyage. 
- sur la version desktop les images s'affiche par section de trois puis diminuent progressivement pour terminer à un une seule colone en version mobile,


## Modalités d'évalution :
Le travail est séparer et évalué sous 3 couches de difficultés :

:white_check_mark: Niveau 1 : Réaliser le site responsive sans données, <br>
:white_check_mark: Niveau 2 : Créer des données et afficher les pages et données de façon dynamique (fait), <br>
:white_check_mark: Niveau 3 : Requêter une api pour afficher la température de façon dynamique (fait).

## Technologies
- Framework Angular <br>
- TypeScript <br>
- CSS

## Compatibilité

- Approche mobile-first, <br>
- Responsive sur mobile, tablette et desktop, <br>
- L'application fait appel à l'API https://www.visualcrossing.com/.





