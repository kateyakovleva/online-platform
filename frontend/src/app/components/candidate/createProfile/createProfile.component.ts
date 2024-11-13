import {Component} from '@angular/core';
import {naming} from "../../../data/naming/naming/naming.service";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule} from "@angular/forms";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {SettingsStore} from "../../../stores/SettingsStore";
import {File} from "buffer";
import {CustomSelectComponent} from "../../customSelect/customSelect.component";
import {CheckboxComponent} from "../../checkbox/checkbox.component";
import {UserStore} from "../../../stores/UserStore";
import {ICity, ISkill, ISpecialization} from "../../../types/other_types";
import {AppClient} from "../../../services/AppClient";
import {IResume} from "../../../types/resumes";

@Component({
  selector: 'app-createProfile',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CheckboxModule,
    FormsModule,
    NgForOf,
    AsyncPipe,
    CustomSelectComponent,
    NgIf,
    CheckboxComponent
  ],
  templateUrl: './createProfile.component.html',
  styleUrl: './createProfile.component.scss'
})
export class CreateProfileComponent {
  constructor(
    public settings: SettingsStore,
    public user: UserStore,
    private http: AppClient,
    private router: Router,
  ) {
  }

  naming = naming;

  file: File | null = null;

  selectFile(e: Event) {
    //@ts-ignore
    this.file = e.target?.files[0] || null;
  }

  hasSelectedSkill(skill: ISkill, resume?: IResume) {
    return Boolean(resume?.skills?.find(s => s.id === skill.id));
  }

  getSelectedCity(cities?: ICity[] | null, resume?: IResume) {
    return cities?.find(c => c.id === resume?.city_id);
  }

  getSelectedSpecialization(cities?: ISpecialization[] | null, resume?: IResume) {
    return cities?.find(c => c.id === resume?.specialization_id);
  }

  onSave(event: Event) {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);

    this.http.post('/profile/resume', data).subscribe(r => {
      this.user.updateUser();
      this.router.navigate(["/profile"]);
    })
  }
}
