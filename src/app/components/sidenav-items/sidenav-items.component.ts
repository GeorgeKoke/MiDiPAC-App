import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav-items',
  templateUrl: './sidenav-items.component.html',
  styleUrls: ['./sidenav-items.component.css']
})
export class SidenavItemsComponent {
  public linkList =[
    {title: 'Nuevo Paciente', url: '/paciente/registro'},
    {title: 'Nuevo Usuario', url: '/usuario/registro'},
  ];
}
