import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {AppRoutingModule} from './app-routing.module';
import {IndexComponent} from './index/index.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {BorderComponent} from './border/border.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {BaseinfoComponent} from './baseinfo/baseinfo.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {CookieService} from 'ngx-cookie-service';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    HeaderComponent,
    BorderComponent,
    PageNotFoundComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    BaseinfoComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
