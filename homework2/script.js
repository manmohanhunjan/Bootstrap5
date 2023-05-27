// const sideNavContainer = document.querySelector('#sideNavContainer');

// sideNavContainer.addEventListener('click', (event) => {
//     if (event.target.parentElement.id == 'selectedIcon') {
//         console.log(event.target.parentElement);
//         let targetedElement = event.target.parentElement;
//         targetedElement.classList.toggle('active');
//     }
// });

// const collapseBtn = document.querySelector('#collapseButton')
// const arrowIcon = document.querySelectorAll('.arrow-icon')

// collapseBtn.addEventListener('click', (event) => {
//     // index of clicked event
//     let index = event.target.indexOf
//     // toggle arrow icon
//     arrowIcon[index].classList.toggle('bi-chevron-down')
//     arrowIcon[index].classList.toggle('bi-chevron-up')

// })

const collapseBtns = document.querySelectorAll('[data-bs-toggle="collapse"]');
const arrowIcons = document.querySelectorAll('.arrow-icon');

collapseBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    arrowIcons[index].classList.toggle('bi-chevron-down');
    arrowIcons[index].classList.toggle('bi-chevron-up');
    collapseBtns[index].classList.toggle('text-light');
  });
});

const sideBarActiveContainer = document.querySelector('#sideBarActiveContainer');
const sideBarActive = document.querySelector('#sideBarActive');

sideBarActive.addEventListener('click', () => {
    sideBarActiveContainer.classList.toggle('d-none');

    }
);