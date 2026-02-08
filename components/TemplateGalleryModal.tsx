import React from 'react';
import { LayoutTemplate, X, CheckCircle } from 'lucide-react';
import { Biodata, TemplateType, TemplateConfig } from '../types';
import { TemplateRenderer } from './BioTemplates';

interface TemplateGalleryModalProps {
    templates: TemplateConfig[];
    currentTemplateId: string;
    data: Biodata;
    onSelectTemplate: (templateId: TemplateType) => void;
    onClose: () => void;
}

export const TemplateGalleryModal: React.FC<TemplateGalleryModalProps> = ({
    templates,
    currentTemplateId,
    data,
    onSelectTemplate,
    onClose
}) => (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 animate-fadeIn">
        <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-white/20">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                        <LayoutTemplate className="text-rose-600" size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-800">Select Template</h3>
                        <p className="text-xs text-slate-500">Live preview with your data</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                >
                    <X size={20} className="text-slate-500" />
                </button>
            </div>

            <div className="p-4 sm:p-8 overflow-y-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
                    {templates.map(t => (
                        <button
                            key={t.id}
                            onClick={() => onSelectTemplate(t.id)}
                            className={`group relative flex flex-col text-left rounded-xl overflow-hidden transition-all duration-300 ${currentTemplateId === t.id
                                ? 'ring-4 ring-rose-500 ring-offset-2 shadow-xl'
                                : 'hover:ring-2 hover:ring-slate-300 hover:ring-offset-1 shadow-md hover:shadow-lg'
                                }`}
                        >
                            {/* Live Preview Container */}
                            <div className="aspect-[210/297] overflow-hidden bg-slate-100 relative flex items-center justify-center">
                                {/* Miniature Live Preview - centered within thumbnail */}
                                <div
                                    className="absolute top-1/2 left-1/2 pointer-events-none"
                                    style={{
                                        width: '794px',
                                        height: '1123px',
                                        transform: 'translate(-50%, -50%) scale(0.18)',
                                    }}
                                >
                                    <TemplateRenderer
                                        template={t.id}
                                        data={data}
                                    />
                                </div>

                                {/* Overlay gradient for better contrast */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity ${currentTemplateId === t.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                                {/* Selection Badge */}
                                {currentTemplateId === t.id && (
                                    <div className="absolute top-2 right-2 bg-rose-500 text-white p-1.5 rounded-full shadow-lg z-10">
                                        <CheckCircle size={14} strokeWidth={3} />
                                    </div>
                                )}
                            </div>

                            {/* Template Info */}
                            <div className="p-3 bg-white border-x border-b border-slate-100 group-hover:bg-slate-50 transition-colors">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-bold text-slate-800 text-sm">{t.name}</h4>
                                    {currentTemplateId === t.id && (
                                        <span className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-600">
                                            Active
                                        </span>
                                    )}
                                </div>
                                <p className="text-xs text-slate-500 line-clamp-2">{t.description}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <div className="p-6 bg-slate-50/50 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-400 italic">✨ Previews update in real-time with your data. Click any template to switch.</p>
            </div>
        </div>
    </div>
);

export default TemplateGalleryModal;
