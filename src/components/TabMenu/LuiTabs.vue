<template>
  <div class="w-full">
    <div
      :class="tabContainerClasses"
      role="tablist"
    >
      <button
        v-for="(prop, index) in tabProps"
        :key="prop.title"
        :ref="(el) => (elements[index] = el)"
        role="tab"
        :tabindex="selectedTitle === prop.title ? '0' : '-1'"
        :aria-selected="selectedTitle === prop.title ? true : false"
        :disabled="prop.disabled !== undefined ? true : false"
        :class="[computedClasses, activeClasses(prop)]"
        @click="selectedTitle = prop.title"
        @keydown="handleKeyEvents($event, index)"
      >
        <span class="px-4">{{ prop.title }}</span>
      </button>
    </div>

    <div :class="contentClasses">
      <slot />
    </div>
  </div>
</template>
<script>
import { ref, provide, computed } from 'vue'
import { generateClasses } from '../../mixins/methods'
export default {
  // align,disable,active, falza elemen grup, otomatic focus avtive etme,
  props: {
    alignTabs: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'center', 'right'].includes(value)
      },
    },
    alignContent: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'center', 'right'].includes(value)
      },
    },
  },
  setup(props, { slots }) {
    // const tabProps = ref(slots.default().map((tab) => tab.props.title))
    const tabProps = ref(slots.default().map((tab) => tab.props))
    let initialActive = tabProps.value.findIndex((t) => t.active !== undefined)
    initialActive = initialActive === -1 ? false : initialActive
    let selectedTitle = ref(tabProps.value[initialActive || 0].title)

    const elements = ref([])
    provide('selectedTitle', selectedTitle)

    function handleKeyEvents(e, index) {
      let targetPosition = null
      //right
      if (e.keyCode === 39 && this.tabProps.length > index + 1) targetPosition = index + 1
      //left
      if (e.keyCode === 37 && index - 1 >= 0) targetPosition = index - 1
      //home
      if (e.keyCode === 36) targetPosition = 0
      //end
      // son elemen disabled ise sondan bir onceki elemani target yapmali miyiz ?
      if (e.keyCode === 35) targetPosition = this.tabProps.length - 1

      if (targetPosition !== null && this.tabProps[targetPosition].disabled === undefined) {
        this.selectedTitle = this.tabProps[targetPosition].title
        elements.value[targetPosition].focus()
      }
    }
    function activeClasses(prop) {
      return this.selectedTitle === prop.title
        ? 'text-primary after:bg-primary'
        : 'text-secondary-400'
    }

    // const classes = {
    //   tabContainer, tab, content, activeTab
    // }
    const tabContainerClasses = computed(() => {
      const classes = {
        width: 'w-full',
        display: 'flex',
        flexWrap: 'flex-wrap',
        alingItems: 'items-center',
        justifyContent:
          props.alignTabs === 'left'
            ? 'justify-start'
            : props.alignTabs === 'center'
            ? 'justify-center'
            : 'justify-end',
      }
      return generateClasses([{ ...classes }])
    })
    const contentClasses = computed(() => {
      return props.alignContent === 'left'
        ? 'text-left'
        : props.alignContent === 'center'
        ? 'text-center'
        : 'text-right'
    })
    const computedClasses = computed(() => {
      const classes = {
        lineHeight: 'leading-5',
        fontSize: 'text-base',
        fontWeight: 'font-semibold',
        after:
          'after:w-full after:h-0.5 after:inline-block after:rounded-full after:bg-transparent',
      }
      return generateClasses([{ ...classes }])
    })

    return {
      tabProps,
      selectedTitle,
      elements,
      handleKeyEvents,
      computedClasses,
      activeClasses,
      tabContainerClasses,
      contentClasses,
    }
  },
}
</script>
