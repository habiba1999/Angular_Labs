import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';

let routes:Routes = [
  {path:"registeration", component:RegisterationComponent},
  {path:"", component:RegisterationComponent},
  {path:"students", component:StudentsComponent},
  {path:"students/:id", component:StudentDetailsComponent},
  {path:"**", component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    StudentsComponent,
    StudentDetailsComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }