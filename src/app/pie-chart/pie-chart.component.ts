import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { GoogleChartComponent } from 'angular-google-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
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
  title = 'Browser market shares at a specific website, 2014';
  type = 'PieChart';
  data = [
    ['Firefox', 45.0],
    ['IE', 26.8],
    ['Chrome', 12.8],
    ['Safari', 8.5],
    ['Opera', 6.2],
    ['Others', 0.7],
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {
    width: 'auto',
    heigth: 'auto',
  };

  Refresh(ValFromParent) {
    alert('Value from parent is ' + ValFromParent);
  }

  BindData() {
    this.title = 'Browser market shares at a specific website, 2014';
    this.type = 'PieChart';
    this.data = [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7],
    ];
    this.columnNames = ['Browser', 'Percentage'];
    this.options = {
        width: 'auto',
        heigth:'auto',
    };
  }
}
