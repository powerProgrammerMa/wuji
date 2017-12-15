

import slide1 from "../../assets/images/oslide1.png"
import slide2 from "../../assets/images/oslide2.png"
// import slide3 from "../../assets/images/slide3.png"
// import slide4 from "../../assets/images/slide4.png"
import loginimg from "../../assets/images/login.png"
export default{

    swiperImg:[//广告轮播图
        {src:slide1},
        {src:slide2},
        // {src:slide3},
        // {src:slide4},
    ],
    notNextTick:true,//初始化加载 直接实例化
    swiperOption:{
        loop:false,
        autoplay:false,
        direction:"horizontal",
        pagination:".swiper-pagination"
    },
    mydata:[//我的页面信息
        {font:"iconfont icon-xiugaiziliaoqsh",txt:"修改资料"},
        {font:"iconfont icon-shengji",txt:"升级高级账户"},
        {font:"iconfont icon-xiaoxi",txt:"系统通知"},
        {font:"iconfont icon-haoping",txt:"好评鼓励"},
        {font:"iconfont icon-weibiaoti-",txt:"更多功能"},
        {font:"iconfont icon-seting",txt:"设置"},
        {font:"iconfont icon-fenxiang",txt:"分享给朋友"},
        
    ],
    username:"",
    password:"",
    loginimg,
    nowusername:"",
    transitionname:"aaa",
    passertop:["最新","最热","我的"],
    topnow:0,
    diarydata:[],//首页信息
    newdata:[],//最新的数据
    hotdata:[],//最热的数据
    datatime:[],
    newdatatime:[]
    
 
}