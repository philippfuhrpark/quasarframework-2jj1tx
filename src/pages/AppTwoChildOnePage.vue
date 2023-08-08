<template>
  <q-page class="column flex-center">
    <h1>Child - ONE</h1>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AppTwoChildOnePage',
  components: {},
  setup() {
    console.log('init setup app two, child one');

    return {};
  },
});
</script>
