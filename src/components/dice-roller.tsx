import {useDice} from "../hooks/use-dice.ts";
import {RollResult} from "./roll-result.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Label} from "@/components/ui/label.tsx";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select.tsx";
import {Check, X} from "lucide-react";

export function DiceRoller() {
    const {rollData, rollDice, reset, numberOfDice, setNumberOfDice} = useDice();

    const onNumberOfDiceChange = (value: string): void => {
        setNumberOfDice(parseInt(value, 10));
    }

    return (
        <>
            <h2 className="text-2xl font-semibold mt-4 mb-3">Dice Roller</h2>
            {rollData && <RollResult data={rollData}/>}
            <div className="flex items-center gap-4 my-4">
                <Label htmlFor="number-of-dice" className="text-base font-medium">
                    Number of Dice:
                </Label>
                <Select value={numberOfDice.toString()} onValueChange={onNumberOfDiceChange}>
                    <SelectTrigger id="number-of-dice" className="w-[80px]">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex items-center gap-2 mb-3 ml-4">
                <Button onClick={rollDice} className="bg-blue-600 hover:bg-blue-700 text-white">
                    Roll Dice<Check className="ml-2 h-4 w-4"/>
                </Button>
                {rollData && (
                    <Button
                        onClick={reset}
                        variant="outline"
                        className="border-amber-500 text-amber-600 hover:bg-amber-50 hover:text-amber-700"
                    >
                        Reset<X className="ml-2 h-4 w-4"/>
                    </Button>
                )}
            </div>
        </>
    )
}