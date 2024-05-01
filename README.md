# Вычислитель отличий

### Hexlet tests and linter status:
[![Actions Status](https://github.com/tychka89/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/tychka89/frontend-project-46/actions)
[![linter](https://github.com/tychka89/frontend-project-46/actions/workflows/linter.yml/badge.svg)](https://github.com/tychka89/frontend-project-46/actions/workflows/linter.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/2cc7a92f85bd69fb6df5/maintainability)](https://codeclimate.com/github/tychka89/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2cc7a92f85bd69fb6df5/test_coverage)](https://codeclimate.com/github/tychka89/frontend-project-46/test_coverage

### Описание
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

### Минимальные системные требования:

- node.js

### Установка:

```bash
    git clone git@github.com:tychka89/frontend-project-46.git
    cd frontend-project-46
    make install
    npm link
```

### Помощь:

```bash
	gendiff -h 
    gendiff --help
```

### Запуск:

```bash
	gendiff --format [type] <file1> <file2>
    