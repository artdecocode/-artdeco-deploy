import { equal } from 'zoroaster/assert'
import context, { Context } from '../context' // eslint-disable-line no-unused-vars
import artdecoDeploy from '../../src'

/** @type {Object.<string, (ctx: Context)>} */
const T = {
  context,
  'is a function'() {
    equal(typeof artdecoDeploy, 'function')
  },
  async 'calls package without error'() {
    await artdecoDeploy()
  },
  async 'calls test context method'({ example }) {
    await example()
  },
}

export default T
