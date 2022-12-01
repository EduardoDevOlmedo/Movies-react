import { Actor, } from "./Actor";
import {  Result } from "./movie";
import { Suggestion } from "./Suggestion";

export interface FullMovie {
    movie?: Result 
    actors: Actor
    suggestions: Suggestion
}