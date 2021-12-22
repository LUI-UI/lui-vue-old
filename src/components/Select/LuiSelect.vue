<template>
  <div class="select-wrapper w-max">
    <!-- <label
      for="$"
      class="label"
    >Label</label> -->
    <div>
      <button
        id="exp_button"
        aria-haspopup="listbox"
        aria-labelledby="exp_elem exp_button"
        :class="computedClasses.button"
        v-bind="$attrs"
        @click.stop="optionsActive = !optionsActive"
        @keydown="handleButtonKeyEvents($event)"
      >
        <div
          v-if="multiple && selectedOptions.length > 0"
          :class="computedClasses.multipleWrapper"
        >
          <lui-chip
            v-for="(selected, i) in selectedOptions"
            :key="i"
            filter="lighter"
            variant="primary"
            tabindex="-1"
            type="default"
            :rounded-full="rounded"
            :size="chipSize"
            icon="close"
            clickable
            :class="computedClasses.multipleItem"
            @click.stop="unselectOption(selected)"
          >
            {{ selected[textField] }}
          </lui-chip>
        </div>

        <content-template
          :prepend="selectPrepend"
          :append="selectAppend"
          :text="selectedOption"
          :size="size"
          :options-active="optionsActive"
          :text-active="multiple && selectedOptions.length > 0 ? false : true"
        />
      </button>
      <ul
        v-show="optionsActive"
        id="exp_elem_list"
        tabindex="1"
        role="listbox"
        aria-labelledby="exp_elem"
        :class="computedClasses.options"
        @keydown.stop="handleOptionsKeyEvents($event)"
      >
        <lui-option
          v-for="(option, i) in options"
          id="exp_elem_Np"
          :ref="(el) => (optionsRef[i] = el)"
          :key="i"
          tabindex="-1"
          role="option"
          :selected="isOptionSelected(option)"
          :disabled="option.disabled"
          @click="selectOption(option,$event)"
        >
          <content-template
            :prepend="optionPrepend"
            :append="optionAppend"
            :text="option[textField]"
            :size="size"
            :options-active="optionsActive"
          />
        </lui-option>
        <!-- <slot /> -->
      </ul>
    </div>
  </div>
  <!-- <div class="listbox-area">
    <div class="left-area">
      <span id="exp_elem"> Choose an element: </span>
      <div id="exp_wrapper">
        <button aria-haspopup="listbox" aria-labelledby="exp_elem exp_button" id="exp_button">
          Neptunium
        </button>
        <ul
          id="exp_elem_list"
          tabindex="-1"
          role="listbox"
          aria-labelledby="exp_elem"
          class="hidden"
        >
          <li id="exp_elem_Np" role="option">Neptunium</li>
          <li id="exp_elem_Pu" role="option">Plutonium</li>
          <li id="exp_elem_Am" role="option">Americium</li>
          <li id="exp_elem_Cm" role="option">Curium</li>
        </ul>
      </div>
    </div>
  </div> -->
</template>

