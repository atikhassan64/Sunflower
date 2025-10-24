import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

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

            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toasterId="default"
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 2000,
                    removeDelay: 1000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />

        </div>
    );
};

export default HomeLayout;