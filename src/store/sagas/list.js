import { call, put } from 'redux-saga/effects';
import { services } from '../../services';
import { Creators as ListActions } from '../action/list';

const genericImg = 'https://content.paodeacucar.com/wp-content/uploads/2019/06/8-dicas-%C3%BAteis-2.jpg';

export function* getImageRequest(action){
  try {
    const img = yield call(services.getImages, action.product.product);
    yield put(ListActions.getImageSuccess(action.product, img));
  }catch(err){
    console.log(err);
    yield put(ListActions.getImageFailure(action.product, genericImg))
  }
}