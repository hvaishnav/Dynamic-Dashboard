import { Component } from '@angular/core';
import { DashboardCardContainer } from '../dashboard/dashboard-card/dashboard-card.container';

@Component({
  template: `<app-pie-chart></app-pie-chart> `,
})
export class PieChartContainer extends DashboardCardContainer {}
