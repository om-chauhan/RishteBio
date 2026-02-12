import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DayPicker } from 'react-day-picker';
import { format, parse, isValid } from 'date-fns';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface CustomDatePickerProps {
    value: string; // YYYY-MM-DD
    onChange: (value: string) => void;
    label?: string;
    placeholder?: string;
}

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
    value,
    onChange,
    label = "Date of Birth",
    placeholder = "Select Date"
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    const selectedDate = value ? parse(value, 'yyyy-MM-dd', new Date()) : undefined;

    const handleOpen = () => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            // Calculate position to keep it in view
            const top = rect.bottom + window.scrollY + 5;
            let left = rect.left + window.scrollX;

            // Adjust if too far right
            if (left + 320 > window.innerWidth) {
                left = window.innerWidth - 340;
            }

            setPosition({ top, left, width: rect.width });
            setIsOpen(true);
        }
    };

    const handleSelect = (date: Date | undefined) => {
        if (date) {
            onChange(format(date, 'yyyy-MM-dd'));
            setIsOpen(false);
        }
    };

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popoverRef.current &&
                !popoverRef.current.contains(event.target as Node) &&
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative" ref={containerRef}>
            {label && (
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                    {label}
                </label>
            )}
            <div
                onClick={handleOpen}
                className={`
                    flex items-center justify-between w-full px-3 py-2 border rounded-lg cursor-pointer transition-all text-sm
                    ${isOpen ? 'border-rose-400 ring-4 ring-rose-50 bg-white' : 'border-slate-300 bg-white hover:border-slate-400'}
                `}
            >
                <span className={value ? 'text-slate-900' : 'text-slate-400'}>
                    {value ? format(selectedDate!, 'dd MMM yyyy') : placeholder}
                </span>
                <CalendarIcon size={16} className="text-slate-400" />
            </div>

            {isOpen && createPortal(
                <div
                    ref={popoverRef}
                    style={{
                        position: 'absolute',
                        top: position.top,
                        left: position.left,
                        zIndex: 9999
                    }}
                    className="animate-in fade-in zoom-in duration-200"
                >
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 min-w-[300px]">
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={handleSelect}
                            captionLayout="dropdown"
                            fromYear={1920}
                            toYear={new Date().getFullYear()}
                            classNames={{
                                day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-colors flex items-center justify-center text-sm",
                                selected: "bg-rose-600 text-white hover:bg-rose-600 hover:text-white rounded-lg font-semibold",
                                today: "text-rose-600 font-bold bg-rose-50",
                                outside: "text-slate-300 opacity-50",
                                disabled: "text-slate-300 opacity-50",
                                month_caption: "flex justify-center items-center h-12 mb-4 relative px-8",
                                caption_label: "hidden",
                                nav: "flex items-center absolute w-full left-0 px-2 justify-between z-10 pointer-events-none",
                                button_previous: "h-8 w-8 bg-white/50 hover:bg-slate-100 rounded-full flex items-center justify-center transition-colors text-slate-500 border border-slate-200 pointer-events-auto",
                                button_next: "h-8 w-8 bg-white/50 hover:bg-slate-100 rounded-full flex items-center justify-center transition-colors text-slate-500 border border-slate-200 pointer-events-auto",
                                month_grid: "w-full border-collapse",
                                weekdays: "flex mb-2",
                                weekday: "text-slate-400 rounded-md w-9 font-medium text-[0.8rem] uppercase flex items-center justify-center h-9",
                                month: "space-y-4",
                                weeks: "space-y-1",
                                week: "flex w-full",
                            }}
                            components={{
                                Chevron: ({ ...props }) => {
                                    if (props.orientation === 'left') return <ChevronLeft size={16} />;
                                    return <ChevronRight size={16} />;
                                }
                            }}
                        />
                        <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-xs font-semibold text-slate-500 hover:text-slate-900 px-3 py-1 rounded-md hover:bg-slate-50 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>,
                document.getElementById('datepicker-portal') || document.body
            )}
        </div>
    );
};
