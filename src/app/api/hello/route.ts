export async function GET(request: Request) {
  return new Response("Hello, Next.js!", { headers: request.headers })
}
