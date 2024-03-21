import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const data = {
    creaters: 8000,
    platformFeePercent: 3,
    uptimePercent: 99.9,
    paidCreaters: '70M',
  }

  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
