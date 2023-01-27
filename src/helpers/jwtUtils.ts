import jwtDecode from 'jwt-decode'

export namespace JWT {
  const tokenId = 'accessToken'
  export interface DecodedPayload {
    sub: string
    exp: number
    tenantCode: string
    scope: string[]
  }

  export function persistToken(token: string) {
    localStorage.setItem(tokenId, token)
  }

  export function getToken() {
    return localStorage.getItem(tokenId)
  }

  export function removeToken() {
    localStorage.removeItem(tokenId)
  }

  export const isExpiredToken = (accessToken: string) => {
    const decoded: JWT.DecodedPayload = jwtDecode(accessToken)
    return Date.now() / 1000 >= decoded.exp
  }
}
