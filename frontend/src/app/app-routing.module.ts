import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./components/auth/signin/signIn.component";
import {SignUpComponent} from "./components/auth/signup/signUp.component";
import {PersonalDataComponent} from "./components/candidate/profile/personal-data/personalData.component";
import {OfferComponent} from "./components/candidate/profile/offer/offer.component";
import {ResponseComponent} from "./components/candidate/profile/response/response.component";
import {HomeComponent} from "./pages/home/home.component";
import {AuthComponent} from "./components/auth/auth/auth.component";
import {SignUpVerifyComponent} from "./components/auth/signup/signupverify/signUpVerify.component";
import {CreateProfileComponent} from "./components/candidate/createProfile/createProfile.component";
import {ProfileComponent} from "./components/candidate/profile/profile.component";


const authRoutes: Routes = [
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
];

const profileRoutes: Routes = [
  {path: '', component: PersonalDataComponent},
  {path: 'offers-cus', component: OfferComponent},
  {path: 'responses', component: ResponseComponent},
];

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent, children: authRoutes},
  {path: 'verify', component: SignUpVerifyComponent},
  {path: 'create_profile', component: CreateProfileComponent},
  {path: 'profile', component: ProfileComponent, children: profileRoutes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
