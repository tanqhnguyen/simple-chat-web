import Vue from 'vue'
import Message from 'src/components/Message'

function render () {
  const Constructor = Vue.extend(Message)
  return new Constructor({
    propsData: {
      message: {
        id: 1,
        content: 'test',
        author: {
          name: 'Author'
        }
      }
    }
  }).$mount()
}

describe('Message.vue', () => {
  it('should render correct contents', () => {
    const vm = render()
    expect(vm.$refs.content.innerHTML.trim()).to.equal('test')
  })

  it('should trigger delete-message event', (done) => {
    const vm = render()
    vm.$on('delete-message', (payload) => {
      expect(payload).to.eql({id: 1})
      done()
    })

    vm.$refs.deleteMessage.click()
  })
})
