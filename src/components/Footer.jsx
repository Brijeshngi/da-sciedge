
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

export default function Footer(){
  return (
    <Box sx={{ py: 6, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary">
          (c) 2025 SciEdge Innovations. All rights reserved.
        </Typography>
        <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Link href="/" underline="hover" color="text.secondary">Home</Link>
          <Link href="/solutions" underline="hover" color="text.secondary">Solutions</Link>
          <Link href="/about" underline="hover" color="text.secondary">About</Link>
          <Link href="/contact" underline="hover" color="text.secondary">Contact</Link>
        </Box>
      </Container>
    </Box>
  )
}
