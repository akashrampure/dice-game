const calculateResult = (bet, choice, dice1, dice2) => {
  const sum = dice1 + dice2;
  let winAmount = 0;

  if (choice === '7') {
    if (sum === 7) winAmount = bet * 5;
  } else if (choice === 'up') {
    if (sum > 7) winAmount = bet * 2;
  } else if (choice === 'down') {
    if (sum < 7) winAmount = bet * 2;
  }

  return { sum, winAmount };
};
