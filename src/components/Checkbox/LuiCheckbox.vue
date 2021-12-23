<template>
  <input
    id="check_1"
    type="checkbox"
    name="Checkbox"
    :class="computedClasses.input"
  >
  <label
    for="check_1"
    :class="computedClasses.label"
  > Checkbox </label>
</template>
<script>
import { computed } from 'vue'
import { generateClasses } from '../../mixins/methods'
export default {
  setup() {
    //variant?, size, focusState?, checkbox? ,a11n
    const computedClasses = computed(() => {
      const classes = {
        input: {
          position: 'absolute',
          overflow: 'overflow-hidden',
          // want to hide input without display-none
          opactity: 'opacity-0',
          // peer for tailwind: to catch checked from siblings.
          peer: 'peer',
        },
        label: {
          display: 'flex items-center',
          position: 'relative',
          // before:
            // "before:content-[''] before:relative before:inline-block before:mr-1 before:w-4 before:h-4 before:ring-2 before:ring-white before:border before:bg-white before:border-primary before:rounded-xs peer-checked:before:bg-primary peer-checked:before:border-white peer-checked:before:ring-primary",
          fontSize: 'text-xs',
          lineHeight: 'leading-4.5',
          color: 'text-secondary-600',
          cursor: 'cursor-pointer',
        },
        labelBefore: {
          content: "before:content-['']",
          position: 'before:relative',
          display: 'before:inline-block',
          marginRight: 'before:mr-1',
          width: 'before:w-4',
          height: 'before:h-4',
          ringWidth: 'before:ring-2',
          ringColor: 'before:ring-white peer-checked:before:ring-primary',
          borderWidth: 'before:border',
          bordercolor: 'before:border-primary peer-checked:before:border-white',
          borderRadius: 'before:rounded-xs',
          backgroundColor: 'before:bg-white peer-checked:before:bg-primary',
        }
      }
      return {
        input: generateClasses([{ ...classes.input }]),
        label: generateClasses([{ ...classes.label },{...classes.labelBefore}]),
      }
    })
    return { computedClasses }
  },
}
</script>

<style scoped>
/* input[type='checkbox']:checked + label::after{
  content: "\eb7b";
} */
/* HIDE INPUT */
/* input[type='checkbox'] {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); 
  clip: rect(1px, 1px, 1px, 1px);
} */

/* input[type='checkbox'] + label {
  display: block;
  position: relative;
  padding: 0 1.5rem;
} */

/* input[type='checkbox'] + label::before {
  content: '';
  position: relative;
  display: inline-block;
  margin-right: 1px;
  width: 20px;
  height: 20px;
  background: white;
  border: 1px solid salmon;
} */

/* input[type='checkbox']:checked + label::before {
  background: #5ac5c9;
}

input[type='checkbox']:checked + label::after {
  
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  height: 6px;
  width: 13px;
  transform: rotate(-45deg);
}


input[type='checkbox']:focus + label::before {
  outline: #5d9dd5 solid 1px;
  box-shadow: 0 0px 8px #5e9ed6;
}


input[type='checkbox']:disabled + label {
  color: #575757;
}

input[type='checkbox']:disabled + label::before {
  background: #ddd;
} */
</style>
