export const handleAmountChange = (value: string): string => {
    value = value.replace(/^\$/, '').replace(/,/g, '')
    value = value.replace(/[^\d.]/g, '')
    const parts = value.split('.')
    if (parts.length > 2) {
        value = parts[0] + '.' + parts.slice(1).join('')
    }

    if (value) {
        const [integerPart, decimalPart] = value.split('.')
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

        if (decimalPart === '00') {
            return `$${formattedInteger}`
        }

        const formattedValue = decimalPart !== undefined
            ? `${formattedInteger}.${decimalPart}`
            : formattedInteger
        return `$${formattedValue}`
    } else {
        return ''
    }
}