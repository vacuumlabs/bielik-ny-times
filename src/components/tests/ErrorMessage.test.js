import React from 'react'

import { assertSnapshot } from '../../app/utils/testUtils'
import ErrorMessage from '../ErrorMessage'

describe('ErrorMessage', () => {
  it('should not render if missing', () =>
    assertSnapshot(<ErrorMessage error={undefined} />))

  it('should render text error', () =>
    assertSnapshot(<ErrorMessage error="hello error" />))

  it('should render NYT request error', () =>
    assertSnapshot(
      <ErrorMessage error={{ fault: { faultstring: 'hello error' } }} />
    ))

  it('should render NYT formatted error', () =>
    assertSnapshot(
      <ErrorMessage error={{ errors: ['hello error', 'other'] }} />
    ))

  it('should render unknown error', () =>
    assertSnapshot(<ErrorMessage error={{ msg: 'something' }} />))
})