<script>
import LuiOption from './LuiOption.vue'
// import LuiIcon from '../Icon/LuiIcon.vue'
import LuiChip from '../Chip/LuiChip.vue'
import ContentTemplate from './ContentTemplate.vue'
import { computed, ref, provide, onUnmounted, onMounted } from 'vue'
import { generateClasses } from '../../mixins/methods'
import * as prop from '../../mixins/props'
export default {
  components: { LuiChip, LuiOption, ContentTemplate },
  mixins: [
    prop.string('placeholder', 'select item'),
    prop.string('textField', 'text'),
    prop.string('valueField', 'value'),
    prop.boolean('multiple', false),
    prop.boolean('rounded', true),
    prop.size('md', ['sm', 'md', 'lg']),
  ],
  inheritAttrs: false,
  props: {
    //UniqField(v-fors etc.),seperatedButton,
    //keyEvents(a11n), optionsGroup,onChange,defaultValue
    //label, description
    //should we handle chips disable states ?
    options: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: [String, Number, Array],
      default: '',
    },
    selectPrepend: {
      type: [Object, null],
      default: null,
    },
    selectAppend: {
      type: [Object, null],
      default: null,
    },
    optionPrepend: {
      type: [Object, null],
      default: null,
    },
    optionAppend: {
      type: [Object, null],
      default: null,
    },
    state: {
      type: [String, Boolean, null],
      default: null,
      validator(value) {
        return [null, 'warning', true, false].includes(value)
      },
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // If the initial value of your v-model expression does not
    // match any of the options, the <select> element will render in an
    // “unselected” state. On iOS, this will prevent the user from being
    // able to select the first item, because iOS does not fire a
    // change event in this case. It is therefore recommended to
    // provide a disabled option with an empty value,
    // as demonstrated in the example above.

    const optionsActive = ref(false)
    const optionsArr = ref(props.options)
    const parentProps = ref({ size: props.size, rounded: props.rounded })
    const optionsRef = ref([])
    let selectedOption = ref(props.placeholder)
    let selectedOptions = ref([])
    let targetOption = ref('')

    provide('parentProps', parentProps.value)

    onMounted(() => {
      document.addEventListener('click', closeSelect)
    })
    onUnmounted(() => {
      document.removeEventListener('click', closeSelect)
    })

    function isOptionSelected(option) {
      if (!props.multiple) {
        return selectedOption.value === option.text
      }
      const is = selectedOptions.value.findIndex((s) => s.text === option.text)
      return is === -1 ? false : true
    }

    function unselectOption(option) {
      const el = selectedOptions.value.findIndex((s) => s.text === option.text)
      selectedOptions.value.splice(el, 1)
    }
    function selectOption(option,event) {
      if (!option.disabled) {
        if (props.multiple) {
          // dont want to close options.
          event.stopPropagation()
          const index = selectedOptions.value.findIndex((o) => o.text === option.text)
          if (index === -1) {
            selectedOptions.value.push(option)
          } else {
            selectedOptions.value.splice(index, 1)
          }
          emit('update:modelValue', selectedOptions.value)
        } else {
          emit('update:modelValue', option[props.textField])
          selectedOption.value = option[props.textField]
        }
      }
    }
    function closeSelect() {
      optionsActive.value = false
    }
    function handleButtonKeyEvents(e) {
      if (e.keyCode === 40) { // arrowDown
        targetOption.value = 0
        optionsRef.value[targetOption.value].$el.focus()
      }
    }
    function focusTargetOption(){
      optionsRef.value[targetOption.value].$el.focus()
    }
    function handleOptionsKeyEvents(e) {
      if(e.keyCode === 13){ // enter
        selectOption(props.options[targetOption.value],e)
      }
      const len = props.options.length - 1
      if (e.keyCode === 40) { // arrowDown
        if (targetOption.value < len) {
          targetOption.value++
          focusTargetOption()
        } else if (targetOption.value === len) {
          targetOption.value = 0
          focusTargetOption()
        }
      }
      if (e.keyCode === 38) { // arrowup        
        if (targetOption.value > 0) {
          targetOption.value--
          focusTargetOption()
        }else if(targetOption.value === 0) {
          targetOption.value = len
          focusTargetOption()
        }
      }
    }

    const chipSize = computed(() => {
      return props.size === 'lg' ? 'md' : props.size
    })

    const computedClasses = computed(() => {
      const classes = {
        button: {
          display: 'flex',
          alignItems: 'items-center',
          // justifyContent: 'justify-between',
          paddingTop: props.size === 'sm' ? 'pt-1.5' : props.size === 'md' ? 'pt-2' : 'pt-3',
          paddingBottom:
            selectedOptions.value.length < 0
              ? 'p-0'
              : props.size === 'sm'
              ? 'pb-1.5'
              : props.size === 'md'
              ? 'pb-2'
              : 'pb-3',
          paddingX: 'px-3',
          fontSize: props.size === 'sm' ? 'text-xs' : 'text-base',
          lineHeight: props.size === 'sm' ? 'leading-4.5' : 'leading-6',
          textColor: 'text-secondary-600',
          borderWidth: 'border',
          borderColor:
            props.state === true
              ? 'border-success'
              : props.state === false
              ? 'border-danger'
              : props.state === 'warning'
              ? 'border-warning'
              : 'border-secondary-200 focus:border-primary',
          borderRadius: props.rounded ? 'rounded-lg' : '',
          backgroundColor: 'bg-white',
          width: 'w-80',
          outline: 'focus:outline-none',
          ringWidth: props.state === null ? 'focus:ring-4' : 'ring-4',
          ringColor:
            props.state === null
              ? 'focus:ring-primary-100'
              : props.state === true
              ? 'ring-success-100'
              : props.state === false
              ? 'ring-danger-100'
              : 'ring-warning-100',
          disabled:
            'disabled:border-secondary-300 disabled:text-secondary-600 disabled:bg-secondary-100',
        },
        options: {
          backgroundColor: 'bg-white',
          borderRadius: props.rounded ? 'rounded-lg' : '',
          borderWidth: 'border',
          borderColor: 'border-secondary-200',
          paddingBottom: 'pb-2',
          boxShadow: 'shadow-md',
          marginTop: 'mt-2',
        },
        multipleWrapper: {
          display: 'flex',
          flexWrap: 'flex-wrap',
          // flexGrow: 'flex-grow',
          marginLeft: '-ml-2',
          marginBottom: '-mb-2',
        },
        multipleItem: {
          // display: 'flex',
          // alignItems: 'items-center',
          // backgroundColor: 'bg-primary-100',
          // textColor: 'text-primary',
          // borderRadius: 'rounded-lg',
          // paddingX: 'px-2',
          // paddingY: 'py-1',
          // fontSize: 'text-sm',
          marginLeft: 'ml-2',
          marginBottom: 'mb-2',
          // lineHeiht: 'leading-6',
        },
        icon: {
          size: props.size === 'sm' ? 'text-base' : props.size === 'md' ? 'text-xl' : 'text-2xl',
          marginLeft: 'ml-1',
          lineHeight: 'leading-none',
        },
      }
      return {
        button: generateClasses([{ ...classes.button }]),
        options: generateClasses([{ ...classes.options }]),
        multipleItem: generateClasses([{ ...classes.multipleItem }]),
        multipleWrapper: generateClasses([{ ...classes.multipleWrapper }]),
        icon: generateClasses([{ ...classes.icon }]),
      }
    })

    return {
      computedClasses,
      optionsActive,
      selectedOption,
      selectOption,
      optionsArr,
      selectedOptions,
      unselectOption,
      chipSize,
      isOptionSelected,
      handleOptionsKeyEvents,
      handleButtonKeyEvents,
      optionsRef,
      targetOption,
    }
  },
}
</script>
