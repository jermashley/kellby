import { useDayJs } from '@Hooks/useDayJs'
import { Flex, NumberInput } from '@mantine/core'
import { useEffect } from 'react'

const UserProfileIndexPage = ({ log }) => {
  const dayjs = useDayJs()

  useEffect(() => {
    console.log(dayjs.duration(log.milliseconds))
  }, [log])

  return (
    <div className="min-h-screen w-full">
      <p className="text-lg text-zinc-700">User Profile</p>
    </div>
  )
}

export default UserProfileIndexPage
