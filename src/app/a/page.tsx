import ClientSide from '@/components/clientSide'
import Title from '@/components/Title'

export default function PageA() {
  return (
    <div className="flex flex-col">
      <Title />
      <ClientSide />
    </div>
  )
}
