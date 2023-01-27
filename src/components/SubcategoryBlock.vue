<template>
  <div class="pt-10 pb-10 divider">
    <v-row>
      <v-col :cols="isMobile.mobile.value ? 12 : 4" align-self='center'>
        <div class="pl-2">
          <div class="text-2xl font-semibold  mb-3">
            {{ subcategory.title }}
          </div>
          <div class="text-lg font-normal">
            {{ subcategory.description }}
          </div>
        </div>
      </v-col>
      <v-col :cols="isMobile.mobile.value ? 12 : 8">
        <v-sheet>
          <v-slide-group
            v-model="slider"
            show-arrows
            class="bg-[#f6f6f6]"
          >
            <v-slide-group-item
              v-for="product in subcategory.products"
              :key="product.id"
              v-slot="{ isSelected, toggle, selectedClass }"
            >
              <SubcategoryCard :product="product" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { SubcategoryDto } from '~/stores/dto/subcategory.dto';
import PerformanceListItem from '~/components/home/PerformanceListItem.vue';
import { useDisplay } from 'vuetify';

defineProps<{
  subcategory: SubcategoryDto
}>()

const slider = ref(null)
const isMobile = useDisplay()
</script>

<style lang="scss" scoped>
.divider {
  border-top: 1px solid gray;
}
</style>