import { Action } from "@ngrx/store";
import { PuzzleFormDto } from "../../puzzle-form/dto/puzzle-form.dto";

export enum CreatePuzzleActionTypes {
    CreatePuzzle = "[Create Puzzle Hero Puzzle] Create puzzle",
    CreatePuzzleSuccess = "[Create Puzzle Hero Puzzle] Create puzzle success",
    CreatePuzzleError = "[Create Puzzle Hero Puzzle] Create puzzle error",

    ResetState = "[Create Puzzle Hero Puzzle] Reset state"
}

export class CreatePuzzle implements Action {
    readonly type = CreatePuzzleActionTypes.CreatePuzzle;

    constructor(public trackId: string, public parentId: string, public puzzleFormDto: PuzzleFormDto) {}
}

export class CreatePuzzleSuccess implements Action {
    readonly type = CreatePuzzleActionTypes.CreatePuzzleSuccess;
}

export class CreatePuzzleError implements Action {
    readonly type = CreatePuzzleActionTypes.CreatePuzzleError;
}

export class ResetState implements Action {
    readonly type = CreatePuzzleActionTypes.ResetState;
}

export type CreatePuzzleActions =
    | ResetState
    | CreatePuzzleSuccess
    | CreatePuzzleError
    | CreatePuzzle;


