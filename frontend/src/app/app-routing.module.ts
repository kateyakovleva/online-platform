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
import { PersonalDataCompanyComponent } from "./components/company/profile/personal-data/personalDataCompany.component";
import { ResponsesComponent } from "./components/company/profile/responses/responses.component";
import { ProfileCompanyComponent } from "./components/company/profile/profileCompany.component";
import { VacanciesComponent } from "./components/company/profile/personal-data/vacancies/vacancies.component";
import {
  CreateVacancyComponent
} from "./components/company/profile/personal-data/create-vacancy/create-vacancy.component";
import { VacancyComponent } from "./components/company/vacancy/vacancy.component";
import { FilterCompanyComponent } from "./components/filter-company/filter-company.component";
import {
  CreateProfileCompanyComponent
} from "./components/company/create-profile-company/create-profile-company.component";
import { ViewResumeComponent } from "./components/view-resume/viewResume.component";
import { ViewVacancyComponent } from "./components/view-vacancy/viewVacancy.component";


const authRoutes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
];

const vacanciesRoutes: Routes = [
  { path: 'vacancies', component: VacanciesComponent },
  { path: 'create_vacancy', component: CreateVacancyComponent },
  { path: 'vacancies/:id', component: VacancyComponent },
  { path: 'vacancies/:id/edit', component: CreateVacancyComponent },
];

const profileCustomerRoutes: Routes = [
  { path: '', component: PersonalDataCompanyComponent, children: vacanciesRoutes },
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
  { path: 'company_profile', component: ProfileCompanyComponent, children: profileCustomerRoutes },
  { path: 'create_company_profile', component: CreateProfileCompanyComponent },

  { path: 'search/vacancies', component: FilterComponent },
  { path: 'search/vacancies/:id', component: ViewVacancyComponent },
  { path: 'search/resume', component: FilterCompanyComponent },
  { path: 'search/resume/:id', component: ViewResumeComponent },
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes, { scrollPositionRestoration: 'enabled' } ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
