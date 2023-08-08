import { createStore } from "vuex"
import { mount } from "@vue/test-utils"
import ComponentWithVuex from "@/components/ComponentWithVuex.vue"

const store = createStore({
  state() {
    return {
      username: "Алиса",
      firstName: "Алиса",
      lastName: "До"
    }
  },

  getters: {
    fullname: (state) => state.firstName + " " + state.lastName
  }
})

describe("ComponentWithVuex", () => {
  it("отрисовывает имя пользователя из настоящего Vuex хранилища", () => {
    const wrapper = mount(ComponentWithVuex, {
      global: {
        plugins: [store]
      }
    })

    expect(wrapper.find(".username").text()).toBe("Алиса")
  })

  it("отрисовывает имя пользователя, используя замоканное хранилище", () => {
    const wrapper = mount(ComponentWithVuex, {
      global: {
        mocks: {
          $store: {
            state: { username: "Алиса" }
          }
        }
      }
    })

    expect(wrapper.find(".username").text()).toBe("Алиса")
  })
})