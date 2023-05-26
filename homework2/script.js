const sideNavContainer = document.querySelector('#sideNavContainer');

sideNavContainer.addEventListener('click', (event) => {
    if (event.target.parentElement.id == 'selectedIcon') {
        console.log(event.target.parentElement);
        let targetedElement = event.target.parentElement;
        targetedElement.classList.toggle('active');
    }
});
