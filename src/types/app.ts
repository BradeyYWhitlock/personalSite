export interface HomeProps {
    setIsMobile: Function;
    isMobile: boolean;
}

export interface Tweet {
    created_at: string;
    text: string;
    photo?: string;
    retweet_count: number;
    favorite_count: number;
}

export interface AppState {
    latestTweet: Tweet;
    isMobile: boolean;
}