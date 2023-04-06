// Get references to the character and weapon list elements in the HTML
const rarete5CharactersList = document.getElementById('rarete-5-personnages');
const rarete4CharactersList = document.getElementById('rarete-4-personnages');
const rarete5WeaponsList = document.getElementById('rarete-5-armes');
const rarete4WeaponsList = document.getElementById('rarete-4-armes');

// Function to create an li element for a character
function createLiChar(item) {
  const li = document.createElement('li');
  console.log(item);
  console.log(item.nom_personnage);
  li.id = item.nom_personnage;
  li.className = `element_${item.element_personnage} rarete-${item.rarete_personnage} ${item.arme_personnage}`;
  const img = document.createElement('img');
  img.src = item.portrait_personnage;
  li.appendChild(img);
  return li;
}

// AJAX request to retrieve characters with rarity 5
fetch('/characters/5')
  .then(response => response.json())
  .then(characters => {
    // Create an li element for each character and append it to the list
    characters.forEach(character => {
      const li = createLiChar(character);
      rarete5CharactersList.appendChild(li);
    });
  })
  .catch(error => console.error(error));

// AJAX request to retrieve characters with rarity 4
fetch('/characters/4')
  .then(response => response.json())
  .then(characters => {
    // Create an li element for each character and append it to the list
    characters.forEach(character => {
      const li = createLiChar(character);
      rarete4CharactersList.appendChild(li);
    });
  })
  .catch(error => console.error(error));

// Function to create an li element for a character or a weapon
function createLiWeap(item) {
  const li = document.createElement('li');
  console.log(item);
  console.log(item.nom_arme);
  li.id = item.nom_arme;
  li.className = ` ${item.type_arme} rarete-${item.rarete_arme}`;
  const img = document.createElement('img');
  img.src = item.portrait_arme;
  li.appendChild(img);
  return li;
}

// AJAX request to retrieve weapons with rarity 5
fetch('/weapons/5')
  .then(response => response.json())
  .then(weapons => {
    // Create an li element for each weapon and append it to the list
    weapons.forEach(weapon => {
      const li = createLiWeap(weapon);
      rarete5WeaponsList.appendChild(li);
    });
  })
  .catch(error => console.error(error));

// AJAX request to retrieve weapons with rarity 4
fetch('/weapons/4')
  .then(response => response.json())
  .then(weapons => {
    // Create an li element for each weapon and append it to the list
    weapons.forEach(weapon => {
      const li = createLiWeap(weapon);
      rarete4WeaponsList.appendChild(li);
    });
  })
  .catch(error => console.error(error));