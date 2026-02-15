"use client"

import React, { createContext, useContext, useState, useCallback } from 'react'

const ToastContext = createContext(null)

let idCounter = 1

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const push = useCallback((type, message, timeout = 4000) => {
    const id = idCounter++
    setToasts(prev => [...prev, { id, type, message }])
    if (timeout > 0) setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), timeout)
    return id
  }, [])

  const remove = useCallback((id) => setToasts(prev => prev.filter(t => t.id !== id)), [])

  const toast = {
    success: (msg, timeout) => push('success', msg, timeout),
    error: (msg, timeout) => push('error', msg, timeout),
    info: (msg, timeout) => push('info', msg, timeout),
    remove,
  }

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div aria-live="polite" className="fixed right-4 top-4 z-50 space-y-2">
        {toasts.map(t => (
          <div key={t.id} className={`max-w-sm px-4 py-2 rounded shadow text-white ${t.type === 'success' ? 'bg-green-600' : t.type === 'error' ? 'bg-red-600' : 'bg-blue-600'}`}>
            {t.message}
            <button onClick={() => remove(t.id)} className="ml-3 font-bold">×</button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}

export default ToastProvider
