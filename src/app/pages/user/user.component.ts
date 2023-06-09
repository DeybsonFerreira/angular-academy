import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  dataSource: UserModel[] = [];
  userAdd: UserModel = new UserModel();

  ngOnInit(): void {
    this.dataSource = [
      {
        id: 0,
        name: 'teste',
        email: 'teste@email.com',
      },
      {
        id: 1,
        name: 'teste1',
        email: 'teste@email.com1',
      },
    ];
  }

  btnSearch(user: UserModel): void {
    alert('buscando');
  }
  btnDelete(user: UserModel): void {
      //encontrar indice
      let index = this.dataSource.findIndex((item)=> item==user );
      //remover do array
      this.dataSource.splice(index,1);
      this.dataSource = Array.from(this.dataSource);
      alert('deletado');
  }

  btnSave(): void {
    if (this.userAdd.name) {
      alert('salvo');

      //atualizar array
      this.dataSource.push(this.userAdd);
      this.dataSource = Array.from(this.dataSource);
    }
  }
}
