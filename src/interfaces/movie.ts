export interface Movie {
    page?:          number;
    results?:       Result[];
    total_pages?:   number;
    total_results?: number;
    name?:          string;
    founded?:       number;
    members?:       string[];
}

export interface Result {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginalLanguage {
    En = "en",
    Fr = "fr",
    Uk = "uk",
}

export interface Album {
    name:   string;
    artist: Artist;
    tracks: Track[];
}

export interface Artist {
    name:    string;
    founded: number;
    members: string[];
}

export interface Track {
    name:     string;
    duration: number;
}
