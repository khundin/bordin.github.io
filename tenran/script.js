const bar = document.querySelector('.navbar-bar');
bar.onclick = ()=> {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('show');
}