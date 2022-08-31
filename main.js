const app = document.querySelector('#app')

import { appendCredentials } from './credentials/credentials'

appendCredentials(
  app,
  'google account',
  'gmail.com',
  'admin',
  'admin'
)
appendCredentials(
  app,
  'microsoft account',
  'hotmail.com',
  'admin',
  'admin'
)