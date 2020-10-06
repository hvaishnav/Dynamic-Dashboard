import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldContainer } from './hello-world/hello-world.container';
import { PieChartContainer } from './pie-chart/pie-chart.container';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ColumnChartContainer } from './column-chart/column-chart.container';
import { GoogleChartsModule } from 'angular-google-charts';
import { AreaChartContainer } from './area-chart/area-chart.container';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LineChartContainer } from './line-chart/line-chart.container';
import { GridsterModule } from 'angular-gridster2';
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldContainer,
    PieChartComponent,
    PieChartContainer,
    ColumnChartComponent,
    ColumnChartContainer,
    AreaChartContainer,
    AreaChartComponent,
    LineChartComponent,
    LineChartContainer,
    GridSterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    DashboardModule,
    GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    HelloWorldContainer,
    PieChartContainer,
    ColumnChartContainer,
    AreaChartContainer,
    LineChartContainer,
  ],
})
export class AppModule {}
