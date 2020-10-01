import { Component } from '@angular/core';
import { DashboardCardContainer } from '../dashboard/dashboard-card/dashboard-card.container';

@Component({
  template: `<app-column-chart></app-column-chart>`,
})
export class ColumnChartContainer extends DashboardCardContainer {}
