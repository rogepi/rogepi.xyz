export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string
      NEXTAUTH_URL: string
      NEXT_AUTH_SECRET: string
      PERSON_USERNAME: string
      PERSON_EMAIL: string
      GITHUB_CLIENT_ID: string
      GITHUB_CLIENT_SECRET: string
      GOOGLE_CLIENT_ID: string
      GOOGLE_CLIENT_SECRET: string
      ENV: 'test' | 'dev' | 'production'
    }
  }
}
