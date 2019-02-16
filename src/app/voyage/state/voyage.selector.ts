import * as fromVoyages from './voyage.reducers';
import { AppState } from '../../index';
import { createSelector } from '@ngrx/store';
export { selectVoyages, selectVoyagesEntities, selectVoyagesIds, selectTotalVoyages } from './voyage.reducers';

// La première fonction amène vers le state voyages
export const selectVoyageListState$ = (state: AppState) => state.voyages;

// Et à partir de celle-ci, on créer une autre fonction qui renverra data
/*export const selectVoyages$ = createSelector(selectVoyageListState$,(voyages) =>  voyages.data);*/

export const selectVoyageListEntitiesConverted$ = createSelector(
    selectVoyageListState$,
    fromVoyages.selectVoyages);

export const selectVoyagesLoading$ =
    createSelector(selectVoyageListState$, (voyages) => voyages.loading);

export const selectVoyagesLoaded$ =
    createSelector(selectVoyageListState$, (voyages) => voyages.loaded);

export const selectVoyagesErrors$ =
    createSelector(selectVoyageListState$, (voyages) => voyages.logs);
