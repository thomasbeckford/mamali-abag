import {
  FormControl,
  FormLabel,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { AmountNumberFieldProps } from './AmountNumberField.d'

export default function AmountTextField({
  onChange,
  value,
  infoLabel,
  hasMax = true,
}: AmountNumberFieldProps) {
  const { isConnected } = useContext(AuthContext)

  const min = -10
  const max = 100

  return (
    <FormControl sx={{ width: '100%' }}>
      <FormLabel>
        <Typography
          variant="inputLabel"
          sx={{ color: ({ customColors }) => customColors.darkAsh }}
        >
          Amount
        </Typography>
      </FormLabel>
      <TextField
        id="amount"
        type="number"
        inputProps={{ min: 0, max: 100 }}
        value={value.amount}
        disabled={!isConnected}
        sx={
          !isConnected
            ? {
                background: ({ customColors }) => customColors.ash20,
              }
            : {}
        }
        onChange={(e) => {
          if (e.target.value === '') {
            return
          }
          const amountVal = +e.target.value
          if (amountVal > max) {
            onChange({
              ...value,
              amount: max,
            })
          } else if (amountVal < min) {
            onChange({
              ...value,
              amount: min,
            })
          } else {
            onChange({
              ...value,
              amount: amountVal,
            })
          }
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              {hasMax && (
                <Button
                  disabled={!isConnected}
                  onClick={() =>
                    onChange({
                      ...value,
                      amount: max,
                    })
                  }
                  sx={{
                    background: ({ customColors }) => customColors.blue20,
                    color: ({ customColors }) => customColors.blue,
                    padding: '9px 16px',
                    cursor: 'pointer',
                  }}
                >
                  MAX
                </Button>
              )}
            </InputAdornment>
          ),
        }}
      />
      {isConnected && infoLabel}
    </FormControl>
  )
}
