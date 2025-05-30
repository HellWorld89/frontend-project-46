# Проект: Вычислитель отличий
[![Actions Status](https://github.com/HellWorld89/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/HellWorld89/frontend-project-46/actions)
[![Maintainability](https://qlty.sh/badges/6bd6e89f-7110-4424-9b33-4f9eee51967b/maintainability.svg)](https://qlty.sh/gh/HellWorld89/projects/frontend-project-46)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=HellWorld89_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=HellWorld89_frontend-project-46)

## Описание

**Gendiff** - это мощная утилита командной строки для сравнения конфигурационных файлов в форматах JSON и YAML. Она выводит различия между двумя файлами в наглядном формате, помогая быстро понять, что изменилось между версиями конфигурации.

## Особенности
- Поддержка JSON и YAML форматов

- Два формата вывода различий: стильный (stylish) и плоский (plain)

- Рекурсивное сравнение вложенных структур

- Простой и интуитивно понятный интерфейс

- Кроссплатформенная работа

## Установка
- Убедитесь, что у вас установлен Node.js версии 14 или выше

- Установите утилиту с помощью npm: **npm install -g @hexlet/code**

## Использование

**gendiff [options] <filepath1\> <filepath2\>**

## Параметры

| Опция                 |            Описание                      |
|-----------------------|------------------------------------------|
| -V, --version         | Вывести версию программы                 |
| -f, --format <type>   | Задать формат вывода (stylish, plain)    |
| -h, --help            | Показать справку                         |


## Форматы вывода
### Стильный формат (stylish)
Формат по умолчанию, который показывает различия в виде древовидной структуры с подсветкой изменений:

**+\ -  добавленные свойства**

**-\ - удаленные свойства**

**Пробел - неизмененные свойства**

Идеально подходит для визуального анализа изменений в конфигурационных файлах.

### Плоский формат (plain)
Компактный текстовый формат, который перечисляет все изменения в виде простых предложений. Особенности:

Показывает полный путь к измененным свойствам

Для сложных значений используется обозначение [complex value]

Строковые значения заключаются в кавычки

Идеален для интеграции с другими инструментами или для быстрого просмотра изменений.

---
## Демонстрация работы

**Аскинема для проверки JSON.** \
gendiff ./__fixtures__/file1.json ./__fixtures__/file2.json
[![asciicast](https://asciinema.org/a/HUzTFrtTN1TmTTaEr6UgYswtI.svg)](https://asciinema.org/a/HUzTFrtTN1TmTTaEr6UgYswtI)

**Аскинема для проверки YML.** \
gendiff ./__fixtures__/file1.yml ./__fixtures__/file2.yml
[![asciicast](https://asciinema.org/a/RRwYCcOdeUyboUyeKoc0I8ErX.svg)](https://asciinema.org/a/RRwYCcOdeUyboUyeKoc0I8ErX)

**Аскинема для Рекурсивного сравнения.** \
gendiff ./__fixtures__/file1.yml ./__fixtures__/file2.yml \
gendiff ./__fixtures__/file1.json ./__fixtures__/file2.json
make test
[![asciicast](https://asciinema.org/a/h9yjLjMXAJgH90GJwyqrNkhn2.svg)](https://asciinema.org/a/h9yjLjMXAJgH90GJwyqrNkhn2)

**Аскинема для плоского формата.** \
gendiff --format plain  ./__fixtures__/file1.json ./__fixtures__/file2.json
gendiff --format plain  ./__fixtures__/file1.yml ./__fixtures__/file2.yml
[![asciicast](https://asciinema.org/a/za4hUz8P9ISie4TLGPZVAgwmV.svg)](https://asciinema.org/a/za4hUz8P9ISie4TLGPZVAgwmV)

## Разработка
**Установка зависимостей** \
**npm install**

**Запуск тестов** \
**npm test**

**Проверка линтером** \
**npm run lint**