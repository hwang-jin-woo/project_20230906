const sidebar = document.getElementById('sidebar')
const menus = document.querySelectorAll('.menu-button')
const toggleBtn = document.querySelector('.menu-toggle')
const dimLayer = document.querySelector('.dim-layer')
menus.forEach(menu=> {
  menu.addEventListener('click',() => {
    menu.parentElement.classList.toggle('active')
  })
})
toggleBtn.addEventListener('click',()=>{
  sidebar.classList.toggle('active')
  dimLayer.classList.toggle('active')
})
dimLayer.addEventListener('click',() => {
  sidebar.classList.toggle('active')
  dimLayer.classList.toggle('active')
})
