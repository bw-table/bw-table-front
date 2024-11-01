class TokenManager {
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }
}

export const tokenManager = new TokenManager();
