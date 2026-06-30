import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            company: null,
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,

            login: ({ user, accessToken, refreshToken }) =>
                set({
                    user,
                    accessToken,
                    refreshToken,
                    isAuthenticated: true,
                }),

            setCompany: (company) =>
                set({ company }),

            logout: () =>
                set({
                    user: null,
                    company: null,
                    accessToken: null,
                    refreshToken: null,
                    isAuthenticated: false,
                }),
        }),
        {
            name: "auth-storage",
        }
    )
);

export default useAuthStore;