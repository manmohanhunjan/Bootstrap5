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
const sideBarActiveContainer1 = document.querySelector('#sideBarActiveContainer1');

const sideBarActive = document.querySelector('#sideBarActive');
const sideBarActive1 = document.querySelector('#sideBarActive1');

sideBarActive.addEventListener('click', () => {
    sideBarActiveContainer.classList.toggle('d-none');
  sideBarActiveContainer1.classList.toggle('d-none');
  sideBarActive1.classList.toggle('d-none');



    }
);

sideBarActive1.addEventListener('click', () => {
  sideBarActiveContainer.classList.toggle('d-none');
  sideBarActiveContainer1.classList.toggle('d-none');
  sideBarActive1.classList.toggle('d-none');



  }
);

// Chart
document.addEventListener("DOMContentLoaded", function(event) {
  var options = {
    chart: {
      type: 'line',
    },
    series: [{
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
  };

  var chart = new ApexCharts(document.querySelector("#chartContainer"), options);
  chart.render();
});