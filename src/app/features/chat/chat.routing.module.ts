import { ChatComponent } from "./chat.component";



export const ChatRouting = {
  path: "chat", component: ChatComponent,
  // canActivate: [AuthGuard, PermissionGuard],
  children: [
    // { path: "home", component: InstitutionHomeComponent },
  ]
}
