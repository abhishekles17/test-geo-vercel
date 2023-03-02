import { NextRequest, NextResponse } from "next/server";

export async function middleware(req) {
  const { nextUrl: url, geo } = req;

  const country = (geo && geo.country) || "US";
  const city = (geo && geo.city) || "San Francisco";
  const region = (geo && geo.region) || "CA";


  console.log(country, city, region, "geolocation3");
  console.log(req.url);


  const newUrl = url + `?city=${city}&country=${country}&region=${region}`;
  console.log(newUrl);

  const res = NextResponse.rewrite(newUrl);
  console.log(`?city=${city}&country=${country}&region=${region}`);
  return res;
}
