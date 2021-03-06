import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [{ path: '', redirectTo: '/barchart', pathMatch: 'full' }, { path: 'barchart', component: IndexComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
