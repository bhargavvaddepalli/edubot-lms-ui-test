import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hi')({
  component: () => <div>Hello /hi!</div>
})