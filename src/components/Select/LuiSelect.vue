<template>
  <div class="select-wrapper w-max">
    <!-- <label
      for="$"
      class="label"
    >Label</label> -->
    <div
      :ref="(el) => (selectArea = el)"
      role="menu"
      tabindex="0"
      class="select-area"
      @blur="optionsActive = false"
    >
      <button
        id="exp_button"
        :ref="(el) => (selectButton = el)"
        aria-haspopup="listbox"
        aria-labelledby="exp_elem exp_button"
        :class="computedClasses.button"
        @click="openOptions"
      >
        <div :class="computedClasses.multipleWrapper">
          <span
            v-for="(selected, i) in selectedOptions"
            :key="i"
            :class="computedClasses.multipleItem"
          >
            <span>{{ selected[valueField] }}</span>
            <button
              class="flex items-center justify-center"
              @click.stop="deleteOption(selected)"
            >
              <lui-icon
                name="close"
                line
                class="ml-1 text-sm"
              />
            </button>
          </span>
        </div>

        <!-- <span>{{ selectedOption }}</span> -->
        <lui-icon
          name="arrow-down-s"
          line
          class="ml-1 text-xl"
        />
      </button>
      <ul
        v-show="optionsActive"
        id="exp_elem_list"
        tabindex="-1"
        role="listbox"
        aria-labelledby="exp_elem"
        :class="computedClasses.options"
      >
        <li
          v-for="(option, index) in options"
          id="exp_elem_Np"
          :key="index"
          tabindex="0"
          role="option"
          :class="computedClasses.optionItem"
          @click="selectOption(option)"
        >
          {{ option[textField] }}
        </li>
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
import LuiIcon from '../Icon/LuiIcon.vue'
import { computed, ref } from 'vue'
import { generateClasses } from '../../mixins/methods'
export default {
  components: { LuiIcon },
  props: {
    text: {
      type: String,
      default: 'none',
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    textField: {
      type: String,
      default: 'text',
    },
    valueField: {
      type: String,
      default: 'value',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const selectArea = ref(null)
    const selectButton = ref(null)
    const optionsActive = ref(false)
    const optionsArr = ref(props.options)
    let selectedOption = ref('select an element')
    let selectedOptions = ref([])

    function openOptions() {
      optionsActive.value = !optionsActive.value
      // selectArea.value.focus()
      // selectButton.value.focus()
    }
    function deleteOption(opt){
      console.log(opt)
      const el = selectedOptions.value.findIndex(s => s.text === opt.text)
      selectedOptions.value.splice(el,1)
    }
    function selectOption(option) {
      console.log(option)
      selectedOptions.value.push(option)
      // selectedOption.value = option[props.valueField]
      if (!props.multiple) {
        optionsActive.value = false
      }
    }
    const computedClasses = computed(() => {
      const classes = {
        button: {
          display: 'flex',
          // flexWrap: props.multiple ? 'flex-wrap' : '',
          alignItems: 'items-center',
          justifyContent: 'justify-between',
          paddingTop: 'pt-2',
          paddingBottom: !props.multiple ? 'pb-2' : 'pb-0',
          paddingX: 'px-3',
          fontSize: 'text-base',
          textColor: 'text-secondary-600',
          borderWidth: 'border',
          borderColor: 'border-secondary-200',
          borderRadius: 'rounded-lg',
          backgroundColor: 'bg-white',
          width: 'w-72',
          focus: 'focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary-100',
        },
        options: {
          backgroundColor: 'bg-white',
          borderRadius: 'rounded-lg',
          borderWidth: 'border',
          borderColor: 'border-secondary-200',
          paddingBottom: 'pb-2',
          boxShadow: 'shadow-md',
          marginTop: 'mt-2',
        },
        optionItem: {
          marginLeft: 'ml-2',
          marginRight: 'mr-2',
          marginTop: 'mt-2',
          padding: 'p-2',
          borderRadius: 'rounded-lg',
          cursor: 'cursor-pointer',
          textColor: `text-secondary-600 hover:text-primary`,
          backgroundColor: 'bg-white hover:bg-primary-100',
          // padding: parentProps.size === 'sm' ? 'p-1.5' : parentProps.size === 'md' ? 'p-2' : 'p-3',
          // borderRadius: parentProps.rounded ? 'rounded-lg' : '',
          // cursor: !props.disabled ? 'cursor-pointer' : 'cursor-not-allowed',
          // backgroundColor: !props.disabled ? `hover:bg-${parentProps.variant}-100` : '',
          // fontSize: parentProps.size === 'sm' ? 'text-xs' : 'text-base',
          // lineHeight: props.size === 'sm' ? 'leading-4.5' : 'leading-6',
          // fontColor: props.disabled
          //   ? 'text-secondary-300'
          //   : `text-secondary-600 hover:text-${parentProps.variant}`,
          display: 'block',
          outline: 'focus:outline-none',
          // ring: !props.disabled ? `focus:ring-2 focus:ring-${parentProps.variant}` : '',
          // width: 'w-full',
        },
        multipleWrapper: {
          display: 'flex',
          flexWrap: 'flex-wrap',
          // flexGrow: 'flex-grow',
          marginLeft: '-ml-2',
        },
        multipleItem: {
          backgroundColor: 'bg-primary-100',
          textColor: 'text-primary',
          borderRadius: 'rounded-lg',
          paddingX: 'px-2',
          paddingY: 'py-1',
          fontSize: 'text-sm',
          marginLeft: 'ml-2',
          marginBottom: 'mb-2',
          display: 'flex',
          alignItems: 'items-center',
        },
      }
      return {
        button: generateClasses([{ ...classes.button }]),
        options: generateClasses([{ ...classes.options }]),
        optionItem: generateClasses([{ ...classes.optionItem }]),
        multipleItem: generateClasses([{ ...classes.multipleItem }]),
        multipleWrapper: generateClasses([{ ...classes.multipleWrapper }]),
      }
    })
    
    return {
      computedClasses,
      optionsActive,
      selectedOption,
      selectOption,
      selectArea,
      selectButton,
      openOptions,
      optionsArr,
      selectedOptions,
      deleteOption
    }
  },
}
</script>
