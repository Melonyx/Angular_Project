import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DeveloperComponent } from './developer/developer.component';
import { SoftwareComponent } from './software/software.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  { path: 'software', component: SoftwareComponent },
  { path: 'developers', component: DeveloperComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: '', redirectTo: '/software', pathMatch: 'full' },
  { path: '**', redirectTo: '/software' }
];

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    SoftwareComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }