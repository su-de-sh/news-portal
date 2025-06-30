import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About NepBuzz
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Welcome to NepBuzz, your trusted source for authentic news from
            Nepal and around the world. We are committed to delivering accurate,
            timely, and unbiased reporting that keeps you informed about the
            events that matter most.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            To provide comprehensive news coverage that empowers our readers
            with the information they need to make informed decisions. We strive
            to uphold the highest standards of journalism while embracing modern
            technology to deliver news in innovative ways.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
            <li>Accuracy and truthfulness in all our reporting</li>
            <li>Independence and editorial integrity</li>
            <li>Respect for diverse perspectives and communities</li>
            <li>Transparency in our journalistic processes</li>
            <li>Innovation in digital storytelling</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            We value your feedback and are always here to help. Reach out to us
            at{" "}
            <a
              href="mailto:info@nepalnews.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              info@nepalnews.com
            </a>{" "}
            or call us at +977-1-4444444.
          </p>
        </div>
      </div>
    </div>
  );
}
