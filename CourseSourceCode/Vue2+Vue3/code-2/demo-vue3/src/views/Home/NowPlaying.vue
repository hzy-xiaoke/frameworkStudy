<template>
  <div>
    <ul>
      <li
        v-for="film in filmList"
        :key="film.filmId"
        @click="handleDetails(film.filmId)"
      >
        <div class="filmImg">
          <img :src="film.poster" alt="" />
        </div>
        <div class="filmInfo">
          <h4>
            {{ film.name }} <span>{{ film.filmType.name }}</span>
          </h4>
          <p class="filmGrade">
            观众评分 <span>{{ film.grade }}</span>
          </p>
          <p class="filmActor">主演：{{ handleActors(film.actors) }}</p>
          <p>{{ film.nation }} | {{ film.runtime }}分钟</p>
        </div>
        <div class="buyTicke">
          <button>购票</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { onMounted, reactive, ref, toRefs } from 'vue'
export default {
  // 函数写法(hooks写法)
  setup () {
    const obj = reactive({
      filmList: []
    })

    const handleDetails = () => {}

    const handleActors = (actors) => {
      return actors.map((actor) => actor.name).join(' ')
    }

    onMounted(() => {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9129706',
        headers: {
          'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"16347397853235755346362369"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((result) => {
        console.log(result.data.data.films)
        obj.filmList = result.data.data.films
      })
    })

    return {
      ...toRefs(obj),
      handleDetails,
      handleActors
    }
  }
  // 类写法
  //   data() {
  //     return {
  //       filmList: [],
  //     };
  //   },
  //   methods: {
  //     handleActors(actors) {
  //       return actors.map((actor) => actor.name).join(" ")
  //     },
  //     handleDetails(filmId) {
  //       this.$router.push(`/detail/${filmId}`)
  //     },
  //   },
  //   mounted() {
  //     axios({
  //       url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9129706",
  //       headers: {
  //         "X-Client-Info":
  //           '{"a":"3000","ch":"1002","v":"5.0.4","e":"16347397853235755346362369"}',
  //         "X-Host": "mall.film-ticket.film.list",
  //       },
  //     }).then((result) => {
  //       console.log(result.data.data.films)
  //       this.filmList = result.data.data.films
  //     });
  //   },
}
</script>

<style lang="scss" scoped>
ul {
  li {
    padding: 15px;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    align-items: center;
    .filmImg {
      margin-right: 10px;
      img {
        width: 80px;
      }
    }
    .filmInfo {
      flex: 1;
      font-size: 13px;
      width: 200px;
      h4 {
        font-size: 16px;
        font-weight: normal;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        span {
          display: inline-block;
          font-size: 12px;
          background: #d2d6dc;
          color: white;
          padding: 0 2px;
        }
      }
      p {
        margin: 10px 0;
        color: rgba(0, 0, 0, 0.6);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .filmGrade {
        span {
          color: orange;
        }
      }
    }
    .buyTicke {
      button {
        width: 50px;
        height: 25px;
        border: none;
        border: 1px solid orange;
        color: orange;
        background: white;
        outline: none;
        font-size: 12px;
      }
    }
  }
}
</style>
