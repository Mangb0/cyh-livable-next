import Title from '@/components/Title'
import ServerSide from '@/components/serverSide'

export default async function PageB() {
  return (
    <div className="flex flex-col">
      <Title />
      <ServerSide />
    </div>
  )
}
