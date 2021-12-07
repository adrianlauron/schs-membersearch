import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MemberSearchComponent } from './member-search/member-search.component';
import { MemberService } from 'src/service/member.service';
import { AppConfig } from 'src/config/app.config';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CardModule } from 'primeng/card';
import { MenuComponent } from './menu/menu.component';
import { InputMaskModule } from 'primeng/inputmask';
import { SearchService } from 'src/service/search.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MemberSearchComponent,
    SearchResultsComponent,
    MenuComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SidebarModule,
    InputTextModule,
    InputMaskModule,
    CardModule,
    ToastModule
  ],
  providers: [
    AppConfig,
    MemberService,
    SearchService,
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
