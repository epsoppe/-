// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';

import { execSync } from 'child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = { encoding: 'utf8', cwd: path.join(__dirname, '..') };
const result1 = execSync(
  'bin/users.js __fixtures__/users1.json',
  // @ts-ignore
  options,
);
const result2 = execSync(
  'bin/users.js __fixtures__/users2.json',
  // @ts-ignore
  options,
);
const rows1 = result1.trim().split('\n');
const rows2 = result2.trim().split('\n');

test('step1', () => {
  assert.strictEqual(rows1[0], 'Пользователи: Charlie, Grace, Eve, Grace, Jack, David, Charlie, Emily, Emma, Daniel');
  assert.strictEqual(rows2[0], 'Пользователи: John, Sophia, Michael, Alice, Olivia, David, Kate, Emily, Emma, Daniel');
});

test('step2', () => {
  assert.strictEqual(rows1[1], 'Пользователи до 30 лет: Charlie, Grace, David, Charlie, Emily, Daniel');
  assert.strictEqual(rows2[1], 'Пользователи до 30 лет: Sophia, Kate, Emily');
});

test('step3', () => {
  assert.strictEqual(rows1[2], 'Лайки и имя пользователя: Emma: 96, Charlie: 80, Emily: 75, Jack: 72, Charlie: 43, Grace: 40, Grace: 29, Daniel: 28, Eve: 25, David: 4');
  assert.strictEqual(rows2[2], 'Лайки и имя пользователя: Emma: 100, Olivia: 90, Emily: 85, Kate: 70, Alice: 60, John: 50, Sophia: 35, Daniel: 30, Michael: 20, David: 10');
});

test('step4', () => {
  assert.strictEqual(rows1[3], 'Gmail пользователи: { id: 3, name: Eve }, { id: 4, name: Grace }, { id: 8, name: Emily }');
  assert.strictEqual(rows2[3], 'Gmail пользователи: { id: 1, name: John }, { id: 4, name: Alice }');
});

test('step5', () => {
  assert.strictEqual(rows1[4], 'Уникальные имена друзей из Берлина: Alice, Bob, Charlie, Daniel, David, Emily, Emma, Frank, Henry, Ivy, Jack, John, Kate, Michael, Samuel, Sophia');
  assert.strictEqual(rows2[4], 'Уникальные имена друзей из Берлина: Alice, Daniel, David, Emily, Emma, Henry, Ivy, Jack, John, Kate, Michael, Samuel');
});
