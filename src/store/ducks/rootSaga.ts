import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from './repositoris/types';
import { load } from './repositoris/saga';

export default function* rootSaga():any {
  return yield all ([
      takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
  ])
}