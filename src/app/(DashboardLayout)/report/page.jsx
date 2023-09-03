"use client"
import React from 'react'
import PageContainer from '../components/container/PageContainer'
import DashboardCard from '../components/shared/DashboardCard'
import { Typography } from '@mui/material'

const page = () => {
    return (
        <PageContainer title="Booking Report" description="Booking Analytics Page">
            <DashboardCard title="Booking Report">
                <Typography>Here is the analytics of booking.</Typography>
            </DashboardCard>
        </PageContainer>
    )
}

export default page