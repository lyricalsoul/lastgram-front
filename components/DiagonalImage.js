import Image from 'next/image'

export default (props) => {
  return <img {...props} style={{
    clipPath: 'polygon(0 20%, 100% 0, 100% 80%, 0 100%)',
    width: '100%',
    height: '100%'
  }} />
}