import { mount } from "@vue/test-utils"
import ParentWithManyChildren from "@/components/ParentWithManyChildren";
import Child from "@/components/Child";


it("отрисовывает несколько дочерних компонентов", () => {
  const wrapper = mount(ParentWithManyChildren)


  expect(wrapper.findAllComponents(Child).length).toBe(3)
})