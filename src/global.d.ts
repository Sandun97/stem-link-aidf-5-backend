/// <reference types="@clerk/express/env" />

declare module '@clerk/express';
declare module 'openai';
declare module 'dotenv';
declare module 'zod';

export {};

export type Role = "admin";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Role;
    };
  } 
}