import { TemplateConfig, TemplateType } from '../types';

export const TEMPLATES: TemplateConfig[] = [
    {
        id: TemplateType.TRADITIONAL,
        name: 'Traditional',
        thumbnail: 'https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?auto=format&fit=crop&q=80&w=400',
        description: 'Classic and formal layout with traditional patterns.'
    },
    {
        id: TemplateType.MODERN,
        name: 'Modern',
        thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400',
        description: 'Clean lines with a professional side profile.'
    },
    {
        id: TemplateType.MINIMAL,
        name: 'Minimal',
        thumbnail: 'https://images.unsplash.com/photo-1512418490979-92798cccf3b8?auto=format&fit=crop&q=80&w=400',
        description: 'Elegant and clean typography-focused design.'
    },
    {
        id: TemplateType.CREATIVE,
        name: 'Creative',
        thumbnail: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400',
        description: 'Stylish and artistic design with vibrant accents.'
    },
    {
        id: TemplateType.ELEGANT,
        name: 'Elegant',
        thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400',
        description: 'Sophisticated gold-accented luxury design.'
    },
    {
        id: TemplateType.ROYAL,
        name: 'Royal',
        thumbnail: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&q=80&w=400',
        description: 'Premium purple & gold royal theme.'
    },
    {
        id: TemplateType.FLORAL,
        name: 'Floral',
        thumbnail: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=400',
        description: 'Delicate pink botanical-inspired design.'
    },
    {
        id: TemplateType.CORPORATE,
        name: 'Corporate',
        thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400',
        description: 'Professional blue business-style layout.'
    },
];
