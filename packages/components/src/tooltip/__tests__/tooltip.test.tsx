import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Tooltip from '../src/tooltip.vue'

const AXIOM = 'Tu view is good'

describe('Tooltip.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Tooltip>{AXIOM}</Tooltip>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
