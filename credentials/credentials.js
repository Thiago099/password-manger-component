import './credentials.css'

function copyOnClick(element)
{
  element.addEventListener('click',e=>{
    //copy inner text to clipboard
    const text = e.target.innerText;
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
  })
}
export function appendCredentials(element, descriptionText, websiteText, usernameText, passwordText)
{
  const container = document.createElement('div')
  container.classList.add('credentials-container')
  element.appendChild(container)

  const description = document.createElement('div')
  description.classList.add('item')
  copyOnClick(description)
  container.appendChild(description)

  const website = document.createElement('div')
  website.classList.add('item')
  copyOnClick(website)
  container.appendChild(website)

  const username = document.createElement('div')
  copyOnClick(username)
  username.classList.add('secret','item')
  container.appendChild(username)

  const password = document.createElement('div')
  password.classList.add('secret','item')
  container.appendChild(password)
  copyOnClick(password)

  const showElement = document.createElement('div')
  showElement.setAttribute('draggable', true)
  showElement.classList.add('item','button-show','button')
  showElement.innerHTML = 'Show'
  container.appendChild(showElement)

  var display = false

  showElement.addEventListener('click',()=>{
    display = !display
    function makePublic(element)
    {
      element.classList.add('secret')
    }
    function makeSecret(element)
    {
      element.classList.remove('secret')
    }
    if(display)
    {
      showElement.innerHTML = 'Hide'
      showElement.classList.remove('button-show')
      showElement.classList.add('button-hide')
      makeSecret(username)
      makeSecret(password)
    }
    else
    {
      showElement.classList.add('button-show')
      showElement.classList.remove('button-hide')
      showElement.innerHTML = 'Show'
      makePublic(username)
      makePublic(password)
    }
  })

  description.innerHTML = descriptionText
  website.innerHTML = websiteText
  username.innerHTML = usernameText
  password.innerHTML = passwordText
}