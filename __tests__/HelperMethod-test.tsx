/**
 * @format
 */

import 'react-native';
import { normalizeApiData } from '../src/Game/Helper';

const testData = 'map:\n□□□□□□□□□□\n□□□□□□□□□□\n□□□□□□□□□□\n□□□□□□□□□□\n□□□□□□□□□□\n□□□□□□□□□□\n□□□□□□□□□□\n□□□□□□□□□□\n□□□□□□□□□□\n□□□□□□□□□□\n';


it('normalize data correctly', () => {
  const normalizedData = normalizeApiData(testData);
  expect(normalizedData.length).toBe(10);
  normalizedData.forEach(row => {
    expect(row.length).toBe(10);
    row.forEach(element => {
      expect(element).toBe('□');
    });
  });
});
