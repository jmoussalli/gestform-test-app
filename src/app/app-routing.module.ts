import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppGestformTestComponent} from "./app-gestform-test/app-gestform-test.component";
import {AppGestformTestAproposComponent} from "./app-gestform-test-apropos/app-gestform-test-apropos.component";

const routes: Routes = [
  {path: '', redirectTo: '/apropos', pathMatch: 'full'},
  {path: 'test', component: AppGestformTestComponent},
  {path: 'apropos', component: AppGestformTestAproposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
