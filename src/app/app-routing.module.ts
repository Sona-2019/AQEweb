import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterplantComponent } from './web/WaterPlant/waterplant/waterplant.component';
const routes: Routes = [
  //{ path: "", redirectTo: "app", pathMatch: "full" },
{ path: "app", component:WaterplantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
