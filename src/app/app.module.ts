import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { OrdensComponent } from './ordens/ordens.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { LoginModule } from './login/login.module';
import { UserComponent } from './user/user.component';
import { OrdemComponent } from './ordem/ordem.component';
import { NovaOrdemComponent } from './nova-ordem/nova-ordem.component';
import { FooterComponent } from './shared/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    OrdensComponent,
    NavbarComponent,
    ProdutosComponent,
    UserComponent,
    OrdemComponent,
    NovaOrdemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginModule,
    RouterModule.forRoot(ROUTES),
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
