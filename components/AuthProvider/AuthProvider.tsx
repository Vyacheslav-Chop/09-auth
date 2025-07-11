"use client";

import { checkSession, fetchUser } from "@/lib/api/clientApi";
import { useAuth } from "@/lib/store/authStore";
import React, { useEffect } from "react";

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const setUser = useAuth((state) => state.setUser);
  const clearIsAuthenticated = useAuth((state) => state.clearIsAuthenticated);

  useEffect(() => {

    const fetchSession = async () => {
      const isAuthenticated = await checkSession();
      if (isAuthenticated) {
        const user = await fetchUser();
        setUser(user);
      } else {
        clearIsAuthenticated();
      }
    };
    fetchSession();
  }, [setUser, clearIsAuthenticated]);
  return children;
};

export default AuthProvider;
