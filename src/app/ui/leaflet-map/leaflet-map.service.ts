import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {MapConfig} from "./map";

@Injectable({
  providedIn: 'root'
})
export class LeafletMapService {
  private newMapConfig: BehaviorSubject<MapConfig | undefined> = new BehaviorSubject<MapConfig | undefined>(undefined);

  setNewMapConfig(state: MapConfig | undefined): void {
    this.newMapConfig.next(state);
  }

  getNewMapConfig(): MapConfig | undefined {
    return this.newMapConfig.value;
  }
}
