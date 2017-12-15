export default{
    change(state){//state是vue注入的 不需要我们传  可以直接使用
        console.log(3);
        state.myCount ="我被改变了";
    },
    changenow(state,preload){
        state.nowusername=preload;
    },
    changetransition(state,preload){
        state.transitionname = preload;
    },

    //日记信息赋值
    getdiary(state,preload){
        if(preload.url=="/diary"){
            state.diarydata=preload;
            state.datatime = preload.yy;
        }
        if(preload.url=="/new"){
            state.newdata=preload;
            state.newdatatime = preload.xx;
         }
         console.log(state.datatime);
    },
     
    changetopnow(state,preload){
        state.topnow = preload;
    },
    //获得日期
    getdatetime(state,preload){

       

    },
    //两位不足补全
    getdbNum(item){
        if(item<10){
            return "0"+item;
        }
    }
}