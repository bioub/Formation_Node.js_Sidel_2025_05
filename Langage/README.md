# Formation JavaScript - Langage

Ce dossier contient les fichiers d'apprentissage du langage JavaScript, organisés par concepts fondamentaux.

## 01 - Introduction et Premier Programme

### 01-hello.html
Page HTML simple incluant le script `01-hello.js`.

### 01-hello.js
Premier programme JavaScript démontrant :
- Template literals (ES6)
- Boucle `for...of`
- Fonction avec paramètre
- Méthodes de chaînes (`toUpperCase()`)

## 02 - Compilation Just-In-Time (JIT)

### 02-jit.js
Démonstration de l'optimisation JIT de JavaScript avec mesures de performance :
- Utilisation de `console.time()` et `console.timeEnd()`
- Observation de l'amélioration des performances au fil des exécutions

## 03 - Fonctions

### 03-functions.js
Concepts fondamentaux des fonctions JavaScript :
- Déclaration et appel de fonctions
- Paramètres et arguments
- Valeurs de retour avec `return`
- Paramètres par défaut (ES2015)
- Paramètres optionnels
- Gestion d'erreurs avec `try/catch` et `throw`
- Hoisting des fonctions

## 04 - Paramètres Par Défaut

### 04-default.js
Différentes approches pour gérer les paramètres par défaut :
- Vérifications avec `if`
- Opérateur logique OR (`||`)
- Syntaxe ES2015 (recommandée)
- Nullish Coalescing Operator (`??`) - ES2020
- Logical Assignment Operator (`??=`) - ES2021

## 05 - Fonctions Variadiques

### 05-variadic.js
Fonctions acceptant un nombre variable d'arguments :
- Pseudo-variable `arguments` (ancienne méthode)
- Syntaxe rest (`...args`) - ES2015 (recommandée)

## 06 - Fonctions Imbriquées

### 06-nested-functions.js
Exemple simple de fonctions définies à l'intérieur d'autres fonctions et leur portée.

## 07 - Portées (Scopes)

### 07-scopes.js
Hiérarchie des portées en JavaScript :
- Global scope (`globalThis`)
- Script scope
- Closure scope (fonction externe)
- Local scope (fonction interne)
- Block scope (`let`, `const`)

## 08 - Closures - Cas d'Usage 1

### 08-closure-use-case-1.html
Exemple pratique de closure pour créer des boutons dynamiques :
- Génération d'éléments DOM
- Capture de variables dans les event listeners
- Utilisation de closure pour préserver le contexte

## 09 - Closures - Cas d'Usage 2

### 09-closure-use-case-2.html
Alternative pour les closures avec des éléments HTML existants :
- Sélection d'éléments avec `querySelectorAll`
- Event listeners avec closures dans une boucle

## 10 - Fonctions Fléchées

### 10-arrow-functions.js
Comparaison des différentes syntaxes de fonctions :
- Function declaration
- Function expression
- Arrow functions avec et sans return implicite
- Shorthand property names dans les objets

## 11 - Callbacks Synchrones

### 11-callback-sync.js
Introduction aux callbacks avec programmation fonctionnelle :
- Paradigme impératif vs fonctionnel
- Méthodes de tableau (`map`, `filter`, etc.)
- Callbacks inline vs fonctions nommées

## 12 - Callbacks Asynchrones

### 12-callback-async.js
Différence entre callbacks synchrones et asynchrones :
- `setTimeout` et la pile d'appel
- Event loop et task queue
- Ordre d'exécution du code asynchrone

## 13 - Objets

### 13-object.js
Programmation orientée objet en JavaScript :
- Objets prédéfinis (Math, Date, etc.)
- Extension d'objets dynamique
- Object literals vs constructeurs
- Classes ES2015
- Méthodes d'instance vs méthodes statiques
- Pattern options pour simuler les paramètres nommés

## 14 - Références

### 14-references.js
Différences entre types primitifs et objets :
- Passage par valeur vs passage par référence
- Copie superficielle avec spread operator
- Immutabilité des chaînes de caractères
- Modification d'objets et tableaux

## 15 - Mode Strict

### 15-strict-mode.js
Le mode strict JavaScript :
- Directive `'use strict'`
- Prévention des variables globales implicites
- Contextes où le mode strict est automatique (modules, classes)

## 16 - This et Callbacks

### 16-this-callback.js
Problématique du mot-clé `this` dans les callbacks :
- Perte de contexte dans les callbacks traditionnels
- Solution avec les arrow functions
- Pseudo-variables non créées dans les arrow functions

## 17 - Destructuration, Rest et Spread

### 17-destructuration-rest-spread.js
Syntaxes modernes pour manipuler les données :
- Destructuration de tableaux et objets
- Valeurs par défaut dans la destructuration
- Rest operator (`...`) pour collecter
- Spread operator (`...`) pour étaler
- Renommage de variables lors de la destructuration

## 18 - ES2016+

### 18-es2016+.js
Fonctionnalités récentes de JavaScript :
- Class properties et private fields (ES2022)
- Méthode `.at()` pour l'accès aux éléments avec indices négatifs

## Exercices

### ex-functions.js
6 exercices pratiques sur les fonctions :
1. Calcul de l'aire d'un rectangle
2. Vérification de parité
3. Salutation avec langue par défaut
4. Calcul de moyenne avec gestion d'erreur
5. Calculatrice simple
6. Vérificateur de palindrome

### ex-jeu-object.js
Exercices sur la programmation orientée objet :
1. Création d'un namespace object Random
2. Refactorisation en classe Jeu
3. Paramétrage avec pattern options

### ex-jeu.js
Implémentation complète d'un jeu du "plus ou moins" :
- Génération de nombres aléatoires
- Interface readline pour l'interaction utilisateur
- Gestion des essais et validation des entrées
- Callbacks asynchrones avec l'API Node.js