import renderer from 'react-test-renderer'

export const renderToJSON = elem => renderer.create(elem).toJSON()

export const assertSnapshot = elem =>
  expect(renderToJSON(elem)).toMatchSnapshot()
