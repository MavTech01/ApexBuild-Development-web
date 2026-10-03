const BASE_URL = import.meta.env.VITE_API_URL || '/api'

export class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

async function request(path, options = {}) {
  let response

  try {
    response = await fetch(`${BASE_URL}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    })
  } catch {
    throw new ApiError('Could not reach the server. Is the backend running?', 0)
  }

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new ApiError(data?.message || `Request failed with status ${response.status}`, response.status)
  }

  return data
}

export function getHealth() {
  return request('/health')
}
