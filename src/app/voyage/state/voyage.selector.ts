import * as fromVoyages from './voyage.reducers';
import { AppState } from '../../index';
import { createSelector } from '@ngrx/store';
export { selectVoyages, selectVoyagesEntities, selectVoyagesIds, selectTotalVoyages } from './voyage.reducers';

// La première fonction amène vers le state voyages
export const selectVoyagesState$ = (state: AppState) => state.voyages;

// Et à partir de celle-ci, on créer une autre fonction qui renverra data
/*export const selectVoyages$ = createSelector(selectVoyagesState$,(voyages) =>  voyages.data);*/

export const selectVoyageListEntitiesConverted$ = createSelector(
    selectVoyagesState$,
    fromVoyages.selectVoyages);

export const selectShowVilleDepart$ = createSelector(selectVoyagesState$, (voyages) => voyages.showVilleDepart)

export const selectShowVilleArrivee$ = createSelector(selectVoyagesState$, (voyages) => voyages.showVilleArrivee)

export const selectVoyagesLoading$ =
    createSelector(selectVoyagesState$, (voyages) => voyages.loading);

export const selectVoyagesLoaded$ =
    createSelector(selectVoyagesState$, (voyages) => voyages.loaded);

export const selectVoyagesErrors$ =
    createSelector(selectVoyagesState$, (voyages) => voyages.logs);
