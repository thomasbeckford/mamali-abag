import { Box, Divider, Grid, Typography } from '@mui/material'

const TransactionDetailsText = () => (
  <Box>
    <Grid
      container
      alignContent="left"
      sx={{ textAlign: 'left', marginBottom: '16px' }}
    >
      <Grid item xs={6}>
        <Typography variant="body2" sx={{ marginTop: '16px' }}>
          Liquidity Provider Free
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography
          variant="body2"
          sx={{ marginTop: '16px', textAlign: 'right' }}
        >
          0.0000005 ETH
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body2" sx={{ marginTop: '16px' }}>
          Price Impact
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography
          variant="body2"
          sx={{ marginTop: '16px', textAlign: 'right' }}
        >
          0.00%
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body2" sx={{ marginTop: '16px' }}>
          Allowed Slippage
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography
          variant="body2"
          sx={{ marginTop: '16px', textAlign: 'right' }}
        >
          0.50%
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body2" sx={{ marginTop: '16px' }}>
          Minimum Received
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography
          variant="body2"
          sx={{ marginTop: '16px', textAlign: 'right' }}
        >
          99.98 AVAX
        </Typography>
      </Grid>
    </Grid>

    <Divider />

    <Box sx={{ marginTop: '16px', textAlign: 'left' }}>
      <Typography variant="caption">
        Output is estimated. you will receive at least{' '}
        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
          99.95 AVAX
        </Typography>{' '}
        or the transaction will revert.
      </Typography>
    </Box>
  </Box>
)

export default TransactionDetailsText
