import { config } from "@/config/constants"

export async function GET(request: Request) {

  const res = await fetch(config.backendUrl +`/api/productsFilter`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const product = await res.json()
 
  return Response.json(product)
}