<template>
  <q-page class="column flex-center">
    <h1>Child - ONE</h1>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AppOneChildOnePage',
  components: {},
  setup() {
    console.log('init setup app one, child one');

    return {};
  },
});
</script>
