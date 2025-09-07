'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Home, Users, MessageSquare, Settings, Activity, LogOut, Menu, ChevronLeft, BarChart3 } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { usesidebarStore } from '@/stores/layout'
import { authClient } from '@/app/lib/auth-client'

const navSections = [
  {
    label: 'Overview',
    items: [
      { name: 'Dashboard', href: '/dashboard', icon: <Home size={16} /> },
      { name: 'Leads', href: '/dashboard/leads', icon: <Users size={16} /> },
      { name: 'Campaign', href: '/dashboard/campaigns', icon: <BarChart3 size={16} /> },
      { name: 'Messages', href: '/dashboard/messages', icon: <MessageSquare size={16} />, badge: '10+' },
      { name: 'Linkedin Accounts', href: '/dashboard/accounts', icon: <Users size={16} /> },
    ],
  },
  {
    label: 'Settings',
    items: [
      { name: 'Setting & Billing', href: '/dashboard/settings', icon: <Settings size={16} /> },
    ],
  },
  {
    label: 'Admin Panel',
    items: [
      { name: 'Activity logs', href: '/dashboard/activity', icon: <Activity size={16} /> },
      { name: 'User logs', href: '/dashboard/users', icon: <Users size={16} /> },
    ],
  },
]

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { isSidebarOpen, toggleSidebar, setSidebarOpen } = usesidebarStore()
  const router = useRouter()
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(null)

  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname, setSidebarOpen])

  useEffect(() => {
    async function loadSession() {
      const session = await authClient.getSession()
      //@ts-ignore
      if (session?.user) {
        setUser({
          //@ts-ignore
          name: session.user.name,
          //@ts-ignore
          email: session.user.email,
        })
      }
    }
    loadSession()
  }, [])

  const handleLogout = async () => {
    await authClient.signOut()
    router.push('/authflow')
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside
        className={`bg-white border-r transition-all duration-300 ease-in-out h-screen flex flex-col 
          ${isSidebarOpen ? 'w-60' : 'w-16'} shadow-sm`}
      >
        <div className="flex items-center justify-between px-3 py-4">
          <div className="flex items-center gap-2">
            <div className="text-sky-600 font-bold text-lg">LB</div>
            {isSidebarOpen && <span className="font-semibold text-slate-800">LinkBird</span>}
          </div>
          <Button variant="ghost" size="sm" onClick={toggleSidebar} aria-label="Toggle sidebar">
            {isSidebarOpen ? <ChevronLeft size={18} /> : <Menu size={18} />}
          </Button>
        </div>
        <hr />
        <nav className="flex-1 overflow-auto px-2 py-4 space-y-4">
          {navSections.map((section) => (
            <div key={section.label}>
              {isSidebarOpen && (
                <div className="text-xs uppercase text-slate-400 font-medium px-3 py-2">
                  {section.label}
                </div>
              )}
              <ul className="flex flex-col gap-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`group flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors 
                        ${pathname === item.href ? 'bg-sky-50 text-sky-600' : 'text-slate-700 hover:bg-slate-100'}`}
                    >
                      <span className="opacity-80">{item.icon}</span>
                      {isSidebarOpen && (
                        <span className="flex-1 truncate">{item.name}</span>
                      )}
                      {item.badge && isSidebarOpen && (
                        <span className="ml-auto text-xs bg-sky-100 text-sky-600 rounded-full px-2 py-0.5">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="px-3 py-4 border-t">
          {isSidebarOpen && user && (
            <div className="flex items-center gap-3">
              <Avatar>
                <span>{user.name?.[0] || '?'}</span>
              </Avatar>
              <div>
                <div className="font-medium text-sm">{user.name}</div>
                <div className="text-xs text-slate-500">{user.email}</div>
              </div>
            </div>
          )}
          <Button onClick={handleLogout} size="sm" variant="ghost" className="mt-3 w-full flex items-center gap-2 justify-center">
            <LogOut size={14} />
            {isSidebarOpen && 'Logout'}
          </Button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="h-14 bg-white border-b flex items-center px-6">
          <div className="text-sm text-slate-600">
            Leads <span className="text-slate-400">/ List</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <input
              className="border rounded-md px-3 py-1 text-sm w-56 focus:outline-none focus:ring-1 focus:ring-sky-400"
              placeholder="Search..."
              aria-label="Search"
            />
            <Avatar>
              <span>{user?.name?.[0] || 'A'}</span>
            </Avatar>
          </div>
        </header>
        <main className="p-6 bg-gray-50 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
