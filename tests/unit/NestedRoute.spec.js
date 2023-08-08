import { mount, shallowMount } from "@vue/test-utils"
import NestedRoute from "@/components/NestedRoute.vue"
import routes from "@/routes.js"
import mockModule from "@/bust-cache.js"

jest.mock("@/bust-cache.js", () => jest.fn())

describe("NestedRoute", () => {
  it("отрисовывает имя пользователя из строки запроса", () => {
    const username = "alice"
    const wrapper = mount(NestedRoute, {
      global: {
        mocks: {
          $route: {
            params: { username }
          }
        }
      }
    })

    expect(wrapper.find(".username").text()).toBe(username)
  })

  it("вызывает bustCache и next при переходе из маршрута", async () => {
    const username = "alice"
    const wrapper = shallowMount(NestedRoute, {
      global: {
        mocks: {
          $route: {
            params: { username }
          }
        }
      }
    });
    const next = jest.fn()
    NestedRoute.beforeRouteLeave.call(wrapper.vm, undefined, undefined, next)
    await wrapper.vm.$nextTick()

    expect(mockModule).toHaveBeenCalled()
    expect(next).toHaveBeenCalled()
  })
})