import React from 'react';

export const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-['Playfair_Display']">
                    Terms of Service
                </h1>

                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p className="mb-4">
                        By using the RishteBio website and service ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.
                    </p>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">2. Description of Service</h2>
                    <p className="mb-4">
                        RishteBio provides a platform for users to create, edit, and download marriage biodata templates ("Biodata"). The Service is provided "as is" and "as available".
                    </p>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">3. User Responsibilities</h2>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li>You are responsible for maintaining the confidentiality of any data you enter into the Service.</li>
                        <li>You agree not to use the Service for any unlawful purpose or in any way that interrupts, damages, or impairs the service.</li>
                        <li>You retain all rights to the personal data you input into the Service.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">4. Intellectual Property</h2>
                    <p className="mb-4">
                        The design, layout, graphics, and code of the Service are the property of RishteBio and are protected by copyright laws. You may not copy, modify, distribute, or create derivative works based on our content without explicit permission.
                    </p>
                    <p className="mb-4">
                        However, you own the content you create using our templates (the filled-in biodata PDF or image).
                    </p>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">5. Disclaimer of Warranties</h2>
                    <p className="mb-4">
                        RishteBio disclaims all warranties, express or implied, including but not limited to the implied warranties of merchantability and fitness for a particular purpose. We do not warrant that the Service will be uninterrupted or error-free.
                    </p>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">6. Limitation of Liability</h2>
                    <p className="mb-4">
                        In no event shall RishteBio be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Service.
                    </p>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">7. Governing Law</h2>
                    <p className="mb-4">
                        These Terms shall be governed by and construed in accordance with the laws of India.
                    </p>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">8. Contact</h2>
                    <p className="mb-4">
                        If you have any questions regarding these Terms, please contact us.
                    </p>
                </div>
            </div>
        </div>
    );
};
