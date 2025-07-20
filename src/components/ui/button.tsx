// src/components/ui/button.tsx
import * as React from "react"
import { cn } from "../lib/utils"

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition",
        className
      )}
      {...props}
    />
  )
}
