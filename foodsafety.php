<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link type="Image/x-icon" href="/images/favicon.ico" rel="icon">
    <title>Специалист по пищевой безопасности</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <link rel="stylesheet" href="css/select2.min.css">
</head>
<body>
<div class="wrapper">
<?php include 'header.php'; ?>
<main>
    <section class="home home--admin">
        <div class="container">
            <div class="home__content">
                <div class="img-admin">
                    <img src="images/theHead.jpeg" loading="eager" alt="Специалист по пищевой безопасности и общей гигиене в гостиничной и ресторанной сфере">
                </div>
                <h1 class="home__title">«Специалист по пищевой безопасности и общей гигиене в гостиничной и ресторанной сфере»</h1>
                <p class="home__description">Бесплатно обучитесь искусству гостеприимства от лидера гостиничной отрасли <strong>Cosmos Hotel Group</strong></p>
                <p class="home__description_p2">И получите помощь с трудоустройством от государства</p>
                <button type="button" class="btn"><a href="#form">Начать обучение</a></button>
                <!--                     data-modal-id="modal-main-form" data-modal-open=""-->
            </div>
        </div>
    </section>
    <section class="resolution">
        <div class="container">
            <div class="federation__content">
                <h2 id="federation-project">О федеральном проекте</h2>
                <div class="about__project">
                    <div class="federation__content">
                        <p class="federation__description">Федеральный проект “Содействие занятости” призван дать возможность ученикам открыть для себя новые профессии или повысить квалификацию в текущей.</p>
                        <p class="federation__description">Используя наш опыт обучения более тысяч студентов в Академии и управления десятками отелей, мы составили программы для обучения в рамках Содействия Занятости, которые подойдут даже новичкам в индустрии.</p>

                    </div>
                    <div class="about__project__logo">
                        <div class="about__project__logo_upd">
                            <img class="logo1" src="images/cosmosacademy.png" loading="eager" alt="Космос академия">
                            <img class="logo2" src="images/Logo2.png" loading="eager" alt="Министерство труда">
                            <img class="logo3" src="images/Logo3.png" loading="eager" alt="Томский Государственный Университет">
                            <img class="logo4" src="images/Logo4.png" loading="eager" alt="Национальные проекты России">
                        </div>
                        <img class="photo2" src="images/photo2.jpg" loading="eager" alt="Фото о проекте">
                    </div>
                </div>
                <div class="resolution__block">
                    <p>Ознакомьтесь с постановлением Правительства РФ о реализации проекта</p>
                    <a class="btn" href="http://government.ru/docs/all/152307/" target="blank">Изучить</a>
                </div>

            </div>
        </div>

    </section>

    <section class="about">
        <div class="container">
            <h2>Cosmos Academy - это</h2>
<!--            <p class="about__description">«Содействие занятости» — это государственный проект, цель которого — бесплатно помочь гражданам повысить квалификацию и востребованность на рынке труда или сменить профессию.</p>-->
            <ul class="about__items">
                <li class="about__item">
                    <h4>3500</h4>
                    <p><strong>выпускников в год</strong></p>
                </li>
                <li class="about__item">
                    <h4>150</h4>
                    <p><strong>экспертов</strong></p>
                </li>
                <li class="about__item">
                    <h4>20+</h4>
                    <p><strong>лет опыта</strong></p>
                </li>
            </ul>
        </div>
    </section>


    <section class="participation" id="participation">

        <div class="container">
            <div class="participation__header">
                <h2>Обучение бесплатно, если вы:</h2>
                <div class="participation__navigation slider-navigation">
                    <button class="slider-navigation__button slider-navigation__button--prev" type="button"></button>
                    <div class="swiper-pagination"></div>
                    <button class="slider-navigation__button slider-navigation__button--next" type="button"></button>
                </div>
            </div>
        </div>

        <div class="participation__slider swiper">

            <ul class="participation__slides swiper-wrapper">

