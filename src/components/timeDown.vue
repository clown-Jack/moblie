<template>
  <div class="time-containt">
    <span class="moveTime">{{ hours }}</span>
    <em>:</em>
    <span class="moveTime">{{ minutes }}</span>
    <em>:</em>
    <span class="moveTime moveTimeSecoend">{{ seconds }}</span>
  </div>
</template>
<script>
import { toDo } from "@/utils/common.js";
export default {
  data() {
    return {
      hours: toDo(0),
      minutes: toDo(0),
      seconds: toDo(0),
      timer: null
    };
  },
  mounted() {
    this.goTime();
    this.timer = setInterval(() => {
      this.goTime();
    }, 1000);
  },
  methods: {
    goTime() {
      let diffNow = new Date("2020/07/04").getTime() - new Date().getTime();
      this.hours = toDo(Math.floor((diffNow / (1000 * 60 * 60)) % 24));
      this.minutes = toDo(Math.floor((diffNow / (1000 * 60)) % 60));
      this.seconds = toDo(Math.floor((diffNow / 1000) % 60));
      if (this.hours == 0) {
        clearInterval(this.timer);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.time-containt{
  overflow: hidden;
  color: #e80404;
}
.moveTime{
   width: 100px;
  height: 100px;
  position: relative;
}
.moveTimeSecoend {
  animation: move 1s;
  animation-iteration-count: infinite;
}
@keyframes move {
  from {
    top: -20px;
  }
  to {
    top: 0px;
  }
}
</style>
