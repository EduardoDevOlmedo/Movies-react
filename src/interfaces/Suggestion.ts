import { Result } from "./movie";

export interface Suggestion {
    page?:          number;
    results?:       Result[];
    total_pages?:   number;
    total_results?: number;
    name?:          string;
    founded?:       number;
    members?:       string[];
}

export interface SuggestionResult extends Result{}


export interface SuggestionAlbum {
    name:   string;
    artist: SuggestionArtist;
    tracks: SuggestionTrack[];
}

export interface SuggestionArtist {
    name:    string;
    founded: number;
    members: string[];
}

export interface SuggestionTrack {
    name:     string;
    duration: number;
}