<!--                <li class="participation__slide swiper-slide swiper-slider">-->
<!---->
<!--                    <div class="participation__slide-image">-->
<!--                        <img src="images/photo3.png" class="swiper-lazy" loading="lazy" width="248" height="234" alt="Фотография выпускника вуза">-->
<!--                        <div class="swiper-lazy-preloader"></div>-->
<!--                    </div>-->
<!--                    <div class="participation__slide-content">-->
<!--                        <p>Трудоустроены или ищите работу</p>-->
<!--                        <button type="button" data-modal-id="participation-modal" data-modal-open="">Подробнее</button>-->
<!--                    </div>-->
<!--                    <div class="participation__slide-info">-->
<!--                        <p>Как принять участие?</p>-->
<!--                        <ol class="participation__slide-rules">-->
<!--                            <li>1. Подайте заявку, выбрав категорию "Граждане, ищущие работу (или трудоустроенные)".</li>-->
<!--                            <li>2. Зарегистрируйтесь на портале "Работа России" и авторизуйтесь через портал "Госуслуги", имея подтвержденную учетную запись на "Госуслугах".-->
<!--                                Информацию о том, как получить этот статус, вы можете найти по указанной <a href="https://www.gosuslugi.ru/help/faq/login/2">ссылке</a>.</li>-->
<!--                            <li><strong>Обратите внимание если вы официально трудоустроены, что работодатель также должен быть зарегистрирован на портале "Работа России".</strong></li>-->
<!--                            <li>3. Создайте и заполните свое резюме на портале "Работа России". Это обязательное условие, которое не обязывает вас активно искать работу или менять работодателя, если вы уже трудоустроены.</li>-->
<!--                            <li>4. Затем составьте заявление, выбрав категорию "Я ищу работу и не претендую на статус безработного" и прикрепив заполненное резюме. Дождитесь модерации заявки в течение 1 дня, инструкция доступна по указанной <a href="https://trudvsem.ru/information-pages/service-assistance-finding-job/info" target="_blank"> ссылке</a>.</li>-->
<!--                            <li>5. Подтвердите заявку на обучение на портале "Работа России":-->
<!--                                Загрузите необходимые документы в Личный кабинет гражданина (паспорт, диплом об образовании, а также свидетельство о смене фамилии, если имеется). Предоставьте документы, подтверждающие вашу категорию участника, в Центр занятости населения (ЦЗН).</li>-->
<!--                        </ol>-->
<!--                        <ol class="participation__slide-documents">-->
<!--                            <li>Паспорт гражданина РФ или документ, его заменяющий.</li>-->
<!--                            <li>Копия трудовой книжки или документ, ее заменяющий. Вы можете получить выписку, даже если никогда не были трудоустроены.</li>-->
<!--                            <li>Документ, подтверждающий текущий уровень образования гражданина.</li>-->
<!--                        </ol>-->
<!--                    </div>-->
<!--                </li>-->
                <li class="participation__slide swiper-slide swiper-slider">

                    <div class="participation__slide-image">
                        <img src="images/photo4.png" class="swiper-lazy" loading="lazy" width="248" height="234" alt="Фотография">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="participation__slide-content">
                        <p>Под риском увольнения</p>
                        <button type="button" data-modal-id="participation-modal" data-modal-open="">Подробнее</button>
                    </div>
                    <div class="participation__slide-info">
                        <p>Как принять участие?</p>
                        <ol class="participation__slide-rules">
                            <li>1. Оставьте заявку на участие, выбрав категорию "Работники, находящиеся под риском увольнения".</li>
                            <li>2. Подтвердите заявку на портале "Работа России".</li>
                            <li>3. Загрузите необходимые документы в Личный кабинет гражданина, включая паспорт, диплом об образовании и, при наличии, свидетельство о смене фамилии.</li>
                            <li>4. Предоставьте документы, подтверждающие вашу категорию участника, в Центр занятости населения (ЦЗН).</li>
                        </ol>
                        <ol class="participation__slide-documents">
                            <li>Паспорт гражданина РФ или документ, его заменяющий.</li>
                            <li>Копия или выписка из приказа о введении режима неполного рабочего времени, простое, временной приостановке работ или предоставлении отпуска без сохранения заработной платы.</li>
                            <li>Документ, подтверждающий текущий уровень образования гражданина.</li>

                        </ol>
                    </div>

                </li>

                <li class="participation__slide swiper-slide swiper-slider">

                    <div class="participation__slide-image">
                        <img src="images/photo5.png" class="swiper-lazy" loading="lazy" width="248" height="234" alt="Фотография выпускника вуза">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="participation__slide-content">
                        <p>Находитесь в декрете</p>
                        <button type="button" data-modal-id="participation-modal" data-modal-open="">Подробнее</button>
                    </div>
                    <div class="participation__slide-info">
                        <p>Как принять участие?</p>
                        <ol class="participation__slide-rules">
                            <li>Чтобы принять участие, вам необходимо выполнить следующие шаги:</li>
                            <li>1. Оставьте заявку на участие, выбрав категорию "Граждане, находящиеся в отпуске по уходу за ребенком в возрасте до 3 лет".</li>
                            <li>2. Подтвердите заявку на портале "Работа России".</li>
                            <li>3. Загрузите необходимые документы в Личный кабинет гражданина, включая паспорт, диплом об образовании и, при наличии, свидетельство о смене фамилии.</li>
                            <li>4. Предоставьте документы, подтверждающие вашу категорию участника, в Центр занятости населения (ЦЗН).</li>
                        </ol>
                        <ol class="participation__slide-documents">
                            <li>Паспорт гражданина РФ или документ, его заменяющий.</li>
                            <li>Копия документа, связанного с работой и подтверждающего нахождения в отпуске по уходу за ребенком до достижения им возраста трех лет (в том числе и до 1,5 лет)</li>
                            <li>Свидетельство о рождении ребенка</li>
                            <li>Документ, подтверждающий текущий уровень образования гражданина.</li>
                        </ol>
                    </div>

                </li>
                <li class="participation__slide swiper-slide swiper-slider">

                    <div class="participation__slide-image">
                        <img src="images/photo6.png" class="swiper-lazy" loading="lazy" width="248" height="234" alt="Фотография">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="participation__slide-content">
                        <p>Старше 50 лет</p>
                        <button type="button" data-modal-id="participation-modal" data-modal-open="">Подробнее</button>
                    </div>
                    <div class="participation__slide-info">
                        <p>Как принять участие?</p>
                        <ol class="participation__slide-rules">
                            <li>Чтобы принять участие, вам необходимо выполнить следующие шаги:</li>
                            <li>1. Оставьте заявку на участие, выбрав категорию "Лица в возрасте 50-ти лет и старше".</li>
                            <li>2. Подтвердите заявку на портале "Работа России".</li>
                            <li>3. Загрузите необходимые документы в Личный кабинет гражданина, включая паспорт, диплом об образовании и, при наличии, свидетельство о смене фамилии.</li>
                            <li>4. Предоставьте документы, подтверждающие вашу категорию участника, в Центр занятости населения (ЦЗН).</li>
                        </ol>
                        <ol class="participation__slide-documents">
                            <li>Паспорт гражданина РФ или документ, его заменяющий.</li>
                            <li>Документ, подтверждающий текущий уровень образования гражданина.</li>
                        </ol>
                    </div>

                </li>

                <li class="participation__slide swiper-slide swiper-slider">

                    <div class="participation__slide-image">
                        <img src="images/photo7.png" class="swiper-lazy" loading="lazy" width="248" height="234" alt="Фотография выпускника вуза">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="participation__slide-content">
                        <p>Предпенсионер</p>
                        <button type="button" data-modal-id="participation-modal" data-modal-open="">Подробнее</button>
                    </div>
                    <div class="participation__slide-info">
                        <p>Как принять участие?</p>
                        <ol class="participation__slide-rules">
                            <li>Чтобы принять участие, вам необходимо выполнить следующие шаги:</li>
                            <li>1. Оставьте заявку на участие, выбрав категорию "Гражданин предпенсионного возраста".</li>
                            <li>2. Подтвердите заявку на портале "Работа России".</li>
                            <li>3. Загрузите необходимые документы в Личный кабинет гражданина, включая паспорт, диплом об образовании и, при наличии, свидетельство о смене фамилии.</li>
                            <li>4. Предоставьте документы, подтверждающие вашу категорию участника, в Центр занятости населения (ЦЗН).</li>
                        </ol>
                        <ol class="participation__slide-documents">
                            <li>Паспорт гражданина РФ или документ, его заменяющий.</li>
                            <li>Справка об отнесении к категории предпенсионера из ПФР.</li>
                            <li>Документ, подтверждающий текущий уровень образования гражданина.</li>
                        </ol>
                    </div>

                </li>
                <li class="participation__slide swiper-slide swiper-slider">

                    <div class="participation__slide-image">
                        <img src="images/photo8.png" class="swiper-lazy" loading="lazy" width="248" height="234" alt="Фотография">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="participation__slide-content">
                        <p>Зарегистрированы как безработный</p>
                        <button type="button" data-modal-id="participation-modal" data-modal-open="">Подробнее</button>
                    </div>
                    <div class="participation__slide-info">
                        <p>Как принять участие?</p>
                        <ol class="participation__slide-rules">
                            <li>Чтобы принять участие, вам необходимо выполнить следующие шаги</li>
                            <li>1. Оставьте заявку на участие, выбрав категорию "Безработные граждане, зарегистрированные в органах службы занятости".</li>
                            <li>2. Подтвердите заявку на портале "Работа России".</li>
                            <li>3. Загрузите необходимые документы в Личный кабинет гражданина, включая паспорт, диплом об образовании и, при наличии, свидетельство о смене фамилии.</li>
                            <li>4. Предоставьте документы, подтверждающие вашу категорию участника, в Центр занятости населения (ЦЗН).</li>
                        </ol>
                        <ol class="participation__slide-documents">
                            <li>Паспорт гражданина Ф или документ, его заменяющий.</li>
                            <li>Копия трудовой книжки или документ, ее заменяющий.</li>
                            <li>Документ, подтверждающий текущий уровень образования гражданина.</li>
                        </ol>
                    </div>

                </li>
                <li class="participation__slide swiper-slide swiper-slider">

                    <div class="participation__slide-image">
                        <img src="images/photo9.png" class="swiper-lazy" loading="lazy" width="248" height="234" alt="Фотография">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="participation__slide-content">
                        <p>В поиске работы более 4 месяцев после обучения</p>
                        <button type="button" data-modal-id="participation-modal" data-modal-open="">Подробнее</button>
                    </div>
                    <div class="participation__slide-info">
                        <p>Как принять участие?</p>
                        <ol class="participation__slide-rules">
                            <li>Чтобы принять участие, вам необходимо выполнить следующие шаги:</li>
                            <li>1. Оставьте заявку на участие, выбрав категорию "Граждане до 35 лет включительно, не занятые по истечении 4 месяцев с даты выдачи им документа об образовании и о квалификации".</li>
                            <li>2. Подтвердите заявку на портале "Работа России".</li>
                            <li>3. Загрузите необходимые документы в Личный кабинет гражданина, включая паспорт, диплом об образовании и, при наличии, свидетельство о смене фамилии.</li>
                            <li>4. Предоставьте документы, подтверждающие вашу категорию участника, в Центр занятости населения (ЦЗН).</li>
                        </ol>
                        <ol class="participation__slide-documents">
                            <li>Паспорт гражданина РФ или документ, его заменяющий.</li>
                            <li>Трудовая книжка или документ, ее замещающий.</li>
                            <li>Справка об отсутствии статуса индивидуального предпринимателя, формирующаяся на основании данных ЕГРИП из ФНС.</li>
                            <li>Справка (извещение) о состоянии лицевого счета из ПФР (в данном документе видно, что отсутствуют страховые поступления).</li>
                            <li>Документ об образовании и (или) о квалификации, или документ, заменяющий их.</li>
                            <li>Документ, подтверждающий текущий уровень образования гражданина.</li>
                        </ol>
                    </div>

                </li>
                <li class="participation__slide swiper-slide swiper-slider">

                    <div class="participation__slide-image">
                        <img src="images/photo10.png" class="swiper-lazy" loading="lazy" width="248" height="234" alt="Фотография">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="participation__slide-content">
                        <p>Прошли военную службу и в поиске работы более 4 месяцев</p>
                        <button type="button" data-modal-id="participation-modal" data-modal-open="">Подробнее</button>
                    </div>
                    <div class="participation__slide-info">
                        <p>Как принять участие?</p>
                        <ol class="participation__slide-rules">
                            <li>Чтобы принять участие, вам необходимо выполнить следующие шаги:</li>
                            <li>1. Оставьте заявку на участие, выбрав категорию <strong>"Граждане до 35 лет включительно, не занятые по истечении 4 месяцев с даты выдачи им документа об образовании и о квалификации".</strong></li>
                            <li>2. Подтвердите заявку на портале "Работа России".</li>
                            <li>3. Загрузите необходимые документы в Личный кабинет гражданина, включая паспорт, диплом об образовании и, при наличии, свидетельство о смене фамилии.</li>
                            <li>4. Предоставьте документы, подтверждающие вашу категорию участника, в Центр занятости населения (ЦЗН).</li>
                        </ol>
                        <ol class="participation__slide-documents">
                            <li>Паспорт гражданина РФ или документ, его заменяющий.</li>
                            <li>Копия трудовой книжки или документ, ее заменяющий.</li>
                            <li>Справка об отсутствии статуса индивидуального предпринимателя, формирующаяся на основании данных ЕГРИП из ФНС.</li>
                            <li>Справка (извещение) о состоянии лицевого счета из ПФР (в данном документе видно, что отсутствуют страховые поступления).</li>
                            <li>Справка из военкомата, подтверждающая дату окончания военной службы по призыву.</li>
                            <li>Документ, подтверждающий текущий уровень образования гражданина.</li>
                        </ol>
                    </div>

                </li>
                <li class="participation__slide swiper-slide swiper-slider">

                    <div class="participation__slide-image">
                        <img src="images/photo11.png" class="swiper-lazy" loading="lazy" width="248" height="234" alt="Фотография">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="participation__slide-content">
                        <p>Мама ребенка до 7 лет и в поиске работы</p>
                        <button type="button" data-modal-id="participation-modal" data-modal-open="">Подробнее</button>
                    </div>

                    <div class="participation__slide-info">
                        <p>Как принять участие?</p>
                        <ol class="participation__slide-rules">
                            <li>Чтобы принять участие, вам необходимо выполнить следующие шаги:</li>
                            <li>1. Оставьте заявку на участие, выбрав категорию "Женщины, имеющие детей дошкольного возраста, не состоящие в трудовых отношениях".</li>
                            <li>2. Подтвердите заявку на портале "Работа в России"</li>
                            <li>3. Загрузите необходимые документы в Личный кабинет гражданина, включая паспорт, диплом об образовании и, при наличии, свидетельство о смене фамилии.</li>
                            <li>4. Предоставьте документы, подтверждающие вашу категорию участника, в Центр занятости населения (ЦЗН).</li>
                        </ol>
                        <ol class="participation__slide-documents">
                            <li>Паспорт гражданина РФ или документ, его заменяющий.</li>
                            <li>Свидетельство о рождении ребенка.</li>
                            <li>Справка об отсутствии статуса индивидуального предпринимателя, формирующаяся на основании данных ЕГРИП из ФНС</li>
                            <li>Справка (извещение) о состоянии лицевого счета из ПФР (в данном документе видно, что отсутствуют страховые поступления).</li>
                            <li>Документ, подтверждающий текущий уровень образования гражданина.</li>
                        </ol>
                    </div>

                </li>




            </ul>
            <div class="swiper-pagination"></div>
        </div>

