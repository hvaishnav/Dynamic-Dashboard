import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { GoogleChartComponent } from 'angular-google-charts';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss'],
})
export class ColumnChartComponent implements OnInit {
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

  title = 'Population (in millions)';
  type = 'ColumnChart';
  data = [
    ['2012', 900],
    ['2013', 1000],
    ['2014', 1170],
    ['2015', 1250],
    ['2016', 1530],
  ];
  columnNames = ['Year', 'Asia'];
  options = {
    width: 'auto',
    heigth: 'auto',
  };

  Refresh(ValFromParent) {
    alert('Value from parent is ' + ValFromParent);
  }

  BindData() {
    this.title = 'Population (in millions)';
    this.type = 'ColumnChart';
    this.data = [
      ['2012', 900],
      ['2013', 1000],
      ['2014', 1170],
      ['2015', 1250],
      ['2016', 1530],
    ];
    this.columnNames = ['Year', 'Asia'];
    this.options = {
      width: 'auto',
      heigth: 'auto',
    };
  }
}
