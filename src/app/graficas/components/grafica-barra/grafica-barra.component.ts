import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  @Input() barChartLabels: Label[] = [
    // '2021', '2022', '2023', '2024', '2025', '2026', '2027'
  ];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#7700FF', hoverBackgroundColor: '#ec0b0b' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#0C83E8', hoverBackgroundColor: '#ec0b0b' },
    // { data: [0, 30, 4, 29, 56, 47, 60], label: 'Series C', backgroundColor: '#0DFF73', hoverBackgroundColor: '#ec0b0b' },
  ];

  constructor() {
  }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartType = 'horizontalBar';
    }
  }

}
