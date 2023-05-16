import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Icon from '../src/icon.vue'

describe('happy path', () => {
  it('render', () => {
    const wrapper = mount(() => <Icon color="#000" name="fuzhi"></Icon>)
    expect(wrapper.find('.i-icon-fuzhi').exists())
  })

  it('dot', () => {
    const wrapper = mount(Icon, {
      props: {
        dot: true,
        badge: '1'
      }
    })
    expect(wrapper.props().dot).toBe(true)
    expect(wrapper.props().badge).toBe('1')
  })
})
