import { Component, OnInit, OnDestroy } from "@angular/core";
import { SimpleModalComponent } from "ngx-simple-modal";
import { Store, select } from "@ngrx/store";
import { State, getNotifications, getNotificationsLoading } from "./store/notifications.reducer";
import { Subscription } from "rxjs";
import { AttendeeNotification } from "../../api/models/notification";
import { LoadNotifications } from "./store/notifications.actions";

@Component({
    selector: "app-notifications-list-modal",
    templateUrl: "notifications-list-modal.template.html",
    styleUrls: ["notifications-list-modal.style.scss"]
})

export class NotificationsListModalComponent extends SimpleModalComponent<void, void> implements OnInit, OnDestroy {
    notifications$ = this.store$.pipe(select(getNotifications));
    loading$ = this.store$.pipe(select(getNotificationsLoading));

    private notificationSub$: Subscription;
    public notifications: AttendeeNotification[];

    constructor(private store$: Store<State>) {
        super();
    }

    ngOnInit() {
        this.store$.dispatch(new LoadNotifications());
        this.notificationSub$ = this.notifications$.subscribe((notifications) => {
            if (!notifications) { return; }
            this.notifications = notifications.sort((a, b) => a.notification.timestamp > b.notification.timestamp ? -1 : 1);
        });
    }

    ngOnDestroy() {
        this.notificationSub$.unsubscribe();
    }

    close() {
        document.querySelector(".modal-right-side.fade").classList.add("slideOutRight");
        return new Promise((resolve => {
            setTimeout(() => {
                resolve();
                super.close();
            }, 400);
        }));
    }
}
