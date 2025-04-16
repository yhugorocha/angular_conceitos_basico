import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemList } from './itemList';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {

  item: String = '';
  listItem: ItemList[] = [];

  adicionarItem(){
    let item = new ItemList();
    item.id = this.listItem.length + 1;
    item.name = this.item;
    this.listItem.push(item)

    this.resetInputName();
  }

  resetInputName(){
    this.item = '';
  }

  riskItem(itemList: ItemList){
    itemList.isBuy = !itemList.isBuy;
  }

  clearList(){
    this.listItem = []
  }
}
