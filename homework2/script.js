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
// document.addEventListener("DOMContentLoaded", function(event) {
//   var options = {
//     chart: {
//       type: 'line',
//     },
//     series: [{
//       name: 'Sales',
//       data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
//     }],
//     xaxis: {
//       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
//     }
//   };

//   var chart = new ApexCharts(document.querySelector("#chartContainer"), options);
//   chart.render();
// });

var options = {
  series: [
  {
    name: 'Actual',
    data: [
      {
        x: '2011',
        y: 1292,
        goals: [
          {
            name: 'Expected',
            value: 1400,
            strokeHeight: 5,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2012',
        y: 4432,
        goals: [
          {
            name: 'Expected',
            value: 5400,
            strokeHeight: 5,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2013',
        y: 5423,
        goals: [
          {
            name: 'Expected',
            value: 5200,
            strokeHeight: 5,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2014',
        y: 6653,
        goals: [
          {
            name: 'Expected',
            value: 6500,
            strokeHeight: 5,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2015',
        y: 8133,
        goals: [
          {
            name: 'Expected',
            value: 6600,
            strokeHeight: 13,
            strokeWidth: 0,
            strokeLineCap: 'round',
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2016',
        y: 7132,
        goals: [
          {
            name: 'Expected',
            value: 7500,
            strokeHeight: 5,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2017',
        y: 7332,
        goals: [
          {
            name: 'Expected',
            value: 8700,
            strokeHeight: 5,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2018',
        y: 6553,
        goals: [
          {
            name: 'Expected',
            value: 7300,
            strokeHeight: 2,
            strokeDashArray: 2,
            strokeColor: '#775DD0'
          }
        ]
      }
    ]
  }
],
  chart: {
  height: 350,
  type: 'bar'
},
plotOptions: {
  bar: {
    columnWidth: '60%'
  }
},
colors: ['#00E396'],
dataLabels: {
  enabled: false
},
legend: {
  show: false,
  showForSingleSeries: true,
  customLegendItems: ['Actual', 'Expected'],
  markers: {
    fillColors: ['#00E396', '#775DD0']
  }
}
};

var chart = new ApexCharts(document.querySelector("#chartContainer"), options);
chart.render();


// Chart 2

var chart2 = {
  series: [44, 55, 67, 83],
  chart: {
  height: 350,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    dataLabels: {
      name: {
        fontSize: '22px',
      },
      value: {
        fontSize: '16px',
      },
      total: {
        show: true,
        label: 'Total',
        formatter: function (w) {
          // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
          return 249
        }
      }
    }
  }
},
labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
};

var chart = new ApexCharts(document.querySelector("#chart2"), chart2);
chart.render();
