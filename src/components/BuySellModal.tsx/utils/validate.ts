export const validate = (value: string, type: 'cash' | 'btc',) => {
    const [integerPart, _] = value.split('.')

    if (type === 'cash' && integerPart.length > 10) {
        return `$1,000,000,000`
    } else if (type === 'btc' && integerPart.length > 4) {
        return `1000 BTC`
    }
    return value
}