import React from 'react'
import HeroHome from './HeroHome/HeroHome'
import HomeAbout from './HomeAbout/HomeAbout'
import ServicesHome from './ServicesHome/ServicesHome'
import ProgressReach from './ProgressReachComponent/ProgressReach'
import InvestorCharters from './InvestorCharters/InvestorCharters'
import ClientRegDocs from './ClientRegDocs/ClientRegDocs'
import BankDetails from '../BankDetails/BankDetails'

const HomeComponents = () => {
    return (
        <>
            <HeroHome />
            <ServicesHome />
            <HomeAbout />
            <InvestorCharters />
            <ClientRegDocs />
            <BankDetails />
            {/* <ListOfUpstream /> */}
            {/* <ProgressReach /> */}
        </>
    )
}

export default HomeComponents