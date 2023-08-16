<template>
  <q-page class="column flex-center">
    <h1>Child - ONE</h1>
    <q-input v-model="inputModel" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, Ref, computed } from 'vue';

export default defineComponent({
  name: 'AppOneChildOnePage',
  components: {},
  setup() {
    console.log('init setup app one, child one');

    const input = ref('');

    const inputModel = computed({
      get: () => {
        return input.value;
      },
      set: (value) => {
        console.log('set input', value);
        input.value = value;
      },
    });

    onBeforeMount(() => {
      console.log('onBeforeMount: app one, child one');
      // input = ref('');
    });

    return {
      inputModel,
    };
  },
});
</script>
