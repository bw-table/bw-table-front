import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get('SSID')?.value;

  if (!token) {
    cookieStore.delete('SSID');
    cookieStore.delete('authjs.session-token');
    return new Response('Unauthorized', { status: 401 });
  }

  return new Response(token);
}

export async function DELETE() {
  const cookieStore = await cookies();

  cookieStore.delete('SSID');
  cookieStore.delete('authjs.session-token');

  return new Response('Logged out successfully', {
    status: 200,
    headers: {
      'Clear-Site-Data': '"cookies"',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      Pragma: 'no-cache',
    },
  });
}

export async function PUT(request: Request) {
  try {
    const cookieStore = await cookies();
    const newToken = await request.text();

    if (!newToken) {
      return new Response('New token is required', { status: 400 });
    }

    cookieStore.delete('SSID');
    cookieStore.set('SSID', newToken, {
      httpOnly: true,
      sameSite: 'lax',
    });

    return new Response('Token updated successfully', {
      status: 200,
      headers: {
        'Cache-Control':
          'no-store, no-cache, must-revalidate, proxy-revalidate',
        Pragma: 'no-cache',
      },
    });
  } catch (error) {
    console.error('Token update error:', error);
    return new Response('Failed to update token', { status: 500 });
  }
}
