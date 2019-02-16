import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from "rxjs/index";
import { VoyageService } from '../voyage.service';
import {VoyagesModule} from './voyage.actions';

@Injectable()
export  class  VoyageListEffects {
  // Ecoute les actions passées dans le store
  @Effect() LoadVoyages$: Observable<VoyagesModule.Actions> = this.actions$
    .pipe(
      ofType(VoyagesModule.ActionTypes.LOAD_INIT_VOYAGES),
      switchMap(()  =>  this.voyageListService.get_all_voyages()),
      map(voyages => new VoyagesModule.SuccessInitVoyages(voyages)),
      catchError((err) => of(new VoyagesModule.ErrorLoadAction(err)))
    );

  constructor(
    private  voyageListService: VoyageService,
    private  actions$: Actions,
  ) {}

}