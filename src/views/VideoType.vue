<template>
	<div id="paper" class="videotype" >
		<div v-for="item in datatag" v-bind:key="item.id">
			
			<el-row >
				 
			  <el-col :span="24"><div class="grid-content bg-purple-dark"><div class="divfont">{{item.videotypeName}}</div></div></el-col>
			</el-row>
			<el-row :gutter="20" >
			  <el-col :span="6" v-for="arr in item.sontype" v-bind:key="arr.id"><div class="grid-content bg-purple" ><div class="divfont" @click="insurance(arr.videotypeId)">{{arr.videotypeName}}</div></div></el-col>				
			</el-row>
		</div>
	</div>
	
</template>

<script>
	import Axios from 'axios';
	
	  export default {
	    data(){
			return{
				id:"id",
				datatag:{
				}
			}
		},
		methods:{
		      getData(){
		        //请求数据
		        var api = '/api/getType';
		        Axios.get(api).then((response)=> {
		          console.log(response);
		          this.datatag = response.data.data;
		        }).catch((error)=>{
		          console.log(error);
		        })
		      },
			  insurance(id) {
			         //直接调用$router.push 实现携带参数的跳转
					  console.log(id);
			          this.$router.push({
			            path: `/videolist/${id}`,
			  })
			  },
			  
		    },
		 mounted:function () {   //自动触发写入的函数
		            this.getData();
		        }
	  };
</script>

<style>
	 .el-row {
	    margin-bottom: 20px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
	  .el-col {
	    border-radius: 4px;
	  }
	  .bg-purple-dark {
	    background: #99a9bf;
	  }
	  .bg-purple {
	    background: #d3dce6;
	  }
	  .bg-purple-light {
	    background: #e5e9f2;
	  }
	  .grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	  }
	  .row-bg {
	    padding: 10px 0;
	    background-color: #f9fafc;
	  }
	  .divfont{
		  line-height: 36px;
	  }

</style>
