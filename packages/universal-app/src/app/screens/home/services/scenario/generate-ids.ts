let generateIdsNextId = 1;

export const generateIds = (scenario) => {
  return scenario.map(item => ({
    ...item,
    id: generateIdsNextId++
  }));
};
