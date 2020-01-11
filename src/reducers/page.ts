import { RecordOf, fromJS } from 'immutable';

import { ACTIONS, ActionType } from '../actions/page';

type State = RecordOf<{
    isLoading: boolean;
}>;

const INITIAL_STATE = fromJS({
    isLoading: false
});

export default (state: State = INITIAL_STATE, action: ActionType): State => {
    switch (action.type) {
        case ACTIONS.UPDATE_LOADING_STATUS:
            return state.set('isLoading', action.isLoading);
        default:
            return state;
    }
};
