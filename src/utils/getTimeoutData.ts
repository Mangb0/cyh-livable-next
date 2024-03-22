export const getTimeoutData = async () => {
  const response = await fetch('http://localhost:3000/data.json', {
    cache: 'no-store',
  })
  const data = await response.json()
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 3000)
  })
}
