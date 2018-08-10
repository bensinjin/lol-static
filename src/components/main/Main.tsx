import React from 'react';
import { Text, View } from 'react-native';
import { FetchItemsAction } from '../../stores/items';

export interface MainActions {
    readonly fetchItems: () => FetchItemsAction;
}

export const Main: React.StatelessComponent = (): JSX.Element => (
    <View><Text>Here</Text></View>
);