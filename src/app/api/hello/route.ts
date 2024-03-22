export const GET = async () => {
  const res = await fetch('http://localhost:3000/data.json', {
    headers: {
      'content-type': 'application/json',
    },
  })
  const data = await res.json()

  return Response.json({ ...data })
}
