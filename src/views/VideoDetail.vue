<template>
  <div class="videodetail">
<!-- 	  <div>
	       <video-player class="video-player vjs-custom-skin" 
	                  ref="videoPlayer" 
	                  :playsinline="true" 
	                  :options="playerOptions">
	            </video-player>
	    </div> -->
	<!-- https://www.cnblogs.com/wwj007/p/13503015.html   video-player解决方法-->
	  
  <div class="demo-image__placeholder">
     <div class="block">
       <video-player class="video-player vjs-custom-skin"
                  ref="videoPlayer" 
                  :playsinline="true" 
                  :options="playerOptions">
        </video-player>
	</div>
    <div class="leftfont">
	   <h4>标题:{{videodata.videoName}}</h4>
	   <p>简介:{{videodata.videoContent}}</p>
    </div>
   </div>
   
	<LikeVideo v-on:tofather="sonemit" />
	
  </div>
  
</template>

<style>

	
	.videodetail{
		margin-top: 10px;
	}
	.leftfont{
		float: left;
		text-align: left;
	}
	
</style>


<!-- <script>
  export default {
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
  }
</script> -->

<script>
	import LikeVideo from "@/components/LikeVideo.vue";
	
	import Axios from 'axios';
    export default {
      data() {
        return {
		  id:"id",
          playerOptions: {
            playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
            autoplay: false, // 如果为true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 是否视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
              type: "video/mp4", // 类型
              src: '' // url地址
            }],
            poster: '', // 封面地址
            notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true, // 当前时间和持续时间的分隔符
              durationDisplay: true, // 显示持续时间
              remainingTimeDisplay: false, // 是否显示剩余时间功能
              fullscreenToggle: true // 是否显示全屏按钮
            }
          },
		  videodata:{
			  list:[]
		  }
        }
      },
	  methods:{
		   getData(id){
		     //请求数据
		     var api = '/api/getOneVideo?id='+id;
		     Axios.get(api).then((response)=> {
		       console.log(response);
			   this.videodata = response.data.data
		       this.playerOptions.sources[0].src =this.getVidoePre(response.data.data.videoSrc);
			   this.playerOptions.poster =this.getImgPre(response.data.data.videoImg);
			  
			  console.log(response.data.data.videoSrc);
			   console.log(response.data.data.videoImg); 
			   
		     console.log(this.playerOptions.sources.src);
			  console.log(this.playerOptions.poster);
			 }).catch((error)=>{
		       console.log(error);
		     })
		   },
		   getImgPre(abc){
		   	 return '/api/image/'+abc
		   },
		   getVidoePre(abc){
		   	 return '/api/video/'+abc
		   },
		   sonemit(id){
			    console.log("sonemit:"+id);
				
				this.$router.push({
				          path: `/videodetail/${id}`,
				})
				 this.getData(id);
		   }
	  },
	  mounted:function () {   //自动触发写入的函数
				 
	             this.getData(this.$route.params.id);
	         },
	  components: {
	  	LikeVideo,
	  },
    }

</script>



