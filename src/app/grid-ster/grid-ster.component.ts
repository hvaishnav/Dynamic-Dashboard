import { Component, OnInit } from '@angular/core';
import { CompactType, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';

@Component({
  selector: 'app-grid-ster',
  templateUrl: './grid-ster.component.html',
  styleUrls: ['./grid-ster.component.scss']
})
export class GridSterComponent implements OnInit {

  constructor() { }
  options: GridsterConfig = {};
  dashboard: Array<GridsterItem>;

  ngOnInit() {
    this.options = {
      itemChangeCallback: (item, itemComponent)=>this.itemChange(item, itemComponent),
      itemResizeCallback:  (item, itemComponent)=>this.itemResize(item, itemComponent),
      draggable: {
        enabled: true
      },
      pushItems: true,
      resizable: {
        enabled: true
      },
      displayGrid:"onDrag&Resize",
      gridType: GridType.Fit,
      compactType: CompactType.None,
    };

    this.dashboard = [
      {cols: 1, rows: 1, y: 0, x: 4},
      {cols: 1, rows: 1, y: 1, x: 3},
      {cols: 1, rows: 1, y: 2, x: 0},
      {cols: 1, rows: 1, y: 3, x: 4},
       {cols: 1, rows: 1, y: 4, x: 2},
      // {cols: 2, rows: 2, y: 3, x: 0},
      //{cols: 2, rows: 2, y: 2, x: 0},
      // {cols: 2, rows: 2, y: 3, x: 3},
      // {cols: 2, rows: 2, y: 3, x: 3},
    ];
  }
  itemChange(item, itemComponent) {
    console.info(`state: ${JSON.stringify(this.dashboard, null, 5)}`);
 }

 itemResize(item, itemComponent) {
  //  console.info('itemResized', item, itemComponent);
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }
  
  i:number = 1;
  addItem() 
  {
    this.dashboard.push({
      cols: 1,
      id: this.i+1,
      rows: 1,
      x: 0,
      y: 0
    });
  }
}
