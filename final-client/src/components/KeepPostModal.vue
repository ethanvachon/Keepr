<template>
  <div class="modal fade"
       id="keepPost"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Create Keep
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createKeep()">
            <input class="m-2" type="text" maxlength="14" v-model="state.newKeep.name" placeholder="name">
            <input class="m-2" type="text" v-model="state.newKeep.description" placeholder="description">
            <input class="m-2" type="text" v-model="state.newKeep.img" placeholder="image url">
            <div class="d-flex justify-content-center">
              <button type="submit" class="btn btn-primary">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable vue/one-component-per-file */
/* eslint-disable node/no-callback-literal */
import { reactive } from 'vue'
import { keepsService } from '../services/KeepsService'
import Swal from 'sweetalert2'
export default {
  setup() {
    const state = reactive({
      newKeep: {}
    })
    return {
      state,
      imageExists(url, callback) {
        const img = new Image()
        img.onload = function() { callback(true) }
        img.onerror = function() { callback(false) }
        img.src = url
      },
      async createKeep() {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        const imageUrl = state.newKeep.img
        await this.imageExists(imageUrl, function(exists) {
          if (exists) {
            Toast.fire({
              icon: 'success',
              title: 'Keep Created'
            })
            keepsService.create(state.newKeep)
          } else {
            console.log('invalid img id')
          }
        })
        state.newKeep = {}
      }
    }
  }
}
</script>
<style scoped>
input {
  width: 96%;
}
</style>
