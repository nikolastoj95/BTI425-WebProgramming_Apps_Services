import { NextResponse } from 'next/server';

export function middleware(request) {
    const {pathname} = request.nextUrl;
    const method = request.method;

    if (pathname.startsWith('/api/greet')) {
        console.log(`API ${method} ${pathname} Logged`);
    }

    if (pathname.startsWith('/api/user')) {
        console.log(`API ${method} ${pathname} Logged`);
    }

     if (pathname.startsWith('/api/hello')) {
        console.log(`API ${method} ${pathname} Logged`);
    }

     if (pathname.startsWith('/api/info')) {
        console.log(`API ${method} ${pathname} Logged`);
    }

     if (pathname.startsWith('/api/status')) {
        console.log(`API ${method} ${pathname} Logged`);
    }

     if (pathname.startsWith('/api/version')) {
        console.log(`API ${method} ${pathname} Logged`);
    }


    return NextResponse.next();


    // if (request.nextUrl.pathname.startsWith('/api/greet/:path*')) {
    //     console.log('API GET /api/greet/Alice')
    // }
    // if (request.nextUrl.pathname.startsWith('/api/user/:path*')) {
    //     console.log('visiting - /api/user/id num')
    // }

}