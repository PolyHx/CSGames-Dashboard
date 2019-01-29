import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";
import { Observable, of, throwError } from "rxjs";
import { Team } from "../api/models/team";
import { Attendee } from "../api/models/attendee";
import { delay, tap } from "rxjs/operators";
import { CreateInvitationDto } from "../api/dto/registration";

@Injectable()
export class TeamService {

    constructor(private apiService: ApiService) {
    }

    getTeam(): Observable<Team> {
        return this.apiService.team.getTeam();

    }

    updateTeamName(newName: string, id: string): Observable<void> {
        return this.apiService.team.updateTeamName(newName, id);
    }

    addTeamMember(newAttendee: Attendee, teamName: string, role: string): Observable<any> {
        return this.apiService.registration.inviteAttendee({
            firstName: newAttendee.firstName,
            lastName: newAttendee.lastName,
            email: newAttendee.email,
            role: role,
            teamName: teamName
        });
    }
}
