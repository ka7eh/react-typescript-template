export enum PageStatus {
    Ready = 'Ready',
    Loading = 'Loading',
    Error = 'Error'
}

const UPDATE_PAGE_STATUS = 'UPDATE_PAGE_STATUS';
interface UpdatePageStatusAction {
    type: 'UPDATE_PAGE_STATUS';
    status: PageStatus;
}
export const updatePageStatus = (
    status: PageStatus
): UpdatePageStatusAction => ({
    type: UPDATE_PAGE_STATUS,
    status
});

export type ActionType = UpdatePageStatusAction;

export const ACTIONS = {
    UPDATE_PAGE_STATUS
};
