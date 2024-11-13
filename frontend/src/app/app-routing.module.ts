import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from "./components/auth/signin/signIn.component";
import { SignUpComponent } from "./components/auth/signup/signUp.component";
import { PersonalDataComponent } from "./components/candidate/profile/personal-data/personalData.component";
import { OfferComponent } from "./components/candidate/profile/offer/offer.component";
import { ResponseComponent } from "./components/candidate/profile/response/response.component";
import { HomeComponent } from "./pages/home/home.component";
import { AuthComponent } from "./components/auth/auth/auth.component";
import { SignUpVerifyComponent } from "./components/auth/signup/signupverify/signUpVerify.component";
import { CreateProfileComponent } from "./components/candidate/createProfile/createProfile.component";
import { ProfileComponent } from "./components/candidate/profile/profile.component";
import { FilterComponent } from "./components/filter/filter.component";
import {
  PersonalDataCustomerComponent
} from "./components/company/profile/personal-data/personalDataCustomer.component";
import { ResponsesComponent } from "./components/company/profile/responses/responses.component";
import { ProfileCustomerComponent } from "./components/company/profile/profileCustomer.component";
import { VacanciesComponent } from "./components/company/profile/personal-data/vacancies/vacancies.component";
import {
  CreateVacancyComponent
} from "./components/company/profile/personal-data/create-vacancy/create-vacancy.component";
import { VacancyComponent } from "./components/company/vacancy/vacancy.component";


const authRoutes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
];

const vacanciesRoutes: Routes = [
  { path: 'vacancies', component: VacanciesComponent },
  { path: 'create_vacancy', component: CreateVacancyComponent },
  { path: 'vacancies/:id', component: VacancyComponent }
];

const profileCustomerRoutes: Routes = [
  { path: '', component: PersonalDataCustomerComponent, children: vacanciesRoutes },
  { path: 'company_responses', component: ResponsesComponent },
];

const profileRoutes: Routes = [
  { path: '', component: PersonalDataComponent },
  { path: 'offers', component: OfferComponent },
  { path: 'responses', component: ResponseComponent },
];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent, children: authRoutes },
  { path: 'verify', component: SignUpVerifyComponent },
  { path: 'create_profile', component: CreateProfileComponent },
  { path: 'profile', component: ProfileComponent, children: profileRoutes },
  { path: 'search/vacancies', component: FilterComponent },
  { path: 'search/resume', component: FilterComponent },
  { path: 'company_profile', component: ProfileCustomerComponent, children: profileCustomerRoutes },
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
