import * as constants from '../constants';

// TODO create types for this.
export interface ItemsStore {
    readonly items: object;
}

export type FetchItemsAction = Readonly<ReturnType<typeof fetchItems>>;

// tslint:disable-next-line:typedef
export const fetchItems = () => (
    {
        type: constants.FETCH_ITEMS,
    }
);

const buildDefaultStore = (): ItemsStore => ({
    items: [],
});

export const itemsReducer = (store: ItemsStore = buildDefaultStore(), action?: FetchItemsAction): ItemsStore => {
    return store;
};
