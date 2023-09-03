"use client"
import React from 'react'
import PageContainer from '../../components/container/PageContainer'
import DashboardCard from '../../components/shared/DashboardCard'
import { Typography } from '@mui/material'
const page = () => {
    return (
        <PageContainer title="Payment Transaction" description="Payment Transaction">
            <DashboardCard title="Payment Transaction">
                <Typography>Successfull Payment Transaction List</Typography>
            </DashboardCard>
        </PageContainer>
    )
}

export default page