<!--        <div class="container">-->
<!--            <p class="participation__accent">Категории, выделенные <span class="note">звездочкой</span>, предназначены для лиц до 35 лет включительно</p>-->
<!--        </div>-->
    </section>




    <section class="d-none">
        <div class="participation__modal custom-modal__hidden" id="participation-modal">
            <h2></h2>
            <div class="participation__rules">
                <div class="participation__rules-item">
                    <h3>Как принять участие?</h3>
                    <ol class="participation__rules-list participation__rules-list--participate"></ol>
                </div>
                <div class="participation__rules-item">
                    <h3>Какие документы нужно предоставить в ЦЗН?</h3>
                    <ol class="participation__rules-list participation__rules-list--documents"></ol>
                </div>
            </div>
            <div class="participation__buttons">
                <a class="participation__button participation__button--request btn" data-modal-close="" href="#form">Оставить заявку</a>
                <a class="participation__button btn" href="/documents/documents.pdf" download="Перечень документов.pdf">Скачать список документов</a>
            </div>
            <p class="participation__note">Заполните анкету, чтобы узнать больше о проекте и принять участие</p>
        </div>
    </section>



    <section class="causes">
        <div class="container">
            <h2>Почему нужно начать обучение сейчас?</h2>
            <div class="causes__items">
                <div class="causes__item">
                    <img src="images/icon1.svg" loading="lazy" alt="">
                    <h5>Бесплатное обучение</h5>
                    <p>Государство платит за Ваше обучение</p>
                </div>
                <div class="causes__item">
                    <img src="images/icon2.svg" loading="lazy" alt="">
                    <h5>Онлайн-обучение</h5>
                    <p>Нужен лишь компьютер и доступ в интернет</p>
                </div>
                <div class="causes__item">
                    <img src="images/icon3.svg" loading="lazy" alt="">
                    <h5>Опытные преподаватели</h5>
                    <p>Многолетний стаж в Академии и вузах РФ</p>
                </div>
                <div class="causes__item">
                    <img src="images/icon4.svg" loading="lazy" alt="">
                    <h5>Высокая востребованность</h5>
                    <p>Более 3000 вакансий на <a href="https://hh.ru/" target="_blank">hh.ru</a></p>
                </div>
                <div class="causes__item">
                    <img src="images/icon5.svg" loading="lazy" alt="">
                    <h5>Документ об образовании</h5>
                    <p>Удостоверение о повышении Вашей квалификации</p>
                </div>
                <div class="causes__item">
                    <img src="images/icon6.svg" loading="lazy" alt="">
                    <h5>Легко совмещать</h5>
                    <p>Лекции всегда можно посмотреть в записи</p>
                </div>
            </div>
        </div>
    </section>

    <section class="demand">
        <div class="container">
            <h2>Востребованность на рынке</h2>
            <div class="demand__wrapper-safety">
                <ul class="demand__list">
                    <li class="demand__item"><p>Средняя зарплата - <b>70 000 рублей</b></p></li>
                    <li class="demand__item"><p>Гостиничная и ресторанная индустрии динамично развиваются</p></li>
                    <li class="demand__item"><p>Стандарты качества постоянно становятся выше, потребность в компетентных специалистах растет</p></li>
                </ul>
            </div>
        </div>
    </section>

    <section class="features">
        <div class="container">
            <h2 id="features-content">Вы научитесь</h2>
            <ul class="features__items">
                <li class="features__item">ориентироваться в санитарном законодательстве</li>
                <li class="features__item">проводить диагностические аудиты на предприятиях</li>
                <li class="features__item">знать принципы, разрабатывать и внедрять ХАССП</li>
                <li class="features__item">проводить обучения сотрудников требованиям пищевой безопасности, правилам личной гигиены, нормам СанПиН</li>
                <li class="features__item">уметь проводить анализ опасностей и оценку рисков, выявлять ККТ</li>
                <li class="features__item">разрабатывать программу производственного контроля, основанную на принципах ХАССП</li>
                <li class="features__item">готовить предприятия к проверкам государственных органов и независимых аудиторов</li>
            </ul>
        </div>
    </section>



    <section class="program">
        <div class="container">
            <h2 id="program_start">Программа обучения</h2>

            <dl class="program__description">
                <div class="program__description-item">
