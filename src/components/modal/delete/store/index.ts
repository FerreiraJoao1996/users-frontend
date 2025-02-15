import { create } from "zustand";

interface OpenModalProps {
	clientName?: string;
	onAccept?: (...rest: any[]) => Promise<any | void>;
	onCloseSuccess?: (...rest: any[]) => void;
	onCloseError?: (...rest: any[]) => void;
}

export interface DeleteStoreState {
	clientName?: string;
	open: boolean;
	setModalOpen: (open: boolean) => void;
	openModal: (props: OpenModalProps) => void;
	closeModal: () => void;
	fnCallback?(): void;
	name: string | null;
	setName: (name: string | null) => void;
}

export const useDeleteStore = create<DeleteStoreState>((set) => ({
	open: false,
	setModalOpen: (open) => set({ open }),
	openModal: (props: OpenModalProps) =>
		set(() => ({
			open: true,
			clientName: props.clientName,
			fnCallback: props.onAccept,
		})),
	closeModal: () =>
		set({
			open: false,
			name: null,
			clientName: undefined,
			fnCallback: undefined,
		}),
	name: null,
	setName: (name) => set({ name }),
}));
