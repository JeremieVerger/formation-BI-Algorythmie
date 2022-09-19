// affiche dans la console le texte entre guillemets !
console.log("Je teste le JS !");

/* 
1. Les variables
    - Les nombres,
    - Les chaînes de caractères,
    - Les booléens,
    - Les tableaux
2. Les conditions
3. Les boucles
4. Les fonctions
*/

// Les variables
prenom="Jérémie"; //chaîne de caractère / string
age = 27; //Numérique : sans guillemets

// Concaténations

console.log("Je m'appelle " + prenom + " et j'ai " + age + " ans.");


// Exercice : 
SEL = 100;
SUCRE = 120;

console.log("J'ai du sel : " + SEL);
console.log("J'ai du sucre : "+ SUCRE);

// Inverser les variables

VARIABLE_TEMPORAIRE = SEL;
SEL = SUCRE;
SUCRE = VARIABLE_TEMPORAIRE;

console.log("J'ai du sel : " + SEL);
console.log("J'ai du sucre : "+ SUCRE);

A=100;
B=200;
C=A+B;
console.log(C);

prenom="Jérémie";
nom="Verger";
pm=prenom+nom;
console.log(pm);

// Exercice : déclarer une variable prix HT contenant 100
// Stocker dans une autre variable le prix en TTC et l'afficher dans la log

PRIX_HT = 100;
PRIX_TTC = PRIX_HT*1.2;
console.log("Prix TTC : " + PRIX_TTC);

let text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome");
console.log(result);
longueur = text.length;
console.log(longueur);

// Les conditions

age = 27;
if (age > 17 ) { 
    console.log("Vous êtes majeur.e !");
}
else{
    console.log("Vous êtes mineur.e !");
}

//Exercice : créer une variable contenant une valeur numérique/
// indiquer si cette variable est positive ou non.
// indiquer si cette variable est paire ou impaire. 

// x = prompt("Indiquez un nombre.");
x = 42;
if (x>0){
    console.log(x+" est positif.");
}
else if (x==0){
    console.log(x +" est nul.");
}
else{
    console.log(x+" est négatif.");
}

if (x%2 == 0){
    console.log(x+" est paire.");
}
else{
    console.log(x+" est impaire.");
}

/* créer des variables nom, prénom
 et afficher dans la console la variable qui contient le plus de lettres
 mettre la dernière de la variable en majuscule,
 Puis inverser la première lettre du prénom et du nom.

*/

nom = "Verger";
prenom = "Jérémie";

if (nom.length < prenom.length){
    console.log("Le nom qui est " +  prenom.slice(0,prenom.length -1) + prenom[prenom.length-1].toUpperCase() + " contient " + prenom.length + " lettres.");
}
else{
    console.log("Le nom qui est " + nom.slice(0,nom.length -1) + nom[nom.length-1].toUpperCase() + " contient " + nom.length + " lettres.");
}

console.log( prenom[0].toUpperCase() + nom.slice(1).toLowerCase() + " "+ nom[0].toUpperCase() + prenom.slice(1).toLowerCase());

// correction:

// mettre la dernière lettre en majuscule
last = nom.substring(nom.length-1,nom.length);
last = last.toUpperCase();
deb = nom.substring(0,nom.length-1);
nom_maj = deb + last;

// Les boucles

// Afficher les nombres de 1 à 1000

for ( i = 0  ; i<1000 ; i=i+1){
    console.log(i);
}

// table de 2

for(i = 0 ; i < 11; i=i+1){
    console.log("2 x "+i+ " = " + 2*i);
}

// Afficher les tables de multiplication

for(j = 0; j < 11; j=j+1){
 console.log("Table de "+ j);
 for(i = 0 ; i < 11; i=i+1){
    console.log(j + " x "+i+ " = " + j*i);
}   
}

// afficher la factorielle d'un nombre
n = 100
fact = 1
for(i = 1; i<n+1; i = i+1){
    fact = fact*i;
}
console.log("La factorielle de " + n + " est " + fact);

// Afficher un carré de 10 étoiles de côté

for(i=0; i<10; i=i+1){
    document.write("*   *   *   *   *   *   *   *   *   *" );
    document.write("<br/>");
}

// afficher un triangle à n niveaux

n = 10;
for(i=1; i<n+1; i=i+1){
    niveau = "";
    for(j=0; j<i; j++){
        niveau = niveau + "*";
    }
document.write(niveau);
document.write("<br/>");
}

// une modification pour s'entraîner avec Git
