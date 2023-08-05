import { mount } from '@vue/test-utils'
import BaseComponent from '@/components/BaseComponent.vue'

describe('BaseComponent.vue', () => {
  it('renders', () => {
    const wrapper = mount(BaseComponent)

    expect(wrapper.html()).toContain('Base component')
  })
})