<!--                    <dt>Занимает</dt>-->
                    <dd>до 2 часов в день</dd>
                </div>
                <div class="program__description-item">
<!--                    <dt>длится обучение</dt>-->
                    <dd>4 месяца</dd>
                </div>
                <div class="program__description-item">
<!--                    <dt>продолжительность</dt>-->
                    <dd>256 часов</dd>
                </div>
                <div class="program__description-item">
<!--                    <dt>формат</dt>-->
                    <dd>онлайн-лекции и видео</dd>
                </div>
            </dl>

            <ol class="program__modules" data-accordion="parent" data-single="">

                <li class="program__module" data-accordion="element" data-collapse-item="">
                    <h3 class="program__module-title">Раздел 1. Основы гигиены и санитарный надзор: от питания до общественных объектов.</h3>
                    <ul class="program__module-content" data-accordion="content">
                        <li>•Построение карьерной траектории с помощью аналитики рынка труда</li>
                        <li>• Профессиональная адаптация на новом рабочем месте</li>
                        <li>• Гигиена питания и общая гигиена: основные положения и нормативные документы </li>
                        <li>• Организация, формы и методы надзора за качеством, безопасностью пищевых продуктов и рационализацией питания</li>
                        <li>• Организация, формы и методы надзора в области общей гигиены, в том числе отельной </li>
                        <li>• Предупредительный санитарный надзор за проектированием, реконструкцией и пуском законченных объектов в эксплуатацию</li>
                    </ul>
                    <button class="program__module-button" type="button" data-accordion="button" aria-label="показать/закрыть содержание модуля"></button>
                </li>

                <li class="program__module" data-accordion="element" data-collapse-item="">
                    <h3 class="program__module-title">Раздел 2. Система менеджмента безопасности пищевой продукции (СМБПП)</h3>
                    <ul class="program__module-content" data-accordion="content">
                        <li>• Эпидемиология и профилактика острых кишечных инфекций и паразитарных заболеваний</li>
                        <li>• Пищевые отравления и их профилактика</li>
                        <li>• Чужеродные вещества в пище и оценка степени риска воздействия контаминантов пищи на организм человека</li>
                        <li>• Понятие о системе контроля HACCP. Процессный подход</li>
                        <li>• Политика в области безопасности пищевой продукции</li>
                        <li>• Требования к прослеживаемости</li>
                        <li>• Управление и анализ опасностей. Разработка плана ХАССП и иных мероприятий по управлению опасными факторами</li>
                        <li>• Мониторинг и измерения для обеспечения безопасности пищевой продукции</li>
                        <li>• Внутренний аудит: планирование, проведение и последующие действия</li>
                        <li>• Управление несоответствиями</li>
                        <li>• Оценка системы менеджмента безопасности пищевой продукции</li>
                        <li>• Программы обязательных предварительных мероприятий</li>
                        <li>• Организация работ в рамках внедрения СМБПП</li>
                        <li>• Организация производственного контроля за объектами питания</li>
                        <li>• Принципы организации и проведения профилактических медосмотров работников</li>
                    </ul>
                    <button class="program__module-button" type="button" data-accordion="button" aria-label=" раскрыть/закрыть содержание модуля"></button>
                </li>

                <li class="program__module" data-accordion="element" data-collapse-item="">
                    <h3 class="program__module-title">Раздел 3. Общая отельная гигиена</h3>
                    <ul class="program__module-content" data-accordion="content">
                        <li>• Мониторинг и оценка санитарного состояния услуг по проживанию и дополнительных услуг, предоставляемых в гостиницах</li>
                        <li>• Осуществление контроля за соблюдением санитарных правил, гигиенических нормативов, организацией и проведением санитарно-противоэпидемических (профилактических) мероприятий</li>
                        <li>• Вопросы дезинфектологии, паразитологии, эпидемиологии</li>
                        <li>• Методы обследования различных объектов: хостелов, гостиниц, офисов и других</li>
                        <li>• Требования к менеджменту  факторов санитарного риска в различных средах: в воде, почве, воздухе</li>
                        <li>• Разработка и осуществление  мероприятий для предотвращения неблагоприятного воздействия различных факторов на здоровье и жизнь людей</li>
                        <li>• Внутренний аудит: планирование, проведение и последующие действия</li>
                        <li>• Организация и проведение  производственного контроля в гостиницах</li>
                        <li>• Принципы организации и проведения профилактических медосмотров работников</li>
                        <li>• Организация и проведение мероприятий по дератизации и дезинсекции</li>

                    </ul>
                    <button class="program__module-button" type="button" data-accordion="button" aria-label=" раскрыть/закрыть содержание модуля"></button>
                </li>
            </ol>
            <button class="show-button" type="button" data-show-button="">Показать еще</button>
        </div>
    </section>

    <section class="prospects">
        <div class="container">
            <h2>Вы получите после обучения:</h2>
            <ul class="prospects__list">
                <li class="prospects__item">
                    <h3>Новая профессия</h3>
                    <ul>
                        <li> Освоите новые компетенции и получите знания в востребованной сфере и примените их сразу после обучения</li>
