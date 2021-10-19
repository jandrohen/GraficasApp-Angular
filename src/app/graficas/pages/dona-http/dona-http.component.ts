import { Component, OnInit } from '@angular/core';
import {GraficasService} from "../../services/graficas.service";
import {Color, Label, MultiDataSet} from "ng2-charts";
import {ChartType} from "chart.js";

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100, 150]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
    backgroundColor: [
      '#FA0DA5',
      '#9F01F5',
      '#CE0BDE',
      '#5B0BDE',
      '#250DFA',
    ]
  }]

  constructor( private graficasService: GraficasService) { }

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe(data => {
    //     console.log(data)
    //     const labels =  Object.keys(data);
    //     const values =  Object.values(data);
    //
    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.push(values);
    //   })
    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe(({labels,values}) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values)
      })
  }

}
