<template>
    <div>
        <div class="banner">轮播</div>
        <ul>
            <router-link to="/home/nowPlaying" custom v-slot="{ navigate,isActive }">
                <li @click="navigate" :class="isActive?'myActive':''">
                    <span>正在热映</span>
                </li>
            </router-link>
            <router-link to="/home/comingsoon" custom v-slot="{ navigate,isActive }">
                <li @click="navigate" :class="isActive?'myActive':''">
                    <span>即将上映</span>
                </li>
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
.banner{
    width: 100%;
    height: 200px;
    background: skyblue;
    color: white;
    text-align: center;
    line-height: 200px;
}

ul{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    position: sticky;
    top: 0;
    background: white;
    li{
        flex: 1;
        text-align: center;
        span{
            padding-bottom: 5px;
        }
    }
}

.myActive{
    color: orange;
    span{
        border-bottom: 2px solid orange;
    }
}
</style>
