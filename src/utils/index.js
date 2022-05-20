export const getUpToThreeDecimals = num => 
  new Intl.NumberFormat('es-CO', { maximumFractionDigits: 2 })
    .format(num)
