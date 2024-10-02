import { ApplicationConfig } from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import { AuthComponent } from "./components/auth/auth/auth.component";
import { HomeComponent } from "./pages/home/home.component";
import { SignInComponent } from "./components/auth/signin/signIn.component";
import { SignUpComponent } from "./components/auth/signup/signUp.component";
import { SignUpVerifyComponent } from "./components/auth/signup/signupverify/signUpVerify.component";
import { CreateProfileComponent } from "./components/candidate/createProfile/createProfile.component";
import { ProfileComponent } from "./components/candidate/profile/profile.component";
import { PersonalDataComponent } from "./components/candidate/profile/personal-data/personalData.component";
import { OfferComponent } from "./components/candidate/profile/offer/offer.component";
import { ResponseComponent } from "./components/candidate/profile/response/response.component";

const authRoutes: Routes = [
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
];

const profileRoutes: Routes = [
  {path: '', component: PersonalDataComponent},
  {path: 'offers', component: OfferComponent},
  {path: 'responses', component: ResponseComponent},
];


const mainRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent, children: authRoutes},
  {path: 'verify', component: SignUpVerifyComponent},
  {path: 'create_profile', component: CreateProfileComponent},
  {path: 'profile', component: ProfileComponent, children: profileRoutes}
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(mainRoutes)]
};


