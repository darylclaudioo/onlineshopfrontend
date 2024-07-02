import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Items } from '../models/items.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Items[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.itemsService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  deleteItem(id: number) {
    this.itemsService.deleteItem(id).subscribe(() => {
      this.loadItems();
    });
  }
}
