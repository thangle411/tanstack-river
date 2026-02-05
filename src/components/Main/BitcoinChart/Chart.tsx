// import { AreaChart, Area, YAxis, Tooltip, XAxis } from 'recharts';
import { formatPrice } from './utils';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ChartData,
} from 'chart.js';
import { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

interface IChartProps {
    data: { timestamp: Date; price: number }[];
    setIsChartHovered: (isChartHovered: boolean) => void;
    setPrice: (price: number) => void;
}

export default function Chart({ data, setIsChartHovered, setPrice }: IChartProps) {
    const chartRef = useRef<ChartJS<"line">>(null);
    const [chartData, setChartData] = useState<ChartData<'line'>>({
        datasets: [],
    });

    const handleMouseEnter = () => {
        setIsChartHovered(true);
    };

    const handleMouseLeave = () => {
        setIsChartHovered(false);
    };

    const createGradient = (ctx: CanvasRenderingContext2D, chartArea: any) => {
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, 'rgba(226, 190, 121, 0.1558)');
        gradient.addColorStop(1, 'rgba(226, 190, 121, 0.001)');
        return gradient;
    };

    const getOrCreateTooltip = (chart: any) => {
        let tooltipEl = chart.canvas.parentNode.querySelector('.custom-tooltip');

        if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.className = 'custom-tooltip';
            tooltipEl.style.color = 'rgb(154 154 154)';
            tooltipEl.style.opacity = 1;
            tooltipEl.style.pointerEvents = 'none';
            tooltipEl.style.position = 'absolute';
            tooltipEl.style.minWidth = '150px';
            tooltipEl.style.transform = 'translateY(-25px)';
            tooltipEl.style.fontSize = '16px';

            const span = document.createElement('span');
            tooltipEl.appendChild(span);

            chart.canvas.parentNode.appendChild(tooltipEl);
        }

        return tooltipEl;
    };

    const getOrCreateVerticalLine = (chart: any) => {
        let lineEl = chart.canvas.parentNode.querySelector('.tooltip-line');

        if (!lineEl) {
            lineEl = document.createElement('div');
            lineEl.className = 'tooltip-line';
            lineEl.style.position = 'absolute';
            lineEl.style.bottom = '30px';
            lineEl.style.width = '0';
            lineEl.style.height = '170px';
            const dashLength = 8;
            const gapLength = 12;
            const svgPattern = `data:image/svg+xml,%3Csvg width='3' height='${dashLength + gapLength}' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='1.5' y1='0' x2='1.5' y2='${dashLength}' stroke='%23e2bd7980' stroke-width='2'/%3E%3C/svg%3E`;
            lineEl.style.background = `url("${svgPattern}") repeat-y`;
            lineEl.style.width = '2px';
            lineEl.style.pointerEvents = 'none';
            lineEl.style.opacity = 0;
            chart.canvas.parentNode.appendChild(lineEl);
        }

        return lineEl;
    };

    const externalTooltipHandler = (context: any) => {
        console.log(context);
        setPrice(context.tooltip.dataPoints[0].raw)

        const { chart, tooltip } = context;
        const tooltipEl = getOrCreateTooltip(chart);
        const lineEl = getOrCreateVerticalLine(chart);

        if (tooltip.opacity === 0) {
            tooltipEl.style.opacity = 0;
            lineEl.style.opacity = 0;
            return;
        }

        if (tooltip.title) {
            const spanEl = tooltipEl.querySelector('span');

            if (spanEl) {
                const date = new Date(tooltip.title[0]);
                const formattedDate = date.toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                }).replace(',', '');
                spanEl.textContent = formattedDate;
            }
        }

        const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

        tooltipEl.style.opacity = 1;
        tooltipEl.style.font = tooltip.options.bodyFont.string;
        tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';

        const tooltipWidth = tooltipEl.offsetWidth;
        const chartWidth = chart.width;
        const caretX = tooltip.caretX;

        let leftPosition = positionX + caretX - (tooltipWidth / 2);

        if (caretX - (tooltipWidth / 2) < 0) {
            leftPosition = positionX;
        }
        else if (caretX + (tooltipWidth / 2) > chartWidth) {
            leftPosition = positionX + chartWidth - tooltipWidth;
        }

        tooltipEl.style.left = leftPosition + 'px';
        tooltipEl.style.top = positionY + tooltip.caretY + 'px';

        // Position the vertical line
        lineEl.style.opacity = 1;
        lineEl.style.left = (positionX + caretX) + 'px';
    }

    // @ts-ignore
    Tooltip.positioners.fixedY = function (_elements: any, eventPosition: any) {
        return {
            x: eventPosition.x,
            y: 0,
            xAlign: 'center' as const,
            yAlign: 'bottom' as const
        };
    };

    useEffect(() => {
        const chart = chartRef.current;

        if (!chart) return;

        const chartData = {
            labels: data.map((item) => item.timestamp),
            datasets: [
                {
                    data: data.map((item) => item.price),
                    borderColor: '#e2bd79a4',
                    borderWidth: 2,
                    backgroundColor: createGradient(chart.ctx, chart.chartArea),
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    hoverRadius: 0,
                    fill: true,
                },
            ],
        };

        setChartData(chartData);
    }, []);


    return (
        <div style={{ height: '180px', width: '100%' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Line
                ref={chartRef}
                key={`chart-${data.length}`}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        mode: 'index',
                        intersect: false,
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: false,
                        },
                        tooltip: {
                            enabled: false,
                            position: 'fixedY' as any,
                            mode: 'index',
                            intersect: false,
                            external(args) {
                                externalTooltipHandler(args);
                            },
                            backgroundColor: 'transparent',
                        },
                    },
                    elements: {
                        point: {
                            radius: 0,
                            hoverRadius: 0,
                            hitRadius: 0,
                        },
                    },
                    scales: {
                        x: {
                            display: false,
                        },
                        y: {
                            display: false,
                        },
                    },
                }}
                data={chartData}
            />
        </div>
    );
}