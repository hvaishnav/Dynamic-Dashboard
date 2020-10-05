import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
  ComponentFactoryResolver,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { Track } from '../models/track';
import { DashboardOutletDirective } from '../dashboard-outlet.directive';
import { Item } from '../models/item';
import { dashboardCards } from '../dashboard-cards';
import { DashboardCardContainer } from '../dashboard-card/dashboard-card.container';
import { DashboardCards } from '../dashboard-cards.enum';
import { DataExchangeService } from 'src/app/DataExchange.service';
import { GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChildren(DashboardOutletDirective) dashboardOutlet: QueryList<
    DashboardOutletDirective
  >;
  RandomSize: number = 3;
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  @ViewChildren('ItemsRef') ItemsRef: QueryList<ElementRef>;

  tracks: Array<Track> = [];
  CardToShow: any;

  constructor(
    private cd: ChangeDetectorRef,
    private cfr: ComponentFactoryResolver,
    private DataEx: DataExchangeService
  ) {}

  static itemChange(item, itemComponent) {
    //console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {}

  ngOnInit() {
    if (this.DataEx.currentData) {
      this.DataEx.currentData.subscribe((data) => {
        if (data) {
          this.CardToShow = data;
          this.CardToShow = this.CardToShow.split(',');
        }
      });

      this.options = {
        itemChangeCallback: DashboardComponent.itemChange,
        itemResizeCallback: DashboardComponent.itemResize,
        // draggable: {
        //   enabled: true,
        // },
        // pushItems: true,
        // resizable: {
        //   enabled: true,
        // },
        // gridType: 'scrollVertical',
        // displayGrid: 'none',
        disablePushOnDrag: true,
        draggable: { enabled: true },
        gridType: GridType.ScrollVertical,
        resizable: { enabled: true },
        displayGrid: 'onDrag&Resize',
        minCols: 12,
        maxCols: 12,
        minRows: 6,
        maxRows: 6,
        maxItemCols: 50,
        minItemCols: 1,
        maxItemRows: 50,
        minItemRows: 1,
        maxItemArea: 2500,
        minItemArea: 1,
        defaultItemCols: 1,
        defaultItemRows: 1,
        setGridSize: true,
        fixedColWidth: 250,
        fixedRowHeight: 250,
      };
    }
    // this.dashboard = [
    //   { cols: 2, rows: 1, y: 0, x: 0 },
    //   { cols: 2, rows: 2, y: 0, x: 2 },
    // ];

    for (let items in this.CardToShow) {
      let i = 1;
      let sObj = this.CardToShow[items];
      console.log('sobj', sObj);
      for (let item in DashboardCards) {
        let obj = {
          items: [
            {
              component: DashboardCards[item],
              id: sObj,
              name: item + '( ' + sObj + ' )',
            },
          ],
          // cols: 2,
          // rows: 2,
          // y: 0,
          // x: 0,
        };

        if (sObj.split('_')[0] == '1') {
          obj['cols'] = 2;
          obj['rows'] = 2;
          obj['x'] = 0;
          obj['y'] = 0;
        }

        if (sObj.split('_')[0] == '2') {
          obj['cols'] = 3;
          obj['rows'] = 3;
          obj['x'] = 0;
          obj['y'] = 0;
        }
        if (sObj.split('_')[0] == '3') {
          obj['cols'] = 4;
          obj['rows'] = 2;
          obj['x'] = 0;
          obj['y'] = 0;
        }
        if (sObj.split('_')[0] == '4') {
          obj['cols'] = 5;
          obj['rows'] = 3;
          obj['x'] = 0;
          obj['y'] = 0;
        }

        if (i == Number(sObj.split('_')[0])) {
          this.tracks.push(obj);
        }
        i++;
      }
    }
  }

  ngAfterViewInit() {
    this.loadContents();
  }

  loadContents = () => {
    if (!this.dashboardOutlet || !this.dashboardOutlet.length) {
      return;
    }

    //'1_C,2_D'   #1 , #2
    this.dashboardOutlet.forEach((template) => {
      this.cd.detectChanges();
      this.loadContent(template, template.item);
    });
    this.cd.detectChanges();
  };

  loadContent = (template: DashboardOutletDirective, item: Item) => {
    if (!item.component) {
      return;
    }

    const viewContainerRef = template.viewContainerRef;
    viewContainerRef.clear();
    const componentFactory = this.cfr.resolveComponentFactory(
      dashboardCards[item.component]
    );
    const componentRef = viewContainerRef.createComponent(componentFactory);
    template.C = componentRef;
    const instance = componentRef.instance as DashboardCardContainer;
    instance.item = item;
  };

  DeleteFromDashboard(id) {
    this.tracks = this.tracks.filter((e) => e.items[0].id !== id);
  }
  RefreshCard(id) {
    let value: any = this.dashboardOutlet.filter((e) => e.item.id == id)[0];
    value.componentRef.instance.Refresh(id.split('_')[1]);
  }

  RandomCol(index) {
    // console.log(index);
  }
}
