import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { RoundObjectComponent } from './utility-components/round-object/round-object.component';
import { ConnectorComponent } from './utility-components/connector/connector.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PersonalInfoComponent,
    NavigationComponent,
    FooterComponent,
    SkillsComponent,
    RoundObjectComponent,
    ConnectorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
