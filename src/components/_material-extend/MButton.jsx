import { forwardRef } from 'react'
// material
import { styled } from '@mui/styles'
import { alpha, Button } from '@mui/material'

// ----------------------------------------------------------------------

const ButtonStyle = styled(Button)(({ theme, styleProps }) => {
  const { color, variant } = styleProps

  const styleContained = color => ({
    color: theme.palette[color].contrastText,

    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette[color].dark,
    },
  })

  const styleOutlined = color => ({
    color: theme.palette[color].main,
    border: `1px solid ${alpha(theme.palette[color].main, 0.48)}`,
    '&:hover': {
      border: `1px solid ${theme.palette[color].main}`,
      backgroundColor: alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
    },
  })

  const styleText = color => ({
    color: theme.palette[color].main,
    borderRadius: theme.spacing(1.5),

    '&:hover': {
      backgroundColor: alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
    },
  })

  const styleSquare = color => ({
    backgroundColor: theme.palette[color].main,
    color: '#fff',
    border: 'none',
    borderRadius: theme.spacing(1.5),
    '&:hover': {
      backgroundColor: theme.palette[color].main,
    },
  })
  return {
    ...(variant === 'contained' && { ...styleContained(color) }),
    ...(variant === 'outlined' && { ...styleOutlined(color) }),
    ...(variant === 'text' && { ...styleText(color) }),
    ...(variant === 'square' && { ...styleSquare(color) }),
  }
})

// ----------------------------------------------------------------------

const MButton = forwardRef(({ color = 'primary', variant = 'text', children, ...other }, ref) => {
  // if (color === 'inherit' || color === 'primary' || color === 'secondary') {
  //   return (
  //     <Button ref={ref} color={color} variant={variant} {...other}>
  //       {children}
  //     </Button>
  //   )
  // }

  return (
    <ButtonStyle ref={ref} variant={variant} styleProps={{ color, variant }} {...other}>
      {children}
    </ButtonStyle>
  )
})

// MButton.propTypes = {
//   children: PropTypes.node,
//   color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error']),
//   variant: PropTypes.oneOfType([PropTypes.oneOf(['contained', 'outlined', 'text']), PropTypes.string]),
// }

export default MButton
