import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AdminPayrollComponent } from './examples/child-routes/admin-payroll/admin-payroll.component';
import { AdminVacationComponent } from './examples/child-routes/admin-vacation/admin-vacation.component';
import { AdminComponent } from './examples/child-routes/admin.component';
import { ExamplesComponent } from './examples/examples.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  {
    path: 'examples',
    component: ExamplesComponent,
    children: [
      {
        path: 'child',
        component: AdminComponent,
        children: [
          { path: 'payroll', component: AdminPayrollComponent },
          { path: 'vacation', component: AdminVacationComponent },
        ],
      },
    ],
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