<!--                        <li>Освоите актуальные навыки в вашей сфере, необходимые для карьерного роста</li>-->
<!--                        <li>Пройдете повышение квалификации и получите документ об образовании</li>-->
                    </ul>
                </li>
                <li class="prospects__item">
                    <h3>Поддержка  трудоустройства</h3>
                    <ul>
<!--                        <li>Освоите новую профессию в востребованной и надежной сфере*</li>-->
                        <li>Составите сильное, конкурентное резюме и разработаете пошаговый план действий</li>
<!--                        <li> азработаете пошаговый план по развитию карьеры и выходу на желаемый заработок</li>-->
                    </ul>
                </li>
                <li class="prospects__item">
                    <h3>Документ об образовании</h3>
                    <ul>
                        <li>Удостоверение о повышении квалификации установленного образца</li>
<!--                        <li>Получите доступ к проверенным вакансиям, бирже заказов и HR-консультациям</li>-->
<!--                        <li>Подготовитесь к поиску работы в новой сфере или в вашей нише, на более высокие позиции</li>-->
                    </ul>
                </li>
            </ul>
<!--            <div class="prospects__bottom prospects-bottom">-->
<!--                <div class="prospects-bottom__wrap">-->
<!--                    <p class="prospects-bottom__p">-->
<!--                        * Мы анализируем тенденции, определяющие профессии будущего, рынок труда и спрос среди компаний-партнеров проекта.-->
<!--                        После этого разрабатываем образовательные программы по наиболее перспективным специальностям в различных областях.-->
<!--                    </p>-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </section>

    <section class="steps">
        <div class="container">
            <h2>Как бесплатно начать обучение?</h2>
            <ol class="steps__list">
                <li class="steps__item">
<!--                    <em class="steps__item-time"><span>≈ ? мин.</span></em>-->
                    <p>Отправьте заявку и подтвердите участие в программе на портале «Работа России».</p>
                    <div class="steps__item-buttons">
                        <a class="btn" href="#form">Отправить</a>
                        <button class="btn-white" type="button" data-modal-id="steps-modal" data-modal-open="">Подробнее</button>
                    </div>
                    <div class="steps__item-hidden steps_indent">
                        <h4>Этап 1</h4>
                        <strong>Для подтверждения заявки на портале « Работа  России»:</strong>
                        <ol class="indent">
                            <li><span>1. Перейдите на <a href="/short-form">сайт</a> и найдите выбранную программу.</span></li>
                            <li><span>2. Войдите в свою учетную запись через портал «Госуслуги». Пожалуйста, помните, что подтвердить заявку на портале «Работа России» могут только пользователи с подтвержденной учетной записью на портале «Госуслуги».</span></li>
                            <li><span>3. Заполните карточку заявления и выберите формат обучения.</span></li>
                            <li><span>4. Проверьте данные и нажмите <b>«Отправить заявку»</b>.</span></li>
                        </ol>
                        <b>После этого Центр занятости населения рассмотрит вашу заявку в течение 7 рабочих дней.</b>
                        <div class="steps__item-links">
                            <a class="steps__item-link" href="#form" data-modal-close="">Отправить заявку</a>
<!--                            <a class="steps__item-link" href="/files/documents/Instruction_TGU.pdf" target="_blank">Скачать инструкцию</a>-->
                        </div>
                    </div>
                </li>
                <li class="steps__item">
<!--                    <em class="steps__item-time"><span>≈ 3 дня</span></em>-->
                    <p>Загрузите документы подтверждающие категорию участника в личный кабинет гражданина и подайте их в Центр занятости населения <b>в течение 3 дней после подтверждения заявки</b>.</p>
                    <div class="steps__item-buttons">
                        <button class="btn-white" type="button" data-modal-id="steps-modal" data-modal-open="">Подробнее</button>
                    </div>
                    <div class="steps__item-hidden steps_indent">
                        <h4>Этап 2</h4>
                        <p>После рассмотрения вашей заявки Центр занятости пригласит вас на профориентацию и подтверждение выбранной категории.</p>
                        <p>Вам будет дано 3 рабочих дня для посещения Центра и загрузки документов, подтверждающих вашу категорию участия, в личный кабинет гражданина.</p>
                        <b> В <a href="/documents/documents.pdf" download="Перечень документов.pdf">инструкции</a> вы узнаете, какие документы необходимо предоставить в зависимости от вашей категории. Важно иметь эти документы при себе при посещении Центра занятости.</b>
                        <div class="steps__item-links">
                            <a class="steps__item-link" href="#form" data-modal-close="">Отправить заявку</a>
