import Vue from 'vue'
import MessageList from 'src/components/MessageList'

function render () {
  const Constructor = Vue.extend(MessageList)
  return new Constructor({
    propsData: {
      messages: [
        {
          id: 1,
          content: 'test 1',
          author: {
            name: 'Author'
          }
        },
        {
          id: 2,
          content: 'test 2',
          author: {
            name: 'Author'
          }
        }
      ]
    }
  }).$mount()
}

describe('MessageList.vue', () => {
  it('should render correct contents', () => {
    const vm = render()
    const collection = vm.$refs.list.getElementsByTagName('li')
    expect(collection.length).to.equal(2)
  })
})
