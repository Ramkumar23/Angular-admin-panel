import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.drawDoughNutChart();
  }
  drawDoughNutChart(){
    return (new Chart(document.getElementById('myDoughNutChart'), {
      type: 'doughnut',
      data: {
        labels: ["Blue", "Red", "Yellow", "Green"],
        datasets: [{
          data: [12.21, 15.58, 11.25, 8.32],
          backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
      },
    }));
  }
}
