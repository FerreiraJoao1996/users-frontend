export const formatCurrency = (value: string | number) => {
    const numericValue = Number(value.toString().replace(/\D/g, ""));
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(numericValue);
};
