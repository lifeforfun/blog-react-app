import {adminLogin} from '@/services/admin';

export default {

  namespace: 'adminUser',

  state: {
    listData: {
      lists: [],
      pageNum: 1,
      total: 0,
      pageSize: 10,
    },
  },

  effects: {
    * fetchUserList({payload}, {call, put}) {  // eslint-disable-line
      const response = yield call(adminLogin, payload);
      yield put({
        type: 'userListData',
        payload: response,
      });
    },
  },

  reducers: {
    userListData(state, action) {
      return {...state, ...action.payload.data};
    },
  },

};
