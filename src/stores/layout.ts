import {create} from "zustand"

type UIState = {
    isSidebarOpen : boolean
    toggleSidebar : ()=>void
    setSidebarOpen : (open:boolean)=>void
    
}
export const usesidebarStore = create<UIState>((set)=>({
    isSidebarOpen : false,
    toggleSidebar : ()=>set((s)=>({isSidebarOpen:!s.isSidebarOpen})),
    setSidebarOpen : (open:boolean)=>set({isSidebarOpen:open})
}))
