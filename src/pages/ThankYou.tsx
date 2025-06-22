import React from 'react';
import { BlogHeader } from '@/components/blog/BlogHeader';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <BlogHeader />
      <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
              Thank You!
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
              We appreciate your submission.
            </p>
          </div>
          <div className="rounded-md shadow-sm space-y-4">
            <p className="text-center text-base text-gray-700 dark:text-gray-200">
              Your information has been successfully received. We will get back to you shortly.
            </p>
            <div className="text-center">
              <a
                href="/"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-800 dark:hover:bg-blue-900"
              >
                Return to Homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
