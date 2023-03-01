import { NextRequest, NextResponse } from 'next/server'

export const config = {
    matcher: '/bst-es',
  }

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req
  
  const country =(geo && geo.country) || 'US'
  const city = (geo && geo.city) || 'San Francisco'
  const region = (geo && geo.region) || 'CA'

//   const path  = req.nextUrl.pathname

console.log(country,city,region,"geolocation")

//   url.searchParams.set('country', country)
//   url.searchParams.set('city', city)
//   url.searchParams.set('region', region)

  return NextResponse.rewrite(url+`?country=${country}&city=${city}&region=${region}`)
 
}

