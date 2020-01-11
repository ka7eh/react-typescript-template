const UPDATE_LOADING_STATUS = 'UPDATE_LOADING_STATUS';
type UpdateLoadingStatusAction = {
    type: 'UPDATE_LOADING_STATUS';
    isLoading: boolean;
};
export const updateLoadingStatus = (
    isLoading: boolean
): UpdateLoadingStatusAction => ({
    type: UPDATE_LOADING_STATUS,
    isLoading
});

export type ActionType = UpdateLoadingStatusAction;

export const ACTIONS = {
    UPDATE_LOADING_STATUS
};
