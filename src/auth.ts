import { axiosDefault } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/endPoint';
import { cookies } from 'next/headers';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const response = await axiosDefault.post(END_POINT.SIGN_IN, {
            email: credentials?.email,
            password: credentials?.password,
          });

          const { data } = response;

          if (data?.data) {
            const { id, accessToken, name, email } = data.data;
            const cookieStore = await cookies();
            cookieStore.set('SSID', accessToken, {
              httpOnly: true,
              sameSite: 'lax',
            });
            return {
              id,
              name,
              email,
              accessToken,
            };
          }

          return null;
        } catch (error) {
          console.error('로그인 실패:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token }) {
      return token;
    },
    session({ session }) {
      return session;
    },
  },
});
