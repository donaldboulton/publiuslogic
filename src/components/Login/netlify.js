import netlifyIdentity from 'netlify-identity-widget'
import fetch from 'node-fetch'

async function getToken () {
  const currentUser = netlifyIdentity.currentUser()
  if (!currentUser) {
    return ''
  }
  // fetchs new JWT token only if expired
  await currentUser.jwt()
  return currentUser.token.access_token
}

export async function GET (api) {
  const token = await getToken()
  return (await fetch(`/.netlify/functions${api}`, {
    headers: { Authorization: `Bearer ${token}` },
  })).json()
}

export async function POST (api, body) {
  const token = await getToken()
  return (await fetch(`/.netlify/functions${api}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })).json()
}
