import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { GoogleChartComponent } from 'angular-google-charts';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss'],
})
export class AreaChartComponent implements OnInit {
  constructor() {}
  @ViewChild('chart') chart: GoogleChartComponent;
  ngOnInit(): void {
    //this.chart.dynamicResize = true;
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    // let selection = this.chart.wrapper.visualization.getSelection();
    this.chart.dynamicResize = true;
    this.BindData();
  }

  Refresh(ValFromParent) {
    alert('Value from parent is ' + ValFromParent);
  }

  title = 'Area Chart';
  type = 'AreaChart';
  data = [
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540],
  ];
  columnNames = ['Year', 'Sales', 'Expenses'];
  options = {
    width: 'auto',
    heigth: 'auto',
  };
  BindData() {
    this.title = 'Area Chart';
    this.type = 'AreaChart';
    this.data = [
      ['2013', 1000, 400],
      ['2014', 1170, 460],
      ['2015', 660, 1120],
      ['2016', 1030, 540],
    ];
    this.columnNames = ['Year', 'Sales', 'Expenses'];
    this.options = {
      width: 'auto',
      heigth: 'auto',
    };
  }
}