<!--                            <a class="steps__item-link" href="/files/documents/Instruction_TGU.pdf" target="_blank">Скачать инструкцию</a>-->
                        </div>
                    </div>
                </li>
                <li class="steps__item">
<!--                    <em class="steps__item-time"><span>≈ 3 дня</span></em>-->
                    <p>Получите согласие на подписание договора на обучение от работодателя.</p>
                    <p><i>* кроме граждан, зарегистрированных в качестве безработных.</i></p>
                    <div class="steps__item-buttons">
                        <button class="btn-white" type="button" data-modal-id="steps-modal" data-modal-open="">Подробнее</button>
                    </div>
                    <div class="steps__item-hidden steps_indent">
                        <h4>Этап 3</h4>
                        <strong>Если вы выбрали категорию участия, отличную от "Безработные граждане, зарегистрированные в органах службы занятости", для участия в проекте вам потребуется подписать трехсторонний договор.</strong>
                        <b>Для этого выполните следующие шаги:</b>
                        <ol class="indent">
                            <li><span>1. Свяжитесь со своим текущим или новым работодателем и уведомите его о вашем желании проходить обучение за счет государства. Необходимо найти сотрудника компании, имеющего полномочия подписать договор об обучении от имени работодателя, <i>например, директора, руководителя, HR-специалиста или бухгалтера.</i></span></li>
                            <li><span>2. Уточните у работодателя, зарегистрирована ли компания на портале "Работа России". В случае отсутствия регистрации проинформируйте, что вы можете проходить обучение бесплатно только при наличии личного кабинета организации на портале. Это требуется для подписания договора.</span></li>
                            <li><span>3. Как только ваше участие в проекте будет одобрено, сообщите об этом работодателю.</span></li>
                        </ol>
                        <p>Убедитесь, что все действия по подписанию договора проводятся с согласия и участием работодателя, чтобы обеспечить успешное участие в проекте.</p>
                        <div class="steps__item-links">
                            <a class="steps__item-link" href="#form" data-modal-close="">Отправить заявку</a>
<!--                            <a class="steps__item-link" href="/files/documents/Instruction_TGU.pdf" target="_blank">Скачать инструкцию</a>-->
                        </div>
                    </div>
                </li>
                <li class="steps__item">
<!--                    <em class="steps__item-time"><span>≈ 15 мин.</span></em>-->
                    <p>Пройдите профориентацию в Центре занятости населения. Тестирование определит готовность приступить к обучению в установленные сроки.</p>
                    <div class="steps__item-buttons">
                        <button class="btn-white" type="button" data-modal-id="steps-modal" data-modal-open="">Подробнее</button>
                    </div>
                    <div class="steps__item-hidden steps_indent">
                        <h4>Этап 4</h4>
                        <p>Вам будет предложено пройти профориентацию либо в формате очного общения в Центре занятости населения, либо дистанционно в вашем личном кабинете на портале "Работа России".</p>
                        <p>Результаты профориентации позволят специалистам Центра занятости оценить вашу потребность в обучении, вашу мотивацию к приобретению новых навыков, сохранению рабочего места, улучшению карьерных перспектив или увеличению дохода.</p>
                        <p><b>Центр занятости незамедлительно сообщит вам о результатах профориентации.</b><br>В случае положительного решения, вы сможете перейти к этапу заключения договора на обучение.<br>В случае получения отказа рекомендуется учесть причины отказа и, если это возможно, подать заявку на обучение снова.</p>
                        <p>Важно учитывать обратную связь и возможные рекомендации для повышения шансов успешного продолжения процесса обучения.</p>
                        <div class="steps__item-links">
                            <a class="steps__item-link" href="#form" data-modal-close="">Отправить заявку</a>
<!--                            <a class="steps__item-link" href="/files/documents/Instruction_TGU.pdf" target="_blank">Скачать инструкцию</a>-->
                        </div>
                    </div>
                </li>
                <li class="steps__item">
<!--                    <em class="steps__item-time"><span>≈ 2 дня</span></em>-->
                    <p>Подпишите два договора:<br> 1. с образовательной организацией <br>2. с работодателем<br> или ЦЗН</p>
                    <div class="steps__item-buttons">
                        <button class="btn-white" type="button" data-modal-id="steps-modal" data-modal-open="">Подробнее</button>
                    </div>
                    <div class="steps__item-hidden steps_indent">
                        <h4>Этап 5</h4>
                        <strong>Для зачисления в проект необходимо подписать как двусторонний, так и трехсторонний договора. Зачисление будет происходить по следующему порядку:</strong>
                        <ol class="indent">
                            <li><p>1. Через 14 дней до начала обучения Центр занятости инициирует подписание трехстороннего договора дистанционно в вашем личном кабинете на портале "Работа России". Необходимо помнить о жестких сроках подписания:</p>
                                <p>- В течение 3 рабочих дней после генерации договора:</p>
                                <p>- Работодатель или Центр занятости подписывают договор, если вы зарегистрированы в качестве безработного;</p>
                                <p>- Образовательная организация также подписывает договор.</p>
                                <p>- В течение 2 рабочих дней после подписания работодателем/Центром занятости и образовательной организацией</p>
                                <p>- Вы, как гражданин, должны подписать договор. Важно успеть выполнить это условие в указанные сроки, иначе договор будет аннулирован, и вам придется переподавать заявку заново</p>
                            </li>
                            <li><p>2. Этап подписания двустороннего договора в личном кабинете Flow:</p>
                                <p>- После проверки документов в личном кабинете Flow скачайте договор, распечатайте его в двух экземплярах и подпишите;</p>
                                <p>- Затем сделайте скан или фото договора хорошего качества и загрузите их в свой личный кабинет на платформе Flow;</p>
                                <p>- Дождитесь подписания договора образовательной организацией.</p>
                                <p>- Загрузите вторичные документы для зачисления: заявление, согласие на обработку персональных данных.</p>
                                <p>- Отправьте оригиналы документов в образовательную организацию.</p>
                            </li>
                        </ol>
                        <b>Помните, что отслеживать все этапы подписания договоров можно будет в вашем личном кабинете на портале "Работа России".</b>

                        <div class="steps__item-links">
                            <a class="steps__item-link" href="#form" data-modal-close="">Отправить заявку</a>
<!--                            <a class="steps__item-link" href="/files/documents/Instruction_TGU.pdf" target="_blank">Скачать инструкцию</a>-->
                        </div>
                    </div>
                </li>
            </ol>
