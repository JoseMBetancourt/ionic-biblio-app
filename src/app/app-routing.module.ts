import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'make-appointment',
    loadChildren: () =>
      import('./make-appointment/make-appointment.module').then(
        (m) => m.MakeAppointmentPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-appointment/:id',
    loadChildren: () =>
      import('./edit-appointment/edit-appointment.module').then(
        (m) => m.EditAppointmentPageModule
      ),
  },
  {
    path: 'bibliografias',
    loadChildren: () =>
      import('./bibliografias/bibliografias.module').then(
        (m) => m.BibliografiasPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'verify-email',
    loadChildren: () =>
      import('./verify-email/verify-email.module').then(
        (m) => m.VerifyEmailPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
