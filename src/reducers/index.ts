import { Record, RecordOf } from 'immutable';
import page, { PageState, INITIAL_PAGE_STATE } from './page';

export type State = RecordOf<{
    page: PageState;
}>;

export const INITIAL_STATE = Record({
    page: INITIAL_PAGE_STATE
})();

export default {
    page
};
