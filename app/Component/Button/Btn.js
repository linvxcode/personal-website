import { Button } from '@nextui-org/react'
import { Link } from 'react-scroll'

const Btn = ({children,className, to, color, variant, onChange,onClick}) => {
  return (
    <div>
      <Button size='lg' className={className} color={color} onClick={onClick} onChange={onChange} variant={variant} as={Link} to={to} smooth={true} duration={500}>
        {children}
      </Button>
    </div>
  )
}

export default Btn
