import { create } from "zustand";

export const userStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")),
  setUser: (user) => set(() => ({ user })),
}));

export const useAuth = create((set) => ({
  isAuthenticated: localStorage.getItem("token") ? true : false,
  setAuth: () => {
    set({ isAuthenticated: true });
  },
  unSet: () => {
    set({ isAuthenticated: false });
  },
}));

export const useModal = create((set) => ({
  modalShown: false,
  modalText: "Set The Modal Text Here",
}));

export const useError = create((set) => ({
  errorShown: false,
  errorText: "Set Error Message Here",
}));

export const useSuccess = create((set) => ({
  successShown: false,
  successText: "Set Success Message Here",
}));
