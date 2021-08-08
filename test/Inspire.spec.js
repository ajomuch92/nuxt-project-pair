import { mount } from '@vue/test-utils'
import Inspire from '@/pages/inspire.vue'

describe('Inspire component', () => {
  test('Reverse message', () => {
    const wrapper = mount(Inspire, {
      propsData: {
        message: 'Hello world'
      }
    })
    expect(wrapper.text()).toContain('dlrow olleH')
  })
})
