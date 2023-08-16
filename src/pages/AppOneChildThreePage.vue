<template>
  <q-page class="column flex-center">
    <h1>Child - THREE</h1>
  </q-page>
</template>

<script lang="ts">
import {defineComponent, getCurrentInstance, ref} from 'vue';

export default defineComponent({
  name: 'AppOneChildThreePage',
  components: {},
  setup() {
    console.log('init setup app one, child three');

    return {};
  },
});
</script>
