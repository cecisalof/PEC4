// article-item.component.ts

import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

interface Article extends ArticleWithId {
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
}

interface ArticleWithId {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
}

interface ArticleQuantityChange {
  article: ArticleWithId;
  quantity: number;
}

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ArticleItemComponent {
  @Input() article: Article = {
    id: 0,
    name: '',
    imageUrl: '',
    price: 0,
    isOnSale: false,
    quantityInCart: 0,
  };

  @Output() quantityChange = new EventEmitter<ArticleQuantityChange>();
  @Output() increment = new EventEmitter<ArticleWithId>();
  @Output() decrement = new EventEmitter<ArticleWithId>();

  // incrementQuantity() {
  //   this.article.quantityInCart++;
  //   this.emitQuantityChange();
  // }

  // decrementQuantity() {
  //   if (this.article.quantityInCart > 0) {
  //     this.article.quantityInCart--;
  //     this.emitQuantityChange();
  //   }
  // }
  incrementQuantity() {
    this.increment.emit(this.article);
  }

  decrementQuantity() {
    this.decrement.emit(this.article);
  }

  private emitQuantityChange() {
    const change: ArticleQuantityChange = {
      article: this.article,
      quantity: this.article.quantityInCart,
    };
    this.quantityChange.emit(change);
  }

  isAvailableForSale() {
    return this.article.isOnSale;
  }

  isQuantity() {
    return this.article.quantityInCart > 0;
  }
}


