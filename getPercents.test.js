import getPercents from './task/task_01';

describe("test function getPercents",
 () =>
  it('getPercent 20% from 500', () => {
    const result = getPercents(20,500);
    expect(result).toBe(100);
  }),
  it('getPercent 15% from 60', () => {
    const result = getPercents(15,60);
    expect(result).toBe(9);
  })
   );
  describe("test function getPercents",
   () =>
    it('сorner case', () => {
      const result = getPercents("yyy", 350);
      expect(result).toBe(NaN);
    })
     );
 
 
 

 
 




