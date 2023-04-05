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


/*$(document).ready(function() {
  get_characters();
  get_armes();
});

function get_characters() {
  $.ajax({
    url: '/characters/5',
    method: 'GET',
    success: function(data) {
      var characters = JSON.parse(data);
      var characterList = $('#characters');
      characterList.empty();
      for (var i = 0; i < characters.length; i++) {
        var character = characters[i];
        var elementClass = character.element_personnage.toLowerCase();
        var rarityClass = character.rarete_personnage + '-star';
        var weaponClass = character.arme_personnage.toLowerCase();
        var name = character.nom_personnage;
        var imgSrc = character.portrait_personnage;
        var li = $('<li></li>').attr({
          'class': 'element_' + elementClass + ' rarete-' + rarityClass + ' ' + weaponClass
        });
        var img = $('<img>').attr({
          'src': imgSrc
        });
        li.append(img);
        li.append(name);
        characterList.append(li);
      }
    },
    error: function(xhr, status, error) {
      console.error('Error getting characters:', error);
    }
  });
}

function get_armes() {
  $.ajax({
    url: '/weapons/5',
    method: 'GET',
    success: function(data) {
      var armes = JSON.parse(data);
      var armeList = $('#armes');
      armeList.empty();
      for (var i = 0; i < armes.length; i++) {
        var arme = armes[i];
        var rarityClass = arme.rarete_arme + '-star';
        var weaponClass = arme.type_arme.toLowerCase();
        var name = arme.nom_arme;
        var imgSrc = arme.portrait_arme;
        var li = $('<li></li>').attr({
          'class': 'rarete-' + rarityClass + ' ' + weaponClass
        });
        var img = $('<img>').attr({
          'src': imgSrc
        });
        li.append(img);
        li.append(name);
        armeList.append(li);
      }
    },
    error: function(xhr, status, error) {
      console.error('Error getting armes:', error);
    }
  });
}

*/