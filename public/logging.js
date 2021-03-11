self.addEventListener('message', (event) => {
  console.log('Action just happened : ', event.data)
  self.postMessage({
    answer: `action logged with event data ${event.data}`,
  })
})
