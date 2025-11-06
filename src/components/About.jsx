
import { Box, Typography, Avatar, Grid, Chip, Link, Skeleton } from '@mui/material'
import GlassCard from './GlassCard.jsx'
import useSkeleton from '../hooks/useSkeleton'

const people = [
  { name: 'Dr. Rishikesh Kumar Gupta', role: 'Co-founder', url: 'https://example.com/rishikesh' },
  { name: 'Dr. Sarita Aryal', role: 'Co-founder', url: 'https://example.com/sarita' },
  { name: 'Dr. Deepak Raikwar', role: 'Board Member', url: 'https://example.com/deepak' },
  { name: 'Brijesh Gupta', role: 'Co-founder', url: 'https://example.com/brijesh' },
]

export default function About(){
  const loading = useSkeleton(600)
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>About Us</Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Leadership team combining biomedical research and platform engineering.
      </Typography>
      <Grid container spacing={3}>
        {people.map((p, i)=>(
          <Grid item xs={12} sm={6} md={3} key={i}>
            <GlassCard>
              {loading ? <Skeleton variant="rectangular" height={140}/> : (
                <>
                  <Avatar sx={{ bgcolor: 'primary.main', mb: 1 }}>{p.name[0]}</Avatar>
                  <Typography variant="subtitle1">
                    <Link href={p.url} target="_blank" rel="noopener" color="inherit" underline="hover">
                      {p.name}
                    </Link>
                  </Typography>
                  <Chip label={p.role} size="small" variant="outlined" sx={{ mt: 1 }}/>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {p.role} with expertise in data-driven life sciences.
                  </Typography>
                </>
              )}
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
