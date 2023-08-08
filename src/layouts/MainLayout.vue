<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'MainLayout',
  components: {},
  setup() {
    const router = useRouter();

    router.push({ name: 'app_three' });

    return {};
  },
});
</script>
