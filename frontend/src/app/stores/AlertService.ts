import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ISetting } from "../types/settings";

@Injectable( {
  providedIn: 'root'
} )
export class AlertService {
  _alerts: BehaviorSubject<ISetting | null> = new BehaviorSubject<ISetting | null>( null );
}
