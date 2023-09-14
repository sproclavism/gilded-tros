import type {Item} from "./item";

const MIN_QUALITY = 0;
const MAX_QUALITY = 50;
const LEGENDARY_QUALITY = 80;

const ITEMS = {
    WINE: ['Good Wine'],
    BACKSTAGE_PASS: ['Backstage passes for Re:Factor', 'Backstage passes for HAXX'],
    SMELLY: ['Duplicate Code', 'Long Methods', 'Ugly Variable Names'],
};

const updateSellIn = (item: Item) => {
    if (!isLegendaryItem(item)) {
        item.sellIn = item.sellIn - 1;
    }
};

const updateQuality = (item: Item) => {
    const name = item.name;
    if (ITEMS.WINE.includes(name)) {
        updateWineQuality(item);
    } else if (ITEMS.BACKSTAGE_PASS.includes(name)) {
        updateBackstagePassQuality(item);
    } else if (isLegendaryItem(item)) {
        return;
    } else if (ITEMS.SMELLY.includes(name)) {
        decrementQuality(item, 2);
    } else {
        decrementQuality(item, 1);
    }
};

const isLegendaryItem = (item: Item) => {
    return item.quality === LEGENDARY_QUALITY;
};

const updateWineQuality = (item: Item) => {
    item.sellIn > 0
        ? incrementQuality(item, 1)
        : incrementQuality(item, 2);
}

const updateBackstagePassQuality = (item: Item) => {
    const sellIn = item.sellIn;
    if (sellIn > 10) {
        incrementQuality(item, 1);
    } else if (sellIn > 5) {
        incrementQuality(item, 2);
    } else if (sellIn > 0) {
        incrementQuality(item, 3);
    } else { // sellIn <= 0
        item.quality = MIN_QUALITY;
    }
}

const incrementQuality = (item: Item, increment: number) => {
    item.quality = item.quality + increment < MAX_QUALITY
        ? item.quality + increment
        : MAX_QUALITY;
};

const decrementQuality = (item: Item, decrement: number) => {
    if (item.sellIn <= 0) {
        decrement = decrement * 2;
    }

    item.quality = item.quality - decrement > MIN_QUALITY
        ? item.quality - decrement
        : MIN_QUALITY;
}

export {
    updateSellIn,
    updateQuality,
};
