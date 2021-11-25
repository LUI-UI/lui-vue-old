<template>
  <div>
    <div
      class="flex flex-wrap"
      role="tablist"
    >
      <button
        v-for="(title, index) in tabTitles"
        :key="title"
        :ref="(el) => (elements[index] = el)"
        class="mr-4"
        role="tab"
        :tabindex="selectedTitle === title ? '0' : '-1'"
        :aria-selected="selectedTitle === title ? true : false"
        @click="selectedTitle = title"
        @keydown.right="next(index)"
        @keydown.left="previos(index)"
        @keydown.end="last"
        @keydown.home="first"
      >
        {{ title }}
      </button>
    </div>
    <slot />
  </div>
</template>
<script>
import { ref, provide } from 'vue'
export default {
  // align,disable,active, falza elemen grup, otomatic focus avtive etme,
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title))
    let selectedTitle = ref(tabTitles.value[0])
    const elements = ref([])
    provide('selectedTitle', selectedTitle)

    function next(index) {
      if (this.tabTitles.length > index + 1) {
        this.selectedTitle = this.tabTitles[index + 1]
        elements.value[index + 1].focus()
      }
    }
    function previos(index) {
      if (index - 1 >= 0) {
        this.selectedTitle = this.tabTitles[index - 1]
        elements.value[index - 1].focus()
      }
    }
    function first() {
      this.selectedTitle = this.tabTitles[0]
      elements.value[0].focus()
    }
    function last() {      
      this.selectedTitle = this.tabTitles[this.tabTitles.length -1]
      elements.value[elements.value.length -1].focus()
    }
    return {
      tabTitles,
      selectedTitle,
      next,
      previos,
      first,
      last,
      elements,
    }
  },
}
</script>
