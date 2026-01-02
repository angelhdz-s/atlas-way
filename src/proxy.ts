import { NextResponse } from 'next/server';

export { default } from 'next-auth/middleware';

export function proxy() {
	return NextResponse.next();
}

export const config = { matcher: ['/dashboard'] };
