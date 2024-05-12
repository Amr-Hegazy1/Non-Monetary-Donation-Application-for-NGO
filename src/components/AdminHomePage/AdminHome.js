import { React, useEffect, useState } from 'react';
import AdminSideNav from './AdminSideNav';
import { Theme } from '@ant-design/cssinjs';
import ThemeProvider from './theme';


export default function AdminHome() {



    return (
        <>
            <ThemeProvider>
                <AdminSideNav />
            </ThemeProvider>

        </>
    )
}