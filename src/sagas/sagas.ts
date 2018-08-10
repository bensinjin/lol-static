// tslint:disable:no-expression-statement
import { put, takeEvery, ForkEffect } from 'redux-saga/effects';
import * as constants from '../application/constants';

export function* watchFetchItems(): IterableIterator<ForkEffect> {
    yield takeEvery(constants.FETCH_ITEMS, incrementAsync)
}

export function* fetch(): any {
    console.warn('Hello Sagas!');
}
