<template>
  <div class="about container">
    <post-component />
    <hr>
    <get-component />
    <hr>
    
  </div>
</template>

<script>
import PostComponent from '@/components/PostComponent.vue'
import GetComponent from '../components/GetComponent.vue'
export default {
  name: 'AboutView',
  components: {
    GetComponent,
    PostComponent
  }
}
</script>
