/* eslint-disable no-param-reassign */
import { axiosDefault } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/endPoint';
import { cookies } from 'next/headers';
import NextAuth, { AuthError } from 'next-auth';
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

          if (data) {
            const cookieStore = await cookies();
            cookieStore.set('SSID', data.accessToken, {
              httpOnly: true,
              sameSite: 'lax',
            });

            return {
              ...data.member,
              restaurantId: data.restaurantId,
            };
          }
          return null;
        } catch (error) {
          console.error('로그인 실패:', error);
          throw new AuthError('로그인에 실패했습니다');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.nickname = user.nickname;
        token.phone = user.phone;
        token.profileImage = user.profileImage;
        token.role = user.role;
        token.businessNumber = user.businessNumber;
        token.restaurantId = user.restaurantId;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.nickname = token.nickname as string;
        session.user.phone = token.phone as string;
        session.user.profileImage = token.profileImage as string;
        session.user.role = token.role as string;
        session.user.businessNumber = token.businessNumber as string;
        session.user.restaurantId = token.restaurantId as number | undefined;
      }
      return session;
    },
  },
});
