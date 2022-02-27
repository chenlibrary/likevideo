<template>
  <div class="videolist">

	  
	    <!-- <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
	        <el-button slot="append" icon="el-icon-search"></el-button>
	    </el-input> -->
	  
	  
	  
	<div class="tagcard"  v-for="(item,index) in videodata.list" v-bind:key="item.id">
		<el-row  v-if="index%2==0">
			<!--   v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0" -->
		   <el-col :span="12" >
		     <el-card :body-style="{ padding: '0px' }"  >
		       <!-- <img src="http://127.0.0.1:9090/image/abc.jpg" class="image"> -->
			   <div  @click="insurance(videodata.list[index].videoId)">
				   <img :src="getImg(videodata.list[index].videoImg)" class="image" />
				   <div style="padding: 14px;" >
					<span class="fontlength">{{videodata.list[index].videoName}}</span>
					
					<!-- <span>{{index}}</span> -->
				   </div>
			   </div>
		     </el-card>
		   </el-col>
		   <el-col :span="12" v-if="(index+1)<videodata.list.length">
		     <el-card :body-style="{ padding: '0px' }">
				 <div  @click="insurance(videodata.list[index+1].videoId)">
				   <img :src="getImg(videodata.list[index+1].videoImg)"  class="image"/>
				   <div style="padding: 14px;">
					 <span class="fontlength">{{videodata.list[index+1].videoName}}</span>
					
				   </div>
			   </div>
		     </el-card>
		   </el-col>
		   
		 </el-row>
		 
		 
		 
	</div>
   
	
	<div class="block pagebottom">
	  <el-pagination
	    layout="prev, pager, next"
		@current-change="currentChange"
		:current-page="videodata.pageNum"
		:page-size="videodata.pageSize"
	    :total="videodata.total">
	  </el-pagination>
	</div>
	
  </div>
</template>

<style>
	.pagebottom{
		padding-bottom: 20px;
	}
	.fontlength{
		display: inline-block;
		width: 95%;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>

<script>
	import Axios from 'axios';
export default {
	
  data() {
    return {
		id:"id",
      videodata:{
		  
	  }
    };
  },
  methods:{
        getData(currentpage){
			
			console.log("hhhhhhh:"+this.$route.params.id);
          //请求数据
          var api = '/api/getVideo?videoType='+this.$route.params.id+'&pageNum='+currentpage;
          Axios.get(api).then((response)=> {
            console.log(response);
            this.videodata = response.data.data;
			this.total = response.data.data;
          }).catch((error)=>{
            console.log(error);
          })
        },
		getImg(abc){
			 return '/api/image/'+abc
		},
		currentChange(current){
			console.log(current);
			this.getData(current);
		},
		insurance(id) {
		       //直接调用$router.push 实现携带参数的跳转
							  console.log(id);
		        this.$router.push({
		          path: `/videodetail/${id}`,
		})
		},
  	  
      },
	mounted:function () {   //自动触发写入的函数
            this.getData(0);
    },
	// computed:{
	// 	imgurl:function (){
			
	// 		return require('/api/image/abc.jpg')
	// 	}
	// }
  
}
</script>
