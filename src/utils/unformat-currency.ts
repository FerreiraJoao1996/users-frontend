export const unformatCurrency = (value: string) => {
    return Number(value.replace(/[^\d,]/g, "").replace(",", "."));
};