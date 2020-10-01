import { Component } from '@angular/core';
import { DashboardCardContainer } from '../dashboard/dashboard-card/dashboard-card.container';

@Component({
  template: `<app-area-chart></app-area-chart>`,
})
export class AreaChartContainer extends DashboardCardContainer {}
