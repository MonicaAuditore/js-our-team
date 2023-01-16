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

// BONUS 1
const memberOne = {
  name: `<h2>Wayne Barnett</h2>`,
  role: `<h3>Founder & CEO</h3>`,
  profilePic: `<img src="../img/wayne-barnett-founder-ceo.jpg">`,
};

const memberTwo = {
  name: `<h2>Angela Caroll</h2>`,
  role: `<h3>Chief Editor</h3>`,
  profilePic: `<img src="../img/angela-caroll-chief-editor.jpg">`,
};

const memberThree = {
  name: `<h2>Walter Gordon</h2>`,
  role: `<h3>Office Manager</h3>`,
  profilePic: `<img src="../img/walter-gordon-office-manager.jpg">`,
};

const memberFour = {
  name: `<h2>Angela Lopez</h2>`,
  role: `<h3>Social Media Manager</h3>`,
  profilePic: `<img src="../img/angela-lopez-social-media-manager.jpg">`,
};

const memberFive = {
  name: `<h2>Scott Estrada</h2>`,
  role: `<h3>Developer</h3>`,
  profilePic: `<img src="../img/scott-estrada-developer.jpg">`,
};

const memberSix = {
  name: `<h2>Barbara Ramos</h2>`,
  role: `<h3>Graphic Designer</h3>`,
  profilePic: `<img src="../img/barbara-ramos-graphic-designer.jpg">`,
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

for (let i = 0; i < allMembers.length; i++) {
  for (let key in allMembers[i]) {
    console.log(key, allMembers[i][key]);
  }
}

const membri = document.querySelector(".members");

for (let i = 0; i < allMembers.length; i++) {
  for (let key in allMembers[i]) {
    membri.innerHTML += `<div class="member${[i]}">${allMembers[i][key]}</div>`;
  }
}

// ---------------------------------------------------------------------------------------
