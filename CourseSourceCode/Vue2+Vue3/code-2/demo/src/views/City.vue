<template>
  <div>
    <div class="header">
      <!-- 标题栏 -->
      <van-nav-bar @click-left="toHome">
        <template #title>
          <span>当前城市 - </span>
        </template>
        <template #left>
          <van-icon name="cross" color="black" size="18" />
        </template>
      </van-nav-bar>
      <!-- 搜索区域 -->
      <form action="/">
        <van-search v-model="searchKey"
          placeholder="请输入搜索关键词"
          @input="handleChange"
        />
      </form>
    </div>
    <!-- 搜索的相关结果 -->
    <van-list>
      <van-cell v-for="city in targetData" :key="city.cityId" :title="city.name"
      @click="handleChangeCity(city)"/>
    </van-list>
    <!-- 全部城市 -->
    <van-index-bar v-if="!targetData.length" :index-list="indexList"
       @select ="showTip" :sticky="true" :sticky-offset-top="100">
      <template v-for="data in citiesData">
        <van-index-anchor :index="data.type" :key="data.type" style="background: #f4f4f4" />
        <template v-for="city in data.list">
          <van-cell :title="city.name" :key="city.cityId" @click="handleChangeCity(city)"/>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script>
import http from '@/util/http'
import mixinsObj from '@/util/mixinsObj'
import { Toast } from 'vant'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'City',
  mixins: [mixinsObj],
  data () {
    return {
      sourceData: [],
      citiesData: [],
      indexList: [],
      searchKey: '',
      targetData: []
    }
  },
  computed: {
    ...mapState(['cityId', 'cityName', 'cinemasList'])
  },
  mounted () {
    http({
      url: '/gateway?k=3908426',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then((result) => {
      this.sourceData = result.data.data.cities
      // 分类后的城市信息
      this.citiesData = this.dealCitiesData(result.data.data.cities)
      // 索引列表
      this.indexList = this.citiesData.map(item => item.type)
    })
  },
  methods: {
    ...mapMutations(['changeCityId', 'changeCityName', 'changeCinemasList']),
    ...mapActions(['getCinemasList']),
    handleChange () {
      if (this.searchKey === '') {
        this.targetData = []
        return
      }
      this.targetData = this.sourceData.filter((data) => {
        return data.name.includes(this.searchKey) ||
               data.pinyin.includes(this.searchKey.toLowerCase())
      })
    },
    dealCitiesData (cityList) {
      const resultData = []
      // 动态生成26个字母
      const letterList = []
      for (let i = 65; i <= 90; i++) {
        letterList.push(String.fromCharCode(i))
      }

      // 根据pingyin字段首字符判断所属类型
      letterList.forEach(letter => {
        const newList = cityList.filter(item => {
          return item.pinyin.substring(0, 1).toUpperCase() === letter
        })

        if (newList.length > 0) {
          resultData.push({
            type: letter,
            list: newList
          })
        }
      })

      return resultData
    },
    showTip (index) {
      Toast(index)
    },
    handleChangeCity (city) {
      this.changeCityId(city.cityId)
      this.changeCityName(city.name)
      this.changeCinemasList([])

      this.toHome()
    },
    toHome () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  position:sticky;
  top: 0;
  z-index: 100;
}
form{
  border-bottom: 1px solid #eeeeee;
}
</style>
