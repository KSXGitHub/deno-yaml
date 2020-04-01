import { assertEquals } from 'https://deno.land/std@v0.38.0/testing/asserts.ts'
import yaml from './dist/deno/index.js'

Deno.test('load', () => {
  const yamlText = '{ abc: 123, def: 456 }'
  const expectedObject = { abc: 123, def: 456 }
  const receivedObject = yaml.load(yamlText)
  assertEquals(receivedObject, expectedObject)
})
