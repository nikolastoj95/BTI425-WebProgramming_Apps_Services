// export function middleware(request) {
//   console.log('requested: ', request.url);
// }

// export const config = {
//   matcher: ['/', '/about', '/api/names/:paths'],
// }

// export function middleware(request) {
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     console.log('Visiting About');
//   }

//   if (request.nextUrl.pathname.startsWith('/api/users')) {
//     console.log('Visiting the Users API');
//   }
// }
// import { NextResponse } from 'next/server';
// export default function middleware(request) {
//     const response = NextResponse.next();

//      if (request.nextUrl.pathname.startsWith('/setCookie')) {
//         // get the value of "message" from the query string i.e  /setCookie?message=Hello World
//         let cookieMessage = request.nextUrl.searchParams.get('message');
//         // add the 'set-cookie' header in the response with the  cookie "message" / value  from the query string
//         response.cookies.set('message', cookieMessage);
//     }

//      if (request.nextUrl.pathname.startsWith('/getCookie')) {
//         let cookie = request.cookies.get('message');
//         console.log(cookie);
//     }


//     return response;
// }

import { NextResponse } from 'next/server';

export function middleware(request) {
    // get the 'Accept-Language header'
  const language = request.headers.get('Accept-Language');

  if (language.includes('fr')) {
    // peform the url rewrite
    return NextResponse.rewrite(new URL('/fr/about', request.url));
  }
}

export const config = {
  matcher: ['/about'],
};

