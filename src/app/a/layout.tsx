import Title from '@/components/Title'

export default function LayoutA({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col">
      <Title />
      {children}
    </div>
  )
}
