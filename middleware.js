import { NextRequest, NextResponse } from 'next/server'

export const config = {
    matcher: '/bst-es',
  }

export async function middleware(req) {
  const { nextUrl: url, geo } = req
  
  const country =(geo && geo.country) || 'US'
  const city = (geo && geo.city) || 'San Francisco'
  const region = (geo && geo.region) || 'CA'

//   const path  = req.nextUrl.pathname


console.log(country,city,region,"geolocation3")
console.log(req.url)

//   url.searchParams.set('country', country)
//   url.searchParams.set('city', city)
//   url.searchParams.set('region', region)



   const res = NextResponse.rewrite(url)
   res.cookies.set("location",`_${city}_${country}_${region}_2234`);
   return res;
 
}