<!--            <p class="steps__bottom">Воспользуйтесь нашей <a class="steps__item-link" href="/files/documents/Instruction_TGU.pdf" target="_blank">инструкцией</a> — в ней подробно описан каждый шаг</p>-->
        </div>
        <div class="d-none">
            <div class="steps__modal custom-modal__hidden" id="steps-modal"></div>
        </div>
    </section>

    <section class="cases">
        <div class="container">
            <h2>Отзывы о программе обучения</h2>
            <div class="cases__wrap">
                <div class="cases__navigation slider-navigation">
                    <button class="slider-navigation__button slider-navigation__button--prev" type="button"></button>
                    <div class="swiper-pagination"></div>
                    <button class="slider-navigation__button slider-navigation__button--next" type="button"></button>
                </div>

                <div class="cases__slider swiper">
                    <div class="cases__slides swiper-wrapper">
                        <div class="cases__slide swiper-slide">
                            <div class="cases__slide-content">
                                <div class="cases__slide-info">
                                    <img src="images/photo20.png" loading="lazy" alt="Отзыв 1">
                                    <h4>Екатерина, 25 лет</h4>
<!--                                    <p>Выпускница программы</p>-->
<!--                                    <p><span>«Аналитик данных — с нуля до разработки прикладных решений для бизнеса»</span></p>-->
                                </div>
                                <div class="cases__slide-text">
                                    <p>У меня с детства была мания все стандартизировать, а потом соблюдать их или завставлять всех окружающих, но к сожалению я отучилась на музыканта. За 4 месяца обучения я получила невероятное удовольствие, и сейчас буду стажироваться! Спасибо кураторам и преподавателям за отличную работу!</p>
                                </div>
<!--                                <div class="cases__slide-btn">-->
<!--                                    <button type="button" data-modal-id="cases-modal--8" data-modal-open=""> азвернуть кейс</button>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div class="cases__slide swiper-slide">
                            <div class="cases__slide-content">
                                <div class="cases__slide-info">
                                    <img src="images/photo21.png" loading="lazy" alt="отзыв 2">
                                    <h4>Анатолий, 56 лет</h4>
<!--                                    <p>Выпускница программы</p>-->
<!--                                    <p><span>«Графический дизайнер: старт карьеры»</span></p>-->
                                </div>
                                <div class="cases__slide-text">
                                    <p>Никогда не поздно учиться чему-то новому, даже в моем возрасте. Приятно что меня терпели и действительно хотели мне помочь в обучении. Это очень важно, спасибо вам.</p>
                                </div>
<!--                                <div class="cases__slide-btn">-->
<!--                                    <button type="button" data-modal-id="cases-modal--9" data-modal-open=""> азвернуть кейс</button>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div class="cases__slide swiper-slide">
                            <div class="cases__slide-content">
                                <div class="cases__slide-info">
                                    <img src="images/photo22.png" loading="lazy" alt="отзыв 3">
                                    <h4>Александр, 28 лет</h4>
<!--                                    <p>Выпускник программы</p>-->
<!--                                    <p><span>«Программист 1С»</span></p>-->
                                </div>
                                <div class="cases__slide-text">
                                    <p>Удивил опыт преподавателей, как правило в курсах, особенно бесплатных, но тут прям высший уровень! Максимальная вовлеченность и экспертиза. Было круто.</p>
                                </div>
<!--                                <div class="cases__slide-btn">-->
<!--                                    <button type="button" data-modal-id="cases-modal--6" data-modal-open=""> азвернуть кейс</button>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div class="cases__slide swiper-slide">
                            <div class="cases__slide-content">
                                <div class="cases__slide-info">
                                    <img src="images/photo23.png" loading="lazy" alt="отзыв 4">
                                    <h4>Тимур, 30 лет</h4>
<!--                                    <p>Выпускница программы</p>-->
<!--                                    <p><span>«HR-специалист»</span></p>-->
                                </div>
                                <div class="cases__slide-text">
                                    <p>Мне все очень понравилось, после того как записался понял что скорее всего санитарные нормы это очень скучно, но кураторы меня переубедили и не зря.</p>
                                </div>
<!--                                <div class="cases__slide-btn">-->
<!--                                    <button type="button" data-modal-id="cases-modal--7" data-modal-open=""> азвернуть кейс</button>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div class="cases__slide swiper-slide">
                            <div class="cases__slide-content">
                                <img src="images/photo24.png" loading="lazy" alt="отзыв 5">
                                <div class="cases__slide-info">
                                    <h4>Мария, 37 лет</h4>
<!--                                    <p>Выпускница программы</p>-->
<!--                                    <p><span>«Педагог дополнительного образования»</span></p>-->
                                </div>
                                <div class="cases__slide-text">
                                    <p>Хоть я и обучалась на пищевого технолога, но в этом курсе информация гораздо шире. И теперь я гораздо глубже и обширнее понимаю тему! Думаю, это отличный опыт, спасибо.</p>
                                </div>
<!--                                <div class="cases__slide-btn">-->
<!--                                    <button type="button" data-modal-id="cases-modal--4" data-modal-open=""> азвернуть кейс</button>-->
<!--                                </div>-->
                            </div>
                        </div>
<!--                        <div class="cases__slide swiper-slide">-->
<!--                            <div class="cases__slide-content">-->
<!--                                <img src="images/photo24.png" loading="lazy" alt="отзыв">-->
<!--                                <div class="cases__slide-info">-->
<!--                                    <h4>отзыв</h4>-->
<!--                                    <p>Выпускница программы</p>-->
<!--                                    <p><span>«Профессия Product Manager в IT»</span></p>-->
<!--                                </div>-->
<!--                                <div class="cases__slide-text">С учётом сложившейся международной обстановки, новая модель организационной деятельности требует от нас анализа кластеризации усилий.</div>-->
<!--                                <div class="cases__slide-btn">-->
<!--                                    <button type="button" data-modal-id="cases-modal--1" data-modal-open=""> азвернуть кейс</button>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="join join--program" style="display: none">
        <div class="container">
            <h2>Наши партнеры (пока можно скрыть)</h2>
            <div class="join__items">
                <div class="join__item">
                    <h4>Лого</h4>
                    <p>Партнер 1</p>
                </div>
                <div class="join__item">
                    <h4>Лого</h4>
                    <p>Партнер 2</p>
                </div>
                <div class="join__item">
                    <h4>Лого</h4>
                    <p>Партнер 3</p>
                </div>
                <div class="join__item">
                    <h4>Лого</h4>
                    <p>Партнер 4</p>
                </div>
            </div>
        </div>
    </section>

    <section class="other">
        <div class="container">
            <h2>Не подходит программа? У нас есть другие:</h2>
            <div class="other__items">
                <a href="/supervisor.php">
                    <div class="other__item">
                        <img src="images/icon13.svg" loading="lazy" alt="">
                        <h5>Супервайзер службы приема и размещения</h5>
                        <div class="other__description">
                            <p class="other__description-item">144 часа</p>
                            <p class="other__description-item">7 недель</p>
                            <p class="other__description-item">з/п от 100 тыс. руб</p>
                        </div>
                    </div>
                </a>
                <a href="/admin.php">
                    <div class="other__item">
                        <img src="images/icon14.svg" loading="lazy" alt="">
                        <h5>Администратор Гостиницы</h5>
                        <div class="other__description">
                            <p class="other__description-item">144 часа</p>
                            <p class="other__description-item">12 недель</p>
                            <p class="other__description-item">з/п от 65 тыс. руб</p>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    </section>

    <section class="form" id="form">
        <div class="form__container">
            <div class="form__info">
                <h2>Приступим к обучению?</h2>
                <p>1. Заполните заявку</p>
                <p>2. Подтвердите заявку на портале "Работа России"</p>
                <div class="position-center">
                <p class="form__lead"><strong>Окончание набора:  2 мая 23:59 <br>Количество мест: менее 50</strong></p>
                </div>
