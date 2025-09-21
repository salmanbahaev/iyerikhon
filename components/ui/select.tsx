'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SelectOption {
  value: string
  label: string
  description?: string
}

interface SelectProps {
  options: SelectOption[]
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
  multiple?: boolean
  className?: string
  disabled?: boolean
  icon?: React.ReactNode
  label?: string
}

export function Select({
  options,
  value,
  onChange,
  placeholder = 'Выберите...',
  multiple = false,
  className,
  disabled = false,
  icon,
  label
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleOptionClick = (optionValue: string) => {
    if (multiple) {
      const newValue = value.includes(optionValue)
        ? value.filter(v => v !== optionValue)
        : [...value, optionValue]
      onChange(newValue)
    } else {
      onChange([optionValue])
      setIsOpen(false)
    }
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    onChange([])
  }

  const selectedOptions = options.filter(option => value.includes(option.value))
  const displayText = selectedOptions.length === 0 
    ? placeholder
    : multiple 
      ? selectedOptions.length === 1
        ? selectedOptions[0].label
        : `Выбрано: ${selectedOptions.length}`
      : selectedOptions[0]?.label || placeholder

  return (
    <div className={cn('relative', className)} ref={selectRef}>
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-2">
          {label}
        </label>
      )}
      
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={cn(
          'w-full flex items-center justify-between px-4 py-3 text-left bg-white border border-slate-300 rounded-lg shadow-sm transition-all duration-200',
          'hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
          'disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed',
          isOpen && 'border-blue-500 ring-2 ring-blue-500',
          className
        )}
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {icon && <span className="text-blue-600 flex-shrink-0">{icon}</span>}
          <span className={cn(
            'truncate',
            value.length === 0 ? 'text-slate-500' : 'text-slate-900'
          )}>
            {displayText}
          </span>
        </div>
        
        <div className="flex items-center gap-2 flex-shrink-0">
          {value.length > 0 && multiple && (
            <button
              onClick={handleClear}
              className="text-slate-400 hover:text-slate-600 transition-colors p-1"
              type="button"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <ChevronDown 
            className={cn(
              'w-4 h-4 text-slate-400 transition-transform duration-200',
              isOpen && 'rotate-180'
            )} 
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          <div className="py-1">
            {options.map((option) => {
              const isSelected = value.includes(option.value)
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleOptionClick(option.value)}
                  className={cn(
                    'w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-150',
                    'flex items-center justify-between group',
                    isSelected && 'bg-blue-50 text-blue-900'
                  )}
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-slate-900 group-hover:text-blue-900">
                      {option.label}
                    </div>
                    {option.description && (
                      <div className="text-sm text-slate-500 group-hover:text-blue-600 mt-0.5">
                        {option.description}
                      </div>
                    )}
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 ml-2" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

// Компонент для множественного выбора с чипсами
export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = 'Выберите...',
  className,
  disabled = false,
  icon,
  label
}: Omit<SelectProps, 'multiple'>) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleOptionClick = (optionValue: string) => {
    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue]
    onChange(newValue)
  }

  const handleRemoveChip = (optionValue: string) => {
    onChange(value.filter(v => v !== optionValue))
  }

  const selectedOptions = options.filter(option => value.includes(option.value))

  return (
    <div className={cn('relative', className)} ref={selectRef}>
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-2">
          {label}
        </label>
      )}
      
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={cn(
          'w-full min-h-[48px] flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg shadow-sm transition-all duration-200 cursor-pointer',
          'hover:border-blue-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500',
          'disabled:bg-slate-50 disabled:cursor-not-allowed',
          isOpen && 'border-blue-500 ring-2 ring-blue-500'
        )}
      >
        <div className="flex items-center gap-3 min-w-0 flex-1 flex-wrap">
          {icon && <span className="text-blue-600 flex-shrink-0">{icon}</span>}
          
          {selectedOptions.length === 0 ? (
            <span className="text-slate-500">{placeholder}</span>
          ) : (
            <div className="flex flex-wrap gap-1">
              {selectedOptions.map((option) => (
                <span
                  key={option.value}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-md"
                >
                  {option.label}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleRemoveChip(option.value)
                    }}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    type="button"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
        
        <ChevronDown 
          className={cn(
            'w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0',
            isOpen && 'rotate-180'
          )} 
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          <div className="py-1">
            {options.map((option) => {
              const isSelected = value.includes(option.value)
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleOptionClick(option.value)}
                  className={cn(
                    'w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-150',
                    'flex items-center justify-between group',
                    isSelected && 'bg-blue-50 text-blue-900'
                  )}
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-slate-900 group-hover:text-blue-900">
                      {option.label}
                    </div>
                    {option.description && (
                      <div className="text-sm text-slate-500 group-hover:text-blue-600 mt-0.5">
                        {option.description}
                      </div>
                    )}
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 ml-2" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}