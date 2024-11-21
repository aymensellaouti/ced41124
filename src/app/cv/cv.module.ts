import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { AutocompleteComponent } from "./autocomplete/autocomplete.component";
import { CvCArdComponent } from "./cv-card/cv-card.component";
import { CvItemComponent } from "./cv-item/cv-item.component";
import { CvListComponent } from "./cv-list/cv-list.component";
import { CvComponent } from "./cv/cv.component";
import { DetailsCvComponent } from "./details-cv/details-cv.component";
import { EmbaucheComponent } from "./embauche/embauche.component";
import { MasterDetailsComponent } from "./master-details/master-details.component";
import { DefaultImagePipe } from "./pipes/default-image.pipe";
import { CvRoutingModule } from "./cv-routing.module";


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CvRoutingModule,
        CvComponent,
        CvListComponent,
        CvCArdComponent,
        CvItemComponent,
        EmbaucheComponent,
        DetailsCvComponent,
        AddCvComponent,
        DefaultImagePipe,
        AutocompleteComponent,
        MasterDetailsComponent
    ],
})
export default class CvModule {}
