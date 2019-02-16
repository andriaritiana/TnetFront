import { HttpErrorResponse } from '@angular/common/http';
import { Voyage } from './voyage.interface';

export namespace VoyagesModule {

  export enum ActionTypes {
    LOAD_INIT_VOYAGES = '[voyage] Load Init Voyages',
    SUCCESS_INIT_VOYAGES = '[voyage] Success Init Voyages',
    ERROR_LOAD_ACTION = '[voyage] Error load Voyages'
  }

  export  class  LoadInitVoyages {
    readonly  type = ActionTypes.LOAD_INIT_VOYAGES;
  }

  export  class  SuccessInitVoyages {
    readonly  type = ActionTypes.SUCCESS_INIT_VOYAGES;
    constructor( public payload: Voyage[]) {}
  }


  export class ErrorLoadAction {
    readonly type = ActionTypes.ERROR_LOAD_ACTION;
    constructor(public payload: HttpErrorResponse) {}
  }

  export type Actions = LoadInitVoyages | SuccessInitVoyages | ErrorLoadAction;
}
