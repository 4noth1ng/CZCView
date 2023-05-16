import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'
import { ButtonType, ButtonSize } from '../src/button'

// The component to test
describe('test button', () => {
  it('should render slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'easyest'
      }
    })

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('easyest')
  })
  it('should have class', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary'
      }
    })
    expect(wrapper.classes()).toContain('h-button--primary')
  })
  it('should be large size', () => {
    const wrapper = mount(Button, {
      props: {
        size: ButtonSize[0]
      }
    })

    expect(wrapper.classes()).toContain('h-button--large')
  })
  it('should be round', () => {
    const wrapper = mount(Button, {
      props: {
        round: true
      }
    })
    expect(wrapper.classes()).toContain('is-round')
  })
  it('should be disabled', async () => {
    const wrapper = mount(() => <Button disabled />)
    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
