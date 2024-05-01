import { Transition } from '@headlessui/react'
import React from 'react'

const Loader = () => {
    return (
        <div className='fixed left-0 top-0 w-full h-screen bg-transparent backdrop-blur-sm'>
            <Transition
                show={true}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center p-5 bg-white rounded-lg shadow-lg">
                        <svg className="animate-spin h-10 w-10 text-gray-500 mb-2" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014 12H0c0 4.418 3.582 8 8 8v-4.709zm13.416-9.459A8.004 8.004 0 0120 12h4c0-6.627-5.373-12-12-12v4.709z"
                            ></path>
                        </svg>
                        <p className="text-gray-700">Loading...</p>
                    </div>
                </div>
            </Transition>
        </div>
    )
}

export default Loader