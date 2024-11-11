import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable( {
  providedIn: 'root'
} )
export class RegisterStore {
  registerData: BehaviorSubject<FormData | null> = new BehaviorSubject<FormData | null>( null );
}
