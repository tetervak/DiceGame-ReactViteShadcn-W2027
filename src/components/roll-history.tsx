import {useHistory} from "../context/history-context.tsx";
import {Button} from "@/components/ui/button.tsx";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table.tsx";
import {X} from "lucide-react";

export function RollHistory() {
    const {historyData, clearHistory} = useHistory();

    if (historyData.items.length === 0) {
        return null;
    }

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold mt-6 mb-3">Roll History</h2>
            <div className="inline-block rounded-md border shadow-sm overflow-hidden">
                <Table className="w-auto text-center">
                    <TableHeader className="bg-blue-100 dark:bg-blue-950">
                        <TableRow>
                            <TableHead className="text-center font-bold text-foreground px-4">Count</TableHead>
                            <TableHead className="text-center font-bold text-foreground px-4">Dice Values</TableHead>
                            <TableHead className="text-center font-bold text-foreground px-4">Total</TableHead>
                            <TableHead className="text-center font-bold text-foreground px-4">Timestamp</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {historyData.items.map((item, index) => (
                            <TableRow key={item.id} className={index % 2 === 0 ? "bg-white dark:bg-background" : "bg-muted/30"}>
                                <TableCell className="px-4 py-2">{index + 1}</TableCell>
                                <TableCell className="px-4 py-2">{item.rollData.values.join(' + ')}</TableCell>
                                <TableCell className="px-4 py-2 font-medium">{item.rollData.total}</TableCell>
                                <TableCell className="px-4 py-2">{new Date(item.timestamp).toLocaleString('en-CA')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div>
                <Button
                    onClick={clearHistory}
                    variant="outline"
                    className="border-red-500 text-red-600 hover:bg-red-50 hover:text-red-700 ml-3"
                >
                    Clear History<X className="ml-2 h-4 w-4"/>
                </Button>
            </div>
        </div>
    )
}