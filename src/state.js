import { create } from "zustand";


 export const userStore=create(set=>({
    user:JSON.parse(localStorage.getItem("user")),
    setUser:(user)=>set(()=>({user}))
}))



export const useAuth=create(set=>({
    isAuthenticated:localStorage.getItem('token')?true:false,
    setAuth:()=>{set({ isAuthenticated: true })},
    unSet:()=>{set({ isAuthenticated: false })}
}))



export const useModal=create(set=>(
  {
    modal:false,
    showModal:()=>{
      set({modal:true})},
    hideModal:()=>{
      set({modal:false})}
  }
))

export const useLoader = create((set) => ({
  loader: false,
  showLoader: () => {
    set({ modal: true });
  },
  hideLoader: () => {
    set({ modal: false });
  },
}));

