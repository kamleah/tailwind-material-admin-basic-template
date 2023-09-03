"use client"
import React from 'react'
import PageContainer from '../../components/container/PageContainer'
import DashboardCard from '../../components/shared/DashboardCard'
import { Typography } from '@mui/material'

const page = () => {
    return (
        <PageContainer title="Reservation List" description="this is Sample page">
            <DashboardCard title="Reservation List">
                <Typography>List of Reservation</Typography>
            </DashboardCard>
        </PageContainer>
    )
}

export default page