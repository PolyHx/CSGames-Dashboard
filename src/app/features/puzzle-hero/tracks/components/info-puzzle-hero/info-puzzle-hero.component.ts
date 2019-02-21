import { Component, OnDestroy, OnInit } from "@angular/core";
import { SimpleModalComponent } from "ngx-simple-modal";
import { PuzzleInfo } from "src/app/api/models/puzzle-hero";
import { TranslateService } from "@ngx-translate/core";

export interface InfoPuzzleHeroModal {
    puzzle: PuzzleInfo;
}

@Component({
    selector: "app-info-puzzle-hero-modal",
    templateUrl: "info-puzzle-hero.template.html",
    styleUrls: ["info-puzzle-hero.style.scss"]
})
export class InfoPuzzleHeroComponent extends SimpleModalComponent<InfoPuzzleHeroModal, void> implements OnInit, OnDestroy {
    
    public puzzle: PuzzleInfo;

    constructor(private translateService: TranslateService) {
        super();
    }

    public ngOnInit() {

    }

    public onClose() {
        this.close();
    }

    public get lang(): string {
        return this.translateService.getDefaultLang();
    }

}
