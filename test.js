import ava from 'ava';
import toArray from './';

ava('Converts single no-array value', t => {
  const a = toArray('test');
  const b = toArray(5);

  t.is(a[0], 'test');
  t.is(b[0], 5);
});

ava('Does not convert null or undefined', t => {
	const a = toArray(null);
  const b = toArray(undefined);

	t.is(a[0], undefined);
  t.is(b[0], undefined);
});

ava('Does not convert array', t => {
  const a = toArray(['1', 2]);

  t.is(a[0], '1');
  t.is(a[1], 2);
});
