import { useCallback } from 'react';
import { AreaChart, Area, YAxis, Tooltip, XAxis } from 'recharts';
import { formatPrice } from './utils';

const CustomCursor = ({ points, height }: any) => {
    if (!points || points.length === 0) return null;

    const { x } = points[0];
    const lineHeight = 220;
    const chartHeight = height || 260;
    const startY = chartHeight;
    const endY = chartHeight - lineHeight;

    return (
        <line
            x1={x}
            y1={startY}
            x2={x}
            y2={endY}
            stroke="#d4b5834b"
            strokeWidth={2}
            strokeDasharray="10 5"
            style={{
                userSelect: 'none',
                pointerEvents: 'none'
            }}
        />
    );
};

interface IChartProps {
    chartData: { timestamp: number; price: number }[];
    setIsChartHovered: (isChartHovered: boolean) => void;
    setPrice: (price: number) => void;
}

export default function Chart({ chartData, setIsChartHovered, setPrice }: IChartProps) {

    const handleMouseMove = useCallback(() => {
        setIsChartHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsChartHovered(false);
    }, []);

    const CustomTooltip = useCallback(({ active, payload, coordinate }: any) => {
        if (active && payload && payload.length && coordinate) {
            const dataPoint = payload[0].payload;
            const timestamp = dataPoint.timestamp;
            setPrice(dataPoint.price);

            const date = new Date(timestamp);
            const formattedDate = date.toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });

            return (
                <div
                    style={{
                        position: 'absolute',
                        left: `${coordinate.x}px`,
                        top: '0px',
                        transform: 'translateX(-90px)',
                        pointerEvents: 'none'
                    }}
                    className="px-3 py-2 w-[300px]"
                >
                    <p className="text-neutral-300 text-s mb-1">{formattedDate}</p>
                </div>
            );
        }
        return null;
    }, []);

    return (
        <AreaChart
            style={{ width: '100%', maxHeight: '260px', aspectRatio: 1.618, userSelect: 'none' }}
            responsive
            data={chartData}
            margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <defs>
                <linearGradient id="colorGradientLeft" x1="0%" y1="0%" x2="0%" y2="90%">
                    <stop offset="0" stopColor="#e2be79" stopOpacity={0.1558} />
                    <stop offset="1" stopColor="#e2be79" stopOpacity={0.001} />
                </linearGradient>
            </defs>
            <YAxis domain={['auto', 'auto']} hide />
            <XAxis domain={['auto', 'auto']} hide />
            <Tooltip
                position={{ y: 0 }}
                contentStyle={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#e2be79'
                }}
                cursor={<CustomCursor />}
                content={<CustomTooltip />}
                animationDuration={0}
            />

            <Area
                type="monotone"
                dataKey="price"
                stroke="#e2be79"
                isAnimationActive={false}
                strokeWidth={2}
                fill="url(#colorGradientLeft)"
                activeDot={false}
                connectNulls={false}
            />
        </AreaChart>

    );
}