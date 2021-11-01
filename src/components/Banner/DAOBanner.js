import styled from '@emotion/styled/macro'
import mq from 'mediaQuery'

import { motion } from 'framer-motion'
import ENSIcon from './images/ENSIcon.svg'
import Arrow from './images/Arrow.svg'

const LogoSmall = styled(motion.img)`
  width: 48px;
  padding: 10px;
  border-radius: 50%;
  margin: auto;
  display: block;
  background: linear-gradient(
    330.4deg,
    #44bcf0 4.54%,
    #7298f8 59.2%,
    #a099ff 148.85%
  );
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.06);
`

const ArrowLink = styled(`a`)``

const ArrowSmall = styled(motion.img)`
  height: 100%;
  margin: auto;
  display: block;
  width: 22px;
  color: #b3b3b3;
`

const BannerTitle = styled(`div`)`
  color: #0e0e0e;
  font-weight: bold;
  font-size: 18px;
`

const BannerContent = styled(`div`)`
  color: #787878;
  font-size: 18px;
  font-weight: 500;
  font-size: 15px;
`

export const MainPageBannerContainer = styled(`div`)`
  position: absolute;
  top: 50px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  background: #ffffff;
  border-radius: 14px;
  max-width: 90%;
  display: grid;
  padding: 15px 0px;
  grid-template-columns: 73px 1fr 50px;
  ${mq.small`
    width: 600px;
    height: 78px;
  `}
`

export const NonMainPageBannerContainer = styled(`div`)`
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  background: #ffffff;
  border-radius: 14px;
  display: grid;
  padding: 15px 0px;
  grid-template-columns: 73px 1fr 50px;
  ${mq.small`
    height: 78px;
  `}
`

export const NonMainPageBannerContainerWithMarginBottom = styled(
  NonMainPageBannerContainer
)`
  margin-bottom: 20px;
`

export function DAOBannerContent() {
  return (
    <>
      <LogoSmall src={ENSIcon} />
      <div>
        <BannerTitle>ENS DAO: A Call for Delegates</BannerTitle>
        <BannerContent>
          ENS is decentralizing governance, and we need delegates.
        </BannerContent>
      </div>
      <ArrowLink target="_blank" rel="noreferrer" href="https://ens.mirror.xyz">
        <ArrowSmall src={Arrow} />
      </ArrowLink>
    </>
  )
}
