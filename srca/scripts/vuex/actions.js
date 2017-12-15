
import axios from "axios";
import router from "../views/router";
axios.defaults.baseURL="http://120.78.133.84:7760";
import { MessageBox,Toast } from 'mint-ui';
export default {
    change({commit}){   //commit也是vue注入的不需要我们传值
        console.log(2);
        commit("change");
    },
    changenow({commit},preload){
        commit("changenow",preload);
    },
    changetransition({commit},preload){
        commit("changetransition",preload);
    },
    //获得日记信息

    getdata({commit},preload){
        axios.post(preload.url,{
            username:preload.name
        }).then(function (response) {
            console.log(response);
            console.log(response.data);
            
            var xx =[];
            var yy = [];
            console.log(aa);
            response.data.forEach((item,i)=>{
            	var aa = {};
                console.log(i)
             var da = new Date(item.time);
            //  console.log(da);
             
             var day = da.getDate();
        
             var hour = da.getHours();
             // hour=getdbNum(hour);
             if(hour<10){
                 hour="0"+hour;
             }
             var minutes  = da.getMinutes();
             // minutes = getdbNum(minutes);
             if(minutes<10){
                 minutes="0"+minutes;
             }
             var year = da.getFullYear();
             var month = da.getMonth()+1;
             // month = getdbNum(month);
             if(month<10){
                 mounth="0"+month;
             }
             var week = da.getDay(); 
             switch(week){
                 case 0:
                     week="周天";
                     break;
                  case 1:
                     week="周一";
                     break;
                  case 2:
                     week="周二";
                     break;
                 case 3:
                     week="周三";
                     break;
                 case 4:
                     week="周四";
                     break; 
                 case 5:
                     week="周五";
                     break; 
                  case 6:
                     week="周六";
                     break;
                 default:
                     break;
                  
             }
             aa.yearandmonth=year+"."+month;
             aa.day = day;
             aa.week = week;
             console.log(week);
             aa.time = hour+":"+minutes;
             console.log(aa.day);
             if(preload.url=="/new"){
                 
                xx.push(aa);
             }else{
                console.log(1);
                yy.push(aa);
                
                // console.log(state.datatime);
             }
            
            
             
            });
            console.log(yy);
            response.data.xx=xx;
            response.data.yy=yy;
            response.data.url = preload.url;
            commit("getdiary",response.data);
        },function(error){
             MessageBox('提示', '服务器出错了');
        })
         
    },


    //发布动态
    mitdata({commit},preload){
        axios.post(preload.url,{
            username:preload.username,
            content:preload.content,
        }).then((response)=>{
            console.log(preload.username);
            console.log(response.data)
            if(response.data==1){
                let instance = Toast('发布成功！');
                setTimeout(() => {
                  instance.close();
                  router.push({name:"main"})
                }, 2000);
            }else if(response.data==2){
                let instance = Toast('你已经发布过同样的内容！');
                setTimeout(() => {
                  instance.close();
                 
                }, 2000);
            }
        },(err)=>{
            console.log("服务器出错了！")
        })
    },

    changetopnow({commit},preload){
        commit("changetopnow",preload);
    },

  
}