// Get references to the character and weapon list elements in the HTML
const rarete5CharactersList = document.getElementById('rarete-5-personnages');
const rarete4CharactersList = document.getElementById('rarete-4-personnages');
const rarete5WeaponsList = document.getElementById('rarete-5-armes');
const rarete4WeaponsList = document.getElementById('rarete-4-armes');

// Function to create an li element for a character or a weapon
function createLiElement(item) {
  const li = document.createElement('li');
  li.id = item.id;
  li.className = `element_${item.type} rarete-${item.rarity} ${item.weaponType}`;
        console.log(`element_${item.type} rarete-${item.rarity} ${item.weaponType}`);
  const img = document.createElement('img');
  img.src = item.image;
  li.appendChild(img);
        
  return li;
}

// AJAX request to retrieve characters with rarity 5
fetch('/characters/5')
  .then(response => response.json())
  .then(characters => {
    // Create an li element for each character and append it to the list
    characters.forEach(character => {
      const li = createLiElement(character);
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
      const li = createLiElement(character);
      rarete4CharactersList.appendChild(li);
    });
  })
  .catch(error => console.error(error));

// AJAX request to retrieve weapons with rarity 5
fetch('/weapons/5')
  .then(response => response.json())
  .then(weapons => {
    // Create an li element for each weapon and append it to the list
    weapons.forEach(weapon => {
      const li = createLiElement(weapon);
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
      const li = createLiElement(weapon);
      rarete4WeaponsList.appendChild(li);
    });
  })
  .catch(error => console.error(error));