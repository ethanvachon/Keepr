<template>
  <div class="container-fluid">
    <div class="row border-bottom mt-3" v-if="state.profile">
      <div class="col-12 d-flex justify-content-center">
        <div class="card mb-2">
          <div class="card-body">
            <div class="d-flex justify-content-around align-items-center pb-2">
              <img class="rounded-circle" :src="state.profile.picture" alt="">
              <h4 class="mb-0 pl-2 card-title">
                {{ state.profile.name }}
              </h4>
            </div>
            <div class="d-flex justify-content-around">
              <h4 class="card-title rounded p-1" :class="{'bg-dark' : state.view == 'vaults', 'text-white' : state.view == 'vaults'}" @click="state.view = 'vaults'">
                Vaults
              </h4>
              <h4 class="card-title rounded p-1" :class="{'bg-dark' : state.view == 'keeps', 'text-white' : state.view == 'keeps'}" @click="state.view = 'keeps'">
                Keeps
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="masonry" v-if="state.view == 'keeps'">
      <keeps-component :keep="keep" :page="'profile'" v-for="keep in state.keeps" :key="keep.id" />
    </div>
    <div class="row" v-if="state.view == 'vaults'">
      <div class="col-3" v-for="vault in state.vaults" :key="vault.id">
        <vaults-component :vault="vault" />
      </div>
    </div>
  </div>
</template>
<script>
import { computed, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { profilesService } from '../services/ProfilesService'
export default {
  name: 'Profile',
  setup() {
    const route = useRoute()
    const state = reactive({
      profile: computed(() => AppState.currentProfile),
      keeps: computed(() => AppState.currentKeeps),
      vaults: computed(() => AppState.currentVaults),
      view: 'keeps'
    })
    onMounted(() => {
      profilesService.getProfile(route.params.id)
      profilesService.getKeepsByProfile(route.params.id)
      profilesService.getVaultsByProfile(route.params.id)
    })
    return {
      state,
      route
    }
  }
}
</script>
<style scoped>
.masonry {
  column-count: 3;
  column-gap: 2em;
}
.rounded-circle {
  height: 6vh;
  width: auto;
}
</style>
