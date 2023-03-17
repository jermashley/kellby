import PropTypes from 'prop-types'

export const ComposeComponents = ({ components, children }) => {
  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>
      }, children)}
    </>
  )
}
