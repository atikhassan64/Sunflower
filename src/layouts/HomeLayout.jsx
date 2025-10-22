import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className='bg-base-100 shadow-sm '>
                <NavBar />
            </header>
            <main className='flex-grow'>
                <Outlet />
            </main>
            <footer className=''>
                <Footer />
            </footer>

            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
        </div>
    );
};

export default HomeLayout;