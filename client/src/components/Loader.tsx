import { Transition } from '@headlessui/react'
import { Spin } from 'antd'
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
                        <Spin size='large'/>
                        <p className="text-gray-700">Loading...</p>
                    </div>
                </div>
            </Transition>
        </div>
    )
}

export default Loader