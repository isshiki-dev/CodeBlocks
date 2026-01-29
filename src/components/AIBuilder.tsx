'use client';

import React from 'react';
import { Bubble, Welcome, Sender } from '@ant-design/x';
import { Card, Typography, Space } from 'antd';
import { RocketOutlined, BuildOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const AIBuilder = () => {
  const [content, setContent] = React.useState('');

  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-900 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Title level={2}>AI-Powered Store Builder</Title>
          <Paragraph className="text-lg">
            Experience the future of e-commerce setup. Our AI agent boots up your store infrastructure in seconds.
          </Paragraph>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="shadow-xl rounded-2xl overflow-hidden border-none">
            <div className="flex flex-col h-[400px]">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <Welcome
                  variant="borderless"
                  icon={<RocketOutlined style={{ fontSize: 48, color: '#1677ff' }} />}
                  title="Welcome to CodeBlocks AI"
                  description="I can help you build and deploy your store. Just tell me what you need!"
                />
                <Bubble
                  content="I want to create a minimalistic store for a coffee shop."
                  placement="end"
                />
                <Bubble
                  content="Great choice! I'm now booting up a VM with an optimized Next.js template for mobile users. It will include markdown support for your product stories and optimized streaming for live updates."
                />
              </div>
              <div className="p-4 border-t">
                <Sender
                  value={content}
                  onChange={setContent}
                  placeholder="Ask the AI to build your store..."
                />
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg h-fit">
                <BuildOutlined className="text-2xl text-blue-600 dark:text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">On-Demand VM Boot-up</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our AI doesn't just generate code; it orchestrates infrastructure. Launch fully functional environments on-demand.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg h-fit">
                <RocketOutlined className="text-2xl text-green-600 dark:text-green-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Optimized X Markdown</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Deliver rich content with formulas, code highlighting, and mermaid charts, all rendered with smooth streaming performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBuilder;
