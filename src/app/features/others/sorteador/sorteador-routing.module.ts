import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { SorteadorComponent } from './sorteador.component';

export const SorteadorRouting = {
  path: "sorteador", component: SorteadorComponent,
  // canActivate: [AuthGuard, PermissionGuard],
  children: [
    { path: "one", component: OneComponent },
    { path: "two", component: TwoComponent },
    // { path: "dashboard", component: DashboardComponent },
    // { path: "process", component: MaintainedComponent },
    // { path: "institution", component: MaintainerComponent },
    // { path: "instrument", component: ProcuratorComponent, canActivate: [AuthGuard, PermissionGuard] },
  ]
}
