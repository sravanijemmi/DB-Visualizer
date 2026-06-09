import { create } from "zustand";
import { persist } from 'zustand/middleware'

interface UserStore {
    user: any | null;
    update: (user: any | null) => void;
    // Optionally, you can still have a logout helper:
    logout: () => void;
    getToken: () => string | undefined;

}

export const useUserStore = create<UserStore>()(
    persist(
        (set, get) => ({
            user: null,
            update: (user: any | null) => set(() => ({ user })),
            logout: () => set({ user: null }),
            getToken: () => get().user?.token,
        }),
        {
            name: "user-storage", // Unique name for localStorage key
        }
    )
);