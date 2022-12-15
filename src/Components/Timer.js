import React, { useState } from 'react';

export default function Timer() {

    // State
    const [pause, setPause] = useState(5);
    const [session, setSession] = useState(25);
    const [timer, setTimer] = useState(1500);

    // Format digits
    const padTime = time => {
        return String(time).length === 1 ? `0${time}` : `${time}`;
    };

    const format = time => {
        // Convert seconds into minutes
        const minutes = Math.floor(time / 60);

        // Get the seconds left after converting minutes
        const seconds = time % 60;

        //Return combined values as string in format mm:ss
        return `${minutes}:${padTime(seconds)}`;
    };


    // Functions to update state
    function reset() {
        setPause(5);
        setSession(25);
        setTimer(1500);
    }

    function handlePauseDec() {
        if (pause > 1) {
            setPause(pause - 1)
        }
    }

    function handlePauseInc() {
        if (pause < 60) {
            setPause(pause + 1)
        }
    }

    function handleSessionDec() {
        if (session > 1) {
            setSession(session - 1);
            setTimer(timer - 60);
        }
    }

    function handleSessionInc() {
        if (session < 60) {
            setSession(session + 1)
            setTimer(timer + 60);
        }
    }

    return (
        <div className='flex flex-col gap-7'>

            <h1 className='text-white text-2xl mb-5'>⌛ Pomodoro Timer ⌛</h1>

            {/*Flex for Cards */}
            <div className='flex flex-row gap-5'>
                {/*First Card Break Length*/}
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

                    <h5 id="break-label" className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
                        Break Length
                    </h5>
                    <p id="break-length" className="mb-6 font-normal text-xl text-gray-900 dark:text-white">
                        {pause}
                    </p>
                    <div className='flex flex-row justify-evenly'>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                            <button id="break-decrement" onClick={handlePauseDec} type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                </svg>
                            </button>
                            <button id="break-increment" onClick={handlePauseInc} type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/*First Card */}
                {/*Second Card Session Length*/}
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

                    <h5 id="session-label" className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
                        Session Length
                    </h5>
                    <p id="session-length" className="mb-6 font-normal text-xl text-gray-900 dark:text-white">
                        {session}
                    </p>
                    <div className='flex flex-row justify-evenly'>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                            <button id="session-decrement" onClick={handleSessionDec} type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                </svg>
                            </button>
                            <button id="session-increment" onClick={handleSessionInc} type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/*Second Card */}
            </div>
            {/*Flex for Cards */}
            {/*Session */}
            <div className="flex flex-col gap-4 p-6 bg-white rounded-md dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h5 id="timer-label" className="text-2xl text-black dark:text-white">Session</h5>
                <span id="time-left" className='text-8xl text-black dark:text-white'>{format(timer)}</span>

                {/*Start & Reset Buttons */}
                <div className='flex flex-row mt-4'>
                    <button id="start_stop" type="button" className="grow text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">Start</button>
                    <button id="reset" onClick={reset} className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-800 rounded-md group-hover:bg-opacity-0">
                            Reset
                        </span>
                    </button>
                </div>
                {/*Start & Reset Buttons */}
            </div>
            {/*Session */}

        </div>
    );
}