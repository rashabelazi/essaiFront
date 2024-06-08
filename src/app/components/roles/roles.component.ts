import { Component, OnDestroy, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit, OnDestroy {

  roles: Role[]
  role: Role

  //constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    //this.loadRoles();
  }
  ngOnDestroy() {
  }
  /*
  loadRoles(): void {
    this.roleService.getRoles().subscribe(
      (data: Role[]) => {
        this.roles = data;
      },
      (error: any) => {
        console.error('Error fetching roles', error);
      }
    );
  }
*/
}