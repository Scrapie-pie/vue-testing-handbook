import {flushPromises, mount} from "@vue/test-utils"
import FormSubmitter from "@/components/FormSubmitter.vue"

let url = ''
let data = ''

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url
      data = _data
      resolve()
    })
  }
}

describe("FormSubmitter.vue", () => {
  it("Показывает сообщение после отправки", async () => {
    const wrapper = mount(FormSubmitter, {
      global: {
        mocks: {
          $http: mockHttp
        }
      }
    })

    await wrapper.find("[data-username]").setValue("Алиса")
    await wrapper.find("form").trigger("submit.prevent")

    await flushPromises()

    expect(wrapper.find(".message").text())
      .toBe("Спасибо за ваше сообщение, Алиса.")


  })


})