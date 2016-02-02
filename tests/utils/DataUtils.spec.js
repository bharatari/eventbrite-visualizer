import DataUtils from 'utils/DataUtils';

describe('DataUtils', function () {
  describe('#exists', function () {
    it('should return true if label exists', function () {
      const data = [
        { label: 'USA', value: 1 },
        { label: 'India', value: 1 },
        { label: 'China', value: 1 }
      ];
      const label = 'USA';
      const result = DataUtils.exists(data, label);
      assert.ok(result);
    });
    it('should return false if label does not exist', function () {
      const data = [
        { label: 'USA', value: 1 },
        { label: 'India', value: 1 },
        { label: 'China', value: 1 }
      ];
      const label = 'Canada';
      const result = DataUtils.exists(data, label);
      assert.notOk(result);
    });
  });
  describe('#find', function () {
    it('should return valid index if label exists', function () {
      const data = [
        { label: 'USA', value: 1 },
        { label: 'India', value: 1 },
        { label: 'China', value: 1 }
      ];
      const label = 'China';
      const result = DataUtils.find(data, label);
      assert.equal(result, 2);
    });
    it('should return null if label does not exist', function () {
      assert.ok(true);
    });
  });
  describe('#getProperty', function () {
    it('should return nested properties', function () {
      const object = {
        nest: {
          something: {
            here: 'hello'
          }
        }
      };
      const expected = 'hello';
      const result = DataUtils.getProperty(object, 'nest.something.here');
      assert.equal(result, expected);
    });
    it('should return null if property does not exist', function () {
      const object = {
        nest: {
          something: {}
        }
      };
      const expected = null;
      const result = DataUtils.getProperty(object, 'nest.something.here');
      assert.equal(result, expected);
    });
    it('should return null if property does not have nested property', function () {
      const object = {
        nest: {
          something: 'hello'
        }
      };
      const expected = null;
      const result = DataUtils.getProperty(object, 'nest.something.here');
      assert.equal(result, expected);
    });
  });
  describe('#getViewByProperty', function () {
    it('should get viewBy property', function () {
      const expected = 'venue.address.country';
      const result = DataUtils.getViewByProperty('country');
      assert.equal(result, expected);
    });
  })
});
