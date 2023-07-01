import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LoginView from '../../views/LoginView.vue'

describe('Login', () => {
  it('renders properly', () => {
    const wrapper = mount(LoginView, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Authenticate')
  })
})
