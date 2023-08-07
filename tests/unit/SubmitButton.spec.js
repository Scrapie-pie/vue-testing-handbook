import { mount } from '@vue/test-utils'
import SubmitButton from '@/components/SubmitButton.vue'

describe('SubmitButton.vue', () => {
  it("Отображает сообщение для неавторизованного пользователя", () => {
    const msg = "Войти"
    const wrapper = mount(SubmitButton,{
      props: {
        msg: msg
      }
    })

    expect(wrapper.find("span").text()).toBe("Не авторизован")
    expect(wrapper.find("button").text()).toBe("Войти")
  })

  it('Отображает сообщение для администратора', () => {
    const msg = "Войти"
    const isAdmin = true
    const wrapper = mount(SubmitButton,{
      props: {
        msg,
        isAdmin
      }
    })

    expect(wrapper.find("span").text()).toBe("Привилегии администратора")
    expect(wrapper.find("button").text()).toBe("Войти")
  })
})