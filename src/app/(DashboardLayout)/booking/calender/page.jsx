
"use client"
import React from 'react'
import PageContainer from '../../components/container/PageContainer'
import DashboardCard from '../../components/shared/DashboardCard'
import { Typography } from '@mui/material'

const page = () => {
    return (
        <PageContainer title="Calender" description="this is Sample page">
            <DashboardCard title="Reservation Calender">
                <Typography>Reservation Calender for Bookings</Typography>
            </DashboardCard>
        </PageContainer>
    )
}

export default page