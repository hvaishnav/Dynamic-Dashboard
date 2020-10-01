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

  @ViewChildren('ItemsRef') ItemsRef: QueryList<ElementRef>;

  tracks: Array<Track> = [];
  CardToShow: any;

  constructor(
    private cd: ChangeDetectorRef,
    private cfr: ComponentFactoryResolver,
    private DataEx: DataExchangeService
  ) {}

  ngOnInit() {
    if (this.DataEx.currentData) {
      this.DataEx.currentData.subscribe((data) => {
        if (data) {
          this.CardToShow = data;
          this.CardToShow = this.CardToShow.split(',');
        }
      });
    }

    for (let items in this.CardToShow) {
      let i = 1;
      let sObj = this.CardToShow[items];
      for (let item in DashboardCards) {
        let obj = {
          items: [
            {
              component: DashboardCards[item],
              id: sObj,
              name: item + '( ' + sObj + ' )',
            },
          ],
        };

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
    // console.log('Value of Instance : ', instance);
  };

  DeleteFromDashboard(id) {
    this.tracks = this.tracks.filter((e) => e.items[0].id !== id);
  }
  RefreshCard(id) {
    let value: any = this.dashboardOutlet.filter((e) => e.item.id == id)[0];
    value.componentRef.instance.Refresh(id.split('_')[1]);
  }

  RandomCol(index) {
    console.log(index);
    //this.RandomSize
  }
}
