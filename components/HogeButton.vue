<template>
  <div>
    <button
      class="hoge-button"
      :class="[
        `border-${type}`,
        `bg-${type}`,
        {'text-white' : type !== 'default'}
      ]"
      @clock="onClick"
    >
      <!-- @slot Use this slot -->
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component({ name: 'HogeButton' })
export default class HogeButton extends Vue {
  /**
   * button type<br>
   * Accepted values: primary / success / warning / danger / info / text
   */
  @Prop({ required: true, default: 'success' })
  type!: string

  onClick() {
    /**
     * Click event
     *
     * @event success
     * @type {string}
     */
    this.$emit('click')
  }
}
</script>

<style scoped>
.hoge-button {
  @apply text-center leading-none whitespace-no-wrap cursor-pointer py-3 px-5 text-sm font-medium rounded-sm;
}
</style>

<docs>
```jsx
<HogeButton type="warning">
  hoge
</HogeButton>
```
</docs>
