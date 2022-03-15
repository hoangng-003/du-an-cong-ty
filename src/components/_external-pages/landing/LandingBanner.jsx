import React from 'react'
import bannerImg from 'assets/images/main/banner.png'
import { styled } from '@mui/styles'
// import { Typography } from '@mui/material'
import MButton from 'components/_material-extend/MButton'
import ColorMain from 'components/ColorMain'

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(16.25, 10.875, 18.75),
  position: 'relative',
  fontFamily: 'Poppins',
}))

const Content = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: '55%',
  minWidth: 600,
  [theme.breakpoints.down('sm')]: {
    width: '75%',
    minWidth: 0,
  },
}))

const Title = styled('div')(({ theme }) => ({
  fontSize: theme.spacing(6.75),
  color: '#212244',
  fontWeight: 600,
  lineHeight: theme.spacing(10),
  marginBottom: theme.spacing(8),
}))
const SubTitle = styled('div')(({ theme }) => ({
  fontSize: theme.spacing(2.5),
  color: '#94959B',
  lineHeight: '150%',
  marginBottom: theme.spacing(6),
  letterSpacing: 0.64,
}))

const StartBtn = styled(MButton)(({ theme }) => ({
  fontSize: theme.spacing(2.25),
  padding: theme.spacing(2, 4.9375),
  letterSpacing: 0.64,
  fontFamily: 'Poppins',
  fontWeight: 600, 
  lineHeight: theme.spacing(3.375),
}))

const BannerImage = styled('div')(({ theme, url }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 0,
}))
const BackgroundURL = styled('div')(({ url }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: `right / cover no-repeat url(${url})`,
  backgroundColor: '#fff',
}))
const BackgroundGradient = styled('div')(() => ({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: 425,
  background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 16.97%, rgba(255, 255, 255, 0.76) 61.45%, #FFFFFF 100%)`,
}))

export default function LandingBanner() {
  return (
    <RootStyle>
      <Content>
        <Title variant="h1">
          Transforming <ColorMain>M&A Asia</ColorMain> to everyone‘s choice of strategies
        </Title>
        <SubTitle>
          SELLERS and BUYERS from all over the world can meet and <br /> execute transactions on M&M
        </SubTitle>
        <StartBtn variant="square">Get Start</StartBtn>
      </Content>
      <BannerImage>
        <BackgroundURL url={bannerImg} />
        <BackgroundGradient />
      </BannerImage>
    </RootStyle>
  )
}
