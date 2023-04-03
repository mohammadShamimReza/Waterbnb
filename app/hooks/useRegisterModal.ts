import { create } from "zustand";


interface ReginterModalStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}
 const useRegisterModal = create<ReginterModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
 }))

export default useRegisterModal;