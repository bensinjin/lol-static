import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppStore } from '../../stores/app';
import { FetchItemsAction, fetchItems } from '../../stores/items';
import { Main, MainActions } from './Main';

// const mapStateToProps = (store: Store): HomePageProps => ({
//     tasks: selectRecommendedTasks(store),
//     sections: selectLearnSections(store),
//     savedTasksIdList: selectSavedTasksIdList(store),
// });

const mapDispatchToProps = (dispatch: Dispatch<AppStore>): MainActions => ({
    fetchItems: (): FetchItemsAction => dispatch(fetchItems()),
});

export const MainConnected = connect(undefined, mapDispatchToProps)(Main);
