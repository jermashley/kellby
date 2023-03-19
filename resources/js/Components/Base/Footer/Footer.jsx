import { faCopyright } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flex, Footer as AppFooter, Text } from '@mantine/core'

export const Footer = () => {
  return (
    <AppFooter height={60} p="md">
      <Flex direction={`row`} justify={`center`} align={`center`}>
        <Text size={`sm`}>
          <FontAwesomeIcon icon={faCopyright} fixedWidth /> Codesign HQ{` `}
          {new Date().getFullYear()}
        </Text>
      </Flex>
    </AppFooter>
  )
}
