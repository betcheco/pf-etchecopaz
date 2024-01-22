import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { UsersComponent } from './users.component';
import { TableComponent } from './components/table/table.component';
import { SharedModule } from "../../../../shared/shared.module";
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { UsersService } from '../../../../core/services/users.service';
import { UsersMockService } from '../../../../core/services/users-mock.service';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
    declarations: [
        UsersComponent,
        TableComponent,
        UserFormComponent
    ],
    exports: [UsersComponent,
        TableComponent,
        UserFormComponent],
    imports: [
        CommonModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSort,
        MatSortModule,
        MatPaginator,
        MatPaginatorModule,
        SharedModule,
        ReactiveFormsModule,
        MatIcon,
        MatButtonModule,
        MatDialogModule,
        MatSelectModule
    ],
    providers: [
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'} },
        {
            provide: UsersService
        }
    ]
})
export class UsersModule { }
