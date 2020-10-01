import { AreaChartComponent } from '../area-chart/area-chart.component';
import { AreaChartContainer } from '../area-chart/area-chart.container';
import { ColumnChartComponent } from '../column-chart/column-chart.component';
import { ColumnChartContainer } from '../column-chart/column-chart.container';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { HelloWorldContainer } from '../hello-world/hello-world.container';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { LineChartContainer } from '../line-chart/line-chart.container';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { PieChartContainer } from '../pie-chart/pie-chart.container';

export const dashboardCards = {
  HELLO_WORLD: HelloWorldComponent,
  PieChart: PieChartComponent,
  ColumnChart: ColumnChartComponent,
  AreaChart: AreaChartComponent,
  LineChart: LineChartComponent,
};
