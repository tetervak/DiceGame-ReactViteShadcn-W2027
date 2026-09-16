import type {RollData} from "../data/roll-data.ts";
import {DiceDisplay} from "./dice-display.tsx";

type RollResultProps = {
    data: RollData
}

export function RollResult({data}: RollResultProps) {
    return (
        <div className="flex flex-col gap-4 mb-4">
            <DiceDisplay values={data.values}/>
            <div>
                <span className="total-label">Total:</span>
                <span className="total-number ml-2">{data.total}</span>
            </div>
        </div>
    )
}