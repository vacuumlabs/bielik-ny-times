import React from 'react'

import { assertSnapshot } from '../../app/utils/testUtils'
import ErrorMessage from '../ErrorMessage'

describe('ErrorMessage', () => {
  it('should not render if missing', () =>
    assertSnapshot(<ErrorMessage error={undefined} />))

  it('should render application error', () =>
    assertSnapshot(<ErrorMessage error={{ message: 'app error' }} />))

  it('should render unknown error', () =>
    assertSnapshot(<ErrorMessage error={{ msg: 'something' }} />))
})
