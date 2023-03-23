const toggleTheme = document.querySelector('.toggle-theme');
var myImg = document.querySelector('.toggle-theme img');

toggleTheme.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('dark')) {

      body.classList.add('light')
      body.classList.remove('dark')
      myImg.setAttribute('src','./assets/theme/toDark.png')

    } else if(body.classList.contains('light')) {
      
      body.classList.add('dark')
      body.classList.remove('light')
      myImg.setAttribute('src','./assets/theme/toLight.png')

    }
})