import { useEffect, useRef, useState } from 'react';
import './Odometer.css';

interface OdometerProps {
    value: number;
    duration?: number;
    formatOptions?: Intl.NumberFormatOptions;
    className?: string;
}

interface DigitProps {
    value: string;
    duration: number;
    delay?: number;
}

function Digit({ value, duration, delay = 0 }: DigitProps) {
    const [currentValue, setCurrentValue] = useState(value);
    const [isAnimating, setIsAnimating] = useState(false);
    const prevValueRef = useRef(value);

    useEffect(() => {
        if (value === prevValueRef.current) return;

        setIsAnimating(true);
        const timer = setTimeout(() => {
            setCurrentValue(value);
            prevValueRef.current = value;

            // Reset animation state after animation completes
            setTimeout(() => setIsAnimating(false), duration);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, duration, delay]);

    // For non-numeric characters (like $, ., ,), don't animate
    if (!/\d/.test(value)) {
        return <span className="odometer-static">{value}</span>;
    }

    // Convert string digit to number for transform calculation
    const targetDigit = parseInt(currentValue, 10);

    return (
        <span className="odometer-digit">
            <span
                className="odometer-digit-inner"
                style={{
                    transform: `translateY(-${targetDigit * 1.2}em)`,
                    transition: isAnimating ? `transform ${duration}ms linear` : 'none',
                }}
            >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
                    <span key={digit} className="odometer-digit-item">
                        {digit}
                    </span>
                ))}
            </span>
        </span>
    );
}

export function Odometer({
    value,
    duration = 800,
    formatOptions,
    className = ''
}: OdometerProps) {
    const formattedValue = formatOptions
        ? new Intl.NumberFormat('en-US', formatOptions).format(value)
        : value.toFixed(2);

    const digits = formattedValue.split('');

    return (
        <span className={`odometer ${className}`}>
            {digits.map((digit, index) => (
                <Digit
                    key={index}
                    value={digit}
                    duration={duration}
                    delay={index * 30} // Stagger animation for cascade effect
                />
            ))}
        </span>
    );
}
