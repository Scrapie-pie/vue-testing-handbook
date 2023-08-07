import { mount, shallowMount } from '@vue/test-utils'
import Parent from '@/components/Parent.vue'

describe('Parent.vue', () => {
  it('renders with child components', () => {
    const wrapper = mount(Parent)

    expect(wrapper.html()).toContain('Дочерний компонент')
  })

  it('renders with stubs instead of child components', () => {
    const wrapper = shallowMount(Parent)

    expect(wrapper.html()).not.toContain('Дочерний компонент')
    expect(wrapper.html()).toContain('<child-stub></child-stub>')
  })
})
