"use client"

interface ChecklistItemProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function ChecklistItem({ label, checked, onChange }: ChecklistItemProps) {
  return (
    <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-muted transition-colors">
      <input
        type="checkbox"
        className="h-5 w-5 accent-primary rounded"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="text-sm font-medium">{label}</span>
    </label>
  )
}
