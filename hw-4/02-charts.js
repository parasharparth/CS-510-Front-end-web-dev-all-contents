let backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

let borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// URL to Game of Thrones API to fetch all characters
let url = 'https://thronesapi.com/api/v2/Characters';

async function getData () {
  try{
    let res = await fetch(url);
    let data = await res.json();
   donutGraph(data);
  } catch (error) {
    console.log(error);
  }
}

getData();

function donutGraph(data) {

  let arr = [];
  data.forEach(element => {

    let nam = element.family;
    //console.log(nam);
    if(nam == "House Lanister")
    {
      nam = "House Lannister";
      //console.log(nam);
    }
    if(nam == "" || nam == "None" || nam == "Unknown"){
      nam = "None";
    }
    else if(nam.indexOf("House") < 0){
      nam = "House " + nam;
    }
    if(nam != "House Free Folk") arr.push(nam)
  });

  let familyNames = arr.reduce((accu, curr) => {
    accu.hasOwnProperty(curr)
      ? accu[curr]++
      : (accu[curr] = 1);
    return accu;
  }, {});

  let familyLabels = [];
  let familyCount = [];
  for (const property in familyNames) {
    if(property == "House of Lanister")
      {
          console.log("entered the required condition");
          property = "House of Lannister";
      }
    if (familyNames[property] >= 2) {
      familyLabels.push(property);
      familyCount.push(familyNames[property]);
    }
  }

let renderChart = () => {
  let donutChart = document.getElementById('donut-chart').getContext('2d');

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: familyLabels,
      datasets: [
        {
          label: 'My First Dataset',
          data: familyCount,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: true,
        position: 'bottom',
      },
  }
  });
};

renderChart();
}
