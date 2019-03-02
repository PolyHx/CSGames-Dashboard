import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { CompetitionsRoutingModule } from "./competitions-routing.module";
import { DirectivesModule } from "src/app/directives/directives.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as fromCompetitions from "./store/competitions.reducer";
import * as fromInfoCompetition from "./info-competition/store/info-competition.reducer";
import { CompetitionsComponent } from "./competitions.component";
import { LoadingSpinnerModule } from "src/app/components/loading-spinner/loading-spinner.module";
import { TabsModule } from "ngx-bootstrap";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PipeModule } from "src/app/pipe/pipe.module";
import { SimpleModalModule } from "ngx-simple-modal";
import { CompetitionCardComponent } from "./competition-card/competition-card.component";
import { InfoCompetitionComponent } from "./info-competition/info-competition.component";
import { CompetitionsEffects } from "./store/competitions.effects";
import { InfoCompetitionEffects } from "./info-competition/store/info-competition.effects";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        CompetitionsRoutingModule,
        LoadingSpinnerModule,
        DirectivesModule,
        StoreModule.forFeature("competitions", fromCompetitions.reducer),
        StoreModule.forFeature("infoCompetition", fromInfoCompetition.reducer),
        EffectsModule.forFeature([CompetitionsEffects, InfoCompetitionEffects]),
        TabsModule.forRoot(),
        FlexLayoutModule,
        PipeModule,
        SimpleModalModule,
        FormsModule
    ],
    declarations: [CompetitionsComponent, CompetitionCardComponent, InfoCompetitionComponent],
    entryComponents: [CompetitionsComponent, InfoCompetitionComponent]
})
export class CompetitionsModule { }
