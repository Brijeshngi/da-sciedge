
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
export default function NavButton({ to, children, variant='contained', ...props }){
  return <Button component={RouterLink} to={to} variant={variant} size="medium" {...props}>{children}</Button>
}
