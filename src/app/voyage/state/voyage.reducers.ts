import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Voyage } from './voyage.interface';
import { VoyagesModule } from './voyage.actions';

export interface VoyageStateEntity extends EntityState<Voyage> {
    loading: boolean;
    loaded: boolean;
    selectVoyage: Voyage;
    errors: any;
    showVilleDepart: boolean;
    showVilleArrivee: boolean;
    logs: {
        type: string;
        message: string;
    };
}

export const VoyageListAdapter: EntityAdapter<Voyage> = createEntityAdapter<Voyage>({
    sortComparer: false
});

export const initialState: VoyageStateEntity = VoyageListAdapter.getInitialState({
    loading: false,
    loaded: false,
    errors: null,
    showVilleDepart: false,
    showVilleArrivee: false,
    selectVoyage: undefined,
    logs: undefined
});

export const {
    selectIds: selectVoyagesIds,
    selectEntities: selectVoyagesEntities,
    selectAll: selectVoyages,
    selectTotal: selectTotalVoyages
} = VoyageListAdapter.getSelectors();

export function voyagesReducer(
    state = initialState,
    action: VoyagesModule.Actions
): VoyageStateEntity {

    switch (action.type) {

        case VoyagesModule.ActionTypes.LOAD_INIT_VOYAGES:
            // Passe le loading a true
            return {
                ...state,
                loading: true
            };

        case VoyagesModule.ActionTypes.SUCCESS_INIT_VOYAGES:
            return {
                ...VoyageListAdapter.addMany(action.payload, state),
                loading: false,
                loaded: true,
            };
        
        case VoyagesModule.ActionTypes.ERROR_LOAD_VOYAGES:
            return {
                ...state,
                errors: action.payload.error,
                loading: false,
                loaded: false
            };

        case VoyagesModule.ActionTypes.DISPLAY_LIST_VILLE_DEPART:
            return {
                ...state,
                showVilleDepart: true,
                showVilleArrivee: false
            };
        
        case VoyagesModule.ActionTypes.DISPLAY_LIST_VILLE_ARRIVEE:
            return {
                ...state,
                showVilleArrivee: true,
                showVilleDepart: false
            };
        
        default:
            return state;
    }
}
