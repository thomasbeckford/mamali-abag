import {
  FormControl,
  FormLabel,
  Typography,
  Box,
  OutlinedInput,
  Select,
  MenuItem,
  MenuItemProps,
  styled,
  SelectChangeEvent,
} from '@mui/material'
import { tokens } from '../Swap/tokens'
import { TokenSelectFieldProps } from './TokenSelectField.d'
import Image from 'next/image'

const MenuProps = {
  PaperProps: {
    style: {},
  },
}

const StyledMenuItem = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  padding: '20px 32px',
  '&:hover': {
    background: theme.customColors.ash40,
  },
}))

export default function TokenSelectField({
  token,
  onChange,
}: TokenSelectFieldProps) {
  const handleChange = (event: SelectChangeEvent<typeof token.name>) => {
    const {
      target: { value },
    } = event

    onChange({
      ...token,
      name: value,
    })
  }

  return (
    <FormControl sx={{ width: '260px' }}>
      <FormLabel>
        <Typography
          variant="inputLabel"
          sx={{ color: ({ customColors }) => customColors.darkAsh }}
        >
          To
        </Typography>
      </FormLabel>
      <Select
        displayEmpty
        labelId="token-selector"
        id="token-selector"
        value={token.name}
        onChange={handleChange}
        input={<OutlinedInput />}
        MenuProps={MenuProps}
      >
        {tokens.map(({ name, icon }) => (
          <StyledMenuItem key={name} value={name}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Image src={icon} alt={name} width="20" height="20" />
              <Typography>{name}</Typography>
            </Box>
          </StyledMenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
