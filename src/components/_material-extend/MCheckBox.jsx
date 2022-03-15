import { forwardRef } from 'react'
// material
import { useTheme } from '@mui/styles'
import { Checkbox } from '@material-ui/core'
import { alpha } from '@mui/material/styles'

// ----------------------------------------------------------------------

const MCheckbox = forwardRef(({ color = 'primary', sx, ...other }, ref) => {
  const theme = useTheme()

  return (
    <Checkbox
      ref={ref}
      sx={{
        '&.MuiCheckbox-root': { padding: '0' },
        '&.Mui-checked': {
          color: theme.palette[color].main,
        },
        '&.MuiCheckbox-indeterminate': {
          color: theme.palette[color].main,
        },
        '&:hover, &.Mui-checked:hover': {
          backgroundColor: alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
        },
        ...sx,
      }}
      {...other}
    />
  )
})

// MCheckbox.propTypes = {
//   sx: PropTypes.object,
//   color: PropTypes.oneOf(['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'])
// };

export default MCheckbox
