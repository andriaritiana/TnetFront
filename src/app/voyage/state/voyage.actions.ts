import { HttpErrorResponse } from '@angular/common/http';
import { Voyage } from './voyage.interface';

export namespace VoyagesModule {

  export enum ActionTypes {
    LOAD_INIT_VOYAGES = '[voyage] Load',
    SUCCESS_INIT_VOYAGES = '[voyage] Success load',
    ERROR_LOAD_VOYAGES = '[voyage] Error load',
    DISPLAY_LIST_VILLE_DEPART = '[voyage] Display List ville depart',
    DISPLAY_LIST_VILLE_ARRIVEE = '[voyage] Display List ville arrivé'
  }

  export  class  LoadInitVoyages {
    readonly  type = ActionTypes.LOAD_INIT_VOYAGES;
  }

  export  class  SuccessInitVoyages {
    readonly  type = ActionTypes.SUCCESS_INIT_VOYAGES;
    constructor( public payload: Voyage[]) {}
  }

  export class ErrorLoadVoyages {
    readonly type = ActionTypes.ERROR_LOAD_VOYAGES;
    constructor(public payload: HttpErrorResponse) {}
  }

  export class DisplayVilleDepart {
    readonly type = ActionTypes.DISPLAY_LIST_VILLE_DEPART;
  }

  export class DisplayVilleArrivee {
    readonly type = ActionTypes.DISPLAY_LIST_VILLE_ARRIVEE;
  }

  export type Actions = LoadInitVoyages | SuccessInitVoyages | ErrorLoadVoyages | DisplayVilleDepart | DisplayVilleArrivee;
}
