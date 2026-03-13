[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/yMih2khG)
# Правила и регламент

- [Экзамен: правила, рекомендации и порядок проведения](https://hexly.notion.site/d9289c18871c44508bc7c7f05a51d94f)

## Задание

Ваша задача написать консольную утилиту, которая анализирует переданные файлы с информацией о пользователях и выводит на экран некоторую статистику по данным. Файлы хранятся в директории *\_\_fixtures\_\_* в формате `JSON`. Они используются для тестов и понадобятся вам, для запуска и проверки утилиты в терминале. Вся информация уже прочитана и содержится в константе `content`. Вам остается только написать и экспортировать функцию в файле *index.js*, которая принимает данные в виде строки и работает с ними. Программа выводит строки в консоль, каждая строчка является решением определенного шага. Таким образом 5 шагов предполагает 5 строчек в консоли.

Пример запуска утилиты:

```bash
# запуск команды в терминале
bin/users.js __fixtures__/users1.json

# вывод всех 5 задач сразу
Пользователи: Charlie, Grace, Eve, Grace, Jack, David, Charlie, Emily, Emma, Daniel
Пользователи до 30 лет: Charlie, Grace, David, Charlie, Emily, Daniel
Лайки и имя пользователя: Emma: 96, Charlie: 80, Emily: 75, Jack: 72, Charlie: 43, Grace: 40, Grace: 29, Daniel: 28, Eve: 25, David: 4
Gmail пользователи: { id: 3, name: Eve }, { id: 4, name: Grace }, { id: 8, name: Emily }
Уникальные имена друзей из Берлина: Alice, Bob, Charlie, Daniel, David, Emily, Emma, Frank, Henry, Ivy, Jack, John, Kate, Michael, Samuel, Sophia
```

Вывод содержит фиксированный набор строчек (Имя, Лайки, ...), каждая из которых соответствует какой-то агрегированной информации по данным из файла. Например, первая строчка содержит имя пользователя в переданном файле. Значения в этих строчках зависят от данных внутри переданного файла. В примере выше это *Charlie, Grace, Eve, Grace, Jack, David, Charlie, Emily, Emma, Daniel*, в вашем случае может быть другое, зависит от того, с каким файлом ведется работа.

Каждая строчка в выводе утилиты, представляет собой небольшое отдельное вычислительное задание. Вам предстоит решать эти задачи по очереди. Ниже список этих заданий:

### 1. Выведите имена всех пользователей.

```bash
# запуск команды в терминале
bin/users.js __fixtures__/users1.json
# вывод 1 задачи
Пользователи: Charlie, Grace, Eve, Grace, Jack, David, Charlie, Emily, Emma, Daniel
```

### 2. Дополните вывод: пользователи, чей возраст меньше 30 лет.

```bash
bin/users.js __fixtures__/users1.json
# дополняем нашу утилиту новым функционалом, теперь команда выводит сразу 2 задачи в терминале
Пользователи: Charlie, Grace, Eve, Grace, Jack, David, Charlie, Emily, Emma, Daniel
Пользователи до 30 лет: Charlie, Grace, David, Charlie, Emily, Daniel
```

### 3. Дополните вывод: имя пользователя и количество его лайков, отсортированные по количеству лайков в порядке убывания.

```bash
bin/users.js __fixtures__/users1.json

Пользователи: Charlie, Grace, Eve, Grace, Jack, David, Charlie, Emily, Emma, Daniel
Пользователи до 30 лет: Charlie, Grace, David, Charlie, Emily, Daniel
Лайки и имя пользователя: Emma: 96, Charlie: 80, Emily: 75, Jack: 72, Charlie: 43, Grace: 40, Grace: 29, Daniel: 28, Eve: 25, David: 4
```

### 4. Дополните вывод: имена и id всех пользователей, почта которых имеет доменное имя *gmail.com*, в виде объекта.

```bash
bin/users.js __fixtures__/users1.json

Пользователи: Charlie, Grace, Eve, Grace, Jack, David, Charlie, Emily, Emma, Daniel
Пользователи до 30 лет: Charlie, Grace, David, Charlie, Emily, Daniel
Лайки и имя пользователя: Emma: 96, Charlie: 80, Emily: 75, Jack: 72, Charlie: 43, Grace: 40, Grace: 29, Daniel: 28, Eve: 25, David: 4
Gmail пользователи: { id: 3, name: Eve }, { id: 4, name: Grace }, { id: 8, name: Emily }
```

### 5. Дополните вывод: уникальные (без повторений) имена друзей, среди пользователей из города *Berlin*, отсортированные в алфавитном порядке.

```bash
bin/users.js __fixtures__/users1.json

Пользователи: Charlie, Grace, Eve, Grace, Jack, David, Charlie, Emily, Emma, Daniel
Пользователи до 30 лет: Charlie, Grace, David, Charlie, Emily, Daniel
Лайки и имя пользователя: Emma: 96, Charlie: 80, Emily: 75, Jack: 72, Charlie: 43, Grace: 40, Grace: 29, Daniel: 28, Eve: 25, David: 4
Gmail пользователи: { id: 3, name: Eve }, { id: 4, name: Grace }, { id: 8, name: Emily }
Уникальные имена друзей из Берлина: Alice, Bob, Charlie, Daniel, David, Emily, Emma, Frank, Henry, Ivy, Jack, John, Kate, Michael, Samuel, Sophia 
```
