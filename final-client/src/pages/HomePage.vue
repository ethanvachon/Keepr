<template>
  <div>
    <div v-if="state.loaded == false" class="loader"></div>
    <div class="container-fluid" v-if="state.loaded">
      <div class="masonry mt-3">
        <keeps-component v-for="keep in state.keeps" :key="keep.id" :keep="keep" />
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'
import { keepsService } from '../services/KeepsService'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      keeps: computed(() => AppState.currentKeeps),
      loaded: false
    })
    onMounted(async() => {
      await keepsService.getKeeps()
      state.loaded = true
    })
    return {
      state
    }
  }
}
</script>

<style scoped>
.masonry {
  column-count: 3;
  column-gap: 2em;
}
.loader {
  text-align: center;
  margin-top: 20vh;
  margin-left: 47vw;
}
.loader {
  border: 16px solid #c2c2c2;
  border-top: 16px solid #2a93ad;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
