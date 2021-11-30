<template>
  <div class="accordion w-96 border border-secondary-200 rounded-2xl py-8 px-6">
    <h3>
      <button class="w-full flex items-center justify-between mb-6">
        <span class="text-secondary-900 text-lg font-semibold leading-6">{{ title }}</span>
        <lui-icon 
          name="add" 
          line 
          class="text-lg" 
        />
      </button>
    </h3>
    <div class="content">
      <slot />
    </div>
  </div>
  <!-- <div class="demo-block">
    <div
      id="accordionGroup"
      class="Accordion"
    >
      <h3>
        <button
          id="accordion1id"
          :aria-expanded="true"
          class="Accordion-trigger"
          aria-controls="sect1"
        >
          <span class="Accordion-title">
            Personal Information
            <span class="Accordion-icon" />
          </span>
        </button>
      </h3>
      <div
        id="sect1"
        role="region"
        aria-labelledby="accordion1id"
        class="Accordion-panel"
      >
        <div>
          <span>content</span>
        </div>
      </div>
      <h3>
        <button
          id="accordion2id"
          aria-expanded="false"
          class="Accordion-trigger"
          aria-controls="sect2"
        >
          <span class="Accordion-title">
            Billing Address
            <span class="Accordion-icon" />
          </span>
        </button>
      </h3>
      <div
        id="sect2"
        role="region"
        aria-labelledby="accordion2id"
        class="Accordion-panel"
      >
        <div>
          <span>contetn2</span>
        </div>
      </div>
      <h3>
        <button
          id="accordion3id"
          aria-expanded="false"
          class="Accordion-trigger"
          aria-controls="sect3"
        >
          <span class="Accordion-title">
            Shipping Address
            <span class="Accordion-icon" />
          </span>
        </button>
      </h3>
      <div
        id="sect3"
        role="region"
        aria-labelledby="accordion3id"
        class="Accordion-panel"
      >
        <div>
          <span>content3</span>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
import LuiIcon from '../Icon/LuiIcon.vue'
export default {
  components: { LuiIcon },
  props: {
    title: {
      type: String,
      default: 'title',
    },
  },
}
</script>
