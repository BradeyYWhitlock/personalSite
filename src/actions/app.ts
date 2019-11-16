import * as Constants from '../constants/store/app';
import { TwitterService } from '../services/TwitterService';

export function setLatestTweet(test: string) {
    return { type: Constants.SET_LATEST_TWEET, test };
}

export function setIsMobile(isMobile: boolean) {
    return { type: Constants.SET_IS_MOBILE, isMobile }
}

export function getLatestTweet() {
    return async function (dispatch: Function) {
        TwitterService.getLatestTweet().then(res => {
            console.log(res)
        })
    }
}