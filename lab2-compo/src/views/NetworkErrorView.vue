<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="networkError">
    <h1>Uh-Oh!</h1>
    <h3>
      It looks like you're experiencing some network issue, please take a breath and
      <a href="#" @click.prevent="router.go(-1)">click here</a> to try again.
    </h3>
  </div>
</template>
