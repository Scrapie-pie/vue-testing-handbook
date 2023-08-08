import Emitter from "@/components/Emitter.vue"
import { mount } from "@vue/test-utils"

describe("Emitter.vue", () => {
  it("Порождает событие с двумя аргументами", () => {
    const wrapper = mount(Emitter)

    wrapper.vm.emitEvent()

    expect(wrapper.emitted().myEvent[0]).toEqual(["name", "password"])
  })

  it("Порождает событие без монтирования компонента", () => {
    const events = {}
    const $emit = (event, ...args) => { events[event] = [...args] }

    Emitter.methods.emitEvent.call({ $emit })

    expect(events.myEvent).toEqual(["name", "password"])
  })
})

