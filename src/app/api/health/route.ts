import { NextResponse } from 'next/server'
import payload from 'payload'

export async function GET() {
  try {
    // Perform a simple query to keep the database active
    await payload.find({
      collection: 'users',
      limit: 1,
    })

    return NextResponse.json({ status: 'ok', message: 'Database health check successful' })
  } catch (error) {
    console.error('Health check failed:', error)
    return NextResponse.json(
      { status: 'error', message: 'Database health check failed' },
      { status: 500 },
    )
  }
}
