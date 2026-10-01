import type {HistoryData, HistoryItem} from "../data/history-data.ts";
import type {RollData} from "../data/roll-data.ts";
import React from "react";

interface HistoryContextValue {
    historyData: HistoryData;
    addRollData: (rollData: RollData) => void;
    clearHistory: () => void;
}

export const HistoryContext = React.createContext<HistoryContextValue>({
    historyData: {items: []},
    addRollData: () => {},
    clearHistory: () => {},
});

export function HistoryProvider({children}: { children: React.ReactNode }) {
    const [historyData, setHistoryData] = React.useState<HistoryData>({items: []});

    const addHistoryItem = (item: HistoryItem) => {
        setHistoryData((prevData) => ({items: [...prevData.items, item]}));
    }

    const clearHistory = () => {
        setHistoryData({items: []});
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
    const context = React.useContext(HistoryContext);
    if (context === undefined) {
        throw new Error('useHistory must be used within a HistoryProvider');
    }
    return context;
}