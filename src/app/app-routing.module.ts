import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const routes: Routes = [{ path: '', redirectTo: '/barchart', pathMatch: 'full' }, { path: 'barchart', component: BarChartComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
