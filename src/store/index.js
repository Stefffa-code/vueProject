import Vue from 'vue'
import Vuex from 'vuex'
import info from './info'
import comments from './/comments'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info,
    comments,
    idPostView: 1,
    showMenu: false,
    search: '',
  },
  mutations: {
    chengeActive(state, params){
      const index = state.info.data.findIndex(item => item.id === params.id); 
      switch(params.field){
        case 'subscribe' :           
          state.info.data[index].subscribe= state.info.data[index].subscribe  ? false : true; 
          break;
        case 'like' : 
          state.info.data[index].likes = state.info.data[index].likes  ? false : true;
          break;          
        case 'library' : 
          state.info.data[index].library = state.info.data[index].library  ? false : true; 
          break;
        case 'postponed' : 
          state.info.data[index].postponed = state.info.data[index].postponed  ? false : true; 
          break;         
      } 
    },

    chengeIdPostView(state, id){
      state.idPostView = id;
    },
    setSearchDate( state, val){
      state.search = val;
      console.log(state.search);
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {

    getPost: state => {
      return state.info.data.find(
        item => item.id == state.idPostView
      );
    },

      //Search mas
    filteredList: state => {
        let txt = state.search.toLowerCase();
        console.log('txt ' + txt);
        let obj = state.info.data;
        let mas = [];
        for(let item of obj){
          if (item.title.toLowerCase().indexOf(txt) != -1) mas.push(item);
        }
        console.log('mas ' + mas);
        return mas;
        // return state.info.date.filter(post => {
        //   return post.title.toLowerCase().includes(txt)
        // })
    },

    // комментарии к посту
    getPostComments: state => {
      return state.comments.data.find(
        item => item.id == state.idPostView
      )
    },

    // возвращаем список постов
    postsInHome: state => {
      return state.info.data.filter(i => i.home);
    },
    postsInLibrary: state => {
      return state.info.data.filter(i => i.library);
    },
    postsInTrend: state => {
      return state.info.data.filter(i => i.trend);
    },
    postsInSubscribe: state => {
      return state.info.data.filter(i => i.subscribe);
    },
    postsInHistory: state => {
      return state.info.data.filter(i => i.history);
    },
    postsInLikes: state => {
      return state.info.data.filter(i => i.likes);
    },
    postsInPostponed: state => {
      return state.info.data.filter(i => i.postponed);
    }
  },



})
