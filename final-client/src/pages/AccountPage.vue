<template>
  <div class="container-fluid">
    <div v-if="state.loaded == false" class="loader"></div>
    <div v-if="state.loaded == true">
      <div class="row border-bottom mt-3" v-if="state.account">
        <div class="col-12 d-flex justify-content-center">
          <!-- <img :src="state.account.picture" alt="">
        <h1>{{ state.account.name }}</h1> -->
          <div class="card mb-2">
            <div class="card-body">
              <div class="d-flex justify-content-around align-items-center pb-2">
                <img class="rounded-circle" :src="state.account.picture" alt="">
                <h4 class="mb-0 pl-2 card-title">
                  {{ state.account.name }}
                </h4>
              </div>
              <div class="d-flex justify-content-around">
                <h4 class="card-title rounded p-1" @click="state.view = 'vaults'">
                  Vaults
                </h4>
                <h4 class="card-title rounded p-1" @click="state.view = 'keeps'">
                  Keeps
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" v-if="state.view == 'keeps'">
        <div class="col-12">
          <div class="d-flex mt-2">
            <button class="btn btn-primary ml-2" data-toggle="modal" data-target="#keepPost">
              Add Keep +
            </button>
          </div>
          <keep-post-modal />
        </div>
      </div>
      <div class="masonry mt-2" v-if="state.view == 'keeps'">
        <keeps-component :keep="keep" :page="'account'" v-for="keep in state.keeps" :key="keep.id" />
      </div>
      <div class="row" v-if="state.view == 'vaults'">
        <div class="col-12">
          <div class="d-flex mt-2">
            <button class="btn btn-primary ml-2" data-toggle="modal" data-target="#vaultPost">
              Add Vault +
            </button>
          </div>
          <vault-post-modal />
        </div>
      </div>
      <div class="row mt-2" v-if="state.view == 'vaults'">
        <div class="col-3" v-for="vault in state.vaults" :key="vault.id">
          <vaults-component :vault="vault" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, reactive, onMounted } from 'vue'
import { AppState } from '../AppState'
import { profilesService } from '../services/ProfilesService'
import { accountService } from '../services/AccountService'
export default {
  name: 'Account',
  setup() {
    const state = reactive({
      account: computed(() => AppState.account),
      keeps: computed(() => AppState.currentKeeps),
      vaults: computed(() => AppState.currentVaults),
      view: 'keeps',
      loaded: false
    })
    onMounted(async() => {
      await accountService.getAccount()
      await profilesService.getKeepsByProfile(state.account.id)
      state.loaded = true
      await accountService.getVaultsByAccount()
    })
    return {
      state
    }
  }
}
</script>
<style scoped>
.loader {
  text-align: center;
  margin-top: 20vh;
  margin-left: 47vw;
}
.masonry {
  column-count: 3;
  column-gap: 2em;
}
.rounded-circle {
  height: 6vh;
  width: auto;
}
.card-title {
  cursor: pointer;
}
.card-title:hover {
  background-color: rgb(219, 219, 219);
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
