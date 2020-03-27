import { Record, RecordOf } from 'immutable';

import { ACTIONS, ActionType, PageStatus } from '../actions/page';

export type PageState = RecordOf<{
    status: PageStatus;
}>;

export const INITIAL_PAGE_STATE = Record({
    status: PageStatus.Loading
})();

export default (
    state: PageState = INITIAL_PAGE_STATE,
    action: ActionType
): PageState => {
    switch (action.type) {
        case ACTIONS.UPDATE_PAGE_STATUS:
            return state.set('status', action.status);
        default:
            return state;
    }
};
