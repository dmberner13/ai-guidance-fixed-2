"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { useAuth } from "./auth-context"

interface ProgressState {
  visionValues: boolean
  centerPeople: boolean
  advanceEquity: boolean
  ethics: boolean
  continuousImprovement: boolean
}

interface ProgressContextType {
  progress: ProgressState
  updateSection: (key: keyof ProgressState, value: boolean) => void
  percentage: number
  loadingProgress: boolean
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

export const useProgress = () => {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider")
  }
  return context
}

const defaultState: ProgressState = {
  visionValues: false,
  centerPeople: false,
  advanceEquity: false,
  ethics: false,
  continuousImprovement: false,
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const [progress, setProgress] = useState<ProgressState>(defaultState)
  const [loadingProgress, setLoadingProgress] = useState(true)

  useEffect(() => {
    const loadProgress = async () => {
      if (user) {
        try {
          const docRef = doc(db, "progress", user.uid)
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()) {
            setProgress(docSnap.data() as ProgressState)
          }
        } catch (error) {
          console.error("Error loading progress from Firestore:", error)
        }
      } else {
        const stored = localStorage.getItem("swwc-ai-progress")
        if (stored) {
          setProgress(JSON.parse(stored))
        }
      }
      setLoadingProgress(false)
    }

    loadProgress()
  }, [user])

  useEffect(() => {
    const saveProgress = async () => {
      if (loadingProgress) return

      if (user) {
        try {
          const docRef = doc(db, "progress", user.uid)
          await setDoc(docRef, progress)
        } catch (error) {
          console.error("Error saving progress to Firestore:", error)
        }
      } else {
        localStorage.setItem("swwc-ai-progress", JSON.stringify(progress))
      }
    }

    saveProgress()
  }, [progress, user, loadingProgress])

  const updateSection = (key: keyof ProgressState, value: boolean) => {
    setProgress((prev) => ({ ...prev, [key]: value }))
  }

  const percentage = (Object.values(progress).filter(Boolean).length / Object.keys(progress).length) * 100

  return (
    <ProgressContext.Provider value={{ progress, updateSection, percentage, loadingProgress }}>
      {!loadingProgress && children}
    </ProgressContext.Provider>
  )
}
