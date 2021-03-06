import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app.routing.module';

import { ModalModule} from 'ngx-bootstrap';
import {CalendarModule} from 'primeng/calendar';
import {MatButtonModule, MatFormFieldModule, MatSelectModule} from '@angular/material';

import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/Common/header/header.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { PaymentsComponent } from './Components/payments/payments.component';
import { LocationsComponent } from './Components/locations/locations.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { PromotionsComponent } from './Components/promotions/promotions.component';
import { FoodListComponent } from './Components/food-list/food-list.component';
import { DeleteConfirmationComponent } from './Components/Models/delete-confirmation/delete-confirmation.component';
import { FoodItemAddComponent } from './Components/Models/food-item-add/food-item-add.component';
import { FoodItemEditComponent } from './Components/Models/food-item-edit/food-item-edit.component';
import { LocationCreateComponent } from './Components/Models/location-create/location-create.component';
import { OrderViewComponent } from './Components/Models/order-view/order-view.component';
import { PromotionsViewComponent } from './Components/Models/promotions-view/promotions-view.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { PromotionAddComponent } from './Components/Models/promotion-add/promotion-add.component';
import { PromotionEditComponent } from './Components/Models/promotion-edit/promotion-edit.component';
import { ReviewsComponent } from './Components/reviews/reviews.component';
import { ReviewsViewComponent } from './Components/Models/reviews-view/reviews-view.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    OrdersComponent,
    PaymentsComponent,
    LocationsComponent,
    ReportsComponent,
    SettingsComponent,
    PromotionsComponent,
    FoodListComponent,
    DeleteConfirmationComponent,
    FoodItemAddComponent,
    FoodItemEditComponent,
    LocationCreateComponent,
    OrderViewComponent,
    PromotionsViewComponent,
    LoginPageComponent,
    PromotionAddComponent,
    PromotionEditComponent,
    ReviewsComponent,
    ReviewsViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CalendarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAKAH7vSuRjbTP16E9AFaUf6gDa69DZ4e8'}),
  ],
  providers: [],
  entryComponents: [
    FoodItemAddComponent,
    DeleteConfirmationComponent,
    FoodItemEditComponent,
    LocationCreateComponent,
    OrderViewComponent,
    PromotionsViewComponent,
    PromotionAddComponent,
    PromotionEditComponent,
    ReviewsViewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
