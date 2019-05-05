import { NgModule } from '@angular/core';
import { FdformsComponent } from './fdforms.component';
import { FtDynamicFormComponent } from './ft-dynamic-form/ft-dynamic-form.component';

@NgModule({
  declarations: [FdformsComponent, FtDynamicFormComponent],
  imports: [
  ],
  exports: [FdformsComponent]
})
export class FdformsModule { }
