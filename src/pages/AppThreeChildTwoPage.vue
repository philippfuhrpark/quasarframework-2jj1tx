<template>
  <q-page class="column flex-center">
    <h1>Child - TWO</h1>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AppThreeChildTwoPage',
  components: {},
  setup() {
    console.log('init setup app three, child two');
    return {};
  },
});
</script>
