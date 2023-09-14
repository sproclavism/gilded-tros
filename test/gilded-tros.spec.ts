import {Item} from '../src/item';
import {GildedTros} from '../src/gilded-tros';

describe('GildedTrosTest', () => {
    const itemName = 'foo';
    const items: Item[] = [new Item(itemName, 0, 0)];
    const app: GildedTros = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].name).toEqual(itemName);
});
