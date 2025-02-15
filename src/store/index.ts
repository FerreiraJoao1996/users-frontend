
import { create } from "zustand";
import { Users } from "../components/users/dto/users";

interface UserStoreState {
	name: string | null;
	setName: (name: string | null) => void;
	userId: number | null;
	setUserId: (name: number | null) => void;
	users: Users[];
  	setUsers: (users: Users[]) => void;
	addUser: (user: Users) => void;
	removeUser: (id: number) => void;

	modalOpen: boolean;
	setModalOpen: (open: boolean) => void;
	openModal: () => void;
	closeModal: () => void;

	mode: 'create' | 'edit';
	setMode: (name: 'create' | 'edit') => void;
}

export const useUserStore = create<UserStoreState>((set) => ({
	name: null,
	setName: (name) =>
		set({
			name
		}),
	userId: null,
	setUserId: (userId) =>
		set({
			userId
		}),
	users: [],
	setUsers: (users) => set({ users }),
	addUser: (user) => set((state) => {
		if (!state.users.some((existingUser) => existingUser.id === user.id)) {
		return { users: [...state.users, user] };
		}
		return state;
	}),
	removeUser: (id) =>
		  set((state) => ({
			users: state.users.filter((user) => user.id !== id),
		  })),

	modalOpen: false,
	setModalOpen: (open) =>
		set({
			modalOpen: open
		}),
	openModal: () =>
		set({
			modalOpen: true
		}),
	closeModal: () =>
		set({
			modalOpen: false,
			userId: undefined
		}),

	mode: 'create',
	setMode: (mode) =>
		set({
			mode
		}),
}));
