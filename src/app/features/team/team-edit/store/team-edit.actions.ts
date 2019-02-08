import { Action } from "@ngrx/store";
import { Team } from "../../../../api/models/team";
import { School } from "../../../../api/models/school";
import { AddTeamFormDto } from "../components/add-team-form/dto/add-team-form.dto";

export enum TeamEditActionTypes {
    LoadTeams = "[Team edit] Load teams",
    LoadTeamsFailure = "[Team edit] Load teams failure",
    TeamsLoaded = "[Team edit] Teams loaded",
    LoadSchools = "[Team edit] Load schools",
    SchoolsLoaded = "[Team edit] Schools loaded",
    AddTeam = "[Team edit] Add team",
    AddTeamError = "[Team edit] Add team error"
}

export class LoadTeams implements Action {
    readonly type = TeamEditActionTypes.LoadTeams;
}

export class LoadTeamsFailure implements Action {
    readonly type = TeamEditActionTypes.LoadTeamsFailure;
}

export class TeamsLoaded implements Action {
    readonly type = TeamEditActionTypes.TeamsLoaded;

    constructor(public teams: Team[]) {}
}

export class LoadSchools implements Action {
    readonly type = TeamEditActionTypes.LoadSchools;
}

export class SchoolsLoaded implements Action {
    readonly type = TeamEditActionTypes.SchoolsLoaded;

    constructor(public schools: School[]) {}
}

export class AddTeam implements Action {
    readonly type = TeamEditActionTypes.AddTeam;

    constructor(public addTeamDto: AddTeamFormDto) {}
}

export class AddTeamError implements Action {
    readonly type = TeamEditActionTypes.AddTeamError;
}

export type TeamEditActions =
    | LoadSchools
    | SchoolsLoaded
    | LoadTeams
    | LoadTeamsFailure
    | AddTeam
    | AddTeamError
    | TeamsLoaded;
