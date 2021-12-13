import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";

const AuthRouting: Routes = [
  { path: "login", component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forChild(AuthRouting)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
