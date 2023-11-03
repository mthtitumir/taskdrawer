import type { Metadata } from 'next'

interface TasksLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'My Tasks | Check Your Tasks',
}

export default function TasksLayout({ children }: TasksLayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}