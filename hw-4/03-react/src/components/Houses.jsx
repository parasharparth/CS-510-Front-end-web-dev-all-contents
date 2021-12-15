import React, { Component } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";

class Houses extends Component {
  constructor(props) {
    super(props);

    this.options = {
      legend: {
        display: true,
        position: "bottom",
      },
    };

    this.state = {
      maintainAspectRatio: false,
      responsive: false,
      labels: [],
      datasets: [
        {
          backgroundColor: [
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(153, 102, 255, 0.8)",
            "rgba(255, 159, 64, 0.8)",
            "rgba(199, 199, 199, 0.8)",
            "rgba(83, 102, 255, 0.8)",
            "rgba(40, 159, 64, 0.8)",
            "rgba(210, 199, 199, 0.8)",
          ],
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(159, 159, 159, 1)",
            "rgba(83, 102, 255, 1)",
            "rgba(40, 159, 64, 1)",
            "rgba(210, 199, 199, 1)",
          ],
          data: [],
        },
      ],
    };
  }

  donutGraph = (data) => {
    let arr = [];
    data.forEach((element) => {
      let nam = element.family;
    if(nam == "House Lanister")
    {
      nam = "House Lannister";
    }
      if (nam === "" || nam === "None" || nam === "Unknown") {
        nam = "None";
      } else if (nam.indexOf("House") < 0) {
        nam = "House " + nam;
      }
      if (nam !== "House Free Folk") arr.push(nam);
    });

    let familyNames = arr.reduce((accu, curr) => {
      accu.hasOwnProperty(curr) ? accu[curr]++ : (accu[curr] = 1);
      return accu;
    }, {});

    let familyLabels = [];
    let familyCount = [];
    for (const property in familyNames) {
      if (familyNames[property] >= 2) {
        familyLabels.push(property);
        familyCount.push(familyNames[property]);
      }
    }

    const completeState = { ...this.state };
    completeState.labels = familyLabels;
    completeState.datasets[0].data = familyCount;

    this.setState(completeState);
  };

  componentDidMount() {
    let url = "https://thronesapi.com/api/v2/Characters";
    axios
      .get(url)
      .then((res) => {
        let data = res.data;
        this.donutGraph(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h2 className="m-2 text-center">Charecters Houses</h2>
        <div className="container-md border rounded bg-light houses-container">
          <Doughnut data={this.state} options={this.options} width={"30%"} />
        </div>
      </div>
    );
  }
}

export default Houses;
