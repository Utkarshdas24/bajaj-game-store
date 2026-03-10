import React from 'react';
import { motion } from 'framer-motion';
import { Undo2, RotateCcw, Timer } from 'lucide-react';
import Tube from './Tube';
import ProgressBar from '../../../components/ui/ProgressBar';
import ReferencePanel from './ReferencePanel';
import { CATEGORY_CONFIG } from '../constants/categoryConfig';

const GameScreen = ({
    tubes,
    capacity,
    selectedTube,
    onTubeClick,
    onUndo,
    onRestart,
    timer,
    formatTime,
    progress,
    isUrgent,
    activeCategories,
    moves,
    currentLevel,
    pouringState,
    tubeRefs
}) => {
    // Map categories to indices for labels (assuming first 5 are active, last 2 are empty)
    const categoryMapping = ['growth', 'safety', 'resp', 'risk', 'asset'];

    return (
        <div className="w-full h-full flex flex-col items-center pt-2">
            {/* Top Fixed Timer HUD */}
            <div className="fixed top-2 left-0 right-0 z-50 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                    <Timer className={`${isUrgent ? 'text-risk animate-pulse' : 'text-teal'} w-5 h-5`} />
                    <span className={`text-2xl font-mono font-bold tracking-wider ${isUrgent ? 'text-risk' : 'text-white'}`}>
                        {formatTime(timer)}
                    </span>
                </div>
                <div className="w-full max-w-xs px-4">
                    <ProgressBar progress={progress} isUrgent={isUrgent} />
                </div>
            </div>

            {/* Reference Panel at the TOP */}
            <div className="mt-16 w-full flex justify-center">
                <ReferencePanel activeCategories={activeCategories} />
            </div>

            {/* Game Board - 5+2 Layout */}
            <div className="relative w-full flex flex-col items-center gap-12 mt-12 mb-8 animate-fade-in px-4">
                {/* Active Tubes (Row 1) */}
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-12 max-w-4xl">
                    {tubes.slice(0, 5).map((segments, index) => {
                        const catKey = categoryMapping[index];
                        const config = CATEGORY_CONFIG[catKey];
                        return (
                            <div key={index} className="flex flex-col items-center gap-4">
                                <div ref={el => tubeRefs.current[index] = el}>
                                    <Tube
                                        index={index}
                                        segments={segments}
                                        capacity={capacity}
                                        isSelected={selectedTube === index}
                                        onClick={onTubeClick}
                                        isValidTarget={selectedTube !== null && selectedTube !== index}
                                        isPouring={pouringState?.sourceIndex === index}
                                        isBeingPouredInto={pouringState?.targetIndex === index}
                                        pouringState={pouringState}
                                        tiltDirection={pouringState ? (pouringState.targetIndex > pouringState.sourceIndex ? 'right' : 'left') : 'right'}
                                        pourOffset={pouringState?.sourceIndex === index ? { x: pouringState.dx, y: pouringState.dy } : null}
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: config.color }} />
                                    <span className="text-[0.7rem] font-black tracking-[0.2em]" style={{ color: config.color }}>
                                        {config.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Empty Tubes (Row 2) */}
                <div className="flex justify-center gap-x-4">
                    {tubes.slice(5, 7).map((segments, index) => {
                        const tubeIndex = index + 5;
                        return (
                            <div key={tubeIndex} className="flex flex-col items-center gap-4">
                                <div ref={el => tubeRefs.current[tubeIndex] = el}>
                                    <Tube
                                        index={tubeIndex}
                                        segments={segments}
                                        capacity={capacity}
                                        isSelected={selectedTube === tubeIndex}
                                        onClick={onTubeClick}
                                        isValidTarget={selectedTube !== null && selectedTube !== tubeIndex}
                                        isPouring={pouringState?.sourceIndex === tubeIndex}
                                        isBeingPouredInto={pouringState?.targetIndex === tubeIndex}
                                        pouringState={pouringState}
                                        tiltDirection={pouringState ? (pouringState.targetIndex > pouringState.sourceIndex ? 'right' : 'left') : 'right'}
                                        pourOffset={pouringState?.sourceIndex === tubeIndex ? { x: pouringState.dx, y: pouringState.dy } : null}
                                    />
                                </div>
                                <span className="text-[0.7rem] font-bold text-white/30 tracking-[0.2em] mt-1 uppercase">
                                    Empty
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 animate-fade-in mb-10">
                <button
                    onClick={onUndo}
                    className="w-12 h-12 rounded-full glass-button flex items-center justify-center text-white/70 hover:text-white"
                    title="Undo"
                >
                    <Undo2 size={24} />
                </button>
                <button
                    onClick={onRestart}
                    className="w-14 h-14 rounded-full glass-button flex items-center justify-center text-white/70 hover:text-white bg-white/5"
                    title="Restart Level"
                >
                    <RotateCcw size={28} />
                </button>
            </div>
        </div>
    );
};

export default GameScreen;
