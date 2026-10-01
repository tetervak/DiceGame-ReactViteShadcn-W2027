import type {RollData} from "../data/roll-data.ts";
import {createContext, type ReactNode, useContext, useState} from "react";

export interface HistoryItem {
    id: string;
    rollData: RollData;
    timestamp: Date;
}

export interface HistoryData {
    items: HistoryItem[];
}

interface HistoryContextType {
    historyData: HistoryData | null;
    addRollData: (rollData: RollData) => void;
    clearHistory: () => void;
}

export const HistoryContext = createContext<HistoryContextType | null>(null);

interface HistoryProviderProps {
    children: ReactNode;
}

export function HistoryProvider({children}: HistoryProviderProps) {
    const [historyData, setHistoryData] = useState<HistoryData | null>(null);

    const addHistoryItem = (item: HistoryItem) => {
        setHistoryData((prevData: HistoryData | null) => (
            {items: prevData == null ? [item] : [...prevData.items, item]}));
    }

    const clearHistory = () => {
        setHistoryData(null);
    }

    const addRollData = (rollData: RollData) => {
        addHistoryItem({id: crypto.randomUUID(), rollData, timestamp: new Date()});
    }

    return (
        <HistoryContext.Provider value={{historyData, addRollData, clearHistory}}>
        {children}
        </HistoryContext.Provider>
    );
}

export function useHistory() {
    const context = useContext(HistoryContext);
    if (context === null) {
        throw new Error('useHistory must be used within a HistoryProvider');
    }
    return context;
}