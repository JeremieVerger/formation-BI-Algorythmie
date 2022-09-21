/* Exercices :
1) Créer deux variables numériques pour lesquelles on affecte un nombre.
2) Calculer dans une troisième variable la somme puis la moyenne.
3) Pareil avec trois variables, puis 4 variables, etc
4) Le faire avec un nombre indéfini de variables.
*/

a = 5
b = 7
somme = a+b;
console.log("Somme de " + a + " et " + b + ": " + somme);
console.log("Moyenne de " + a + " et " + b + " : " +somme/2);

c = 8
somme = somme + c;
console.log("Somme de " + a + " , " + c + " et " + b + ": " + somme);
console.log("Moyenne de " + a + " , " + c + " et " + b + ": " +somme/3);

d = 3
somme = somme + d;
console.log("Somme de " + a + " , " + c + " , " + d  + " et " + b + ": " +somme);
console.log("Moyenne de " + a + " , " + c + " , " + d  + " et " + b + ": " +somme/4);

/* n = prompt("Combien de nombres voulez-vous entrer ?");
somme = 0;
i=0
while(i<n){
    nombre = parseInt(prompt("Un nombre"));
    somme = somme + nombre;
    i++
}
console.log("Somme : " + somme);
console.log("Moyenne : " + somme/n);
*/

// Tableaux

tab_note = [13,7,15];
console.table(tab_note);
console.log(tab_note[1]);

somme=0;
indice=0;
while(indice<tab_note.length){
    somme = somme + tab_note[indice];
    indice ++;
}
console.log("Moyenne : " + somme/tab_note.length);

/* Exercices :
1) Créer un tableau âge comprenant 5 nombres entiers.
2) Ecrire le code qui permet de calculer la somme totale des âges.
3) Ecrire le code qui permet de calculer la moyenne des âges.
4) Ecrire le code qui permet de calculer le maximum / minimum des âges. 
5) Créer un tableau prénom. Ecrire le code pour définir le plus petit élément du tableau prénom.
6) Fusionner les tableaux age et prenom en un nouveau tableau nommé students. 
7) Ecrire le code qui permet de sommer les nombres et les longueurs de chaque élément de type strings.
8) Inverser les lettres d'un nom.
9) Supprimer toutes les voyelles de la phrase "Academy rocks".
*/

age = [52, 46, 12, 27,66];

somme = 0;
for(i=0; i<age.length; i++) {
    somme = somme + age[i];
}
console.log("Somme des âges : " + somme);
console.log("Moyenne des âges : " + somme/age.length);

max = age[0];
for(i=1; i<age.length; i++) {
    if (max< age[i]){
        max = age[i];
    }
}
console.log("Maximum des âges : " + max);

min = age[0];
for(i=1; i<age.length; i++) {
    if (min> age[i]){
        min = age[i];
    }
}
console.log("Minimum des âges : " + min);

prenom = ["Amir","Jérémie","Kokou","Caroline","Noémie"]

petit = prenom[0].length
indice = 0
for(i=1; i<prenom.length; i++) {
    if (petit > prenom[i].length){
        petit = prenom[i].length;
        indice = i;
    }
}
console.log("Plus petit prénom : " + prenom[indice]);

students = age.concat(prenom)
console.table(students)

somme = 0
for(i=0; i<students.length; i++) {
    if(isNaN(students[i]) == true ){
        somme = somme + students[i].length
    }
    else{
        somme = somme + students[i]
    }
}
console.log(somme);

nom = "Jérémie";
mon="";
for(i=0; i<nom.length; i++){
    mon = mon + nom[nom.length- 1  - i];
}
console.log(mon);

phrase = "Academy Rocks";
nouvelle_phrase ="";
voyelles = ["a","e","u","y","i","o"];
for(i=0; i<phrase.length; i++){
    if( (voyelles.indexOf(phrase[i].toLowerCase()) == -1 )){
        nouvelle_phrase = nouvelle_phrase + phrase[i];
    }
}
console.log(nouvelle_phrase);

/* Fonctions :

Refaire les scripts précédents en fonction :
*/

function Somme(tableau){
    s = 0;
    for(i=0; i<tableau.length; i++) {
        s = s + tableau[i];
    }
    return s;
}

age = [52, 46, 12, 27,66];
console.log("Somme des âges : " + Somme(age) );

function Moyenne(tableau){
    s = 0;
    for(i=0; i<tableau.length; i++) {
        s = s + tableau[i];
    }
    return s/tableau.length;
}

console.log("Moyenne des âges : " + Moyenne(age) );

function Max(tableau){
    max = tableau[0];
    for(i=1; i<tableau.length; i++) {
        if (max< tableau[i]){
            max = tableau[i];
        }
    }
    return max;
}

console.log("Maximum des âges : " + Max(age));

function Min(tableau){
    min = tableau[0];
    for(i=1; i<tableau.length; i++) {
        if (min> tableau[i]){
            min = tableau[i];
        }
    }
    return min;
}

console.log("Minimum des âges : " + Min(age));

prenom = ["Amir","Jérémie","Kokou","Caroline","Noémie"];

function Plus_Petit(tableau){
    petit = tableau[0].length;
    indice = 0;
    for(i=1; i<tableau.length; i++) {
        if (petit > tableau[i].length){
            petit = tableau[i].length;
            indice = i;
        }
    }
    return tableau[indice];
}

console.log("Plus petit prénom : " + Plus_Petit(prenom));

students = age.concat(prenom);

function Somme_Absurde(tableau){
    somme = 0
    for(i=0; i<tableau.length; i++) {
        if(isNaN(tableau[i]) == true ){
            somme = somme + tableau[i].length;
        }
        else{
            somme = somme + tableau[i];
        }
    }
    return somme;
}
console.log(Somme_Absurde(students));

nom = "Jérémie";

function Inverser_mot(mot){
    tom="";
    for(i=0; i<mot.length; i++){
        tom = tom + mot[mot.length- 1  - i];
    }
    return tom;
}

console.log(Inverser_mot(nom));

phrasetest = "Academy Rocks";

function Supprimer_Voyelles(phrase){
    nouvelle_phrase ="";
    voyelles = ["a","e","u","y","i","o"];
    for(i=0; i<phrase.length; i++){
        if( (voyelles.indexOf(phrase[i].toLowerCase()) == -1 )){
            nouvelle_phrase = nouvelle_phrase + phrase[i];
        }
    }
    return nouvelle_phrase;
}

console.log(Supprimer_Voyelles(phrasetest));

// Coder une fonction de tri croissant d'un tableau de nombres

function Tri_tableau_numerique(tableau){
    trie = [];
    while(tableau.length>0){
        trie.push(Min(tableau));
        tableau.splice(tableau.indexOf(Min(tableau)),1);
    }
    return trie;
}

age = [52, 46, 12, 27,66,27,99,3,52,4];
console.table(Tri_tableau_numerique(age))
