import { types } from '../types/types';

const initialState = {
    entries: [],
    oneEntry: {}
}

export const entryReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.getAllEntries:
            return {
                ...state,
                entries: action.payload,
            }

            case types.getOneEntry:
                return {
                    ...state,
                    oneEntry: action.payload,
                }


        default:
            return state;
    }

}


