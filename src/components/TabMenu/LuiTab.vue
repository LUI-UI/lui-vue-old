<template>
  <div
    v-show="title == selectedTitle"
    role="tabpanel"
    tabindex="0"
  >
    <slot />
  </div>
  <!-- <div class="tabs">
    <div
      role="tablist"
      aria-label="Entertainment"
    >
      <button
        id="nils"
        role="tab"
        aria-selected="true"
        aria-controls="nils-tab"
      >
        Nils Frahm
      </button>
      <button
        id="agnes"
        role="tab"
        aria-selected="false"
        aria-controls="agnes-tab"
        tabindex="-1"
      >
        Agnes Obel
      </button>
      <button
        id="complex"
        role="tab"
        aria-selected="false"
        aria-controls="complexcomplex"
        tabindex="-1"
        data-deletable=""
      >
        Joke
      </button>
    </div>
    <div
      id="nils-tab"
      tabindex="0"
      role="tabpanel"
      aria-labelledby="nils"
    >
      <p>
        Nils Frahm is a German musician, composer and record producer based in Berlin. He is known
        for combining classical and electronic music and for an unconventional approach to the piano
        in which he mixes a grand piano, upright piano, Roland Juno-60, Rhodes piano, drum machine,
        and Moog Taurus.
      </p>
    </div>
    <div
      id="agnes-tab"
      tabindex="0"
      role="tabpanel"
      aria-labelledby="agnes"
      hidden=""
    >
      <p>
        Agnes Caroline Thaarup Obel is a Danish singer/songwriter. Her first album, Philharmonics,
        was released by PIAS Recordings on 4 October 2010 in Europe. Philharmonics was certified
        gold in June 2011 by the Belgian Entertainment Association (BEA) for sales of 10,000 Copies.
      </p>
    </div>
    <div
      id="complexcomplex"
      tabindex="0"
      role="tabpanel"
      aria-labelledby="complex"
      hidden=""
    >
      <p>Fear of complicated buildings:</p>
      <p>A complex complex complex.</p>
    </div>
  </div> -->
</template>
<script>
import { inject } from 'vue'
export default {
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type:Boolean,
      default: false
    }
  },
  setup() {
    const selectedTitle = inject('selectedTitle')
    return { selectedTitle }
  },
}
</script>
