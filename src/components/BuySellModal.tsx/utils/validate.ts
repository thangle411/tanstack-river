export const validate = (value: string, type: 'cash' | 'btc',) => {
    let valueAsNumber = Number(value.replace(/^\$/, '').replace(/,/g, ''))
    if (type === 'cash' && valueAsNumber > 1_000_000_000) {
        return `$1,000,000,000`
    } else if (type === 'btc' && valueAsNumber > 1_000) {
        return `1000 BTC`
    }
    return value
}