<template>
  <div class="card">
    <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Vault', params: {id: vault.id}}">
      <div class="card-body">
        <h4 class="card-title">
          {{ vault.name }}
        </h4>
        <p class="card-text" v-if="state.keeps">
          Keeps: {{ state.keeps.length }}
        </p>
      </div>
    </router-link>
  </div>
</template>
<script>
import { onMounted, reactive } from 'vue'
import { vaultsService } from '../services/VaultsService'
export default {
  props: ['vault'],
  setup(props) {
    const state = reactive({
      keeps: null
    })
    onMounted(async() => {
      state.keeps = await vaultsService.returnKeepsByVault(props.vault.id)
    })
    return {
      state
    }
  }
}
</script>
<style scoped>
</style>
