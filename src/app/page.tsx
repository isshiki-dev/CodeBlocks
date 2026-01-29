import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AIBuilder from '@/components/AIBuilder';
import Footer from '@/components/Footer';
import { Card, Tag } from 'antd';
import {
  ThunderboltOutlined,
  CheckCircleOutlined,
  CodeOutlined,
  BlockOutlined
} from '@ant-design/icons';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      <main>
        <Hero />

        <AIBuilder />

        {/* Technical Features Section */}
        <section className="py-24 bg-white dark:bg-black">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Enterprise Ready</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Built for Developers, Optimized by AI
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <Card className="border-none bg-gray-50 dark:bg-zinc-900 shadow-sm" hoverable>
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <ThunderboltOutlined className="text-blue-600 text-xl" />
                    On-demand Loading
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                    <p className="flex-auto">Supports tree shaking based on ES modules by default. Only load what you use.</p>
                  </dd>
                </Card>

                <Card className="border-none bg-gray-50 dark:bg-zinc-900 shadow-sm" hoverable>
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <CodeOutlined className="text-blue-600 text-xl" />
                    First-class TypeScript
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                    <p className="flex-auto">Written in TypeScript with complete type definitions for a better development experience.</p>
                  </dd>
                </Card>

                <Card className="border-none bg-gray-50 dark:bg-zinc-900 shadow-sm" hoverable>
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <BlockOutlined className="text-blue-600 text-xl" />
                    Streaming Markdown
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                    <p className="flex-auto">Optimized rendering for streaming content. Supports formulas, code highlighting, and mermaid charts.</p>
                  </dd>
                </Card>
              </dl>
            </div>
          </div>
        </section>

        {/* Templates CTA */}
        <section className="py-24 bg-blue-600">
          <div className="mx-auto max-w-4xl text-center px-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to build your next store?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Join thousands of merchants using CodeBlocks to power their online business.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Start for free
              </button>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
