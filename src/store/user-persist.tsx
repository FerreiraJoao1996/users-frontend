import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Users } from "../components/users/dto/users";

interface UserPersistStoreState {
    users: Users[];
    setUsers: (users: Users[]) => void;
    addUser: (user: Users) => void;
    removeUser: (id: number) => void;
}

export const useUserPersistStore = create<UserPersistStoreState>()(
  persist(
    (set) => ({
      
      users: [],
      setUsers: (users) => set({ users }),
      addUser: (user) => set((state) => ({
          users: [...state.users, user],
      })),
      removeUser: (id) => set((state) => ({
          users: state.users.filter((user) => user.id !== id),
      })),
     
    }),
    { name: "user-store" }
  )
);
