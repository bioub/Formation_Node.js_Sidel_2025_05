// Exercice 1 : Calcul de l'Aire d'un Rectangle
// Objectif : Utiliser plusieurs paramètres pour un calcul simple.
// Énoncé : Créez une fonction nommée calculerAireRectangle qui prend deux paramètres : longueur et largeur. La fonction doit retourner l'aire du rectangle (longueur * largeur).
// Exemple d'appel : console.log(calculerAireRectangle(10, 4)); devrait afficher 40.
export function calculerAireRectangle(longueur, largeur) {
    return longueur * largeur;
}

// Exercice 2 : Vérification de Parité
// Objectif : Retourner une valeur booléenne (true ou false) basée sur une condition simple.
// Énoncé : Créez une fonction nommée estPair qui prend un paramètre nombre. La fonction doit retourner true si le nombre est pair, et false sinon.
// Indice : L'opérateur modulo % peut être utile ici
// Exemple d'appel :
// console.log(estPair(4)); devrait afficher true.
// console.log(estPair(7)); devrait afficher false.
export function estPair(nombre) {
    return nombre % 2 === 0;
}

// Exercice 3 : Salutation avec Langue par Défaut
// Objectif : Utiliser une valeur par défaut pour un paramètre.
// Énoncé : Créez une fonction nommée saluerAvecLangue qui prend deux paramètres : nom et langue. La langue doit avoir "fr" comme valeur par défaut.
// Si langue est "fr", la fonction retourne "Bonjour, [nom] !".
// Si langue est "en", la fonction retourne "Hello, [nom]!".
// Pour toute autre langue, retournez une salutation générique comme "Salutations, [nom] !".
// Exemple d'appel :
// console.log(saluerAvecLangue("Bob")); devrait afficher "Bonjour, Bob !".
// console.log(saluerAvecLangue("Charlie", "en")); devrait afficher "Hello, Charlie!".
// console.log(saluerAvecLangue("David", "es")); devrait afficher "Salutations, David !".
export function saluerAvecLangue(nom, langue = "fr") {
    if (langue === "fr") {
        return `Bonjour, ${nom} !`;
    } else if (langue === "en") {
        return `Hello, ${nom}!`;
    } else {
        return `Salutations, ${nom} !`;
    }
}

// Exercice 4 : Calcul de Moyenne (avec gestion simple d'erreur)
// Objectif : Calculer une moyenne et retourner une valeur spécifique si les entrées ne sont pas valides (sans utiliser throw pour l'instant).
// Énoncé : Créez une fonction nommée calculerMoyenne qui prend trois paramètres n1, n2, n3.
// La fonction doit retourner la moyenne de ces trois nombre
// Ajout : Si l'un des paramètres n'est pas un nombre (utilisez typeof), la fonction doit retourner null pour indiquer une erreur d'entrée.
// Exemple d'appel
// console.log(calculerMoyenne(10, 20, 30)); devrait afficher 20.
// console.log(calculerMoyenne(5, 10, "quinze")); devrait afficher null.
export function calculerMoyenne(n1, n2, n3) {
    if (typeof n1 !== "number" || typeof n2 !== "number" || typeof n3 !== "number") {
        return null;
    }
    return (n1 + n2 + n3) / 3;
}

// Exercice 5 : Calculatrice Simple
// Objectif : Créer une fonction qui effectue différentes opérations basées sur un paramètre supplémentaire. Gérer un cas d'erreur spécifique (division par zéro).
// Énoncé : Créez une fonction nommée calculatriceSimple qui prend trois paramètres : nombre1, nombre2, et operation (une chaîne de caractères comme '+', '-', '*', '/').
// La fonction doit retourner le résultat de l'opération demandée.
// Si l'opération est une division ('/') et que nombre2 est 0, la fonction doit retourner la chaîne de caractères "Erreur: Division par zéro".
// Si l'opération n'est pas reconnue, vous pouvez retourner undefined ou null.
// Exemple d'appel :
// console.log(calculatriceSimple(10, 5, '+')); devrait afficher 15.
// console.log(calculatriceSimple(10, 5, '/')); devrait afficher 2.
// console.log(calculatriceSimple(10, 0, '/')); devrait afficher "Erreur: Division par zéro".
// console.log(calculatriceSimple(10, 5, '%')); pourrait afficher null ou undefined.
export function calculatriceSimple(nombre1, nombre2, operation) {
    switch (operation) {
        case '+':
            return nombre1 + nombre2;
        case '-':
            return nombre1 - nombre2;
        case '*':
            return nombre1 * nombre2;
        case '/':
            if (nombre2 === 0) {
                return "Erreur: Division par zéro";
            }
            return nombre1 / nombre2;
        default:
            return null; // ou undefined
    }
}

// Exercice 6 : Vérificateur de Palindrome
// Objectif : Manipuler des chaînes de caractères de manière plus complexe. Un palindrome est un mot qui se lit de la même manière à l'endroit et à l'envers (ex: "radar", "level").
// Énoncé : Créez une fonction nommée estPalindrome qui prend une chaîne de caractères chaine en paramètre.
// La fonction doit retourner true si la chaîne est un palindrome, false sinon.
// Simplification : Pour cet exercice, considérez que la casse et les espaces ne comptent pas (ou ignorez-les pour l'instant, concentrez-vous sur l'inversion). Une version simple peut ignorer la casse et les espaces. Une version plus simple encore ne traitera que des mots sans espaces et en minuscule. Commencez par la plus simple.
// Indice : Vous pourriez avoir besoin de transformer la chaîne en tableau, inverser le tableau, puis rejoindre les éléments en une chaîne.
// Exemple d'appel (version simple, sans gestion casse/espaces) :
// console.log(estPalindrome("radar")); devrait afficher true.
// console.log(estPalindrome("bonjour")); devrait afficher false.
// console.log(estPalindrome("ressasser")); devrait afficher true.
export function estPalindrome(chaine) {
    // Version simple : ignore la casse et les espaces
    const chaineNettoyee = chaine.replace(/\s+/g, '').toLowerCase();
    const chaineInversee = chaineNettoyee.split('').reverse().join('');
    return chaineNettoyee === chaineInversee;
}
