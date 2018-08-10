import { combineReducers } from 'redux';
import { itemsReducer, ItemsStore } from './items';

export interface AppStore {
    readonly items: ItemsStore;
}

export const appReducer = combineReducers<AppStore>({
    items: itemsReducer,
});
