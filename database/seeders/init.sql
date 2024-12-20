INSERT INTO `cities` (`id`, `name`, `created_at`, `updated_at`)
VALUES (1, 'Казань', '2024-10-10 10:24:35', '2024-10-10 10:24:35'),
       (2, 'Москва', '2024-10-10 10:26:47', '2024-10-10 10:26:47');

INSERT INTO `customers` (`id`, `type`, `name`, `image`, `email`, `phone`, `password`, `data`, `tariff_id`,
                         `tariff_end_of`, `email_verified_at`, `deleted_at`, `created_at`, `updated_at`, `photo`)
VALUES (1, 2, 'Павел', '', 'Mr.terks@yandex.ru', '+79992332079',
        '$2y$12$mcgrCAQfU9B1bGK3vxIaZujPZ8h8G6Gi.727TuocabW57913Tou/O', NULL, NULL, NULL, NULL, NULL,
        '2024-10-22 16:10:45', '2024-11-11 05:54:09', NULL);

INSERT INTO `settings` (`id`, `type`, `code`, `value`, `created_at`, `updated_at`)
VALUES (1, 'markdown', 'title', '\"Маркетплейс работы для выпускников онлайн школ\"', '2024-10-11 10:29:02',
        '2024-10-11 10:29:02'),
       (2, 'markdown', 'sub_title', '\"**Новый** канал поиска сотрудников\"', '2024-10-11 10:30:29',
        '2024-10-21 08:30:03'),
       (3, 'markdown', 'description',
        '\"Общайтесь с выпускниками образовательных платформ **ПЕРВЫМИ ДО** их выхода на рынок труда!\"',
        '2024-10-11 10:31:58', '2024-10-11 10:31:58'),
       (4, 'markdown', 'advantages',
        '\"НЕ платите за размещение вакансий.\\nБЕЗ оплаты за отклики соискателей.\\nБезопасно общаетесь и обмениваетесь контактами с соискателями.\"',
        '2024-10-11 10:33:26', '2024-10-11 10:33:26'),
       (5, 'markdown', 'advantages_company',
        '\"**расширение каналов** привлечения соискателей.\\n**уменьшение удельной стоимости** подбора кандидатов.\\nтрудоустройство в течение **нескольких дней**.\\n**бесплатное размещение вакансий. Бесплатное открытие контактов и общение с кандидатами.**\\n**оплата** только по факту трудоустройства.\"',
        '2024-10-11 10:37:40', '2024-10-11 10:37:40'),
       (6, 'markdown', 'advantages_worker',
        '\"**трудоустройство** сразу после окончания курсов или во время курсов.\\n**экономите время** на поиск работы.\\n**сужение воронки поиска.**\\nпрямой выход на работодателей готовых к общению с кандидатами **без опыта**\\n**БОНУС ПРИ ТРУДОУСТРОЙСТВЕ.**\"',
        '2024-10-11 10:38:31', '2024-10-21 10:46:50'),
       (7, 'markdown', 'coop_educational',
        '\"Повышение ценности образовательного продукта за счет оперативного трудоустройства выпускников. Одно окно входа работодателей. Одно окно входа для всех выпускников.\"',
        '2024-10-11 10:39:13', '2024-10-11 10:39:13'),
       (8, 'markdown', 'advantages_title',
        '\"**получаете выплату 20000 руб. не позднее 10 дней от момента трудоустройства.**\"', '2024-10-11 10:40:28',
        '2024-10-11 10:40:28'),
       (9, 'markdown', 'advantages_company_2',
        '\"**Получаете доступ к контактам соискателей и неограниченный пакет публикации вакансий за два шага:**\\n1. Заполняете профиль работодателя.\\n2. Подписываете договор.\\n\\n**Производите оплату по факту трудоустройства кандидата согласно выбранному тарифу.**\"',
        '2024-10-11 10:41:16', '2024-10-21 10:56:37'),
       (10, 'markdown', 'advantages_worker_2',
        '\"если вы **окончили курсы** повышения квалификации/переквалификации год назад и ранее\\nхотите **получить бонусы** при трудоустройстве.\\nрассматриваете **предложения о работе.**\"',
        '2024-10-11 10:44:44', '2024-10-21 11:07:24'),
       (11, 'markdown', 'advantages_worker_3',
        '\"**зарегистрироваться** и заполнить **минимальную информацию** в профиле.\\nрассмотреть **интересующие вакансии** от работодателей и **откликнуться** на выбранные вакансии.\\nпроходить **неограниченное количество собеседований** у работодателей.\\n**получить** и выбрать **предложение о работе.**\\n**предоставить информацию** о факте Вашего трудоустройства.\\nполучаете выплату **20000 руб. не позднее 10 дней** от момента трудоустройства.\"',
        '2024-10-11 10:45:11', '2024-10-21 11:09:28'),
       (12, 'markdown', 'contact_form_description',
        '\"njgfdg hetewh gheutehrutetukyu higueyh hruyeiyeuiyeur rhireyr gjriur reeliyureiyur jrhreiur yur hriyeruryoi uro njgfdg hetewh gheutehrutetukyu higueyh hruyeiyeuiyeur rhireyr gjriur reeliyureiyur jrhreiur yur hriyeruryoi uro njgfdg hetewh gheutehrutetukyu higueyh hruyeiyeuiyeur rhireyr gjriur reeliyureiyur jrhreiur yur hriyeruryoi uro njgfdg hetewh gheutehrutetukyu higueyh hruyeiyeuiyeur rhireyr gjriur reeliyureiyur jrhreiur yur hriyeruryoi uro\"',
        '2024-10-11 10:45:45', '2024-10-11 10:45:45'),
       (13, 'string', 'email', '\"test@mail.ru\"', '2024-10-18 05:34:24', '2024-10-18 05:34:24'),
       (14, 'string', 'telephone', '\"8 (900) 567 56 78\"', '2024-10-18 05:34:54', '2024-10-18 05:34:54'),
       (15, 'string', 'offer_link', '\"http://online-platform.ru\"', '2024-10-18 05:36:06', '2024-10-18 05:36:06'),
       (16, 'string', 'requisites_link', '\"http://online-platform.ru\"', '2024-10-18 05:36:38', '2024-10-18 05:36:38'),
       (17, 'string', 'personal_policy_link', '\"http://online-platform.ru\"', '2024-10-18 05:37:20',
        '2024-10-18 05:37:20'),
       (18, 'markdown', 'description_1',
        '\"Считаете что **рынок кандидатов исчерпан?** Кандидатов нет? **Стоимость** подбора персонала растет, а количество соискателей **уменьшается?**\\n**Кандидаты менее активны** и менее заинтересованны в работе? **Прогнозы** рынка труда **не радуют?**\"',
        '2024-10-21 08:34:59', '2024-10-21 08:37:38'),
       (19, 'markdown', 'description_2',
        '\"**НОВЫЙ** канал поиска сотрудников для компаний готовых к переменам. **Убираем дефицит рынка** труда и **открываем возможности** выпускникам образовательных программ.\"',
        '2024-10-21 08:35:48', '2024-10-21 08:35:48');

