import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
    {
        path: '',
        component: ContactComponent
    }

];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class ContactRoutingModule{


}