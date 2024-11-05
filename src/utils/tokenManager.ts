import axios from 'axios';
import { axiosAuth } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/endPoint';

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

  async fetchHttpOnlyToken() {
    try {
      const res = await axios.get('/api/token');
      this.setToken(res.data);
      return res.data;
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      this.refreshPromise = null;
    }
  }

  async getNewToken() {
    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    try {
      const res = await axiosAuth.post(END_POINT.TOKEN_REFRESH, {
        accessToken: this.token,
      });
      const { accessToken } = res.data.data;
      await this.updateToken(accessToken); // 새로운 토큰으로 업데이트
      return accessToken;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async clearTokens() {
    try {
      await axios.delete('/api/token', {
        withCredentials: true,
      });

      this.token = null;
      this.refreshPromise = null;

      return true;
    } catch (error) {
      console.error('토큰 삭제 중 에러 발생:', error);
      return false;
    }
  }

  async updateToken(newToken: string) {
    try {
      await axios.put('/api/token', newToken, {
        withCredentials: true,
      });

      this.setToken(newToken);

      return true;
    } catch (error) {
      console.error('토큰 업데이트 중 에러 발생:', error);
      return false;
    }
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    if (this.token) {
      return this.token;
    }
    return null;
  }
}

export const tokenManager = TokenManager.getInstance();
