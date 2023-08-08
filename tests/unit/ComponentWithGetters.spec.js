import { createStore } from "vuex"
import { mount } from "@vue/test-utils"
import ComponentWithGetters from "@/components/ComponentWithGetters.vue"

const store = new createStore({
  state: {
    firstName: "Алиса",
    lastName: "Доу"
  },

  getters: {
    fullname: (state) => state.firstName + " " + state.lastName
  }
})

it("отрисовывает имя пользователя, используя настоящий геттер Vuex", () => {
  const wrapper = mount(ComponentWithGetters, {
    global: {
      plugins: [store]
    }
  })

  expect(wrapper.find(".fullname").text()).toBe("Алиса Доу")
})

it("отрисовываем имя пользователя, используя вычисленные опции монтирования", () => {
  const wrapper = mount(ComponentWithGetters, {
    global: {
      mocks: {
        $store: {
          getters: {
            fullname: "Алиса До"
          }
        }
      }
    }
  })

  expect(wrapper.find(".fullname").text()).toBe("Алиса До")
})