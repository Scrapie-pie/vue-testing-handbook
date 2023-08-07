import { mount } from '@vue/test-utils'
import SubmitButton from '@/components/SubmitButton.vue'

const msg = "Войти"
const factory = (props) => {
  return mount(SubmitButton, {
    props: {
      msg,
      ...props
    }
  })
}

describe("SubmitButton.vue", () => {
  describe("Нет привилегий администратора", ()=> {
    it("Выводит верное сообщение", () => {
      const wrapper = factory()

      expect(wrapper.find("span").text()).toBe("Не авторизован")
      expect(wrapper.find("button").text()).toBe("Войти")
    })
  })

  describe("Есть привилегии администратора", ()=> {
    it("Выводит верное сообщение", () => {
      const wrapper = factory({ isAdmin: true })

      expect(wrapper.find("span").text()).toBe("Привилегии администратора")
      expect(wrapper.find("button").text()).toBe("Войти")
    })
  })
})