import { Map } from 'immutable';

function mergeDeeplyElements(page1, page2) {
  // Combine the values from both objects into a Set to remove duplicates
  const combinedValuesSet = new Set([...Object.values(page1), ...Object.values(page2)]);
  
  // Convert the Set back to an array
  const combinedValuesArray = Array.from(combinedValuesSet);

  return combinedValuesArray;
}
