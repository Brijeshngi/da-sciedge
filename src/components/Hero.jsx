
import { Box, Grid, Typography, Stack, Button, Paper, Skeleton } from '@mui/material'
import useSkeleton from '../hooks/useSkeleton'

export default function Hero(){
  const loading = useSkeleton(800)
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={7}>
          <Stack spacing={2}>
            <Typography color="secondary.main" sx={{ fontWeight: 700, letterSpacing: 1 }}>
              AI-Powered Science
            </Typography>
            {loading ? (
              <Skeleton variant="rounded" height={60} sx={{ maxWidth: 720 }} />
            ) : (
              <Typography variant="h2" sx={{ fontSize: { xs: 28, sm: 36, md: 44 } }}>
                Accelerating Discovery with <Typography component="span" color="primary.main" variant="inherit" sx={{ fontWeight: 800 }}>AI, ML</Typography> and Advanced Scientific Data Analysis
              </Typography>
            )}
            <Typography color="text.secondary">
              SciEdge partners with Life Sciences, Biotech, Healthcare, and Academia to transform complex datasets into actionable insights — securely, reproducibly, and at scale.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ pt: 1, flexWrap: 'wrap' }}>
              <Button variant="contained">Explore Solutions</Button>
              <Button variant="outlined">View Technologies</Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper sx={{ height: { xs: 220, sm: 260 }, borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
            {loading ? (
              <Skeleton variant="rectangular" height="100%" />
            ) : (
              <Box sx={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(600px 300px at 20% 20%, rgba(65,201,226,0.35), transparent 60%), radial-gradient(400px 200px at 70% 30%, rgba(142,240,212,0.35), transparent 60%), url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\'><defs><linearGradient id=\'g\' x1=\'0\' x2=\'1\'><stop stop-color=\'%23ffffff\' stop-opacity=\'0.8\'/><stop offset=\'1\' stop-color=\'%23ffffff\' stop-opacity=\'0.1\'/></linearGradient></defs><g fill=\'none\' stroke=\'url(%23g)\' stroke-width=\'1\'><path d=\'M0 200 C 150 50 300 350 450 200 S 650 50 800 200\'/><path d=\'M0 250 C 150 100 300 400 450 250 S 650 100 800 250\'/><path d=\'M0 150 C 150 0 300 300 450 150 S 650 0 800 150\'/></g></svg>") center/cover no-repeat'
              }} />
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
