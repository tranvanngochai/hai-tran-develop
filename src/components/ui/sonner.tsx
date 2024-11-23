'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          success:
            'group-[.toaster]:bg-green-50 group-[.toaster]:text-green-800 group-[.toaster]:border-green-200 dark:group-[.toaster]:bg-green-950 dark:group-[.toaster]:text-green-100 dark:group-[.toaster]:border-green-900',
          error:
            'group-[.toaster]:bg-red-50 group-[.toaster]:text-red-800 group-[.toaster]:border-red-200 dark:group-[.toaster]:bg-red-950 dark:group-[.toaster]:text-red-100 dark:group-[.toaster]:border-red-900',
          info: 'group-[.toaster]:bg-blue-50 group-[.toaster]:text-blue-800 group-[.toaster]:border-blue-200 dark:group-[.toaster]:bg-blue-950 dark:group-[.toaster]:text-blue-100 dark:group-[.toaster]:border-blue-900',
          warning:
            'group-[.toaster]:bg-yellow-50 group-[.toaster]:text-yellow-800 group-[.toaster]:border-yellow-200 dark:group-[.toaster]:bg-yellow-950 dark:group-[.toaster]:text-yellow-100 dark:group-[.toaster]:border-yellow-900',
          loading:
            'group-[.toaster]:bg-gray-50 group-[.toaster]:text-gray-800 group-[.toaster]:border-gray-200 dark:group-[.toaster]:bg-gray-950 dark:group-[.toaster]:text-gray-100 dark:group-[.toaster]:border-gray-900',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground'
        }
      }}
      {...props}
    />
  )
}

export { Toaster }
