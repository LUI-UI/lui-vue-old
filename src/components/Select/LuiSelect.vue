<template>
  <div class="select-wrapper w-max">
    <!-- <label
      for="$"
      class="label"
    >Label</label> -->
    <div>
      <button
        id="exp_button"
        :ref="(el) => (selectButton = el)"
        aria-haspopup="listbox"
        aria-labelledby="exp_elem exp_button"
        :class="computedClasses.button"
        v-bind="$attrs"
        @click="openOptions"
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
            type="default"
            :rounded-full="rounded"
            :size="chipSize"
            icon="close"
            clickable
            :class="computedClasses.multipleItem"
            @click.stop="deleteOption(selected)"
          >
            {{ selected[textField] }}
          </lui-chip>
        </div>
        <!-- <div
          v-if="multiple"
          :class="computedClasses.multipleWrapper"
        >
          <span
            v-for="(selected, i) in selectedOptions"
            :key="i"
            :class="computedClasses.multipleItem"
          >
            <span>{{ selected[textField] }}</span>
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
        </div> -->

        <span v-else>{{ selectedOption }}</span>
        <lui-icon
          :name="iconName"
          :class="computedClasses.icon"
          line
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
        <lui-option
          v-for="(option, index) in options"
          id="exp_elem_Np"
          :key="index"
          class="flex items-center"
          tabindex="0"
          role="option"
          :selected="selectedOptions.includes(s => s.text === option.text)"
          @click="selectOption(option)"
        >
          <lui-icon
            name="map-2"
            line
          />
          <span class="ml-2">
            {{ option[textField] }}
          </span>
        </lui-option>
        <!-- <li
          v-for="(option, index) in options"
          id="exp_elem_Np"
          :key="index"
          tabindex="0"
          role="option"
          :class="computedClasses.optionItem"
          @click="selectOption(option)"
        >
          {{ option[textField] }}
        </li> -->
        <slot name="options" />
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
import LuiIcon from '../Icon/LuiIcon.vue'
import LuiChip from '../Chip/LuiChip.vue'
import { computed, ref, provide } from 'vue'
import { generateClasses } from '../../mixins/methods'
import * as prop from '../../mixins/props'
export default {
  components: { LuiIcon, LuiChip, LuiOption },
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
    //UniqField, optionDisable? ?, STATES?,seperatedButton,
    //keyEvents(a11n), optionsGroup,selectedOptionsUniq,onChange,defaultValue
    options: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: [String, Array],
      default: '',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const selectArea = ref(null)
    const selectButton = ref(null)
    const optionsActive = ref(false)
    const optionsArr = ref(props.options)
    let selectedOption = ref(props.placeholder)
    let selectedOptions = ref([])
    const parentProps = ref({ size: props.size, rounded: props.rounded })

    provide('parentProps', parentProps.value)

    function openOptions() {
      optionsActive.value = !optionsActive.value
      // selectArea.value.focus()
      // selectButton.value.focus()
    }
    function deleteOption(opt) {
      const el = selectedOptions.value.findIndex((s) => s.text === opt.text)
      selectedOptions.value.splice(el, 1)
    }
    function selectOption(option) {
      if (props.multiple) {
        const index = selectedOptions.value.findIndex(o => o.text === option.text)
        if(index === -1) {
          selectedOptions.value.push(option)
        } else {
          selectedOptions.value.splice(index,1)
        }
        
        emit('update:modelValue', selectedOptions.value)
      }
      if (!props.multiple) {
        emit('update:modelValue', option[props.textField])
        selectedOption.value = option[props.textField]
        optionsActive.value = false
      }
    }

    const iconName = computed(() => {
      if (optionsActive.value) return 'arrow-down-s'
      return 'arrow-up-s'
    })

    const chipSize = computed(() => {
      return props.size === 'lg' ? 'md' : props.size
    })

    const computedClasses = computed(() => {
      const classes = {
        button: {
          display: 'flex',
          alignItems: 'items-center',
          justifyContent: 'justify-between',
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
          borderColor: 'border-secondary-200',
          borderRadius: props.rounded ? 'rounded-lg' : '',
          backgroundColor: 'bg-white',
          width: 'w-80',
          focus: 'focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary-100',
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
      selectArea,
      selectButton,
      openOptions,
      optionsArr,
      selectedOptions,
      deleteOption,
      iconName,
      chipSize,
    }
  },
}
</script>
