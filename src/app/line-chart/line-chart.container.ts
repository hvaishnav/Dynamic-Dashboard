import { Component } from '@angular/core';
import { DashboardCardContainer } from '../dashboard/dashboard-card/dashboard-card.container';

@Component({
  template: `<app-line-chart></app-line-chart>`,
})
export class LineChartContainer extends DashboardCardContainer {}
