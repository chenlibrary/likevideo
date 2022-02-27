<template>
	<el-row :gutter="20">
	  <el-col :span="4"><div class="grid-content"><el-button id="iconbutton" icon="el-icon-s-home" v-on:click="gohome()"></el-button></div></el-col>
	  <el-col :span="20">
				<div class="grid-content bg-purple">
					<el-input placeholder="请输入内容" v-model="inputsearch" class="input-with-select">
					    <el-button slot="append" icon="el-icon-search" v-on:click="searchvideo()"></el-button>
					  </el-input>
				</div>
				</el-col>
	</el-row>
</template>

<script>
	export default {
	  data(){
				return{
					id:"id",
					inputsearch:''
				}
			},
		methods:{
		      searchvideo(){
				  this.insurance(this.inputsearch);
			  },
			  insurance(search) {
			         //直接调用$router.push 实现携带参数的跳转
			  		console.log(search);
			        this.$router.push({
			            name: 'videosearch',
			            params: {
			               search: search
			            }
			         })
			  },
			  gohome(){
				  this.$router.push({
				            path: `/`,
				  })
			  }
			  
		    },
	}
	
</script>

<style>
	.tagcard{
		margin: 10px 0px;
	}
	
	#iconbutton{
		border:none
	}
</style>
