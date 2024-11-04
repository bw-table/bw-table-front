import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { END_POINT } from '@/constants/endPoint';

interface TokenPayload {
  exp?: number; // 토큰 만료 시간 (Unix timestamp)
  iat?: number; // 토큰 발급 시간
  sub?: string; // 토큰 주체 (보통 사용자 ID)
}

class TokenManager {
  private static instance: TokenManager;
  private token: string | null = null;
  private refreshPromise: Promise<string | null> | null = null;

  private constructor() {}

  public static getInstance(): TokenManager {
    if (!TokenManager.instance) {
      TokenManager.instance = new TokenManager();
    }
    return TokenManager.instance;
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  clearToken() {
    this.token = null;
  }

  async refreshToken(): Promise<string | null> {
    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    this.refreshPromise = (async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}${END_POINT.TOKEN_REFRESH}`,
          {},
          {
            withCredentials: true,
          },
        );

        const { accessToken } = await response.data.data;
        this.setToken(accessToken);
        return accessToken;
      } catch (error) {
        console.error('Error refreshing token:', error);
        this.clearToken();
        return null;
      } finally {
        this.refreshPromise = null;
      }
    })();

    return this.refreshPromise;
  }

  decodeToken(): TokenPayload | null {
    try {
      return this.token ? jwtDecode<TokenPayload>(this.token) : null;
    } catch {
      return null;
    }
  }

  private isTokenExpired(): boolean {
    try {
      if (!this.token) return true;

      const decoded = jwtDecode<TokenPayload>(this.token);
      if (!decoded.exp) return true;

      // 만료 5분 전부터는 만료된 것으로 간주
      const currentTime = Date.now() / 1000;
      return decoded.exp <= currentTime + 300;
    } catch {
      return true;
    }
  }
}

export const tokenManager = TokenManager.getInstance();
