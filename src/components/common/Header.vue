<template>
    <div class="">
        <el-row :gutter="20">
            <el-col :span="4">
                <el-button type="text" size="large" class="logo">我的云平台</el-button>
            </el-col>
            <el-col :span="16">
                &nbsp;
            </el-col>
            <el-col :span="4">
                <div class="user_info">
                    <el-dropdown trigger="click" @command="handleCommand">
                        <span>
                            <img :src="logo" alt="" class="user_logo" />
                            {{username}}
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="loginout">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {getUserInfo} from '../../api/api'
export default {
    data(){
        return {
            username:'',
            logo:''
        }
    },
    created(){
        this.getUserInfo()
    },
    methods:{
        async getUserInfo(){
            const result = await getUserInfo()
            this.username = result.data.userInfo.name
            this.logo = result.data.userInfo.avatar
        },
        handleCommand(command){
            if(command === 'loginout'){
                this.$confirm('确认退出吗?', '提示', {
				}).then(() => {
					this.$router.push('/login')
				}).catch(() => {

				})

            }
        }
    }
}
</script>

<style lang="scss">
    .logo{font-size: 30px;}
    .user_info{
        line-height: 52px;
        font-size: 0;
    }
    .user_info .user_logo{
        width:40px;
        height: 40px;
        border-radius:50%;
        vertical-align: middle;
    }
</style>