INSERT INTO `skills` (`id`, `name`, `created_at`, `updated_at`)
VALUES (1, 'golang', '2024-10-10 12:45:59', '2024-10-10 12:45:59'),
       (2, 'kotlin', '2024-10-10 12:46:05', '2024-10-10 12:46:05'),
       (3, 'git', '2024-10-10 12:46:12', '2024-10-10 12:46:12'),
       (4, 'java', '2024-10-10 12:46:25', '2024-10-10 12:46:25'),
       (5, 'ruby', '2024-10-10 12:46:34', '2024-10-10 12:46:34'),
       (6, 'php', '2024-10-10 12:46:42', '2024-10-10 12:46:42'),
       (7, 'laravel', '2024-10-10 12:46:47', '2024-10-10 12:46:47'),
       (8, 'redis', '2024-10-10 12:47:04', '2024-10-10 12:47:04');

INSERT INTO `specializations` (`id`, `name`, `created_at`, `updated_at`)
VALUES (1, 'IT', '2024-10-10 10:27:40', '2024-10-10 10:27:40');

INSERT INTO `tariffs` (`id`, `name`, `price`, `description`, `comment`, `created_at`, `updated_at`)
VALUES (1, 'Базовый', 4000, '**за одного кандидата**\n\\*при трудоустройстве \n**1 кандидата** в месяц',
        'не подразумевает бесплатную замену', '2024-10-10 12:49:12', '2024-10-21 11:21:02');

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`,
                     `updated_at`)
VALUES (8, 'Admin', 'admin@test.local', NULL, '$2y$12$NZm8xyZPIWc8O3s4DVSmwOKuLqwX5W7a9UNvo80K6zzkXxYpbSIPW',
        'Moy954WRiUYLDGFcYZ5ATXzEkIGYZlC23kuaZlYOZyEEdsXGgPFhGpbaPUyS', '2024-10-09 12:21:31', '2024-10-09 12:21:31');
