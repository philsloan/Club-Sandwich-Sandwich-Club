module.exports = {
  gte: (int1,int2) => int1 >= int2,
  gt: (int1,int2) => int1 > int2,
  lte: (int1,int2) => int1 <= int2,
  lt: (int1,int2) => int1 < int2,
  eq: (int1,int2) => int1 == int2,
  deq: (int1,int2) => int1 !== int2,
  format_rating: (rating) => {
    return Math.round(rating * 100)/100
  },
}
