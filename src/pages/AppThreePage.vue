<template>
  <q-page class="column flex-center">
    <h1>App Three</h1>
    <q-tabs
      v-model="activeTabModel"
      active-color="primary"
      dense
      no-caps
      inline-label
    >
      <q-tab
        v-for="p in tabsModel"
        :key="p.routeName"
        :name="p.routeName"
        :label="p.label"
        @click="routeTab(p)"
        style="height: 50px"
      />
    </q-tabs>

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue';
import { BaseNavigationRecord } from '../model/BaseNavigationRecord';

import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'AppThreePage',
  components: {},
  setup() {
    console.log('init setup appThreePage');

    const activeTabModel = ref('');

    const tabsModel = [
      {
        label: 'appChildOne',
        routeName: 'app_three_childOne',
      },
      {
        label: 'appChildTwo',
        routeName: 'app_three_childTwo',
      },
      {
        label: 'appChildThree',
        routeName: 'app_three_childThree',
      },
    ];

    const router = useRouter();

    function routeTab(tab) {
      router.push({ name: tab.routeName });
    }

    const route = useRoute();

    watch(
      () => route,
      (to) => {
        tabsModel.forEach((tab) => {
          if (to.name.includes(tab.routeName)) {
            activeTabModel.value = tab.routeName;
          }
        });
      },
      {
        flush: 'pre',
        immediate: true,
        deep: true,
      }
    );

    return {
      routeTab,
      activeTabModel,
      tabsModel,
    };
  },
});
</script>
