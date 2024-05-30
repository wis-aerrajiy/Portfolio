import React from 'react';

interface BreadCrumbProps {
    Section: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ Section }) => {
    return (
        <ol className="flex items-center whitespace-nowrap mb-5">
            <li className="inline-flex items-center">
                <a className="text-xl text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="#">
                    Home
                </a>
                <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </li>
            <li className="text-xl font-semibold text-gray-800 truncate" aria-current="page">
                <a className=" text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="#">
                    {Section}
                </a>
            </li>
        </ol>
    );
};

export default BreadCrumb