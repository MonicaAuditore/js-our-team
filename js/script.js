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
1. creo un array di oggetti
2. ciclo su tutto l'array per stampare in console ogni membro del team
3. ciclo su tutto l'array per stampare in pagina nel DOM ogni membro del team
*/

// MILESTONE 0

const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },

  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },

  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },

  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },

  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },

  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

console.log("team", team);

// console.log(team[5].name);
// console.log(team[5]["name"]);

// MILESTONE 1
for (let i = 0; i < team.length; i++) {
  for (let key in team[i]) {
    console.log(key + ":" + team[i][key]);
  }
}

// MILESTONE 2
const allTeam = document.querySelector(".team");

for (let i = 0; i < team.length; i++) {
  const newListItem = document.createElement("li");
  // newListItem.innerHTML +=
  //   team[i].name + " - " + team[i].role + " - " + team[i].image;

  newListItem.innerHTML += `
  <div class="member">
  <div class="profile-foto-container">
  ${team[i].image}
  </div>
<h3> ${team[i].name}</h3>
<h5> ${team[i].role}</h5>
  </div>`;
  allTeam.append(newListItem);
}
