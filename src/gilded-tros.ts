import {Item} from './item';
import {updateSellIn, updateQuality} from './itemHelper';

export class GildedTros {

    constructor(public items: Array<Item>) {

    }

    public updateQuality(): void {
        for (const item of this.items) {
            updateQuality(item);
            updateSellIn(item);
        }
    }

}
