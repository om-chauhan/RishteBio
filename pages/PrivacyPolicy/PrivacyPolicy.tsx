import React from 'react';

export const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-['Playfair_Display']">
                    Privacy Policy
                </h1>

                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">1. Introduction</h2>
                    <p className="mb-4">
                        At RishteBio, we prioritize your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our biodata creation service.
                    </p>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">2. Data Storage</h2>
                    <p className="mb-4">
                        RishteBio operates on a "Local-First" principle. All the personal information you enter into the biodata forms (such as name, date of birth, family details, etc.) is stored locally on your device using your browser's local storage.
                    </p>
                    <p className="mb-4">
                        We do not transmit your personal biodata information to our servers. Your data remains on your device unless you explicitly choose to share it through external means (like downloading a PDF or sharing a screenshot).
                    </p>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">3. Information We Collect</h2>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li><strong>Usage Data:</strong> We may collect anonymous usage data to improve our service, such as which templates are most popular or if users encounter errors. This data is not linked to your personal biodata information.</li>
                        <li><strong>Contact Information:</strong> If you contact us for support, we will have your email address and any other information you provide in that communication.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">4. Third-Party Services</h2>
                    <p className="mb-4">
                        We may use third-party services for analytics (e.g., Google Analytics) to help us understand how our website is used. These services may collect information sent by your browser as part of a web page request, such as cookies or your IP request.
                    </p>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">5. Your Rights</h2>
                    <p className="mb-4">
                        Since your data is stored locally on your device, you have full control over it. You can delete your data at any time by clearing your browser cache or using the "Clear Data" option within the application if available.
                    </p>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">6. Changes to This Policy</h2>
                    <p className="mb-4">
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">7. Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions about this Privacy Policy, please contact us.
                    </p>
                </div>
            </div>
        </div>
    );
};
