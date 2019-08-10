import { HttpErrorResponse } from '@angular/common/http';
import { Cooperative } from './cooperative.interface';

export namespace CoopearativeModule {

  export enum ActionTypes {
    LOAD_LIST_COOPERATIVES = '[cooperative] Load',
    SUCCESS_LOAD_COOPERATIVES = '[cooperative] Success load',
    ERROR_LOAD_COOPERATIVES = '[cooperative] Error load',
    DISPLAY_LIST_VILLE_DEPART = '[cooperative] Display List ville depart',
    DISPLAY_LIST_VILLE_ARRIVEE = '[cooperative] Display List ville arrivé'
  }

  export  class  LoadCooperatives {
    readonly  type = ActionTypes.LOAD_LIST_COOPERATIVES;
  }

  export  class  SuccessCooperatives {
    readonly  type = ActionTypes.SUCCESS_LOAD_COOPERATIVES;
    constructor( public payload: Cooperative[]) {}
  }

  export class ErrorLoadCooperatives {
    readonly type = ActionTypes.ERROR_LOAD_COOPERATIVES;
    constructor(public payload: HttpErrorResponse) {}
  }


  export type Actions = LoadCooperatives | SuccessCooperatives | ErrorLoadCooperatives ;
}