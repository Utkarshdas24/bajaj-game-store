import React from 'react';
import { CATEGORY_CONFIG } from '../constants/categoryConfig';

const ReferencePanel = ({ activeCategories }) => {
    return (
        <div className="w-full max-w-4xl flex flex-wrap justify-center gap-3 mt-4 animate-fade-in px-4">
            {activeCategories.map(catKey => {
                const config = CATEGORY_CONFIG[catKey];
                if (!config) return null;
                return (
                    <div
                        key={catKey}
                        className="flex flex-col min-w-[140px] flex-1 p-2 rounded-xl border border-white/10 backdrop-blur-md shadow-lg transition-all hover:border-white/20"
                        style={{ background: `rgba(${config.color === '#22C55E' ? '34,197,94' : config.color === '#3B82F6' ? '59,130,246' : config.color === '#F59E0B' ? '245,158,11' : config.color === '#EF4444' ? '239,68,68' : '168,85,247'}, 0.05)` }}
                    >
                        <div className="flex flex-col items-center mb-2 border-b border-white/5 pb-1">
                            <span className="text-xl mb-1">{config.icon}</span>
                            <span className="text-[0.65rem] font-black tracking-wider" style={{ color: config.color }}>
                                {config.label}
                            </span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            {config.elements.map((el, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <span className="text-xs opacity-80" style={{ color: config.color }}>{idx === 0 && config.label === 'GROWTH' ? '📈' : idx === 1 && config.label === 'GROWTH' ? '🌅' : idx === 0 && config.label === 'SAFETY' ? '🛡️' : idx === 1 && config.label === 'SAFETY' ? '💰' : idx === 0 && config.label === 'FAMILY' ? '🎓' : idx === 1 && config.label === 'FAMILY' ? '🏠' : idx === 0 && config.label === 'RISK' ? '🩺' : idx === 1 && config.label === 'RISK' ? '🛡️' : idx === 2 && config.label === 'RISK' ? '🏥' : '🏠'}</span>
                                    <span className="text-[0.6rem] text-white/70 whitespace-nowrap">{el}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ReferencePanel;
