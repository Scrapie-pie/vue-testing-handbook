import { mount, config } from "@vue/test-utils"
import Bilingual from "@/components/Bilingual.vue"

describe("Bilingual", () => {
  it("renders successfully", () => {
    config.global.mocks = {
      '$t': () => 'blah'
    }
    const wrapper = mount(Bilingual)

    expect(wrapper.find(".hello").text()).not.toBe("")
  })
})