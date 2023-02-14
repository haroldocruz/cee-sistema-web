import { GroupComponent } from './features/group/group.component';
import { HomeAssignmentComponent } from './features/home/home-assignment/home-assignment.component';
import { HomeWelcomeComponent } from './features/home/home-welcome/home-welcome.component';
import { AuthGuard } from './guards/auth.guard';

import { CeeRouting } from './features/cee/cee.routing.module';
import { InstitutionRouting } from './features/institution/institution.routing.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatRouting } from './features/chat/chat.routing.module';
import { HomeComponent } from './features/home/home.component';
import { LayoutFullComponent } from './layout/layout-full/layout-full.component';
import { LayoutTopFooterComponent } from './layout/layout-top-footer/layout-top-footer.component';

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "auth", loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule) },
    // { path: "login", component: AuthComponent },
    {
        path: "", component: LayoutFullComponent, children: [
            { path: "home", redirectTo: "/home/boas-vindas", pathMatch: "full" },
            {
                path: "home", component: HomeComponent,
                children: [
                    { path: "boas-vindas", component: HomeWelcomeComponent },
                    { path: "atribuicoes", component: HomeAssignmentComponent }
                ]
            },
            { path: "account", loadChildren: () => import("./features/account/account.module").then(m => m.AccountModule), canActivate: [AuthGuard] },
            { path: "document", loadChildren: () => import("./features/document/document.module").then(m => m.DocumentModule), canActivate: [AuthGuard] },
            { path: "process", loadChildren: () => import("./features/process/process.module").then(m => m.ProcessModule), canActivate: [AuthGuard] },
            { path: "profile", loadChildren: () => import("./features/profile/profile.module").then(m => m.ProfileModule), canActivate: [AuthGuard] },
            { path: "user", loadChildren: () => import("./features/user/user.module").then(m => m.UserModule), canActivate: [AuthGuard] },
            { path: "course", loadChildren: () => import("./features/course/course.module").then(m => m.CourseModule), canActivate: [AuthGuard] },
            { path: "sorteador", loadChildren: () => import("./features/others/sorteador/sorteador.module").then(m => m.SorteadorModule) },
            CeeRouting,
            ChatRouting,
            InstitutionRouting,
            { path: "group", component: GroupComponent },
        ]
    }, {
        path: "", component: LayoutFullComponent, children: [
            { path: "avaliadores", loadChildren: () => import("./features/others/baesb/baesb.module").then(m => m.BaesbModule) }
        ]

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        // { onSameUrlNavigation: 'reload' }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
