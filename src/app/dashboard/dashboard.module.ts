import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardOutletDirective } from './dashboard-outlet.directive';
import { DashboardCardContainer } from './dashboard-card/dashboard-card.container';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardOutletDirective,
    DashboardCardContainer,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
