import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import { VoyageListEffects } from './voyage/state/voyage.effect';
import { VoyageStateEntity, voyagesReducer } from './voyage/state/voyage.reducers';

// Le root reducer
const reducers = {
    voyages: voyagesReducer
};

export interface AppState {
    voyages: VoyageStateEntity;
}

// Nécéssaire pour l'AOT
export function getReducers() {
    return reducers;
}
// Nécéssaire pour l'AOT
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export const appEffects = [VoyageListEffects];
