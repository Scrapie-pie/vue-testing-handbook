import { mount } from "@vue/test-utils"

import CompositionApi from "@/components/CompositionApi.vue"

describe("CompositionApi", () => {
  it("отрисовывает сообщение", () => {
    const wrapper = mount(CompositionApi, {
      props: {
        message: "Тестируем composition API"
      }
    })

    expect(wrapper.find(".message").text()).toBe("ТЕСТИРУЕМ COMPOSITION API")
  })

  it("увеличивает счётчик при клике на кнопку", async () => {
    const wrapper = mount(CompositionApi, {
      props: { message: '' }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.find(".count").text()).toBe("Счётчик: 1")
  })
})