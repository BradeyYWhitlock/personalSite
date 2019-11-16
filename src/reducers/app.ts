import * as Constants from '../constants/store/app';
import { AppState } from '../types/app'

export const appState: AppState = {
    latestTweet: null,
    isMobile: false
};

export default function app(state = appState, action) {
    switch (action.type) {
        case Constants.SET_LATEST_TWEET:
            return Object.assign({}, state, {
                latestTweet: action.latestTweet
            });
        case Constants.SET_IS_MOBILE:
            return Object.assign({}, state, {
                isMobile: action.isMobile
            });
        default:
            return state;
    }
}
