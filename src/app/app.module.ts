import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { DetailContainerComponent } from './detail-container/detail-container.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { NavBreadcrumbComponent } from './nav-breadcrumb/nav-breadcrumb.component';
import { IconCardsComponent } from './icon-cards/icon-cards.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { GraphComponent } from './graph/graph.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { NewsfeedCardComponent } from './newsfeed-card/newsfeed-card.component';
import { NewsfeedCardsComponent } from './newsfeed-cards/newsfeed-cards.component';
import { NotificationCardsComponent } from './notification-cards/notification-cards.component';
import { NotificationCardComponent } from './notification-card/notification-card.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    DetailContainerComponent,
    ScrollToTopComponent,
    NavBreadcrumbComponent,
    IconCardsComponent,
    AreaChartComponent,
    GraphComponent,
    BarChartComponent,
    PieChartComponent,
    NewsfeedComponent,
    NewsfeedCardComponent,
    NewsfeedCardsComponent,
    NotificationCardsComponent,
    NotificationCardComponent,
    DataTableComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
