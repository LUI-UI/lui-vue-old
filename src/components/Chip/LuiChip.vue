<template>
  <span
    :tabindex="clickAble ? '0' : null"
    :role="clickAble ? 'button' : null"
    :class="computedClasses"
    v-on="clickAble ? { click: () => $emit('click', $slots.default()[0].children) } : {}"
  >
    <lui-icon
      v-if="prepend !== 'none'"
      :name="prepend"
      fill
      :class="[iconClasses.size, iconClasses.marginPrepend, iconClasses.lineHeight]"
    />
    <slot />
    <lui-icon
      v-if="icon !== 'none'"
      :name="icon"
      fill
      :class="[iconClasses.size, iconClasses.marginIcon, iconClasses.lineHeight]"
    />
  </span>
</template>
<script>
import { computed } from 'vue'
import { generateClasses, generateVariant } from '../../mixins/methods'
import LuiIcon from '../Icon/LuiIcon.vue'
import * as prop from '../../mixins/props'

export default {
  components: { LuiIcon },
  mixins: [
    prop.variant(),
    prop.filter(),
    prop.size('sm',['sm', 'md', 'lg']),
    prop.boolean('rounded'),
    prop.boolean('roundedFull'),
    prop.boolean('clickAble'),
    prop.string('prepend'),
    prop.string('icon'),
    prop.string('type',['default', 'outline'])
  ],
  emits: ['click'],
  setup(props) {
    const computedClasses = computed(() => {
      const classes = {
        backgroundColor:
          props.type === 'default'
            ? generateVariant(props.variant, props.filter).backgroundColor
            : '',
        paddingY: props.size === 'sm' ? 'py-0.5' : props.size === 'md' ? 'py-1' : 'py-2',
        paddingX: props.size === 'sm' ? 'px-1.5' : props.size === 'md' ? 'px-2' : 'px-3',
        borderWidth: 'border',
        borderStyle: 'border-solid',
        borderColor:
          props.type === 'outline' || props.type === 'default'
            ? props.filter === 'none'
              ? `border-${props.variant}`
              : props.filter === 'darker'
              ? `border-${props.variant}-800`
              : `border-${props.variant}-50`
            : '',
        lineHeight:
          props.size === 'sm' ? 'leading-3' : props.size === 'md' ? 'leading-3.5' : 'leading-4',
        fontSize:
          props.size === 'sm' ? 'text-xs' : props.size === 'md' ? 'text-sm leading' : 'text-base',
        fontColor:
          props.filter === 'none'
            ? props.type === 'default'
              ? 'text-white'
              : `text-${props.variant}`
            : props.filter === 'darker'
            ? props.type === 'default'
              ? 'text-white'
              : `text-${props.variant}-800`
            : props.type === 'default'
            ? `text-${props.variant}`
            : `text-${props.variant}-50`,
        borderRadius: props.rounded
          ? `rounded-${props.size}`
          : props.roundedFull
          ? 'rounded-full'
          : '',
        display: props.icon !== 'none' || props.prepend !== 'none' ? 'flex' : 'inline-block',
        alingItmes: props.icon !== 'none' || props.prepend !== 'none' ? 'items-center' : '',
        width: props.icon !== 'none' || props.prepend !== 'none' ? 'w-max' : '',
      }
      return generateClasses([{ ...classes }])
      // icon sizes: xs,sm,base
    })

    const iconClasses = computed(() => {
      const classes = {
        size: props.size === 'sm' ? 'text-xs' : props.size === 'md' ? 'text-sm' : 'text-base',
        marginPrepend: props.size === 'sm' ? 'mr-0.5' : props.size === 'md' ? 'mr-1' : 'mr-1.5',
        marginIcon: props.size === 'sm' ? 'ml-0.5' : props.size === 'md' ? 'ml-1' : 'ml-1.5',
        lineHeight:
          props.size === 'sm' ? 'leading-3' : props.size === 'md' ? 'leading-3.5' : 'leading-4',
      }
      return classes
    })

    // function clickEvent() {
    //   emit('action', slots.default()[0].children)
    //   console.log(!attrs)
    // }

    return { computedClasses, iconClasses }
  },
}
</script>
