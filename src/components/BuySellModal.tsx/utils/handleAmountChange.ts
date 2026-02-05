export const handleAmountChange = (value: string, setAmount: (amount: string) => void) => {
    value = value.replace(/^\$/, '').replace(/,/g, '')
    value = value.replace(/[^\d.]/g, '')
    const parts = value.split('.')
    if (parts.length > 2) {
        value = parts[0] + '.' + parts.slice(1).join('')
    }

    if (value) {
        const [integerPart, decimalPart] = value.split('.')
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        const formattedValue = decimalPart !== undefined
            ? `${formattedInteger}.${decimalPart}`
            : formattedInteger
        setAmount(`$${formattedValue}`)
    } else {
        setAmount('')
    }
}