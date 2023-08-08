import { beforeEach } from "@/router.js"
import mockModule from "@/bust-cache.js"

jest.mock("@/bust-cache.js", () => jest.fn())

describe("beforeEach", () => {
  afterEach(() => {
    mockModule.mockClear()
  })

  it("обнуляет кэш при переходе на /user", () => {
    const to = {
      matched: [{ meta: { shouldBustCache: true } }]
    }
    const next = jest.fn()

    beforeEach(to, undefined, next)

    expect(mockModule).toHaveBeenCalled()
    expect(next).toHaveBeenCalled()
  })

  it("обнуляет кэш при переходе на /user", () => {
    const to = {
      matched: [{ meta: { shouldBustCache: false } }]
    }
    const next = jest.fn()

    beforeEach(to, undefined, next)

    expect(mockModule).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalled()
  })
})