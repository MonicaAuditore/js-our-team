/*
esercizio di oggi: Our Team
nome repo: js-our-team
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l'array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/

/*
1. creo gli oggetti;
2. li inserisco all'interno di un array;

3. stampo in console le info di ogni membro;

4. le stampo poi nel DOM;

5. trasformo la stringa in foto;

6. creo grafica in css per fare le card.
*/

// MILESTONE 0
const memberOne = {
  name: "Wayne Barnett",
  role: "Founder & CEO",
  image: "wayne-barnett-founder-ceo.jpg",
};

const memberTwo = {
  name: "Angela Caroll",
  role: "Chief Editor",
  image: "angela-caroll-chief-editor.jpg",
};

const memberThree = {
  name: "Walter Gordon",
  role: "Office Manager",
  image: "walter-gordon-office-manager.jpg",
};

const memberFour = {
  name: "Angela Lopez",
  role: "Social Media Manager",
  image: "angela-lopez-social-media-manager.jpg",
};

const memberFive = {
  name: "Scott Estrada",
  role: "Developer",
  image: "scott-estrada-developer.jpg",
};

const memberSix = {
  name: "Barbara Ramos",
  role: "Graphic Designer",
  image: "barbara-ramos-graphic-designer.jpg",
};

allMembers = [];

allMembers.push(
  memberOne,
  memberTwo,
  memberThree,
  memberFour,
  memberFive,
  memberSix
);

console.log("allMembers", allMembers);

// MILESTONE 1
for (let i = 0; i < allMembers.length; i++) {
  for (let key in allMembers[i]) {
    console.log(key, allMembers[i][key]);
  }
}

// MILESTONE 2
const membri = document.querySelector(".members");
for (let i = 0; i < allMembers.length; i++) {
  for (let key in allMembers[i]) {
    membri.innerHTML += `<div class="memb member${[i]}">${
      allMembers[i][key]
    }</div>`;
  }
}
