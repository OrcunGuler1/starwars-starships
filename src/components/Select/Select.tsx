import type { SelectOption, SelectProps } from '../../types/types'
import { useEffect, useRef, useState } from 'react'
const Select = ({ multi, value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const clearOpts = () => {
    multi ? onChange([]) : onChange(undefined)
  }

  const selectOption = (option: SelectOption) => {
    if (multi) {
      if (value?.includes(option)) {
        onChange(value.filter(opt => opt !== option))
      } else {
        onChange([...value, option])
      }
    } else {
      if (value !== option) onChange(option)
    }
  }

  const isOptSelected = (option: SelectOption) => {
    return multi ? value?.includes(option) : value === option
  }

  useEffect(() => {
    if (isOpen) setHighlightIndex(0)
  }, [isOpen])

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'Enter':
        case 'Space':
          setIsOpen(prev => !prev)
          if (isOpen) selectOption(options[highlightIndex])
          break
        case 'ArrowUp':
        case 'ArrowDown': {
          if (!isOpen) {
            setIsOpen(true)
            break
          }

          const newValue = highlightIndex + (e.code === 'ArrowDown' ? 1 : -1)
          if (newValue >= 0 && newValue < options.length) {
            setHighlightIndex(newValue)
          }
          break
        }
        case 'Escape':
          setIsOpen(false)
          break
      }
    }
    containerRef.current?.addEventListener('keydown', handle)

    return () => {
      containerRef.current?.removeEventListener('keydown', handle)
    }
  }, [isOpen, highlightIndex, options])

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className="relative my-5 flex min-h-full w-80 items-center gap-2 self-end rounded border border-gray-300 p-2 outline-none focus:border-blue-500 focus:outline-1"
      onClick={() => setIsOpen(prev => !prev)}
      onBlur={() => setIsOpen(false)}
    >
      <span className="flex flex-grow flex-wrap gap-2">
        {value instanceof Array && value.length === 0 && (
          <span className="text-gray-400">Select...</span>
        )}
        {multi
          ? value?.map(v => (
              <button
                key={v.value}
                onClick={e => {
                  e.stopPropagation()
                  selectOption(v)
                }}
                className="flex cursor-pointer items-center gap-1 rounded border border-gray-300 bg-none px-0.5 py-1 text-white outline-none hover:bg-gray-200 focus:bg-gray-200"
              >
                {v.label}
                <span className="text-xl text-white hover:text-gray-500 focus:text-gray-500">
                  &times;
                </span>
              </button>
            ))
          : value?.label}
      </span>
      <button
        className="cursor-pointer border-none bg-none p-0 text-white outline-none hover:text-slate-500 focus:text-slate-500"
        onClick={e => {
          e.stopPropagation()
          clearOpts()
        }}
      >
        &times;
      </button>
      <div className="w-0.5 self-stretch bg-gray-400" />
      <div className="translate-y-1/4 cursor-pointer border-y-4 border-x-4 border-transparent border-t-gray-400" />
      <ul
        className={`absolute left-0 top-[calc(100%-0.25rem)] z-50 m-0 max-h-60 w-full overflow-y-auto rounded border border-gray-700 bg-white p-0 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {options.map((option, index) => (
          <li
            key={option.value}
            onMouseEnter={() => setHighlightIndex(index)}
            className={`cursor-pointer px-1 py-2 ${
              isOptSelected(option) && 'bg-slate-500 text-white'
            } ${highlightIndex === index && 'bg-slate-700 text-white'}`}
            onClick={e => {
              e.stopPropagation()
              selectOption(option)
              setIsOpen(false)
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Select
