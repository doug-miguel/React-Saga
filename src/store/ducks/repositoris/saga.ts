import { put, call }from 'redux-saga/effects'
import api from '../../../service/api';

import { loadSucces, loadFailure } from './actions';

export function* load():any {
  try {
      const response = yield call(api.get, 'users/diego3g/repos')

      yield put(loadSucces(response.data));
    } catch (err) {
      yield put(loadFailure());  
    }
}