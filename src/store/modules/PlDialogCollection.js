import * as types from '../mutation-types';

export default {
  state: {
    categoryDialog: false,
    bookDialog: false,
    progressDialog: false,
    deleteCatDialog: false,
    bookInfo: [],
    progressInfo: [],
    categoryInfo: [],
  },
  mutations: {
    // 将dialog状态全部reset为false,fadeOut reset为false,msg reset为[]
    [types.HIDE_DIALOG](state) {
      state.categoryDialog = false;
      state.bookDialog = false;
      state.progressDialog = false;
      state.deleteCatDialog = false;
      state.bookInfo = [];
      state.categoryInfo = [];
      state.progressInfo = [];
    },
    [types.SHOW_CATEGORY_DIALOG](state) {
      state.categoryDialog = true;
    },
    [types.SHOW_BOOK_DIALOG](state) {
      state.bookDialog = true;
    },
    [types.SHOW_PROGRESS_DIALOG](state) {
      state.progressDialog = true;
    },
    [types.SHOW_DELETE_CATEGORY_DIALOG](state) {
      state.deleteCatDialog = true;
    },
    [types.ADD_BOOK_INFO](state, msg) {
      state.bookInfo = msg;
    },
    [types.ADD_PROGRESS_INFO](state, msg) {
      state.progressInfo = msg;
    },
    [types.ADD_CATEGORY_INFO](state, msg) {
      state.categoryInfo = msg;
    },
  },
  actions: {
    showCategoryDialog({ commit }) {
      commit(types.SHOW_CATEGORY_DIALOG);
    },
    showBookDialog({ commit }) {
      commit(types.SHOW_BOOK_DIALOG);
    },
    showDeleteCategoryDialog({ commit }, index) {
      commit(types.SHOW_DELETE_CATEGORY_DIALOG);
      commit(types.SET_DELETE_CATEGORY_INDEX, index);
    },
    showProgressDialog({ commit }, index) {
      commit(types.SET_EDIT_BOOK_INDEX, index);
      commit(types.SHOW_PROGRESS_DIALOG);
    },
    addBookInfo({ commit }, msg) {
      commit(types.ADD_BOOK_INFO, msg);
    },
    addCategoryInfo({ commit }, msg) {
      commit(types.ADD_CATEGORY_INFO, msg);
    },
    addProgressInfo({ commit }, msg) {
      commit(types.ADD_PROGRESS_INFO, msg);
    },
    hideDialog({ commit }) {
      commit(types.HIDE_DIALOG);
    },
  },
};
