import { Component } from '@angular/core';
import {Color, Label, MultiDataSet} from "ng2-charts";
import {ChartType} from "chart.js";

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {
  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 150]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [{
    backgroundColor: [
      '#FA0DA5',
      '#9F01F5',
      '#CE0BDE',
      '#5B0BDE',
      '#250DFA',
    ]
  }]
}
