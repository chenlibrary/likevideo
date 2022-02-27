<template>
	<div class="likevideo">
		<p class="three"></p>

			<!-- @click="insurance(videodata.list[index].videoId)" -->
		<!-- <div  class="" v-infinite-scroll="load" style="overflow:auto" >
			<div   v-for="item in likevideodata.list" v-bind:key="item.id"  @click="onfather(item.videoId)">
			<el-row :gutter="20"   >
				
				  <el-col :span="10" >
					  <div class="grid-content bg-purple"> 
						  <el-image class="imgfit"
							  :src="require('../assets/ccc.jpg')"
							  >
						  </el-image>
					  </div>
				  </el-col>
				  <el-col :span="14"><div class="grid-content">
				  <div class="leftfont">
					 <h4>标题:{{item.videoName}}</h4>
					 <p>简介:{{item.videoContent}}</p>
				  </div>
				  </div></el-col>
				
			</el-row>
			</div>
		</div> -->
		
		
		<div  class="" v-infinite-scroll="load" style="overflow:auto" >
			<div   v-for="item in likevideodatalist" v-bind:key="item.id"  @click="onfather(item.videoId)">
			<el-row :gutter="20"   >
				
				  <el-col :span="10" >
					  <div class="grid-content bg-purple"> 
						  <el-image class="imgfit"
							  :src="require('../assets/ccc.jpg')"
							  >
						  </el-image>
					  </div>
				  </el-col>
				  <el-col :span="14"><div class="grid-content">
				  <div class="leftfont">
					 <h4>标题:{{item.videoName}}</h4>
					 <p>简介:{{item.videoContent}}</p>
				  </div>
				  </div></el-col>
				
			</el-row>
			</div>
		</div>
		
		
	</div>
	
  <!-- <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
    <li v-for="i in count"  v-bind:key="i" class="infinite-list-item">{{ i }}</li>
	
	
  </ul> -->
</template>

<style>
	.likevideo{
		float: left;
		
	}
	
	.three
	{
		border-style:solid;
		border-width:1px;
	}
	.imgfit{
		object-fit: cover;
		width: 100%;
		height:30vh;
	}

	.leftfont{
		padding-left: 10px;
		float: left;
		text-align: left;
	}
</style>

<script>
	import Axios from 'axios';
  export default {
      data() {
        return {		
          currentpage: 1,
		  likevideodata:{
		  			  
		  },
		  likevideodatalist:[],
		  nextlist:[],
        }
      },
	 
	   methods: {
		   getData(currentpage){
			console.log("getData!!!:"+currentpage);
          //请求数据
          var api = '/api/getInterrelateVideo?videoId='+this.$route.params.id+'&pageNum='+currentpage;
          Axios.get(api).then((response)=> {
            // console.log(response);
            this.likevideodata = response.data.data;
			this.likevideodatalist=response.data.data.list;
          }).catch((error)=>{
            console.log(error);
          })
        },
		getPushData(currentpage){
			
		  //请求数据
		  var api = '/api/getInterrelateVideo?videoId='+this.$route.params.id+'&pageNum='+currentpage;
		  Axios.get(api).then((response)=> {
		    // this.likevideodatalist.push(response.data.data.list);
		    this.nextlist=response.data.data.list;
			
		  }).catch((error)=>{
		    console.log(error);
		  })
		},
	        load () {
		
				if(this.likevideodata.lastPage>=this.currentpage){
				
					this.currentpage =this.currentpage+1;
					this.getPushData(this.currentpage);
					this.likevideodatalist.concat(this.nextlist);
				}else{
					console.log("到底啦");
				}
			  
	        },
			onfather(id) {
				this.resetcurrentpage();
			      console.log(id);
				  this.$emit('tofather',id);
			      console.log("faterid:"+this.$route.params.id);
			},
			resetcurrentpage(){
				this.currentpage=1;
			}
	      },
		  mounted:function () {   //自动触发写入的函数
		  
		   console.log("mounted");
		  			 this.resetcurrentpage(); 
		             this.getData(this.currentpage);
		         },
    }
</script>
