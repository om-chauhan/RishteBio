import React from 'react';
import { User } from 'lucide-react';
import { Biodata } from '../../../types';

interface PhotoBioTabProps {
    data: Biodata;
    onInputChange: (section: keyof Biodata, field: string, value: string) => void;
    onPhotoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PhotoBioTab: React.FC<PhotoBioTabProps> = ({ data, onInputChange, onPhotoUpload }) => (
    <div className="space-y-6 animate-fadeIn">
        {/* Photo Upload */}
        <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300 text-center">
            <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full flex items-center justify-center overflow-hidden mb-3 relative group">
                {data.photoUrl ? (
                    <img src={data.photoUrl} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                    <User className="text-slate-400" />
                )}
                <label className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity text-xs font-medium">
                    Change
                    <input type="file" className="hidden" accept="image/*" onChange={onPhotoUpload} />
                </label>
            </div>
            <label className="inline-block text-sm text-rose-600 font-medium cursor-pointer hover:underline">
                Upload Profile Photo
                <input type="file" className="hidden" accept="image/*" onChange={onPhotoUpload} />
            </label>
            <p className="text-xs text-slate-400 mt-1">Recommended: Square, High Quality</p>
        </div>

        {/* About Me */}
        <div>
            <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-semibold text-slate-500 uppercase">About Me</label>
            </div>
            <textarea
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none text-sm transition-all bg-white text-slate-900"
                rows={5}
                placeholder="Write a brief introduction about yourself..."
                value={data.aboutMe}
                onChange={e => onInputChange('aboutMe', 'aboutMe', e.target.value)}
            />
        </div>

        {/* Hobbies */}
        <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Hobbies & Interests</label>
            <textarea
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none text-sm transition-all bg-white text-slate-900"
                rows={2}
                value={data.hobbies}
                onChange={e => onInputChange('hobbies', 'hobbies', e.target.value)}
            />
        </div>

        {/* Partner Expectations */}
        <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Partner Expectations</label>
            <textarea
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none text-sm transition-all bg-white text-slate-900"
                rows={3}
                placeholder="Describe what you are looking for in a partner..."
                value={data.partnerExpectations}
                onChange={e => onInputChange('partnerExpectations', 'partnerExpectations', e.target.value)}
            />
        </div>
    </div>
);

export default PhotoBioTab;
