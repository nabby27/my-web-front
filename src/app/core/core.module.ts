import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material/material.module';
import { SidenavModule } from '../layout/sidenav/sidenav.module';
import { HeaderModule } from '../layout/header/header.module';
import { FooterModule } from '../layout/footer/footer.module';

@NgModule({
  declarations: [],
  imports: [],
  exports: [HttpClientModule, MaterialModule, FontAwesomeModule, SidenavModule, HeaderModule, FooterModule],
})
export class CoreModule {}
