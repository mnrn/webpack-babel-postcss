const hello = () => {
  const app = document.getElementById('app')
  const hello = document.createElement('div')
  hello.id = 'hello'
  hello.textContent = 'Hello, world!'
  app.appendChild(hello)
}

export { hello }
