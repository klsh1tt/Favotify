import {createSelector} from 'reselect';

const usersSelector = (state:any) => state.users;

export const getUserId = createSelector(
    [usersSelector],
    state => state.uid
)