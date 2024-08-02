<template>
  <v-card class="mx-auto d-flex flex-column overflow-auto fill-height">
    <v-list lines="one" class="overflow-y-auto overflow-x-hidden">
      <v-list-item
        v-for="(link, idx) in links"
        :key="idx"
        @click="getSelected(idx)"
        :title="link.title"
        slim
        :variant="outlined ? 'outlined' : 'flat'"
        color="#fff"
      >
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script setup lang="ts">
import { store } from "@eodash/eodash";
import { storeToRefs } from "pinia";
import { computed } from "vue";

defineProps({
  outlined: Boolean,
});

const { stac, selectedStac } = storeToRefs(store.stac.useSTAcStore());
const { loadSelectedSTAC } = store.stac.useSTAcStore();

const links = computed(() => stac.value.filter((link) => link?.rel == "child"));

const getSelected = async (idx) => {
  const link = links.value![idx];
  await loadSelectedSTAC(link.href);
  console.log(selectedStac.value);
};
</script>
