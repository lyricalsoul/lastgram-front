import Skeleton from './Skeleton'

export default (props) => {
  return <Skeleton size="100vw" clipPath="polygon(0 20%, 100% 0, 100% 80%, 0 100%)">
    <img {...props} style={{ width: '100%' }} />
  </Skeleton>
}