<!--                <p><strong><span>*Важно:</span></strong> Проверяйте корректность введенных данных для получения инструкций участия и уведомлений, а так же проверяйте папку <b>«Спам»</b></p>-->
<!--                <div class="form__info-options">-->
<!--                    <div>Бесплатно</div>-->
<!--                    <div>Преподаватели-эксперты</div>-->
<!--                    <div>Онлайн</div>-->
<!--                    <div>Доход от 70 тыс.</div>-->
<!--                    <div>От 2 месяцев</div>-->
<!--                    <div>Помощь с трудоустройством</div>-->
<!--                    <div>Поддержка кураторов и группы</div>-->
<!--                </div>-->
            </div>
            <div class="form__panel">
<!--                <h3>Оставьте заявку</h3>-->
                <form id="form-app">
                    <div class="form__group">
                        <div class="form__field">
                            <input type="text" name="FirstName" class="form__input" placeholder="Имя">
                            <span class="form-required">*</span>
                        </div>
                        <div class="form__field">
                            <input class="form__input" type="tel" name="Phone" id="phone" placeholder="+7 (___) ___-__-__" size="18">
                            <span class="form-required">*</span>
                        </div>
                        <div class="form__field">
                            <input type="email" name="Email" class="form__input" id="email" placeholder="Email">
                            <span class="form-required">*</span>
                        </div>
                        <div class="form__field form-tooltip">
                            <select class="form__select" id="Category" name="category">
                                <option disabled selected>Ваша категория</option>
                                <option value="11">Под риском увольнения</option>
                                <option value="5">Находитесь в декрете</option>
                                <option value="2">Мама ребенка до 7 лет</option>
                                <option value="3">Старше 50 лет</option>
                                <option value="1">Предпенсионер</option>
                                <option value="7">Зарегистрированы как безработный</option>
                                <option value="8">В поиске работы более 4 месяцев после обучения</option>
                                <option value="6">Прошли военную службу и в поиске работы более 4 месяцев</option>
                            </select>
                            <span class="form-required">*</span>
                            <span class="form-tooltip__text">Если вы не уверены, к какой категории относитесь, или уже трудоустроены — выберите категорию «Граждане, ищущие работу (или трудоустроенные)»</span>
                            <button class="form-tooltip__btn" type="button"><img src="images/info-form.svg" alt=""></button>
                        </div>
                        <div class="form__field form-tooltip">
                            <select class="form__select" id="EmploymentFormat" name="EmploymentFormat">
                                <option disabled selected>Трудоустройство</option>
                                <option value="2">Официально трудоустроен</option>
                                <option value="4">Индивидуальный предприниматель</option>
                                <option value="3">Самозанятый</option>
                                <option value="1">Не трудоустроен официально</option>
                            </select>
                            <span class="form-required">*</span>
                            <span class="form-tooltip__text">Если вы совмещаете несколько форм занятости, например трудоустройство и ИП — выберите в списке «Трудоустроен».</span>
                            <button class="form-tooltip__btn" type="button"><img src="images/info-form.svg" alt=""></button>
                        </div>
                        <div class="form__field">
                            <select class="form__select" name="Education" id="Education">
                                <option disabled selected>Ваше образование</option>
                                <option value="1">Среднее (школьное)</option>
                                <option value="2">Получаю среднее профессиональное</option>
                                <option value="3">Среднее профессиональное (колледж, техникум и т.д.)</option>
                                <option value="4">Получаю высшее образование</option>
                                <option value="5">Высшее (оконченное)</option>
                            </select>
                            <span class="form-required">*</span>
                        </div>
                        <div class="form__field">
                            <select class="form__select" name="Region" id="RegionFoodSafety">
                                <option disabled selected>Ваш регион</option>
                            </select>
                            <span class="form-required">*</span>
                        </div>

                        <input type="hidden" class="direction-hidden" name="Direction" value="">
                        <input type="hidden" class="program-hidden" name="Program" value="">

                        <p class="form__mandatory"><span class="purple">*</span> <strong>— Обязательные поля для заполнения</strong></p>
                        <div class="form__checkboxs">
<!--                            <div class="form__checkbox">-->
<!--                                <input type="checkbox" id="form-check" checked="">-->
<!--                                <label for="form-check">Я принимаю <a href="/files/documents/PD_Policy.pdf" target="blank">условия соглашения</a> об обработке персональных данных</label>-->
<!--                            </div>-->
                            <div class="form__checkbox">
                                <input type="checkbox" id="form-check--pd" checked="">
                                <label for="form-check--pd">Я даю <a href="https://cosmosgroup.ru/ru/policy" target="blank">согласие на обработку персональных данных</a></label>
                            </div>
                        </div>
                        <div class="form__btn">
                            <button class="btn" id="form-btn" type="button">Учиться бесплатно</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <div class="modal" id="success-modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <p>Заявка отправлена</p>
        </div>
    </div>


</main>

<!--<script>-->
<!--    jQuery('#request-form').on('submit', function (e) {-->
<!--        if (!e.isDefaultPrevented()) {-->
<!--            let url = "mail.php";-->
<!--            $.ajax({-->
<!--                type: "POST",-->
<!--                url: url,-->
<!--                data: $(this).serialize(),-->
<!--                success: function (data)-->
<!--                {-->
<!--                    jQuery('.thanks_form').show();-->
<!--                }-->
<!--            });-->
<!--            return false;-->
<!--        }-->
<!--    });-->
<!--</script>-->


<?php include 'footer.php'; ?>
<?php include 'modal.php'; ?>
