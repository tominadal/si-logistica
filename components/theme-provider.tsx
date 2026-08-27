'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Theme = 'light' | 'dark'
const ThemeContext = createContext<{ theme: Theme; setTheme: (theme: Theme) => void }>({ theme: 'dark', setTheme: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark')
  useEffect(() => { document.documentElement.classList.add('dark'); document.documentElement.classList.remove('light') }, [])
  const setTheme = (next: Theme) => { setThemeState(next); document.documentElement.classList.toggle('dark', next === 'dark'); document.documentElement.classList.toggle('light', next === 'light') }
  const value = useMemo(() => ({ theme, setTheme }), [theme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() { return useContext(ThemeContext) }

import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button 
      aria-label="Cambiar tema" 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:bg-foreground/10"
    >
      {theme === 'dark' ? <Sun className="h-5 w-5" strokeWidth={1} /> : <Moon className="h-5 w-5" strokeWidth={1} />}
    </button>
  )
}
