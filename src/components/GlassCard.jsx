
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
export default function GlassCard({ children, sx }){
  return <Card sx={{ borderRadius: 3, ...sx }}><CardContent>{children}</CardContent></Card>
}
