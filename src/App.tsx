import {Footer} from "./components/footer.tsx";
import {Header} from "./components/header.tsx";
import {DiceRoller} from "./components/dice-roller.tsx";
import {HistoryProvider} from "./context/history-context.tsx";
import {RollHistory} from "./components/roll-history.tsx";

function App() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div>
                <Header title="Dice Game"/>
                <main className="container mx-auto px-4 max-w-4xl">
                    <HistoryProvider>
                        <DiceRoller/>
                        <RollHistory/>
                    </HistoryProvider>
                </main>
            </div>
            <Footer name="Alex Tetervak"/>
        </div>
    )
}

export default App;
