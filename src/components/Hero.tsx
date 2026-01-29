import React from 'react';
import { Button, Typography, Space } from 'antd';
import { MobileOutlined, CloudServerOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            CodeBlocks
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300">
            Whether you need a minimalistic store for mobile users, or a full-fledged store for your SaaS, our templates have got you covered.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button type="primary" size="large" shape="round" className="h-12 px-8 text-lg">
              Get Started
            </Button>
            <Button type="default" size="large" shape="round" className="h-12 px-8 text-lg">
              View Templates
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16 flow-root sm:mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4 dark:bg-white/5 dark:ring-white/10">
              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-zinc-700">
                <MobileOutlined className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Minimalistic Mobile Store</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">Optimized for touch and speed. Perfect for quick shopping experiences.</p>
              </div>
            </div>
            <div className="rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4 dark:bg-white/5 dark:ring-white/10">
              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-zinc-700">
                <CloudServerOutlined className="text-4xl text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Full-fledged SaaS Store</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">Scale your software sales with powerful features and integrations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
