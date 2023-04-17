Простой ToDo список, реализованный на веб-фреймворке Flask

Этот проект представляет собой простое приложение для создания списка дел. Он использует Flask, SQLAlchemy и Jinja2 для создания динамических HTML-страниц.

Архитектурно, приложение состоит из трех основных компонентов: модели, маршрутов и шаблонов.

Модель ToDo определена в файле models.py и используется для создания таблицы в базе данных, которая хранит информацию о задачах в списке дел.

Маршруты определены в файле routes.py и обрабатывают HTTP-запросы от клиента. Они используют модель ToDo для доступа к базе данных и возвращают HTML-страницы, которые отображают список задач, форму добавления новых задач и кнопки для обновления и удаления задач.

Шаблоны определены в файлах layout.html и index.html. Они используют Jinja2 для динамического создания HTML-страниц на основе данных, переданных из маршрутов.

Файл config.py содержит настройки приложения, такие как адрес базы данных.

Файл app.py является точкой входа в приложение и запускает его с помощью метода run(). Он также создает таблицу ToDo в базе данных, если ее еще нет.

В целом, архитектура приложения следует модулю  Model-View-Controller (MVC), где модель (ToDo) представляет данные, маршруты (routes.py) обрабатывают запросы и возвращают представление (HTML-страницы), а шаблоны (layout.html и index.html) отображают данные в виде пользовательского интерфейса.