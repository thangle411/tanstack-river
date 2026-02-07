import SummaryBar from "./SummaryBar";

export default function AccountValue() {
    const leftBox = {
        title: "How much you made",
        cards: {
            firstCard: {
                title: "Total gain",
                tooltip: "Total gain",
                value: "$0.00",
                percentage: "0.00%",
                percentageColor: "text-neutral-50"
            },
            secondCard: {
                title: "Total loss",
                tooltip: "Total loss",
                value: "$0.00",
                percentage: "0.00%",
                percentageColor: "text-neutral-50"
            }
        }
    }
    const rightBox = {
        title: "How much you invested",
        cards: {
            firstCard: {
                title: "Total cost",
                tooltip: "Total cost",
                value: "$0.00",
                percentage: "0.00%",
                percentageColor: "text-neutral-50"
            },
            secondCard: {
                title: "Average cost",
                tooltip: "Average cost",
                value: "-",
                percentage: "0.00%",
                percentageColor: "text-neutral-50"
            }
        }
    }
    return (
        <div>
            <SummaryBar leftBox={leftBox} rightBox={rightBox} />
        </div>
    )
}