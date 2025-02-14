
import { create } from "zustand";

interface UserStoreState {
	name: string | null;
	setName: (name: string | null) => void;
}

export const useUserStore = create<UserStoreState>((set) => ({
	name: null,
	setName: (name) =>
		set({
			name
		})
}));
