<?php include 'head.php'; ?>
<?php include 'header.php'; ?>
<main>
    <section class="home home--admin">
        <div class="container">
            <div class="home__content">
                <div class="img-admin">
                    <img src="images/photo1.jpg" loading="eager" alt="Администратор гостиницы">
                </div>
                <h1 class="home__title">«Администратор гостиницы»</h1>
                <p class="home__description">Бесплатно обучитесь искусству гостеприимства от лидера гостиничной отрасли Cosmos Hotel Group</p>
                <p class="home__description">И получите помощь с трудоустройством от государства <strong>с зарплатой от 65 000 рублей</strong></p>
                <p class="home__description_p2">*по данным <a href="https://hh.ru/" target="_blank">hh.ru</a></p>
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

                <li class="participation__slide swiper-slide swiper-slider">

                    <div class="participation__slide-image">
                        <img src="images/photo3.png" class="swiper-lazy" loading="lazy" width="248" height="234" alt="Фотография выпускника вуза">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="participation__slide-content">
                        <p>Трудоустроены или ищите работу</p>
                        <button type="button" data-modal-id="participation-modal" data-modal-open="">Подробнее</button>
                    </div>
                    <div class="participation__slide-info">
                        <p>Как принять участие?</p>
                        <ol class="participation__slide-rules">
                            <li>1. Подайте заявку, выбрав категорию "Граждане, ищущие работу (или трудоустроенные)".</li>
                            <li>2. Зарегистрируйтесь на портале "Работа России" и авторизуйтесь через портал "Госуслуги", имея подтвержденную учетную запись на "Госуслугах".
                                Информацию о том, как получить этот статус, вы можете найти по указанной <a href="https://www.gosuslugi.ru/help/faq/login/2">ссылке</a>.</li>
                            <li><strong>Обратите внимание если вы официально трудоустроены, что работодатель также должен быть зарегистрирован на портале "Работа России".</strong></li>
                            <li>3. Создайте и заполните свое резюме на портале "Работа России". Это обязательное условие, которое не обязывает вас активно искать работу или менять работодателя, если вы уже трудоустроены.</li>
                            <li>4. Затем составьте заявление, выбрав категорию "Я ищу работу и не претендую на статус безработного" и прикрепив заполненное резюме. Дождитесь модерации заявки в течение 1 дня, инструкция доступна по указанной <a href="https://trudvsem.ru/information-pages/service-assistance-finding-job/info" target="_blank"> ссылке</a>.</li>
                            <li>5. Подтвердите заявку на обучение на портале "Работа России":
                                Загрузите необходимые документы в Личный кабинет гражданина (паспорт, диплом об образовании, а также свидетельство о смене фамилии, если имеется). Предоставьте документы, подтверждающие вашу категорию участника, в Центр занятости населения (ЦЗН).</li>
                        </ol>
                        <ol class="participation__slide-documents">
                            <li>Паспорт гражданина РФ или документ, его заменяющий.</li>
                            <li>Копия трудовой книжки или документ, ее заменяющий. Вы можете получить выписку, даже если никогда не были трудоустроены.</li>
                            <li>Документ, подтверждающий текущий уровень образования гражданина.</li>
                        </ol>
                    </div>
                </li>
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
                    <p>Государство платит за Ваше обучение, которое стоит <br> более 70 000 рублей</p>
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
                    <p>Официальное подтверждение вашей квалификации</p>
                </div>
                <div class="causes__item">
                    <img src="images/icon6.svg" loading="lazy" alt="">
                    <h5>Легко совмещать</h5>
                    <p>Не более 2 часов в день занимает обучение</p>
                </div>
            </div>
        </div>
    </section>

    <section class="demand">
        <div class="container">
            <h2>Востребованность на рынке</h2>
            <div class="demand__wrapper">
                <ul class="demand__list">
                    <li class="demand__item"><p>Зарплата подготовленного специалиста начинается от <b>65 000 рублей</b></p></li>
                    <li class="demand__item"><p>Внутренний туризм динамично развивается, <br>это одна из самых быстрорастущих индустрий в России</p></li>
                    <li class="demand__item"><p>Стандарты качества постоянно становятся выше, <br>потребность в компетентных администраторах растет</p></li>
                </ul>
            </div>
        </div>
    </section>

    <section class="features">
        <div class="container">
            <h2 id="features-content">Вы научитесь</h2>
            <ul class="features__items">
                <li class="features__item">Осуществлять регистрацию гостей отеля</li>
                <li class="features__item">Обрабатывать информацию о гостях с помощью современных информационных систем</li>
                <li class="features__item">Понимать индивидуальную психологию каждого гостя и находить общий язык</li>
                <li class="features__item">Использовать необходимые инструменты для дистанционной работы с клиентами</li>
                <li class="features__item">Осуществлять расчеты с гостями</li>
                <li class="features__item">Информировать гостя об услугах на территории отеля</li>
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
                    <dd>2 месяца</dd>
                </div>
                <div class="program__description-item">
<!--                    <dt>продолжительность</dt>-->
                    <dd>144 часа</dd>
                </div>
                <div class="program__description-item">
<!--                    <dt>формат</dt>-->
                    <dd>онлайн-лекции и видео</dd>
                </div>
            </dl>

            <ol class="program__modules" data-accordion="parent" data-single="">

                <li class="program__module" data-accordion="element" data-collapse-item="">
                    <h3 class="program__module-title">Раздел 1. Введение в программу</h3>
                    <ul class="program__module-content" data-accordion="content">
                        <li>• Построение карьерной траектории с помощью аналитики рынка труда</li>
                        <li>• Профессиональная адаптация на новом рабочем месте</li>
                    </ul>
                    <button class="program__module-button" type="button" data-accordion="button" aria-label="показать/закрыть содержание модуля"></button>
                </li>

                <li class="program__module" data-accordion="element" data-collapse-item="">
                    <h3 class="program__module-title">Раздел 2. Нормативные требования для сотрудников службы приема и размещения</h3>
                    <ul class="program__module-content" data-accordion="content">
                        <li>• Закон о защите прав потребителей</li>
                        <li>• Правила предоставления гостиничных услуг в РФ. Предоставление платных и бесплатных услуг</li>
                        <li>• Регистрация гостей</li>
                    </ul>
                    <button class="program__module-button" type="button" data-accordion="button" aria-label=" раскрыть/закрыть содержание модуля"></button>
                </li>

                <li class="program__module" data-accordion="element" data-collapse-item="">
                    <h3 class="program__module-title">Раздел 3. Структура отеля и роль службы приема и размещения в деятельности гостиницы</h3>
                    <ul class="program__module-content" data-accordion="content">
                        <li>• Структура гостиницы</li>
                        <li>• Роль службы размещения в операционной деятельности гостиницы</li>
                    </ul>
                    <button class="program__module-button" type="button" data-accordion="button" aria-label=" раскрыть/закрыть содержание модуля"></button>
                </li>

                <li class="program__module" data-accordion="element" data-collapse-item="">
                    <h3 class="program__module-title">Раздел 4. Системы управления гостиницей</h3>
                    <ul class="program__module-content" data-accordion="content">
                        <li>• Основные системы управления гостиницей</li>
                        <li>• Основные модули управления гостиницей. Отражение основных показателей</li>
                    </ul>
                    <button class="program__module-button" type="button" data-accordion="button" aria-label=" раскрыть/закрыть содержание модуля"></button>
                </li>

                <li class="program__module" data-accordion="element" data-collapse-item="">
                    <h3 class="program__module-title">Раздел 5. Основы коммуникации и работа с жалобами и обращениями</h3>
                    <ul class="program__module-content" data-accordion="content">
                        <li>• Телефонный этикет и навыки деловой переписки</li>
                        <li>• Основы коммуникации с гостями: приветствие, прощание, непринужденная беседа, обращение к гостю по имени</li>
                        <li>• Работа с жалобами</li>
                        <li>• Работа с отзывами</li>
                        <li>• Метрики удовлетворенности гостей</li>
                        <li>• Коммуникация после выезда гостей</li>
                    </ul>
                    <button class="program__module-button" type="button" data-accordion="button" aria-label=" раскрыть/закрыть содержание модуля"></button>
                </li>

                <li class="program__module" data-accordion="element" data-collapse-item="">
                    <h3 class="program__module-title">Раздел 6. Процедура бронирования</h3>
                    <ul class="program__module-content" data-accordion="content">
                        <li>• Стандартная операционная процедура бронирования номера в зависимости от типа гостя</li>
                        <li>• Групповое бронирование</li>
                    </ul>
                    <button class="program__module-button" type="button" data-accordion="button" aria-label=" раскрыть/закрыть содержание модуля"></button>
                </li>

                <li class="program__module" data-accordion="element" data-collapse-item="">
                    <h3 class="program__module-title">Раздел 7. Процедура заселения</h3>
                    <ul class="program__module-content" data-accordion="content">
                        <li>• Стандартная операционная процедура заселения гостя с бронированием</li>
                        <li>• Стандартная операционная процедура заселения гостя без бронирования</li>
                        <li>• Стандартная операционная процедура группового заселения </li>
                    </ul>
                    <button class="program__module-button" type="button" data-accordion="button" aria-label=" раскрыть/закрыть содержание модуля"></button>
                </li>

                <li class="program__module" data-accordion="element" data-collapse-item="">
                    <h3 class="program__module-title">Раздел 8. Процедура выезда</h3>
                    <ul class="program__module-content" data-accordion="content">
                        <li>• Стандартная операционная процедура выезда</li>
                        <li>• Стандартная операционная процедура группового выезда</li>
                    </ul>
                    <button class="program__module-button" type="button" data-accordion="button" aria-label=" раскрыть/закрыть содержание модуля"></button>
                </li>

                <li class="program__module" data-accordion="element" data-collapse-item="">
                    <h3 class="program__module-title">Раздел 9. Кассовая дисциплина</h3>
                    <ul class="program__module-content" data-accordion="content">
                        <li>• Проведение предоплат и авторизаций</li>
                        <li>• Проведение возвратов</li>
                        <li>• Проведение оплат</li>
                        <li>• Проведение корректировок начислений</li>
                    </ul>
                    <button class="program__module-button" type="button" data-accordion="button" aria-label=" раскрыть/закрыть содержание модуля"></button>
                </li>

                <li class="program__module" data-accordion="element" data-collapse-item="">
                    <h3 class="program__module-title">Раздел 10. Закрытие бизнес-дня: ночной аудит</h3>
                    <ul class="program__module-content" data-accordion="content">
                        <li>• Цели проведения ночного аудита</li>
                        <li>• Стандартная операционная процедура проведения ночного аудита</li>
                    </ul>
                    <button class="program__module-button" type="button" data-accordion="button" aria-label=" раскрыть/закрыть содержание модуля"></button>
                </li>

                <li class="program__module" data-accordion="element" data-collapse-item="">
                    <h3 class="program__module-title">Раздел 11. Безопасность гостей и сотрудников</h3>
                    <ul class="program__module-content" data-accordion="content">
                        <li>• Конфиденциальность информации о гостях, сотрудниках и гостинице</li>
                        <li>• Способы идентификации гостя при просьбе выдать ключ или открыть номер</li>
                        <li>• Запрос информации от органов государственной власти</li>
                        <li>• Общение со средствами массовой информации</li>
                    </ul>
                    <button class="program__module-button" type="button" data-accordion="button" aria-label=" раскрыть/закрыть содержание модуля"></button>
                </li>

                <li class="program__module" data-accordion="element" data-collapse-item="">
                    <h3 class="program__module-title">Итоговая аттестация</h3>
<!--                    <ul class="program__module-content" data-accordion="content">-->
<!--                        <li>• Методы психодиагностики в психологическом консультировании</li>-->
<!--                        <li>• Тестовые методики: область применения и анализ</li>-->
<!--                        <li>• Наблюдение и беседа как инструменты психодиагностики</li>-->
<!--                    </ul>-->
<!--                    <button class="program__module-button" type="button" data-accordion="button" aria-label=" раскрыть/закрыть содержание модуля"></button>-->
                </li>

<!--                <li class="program__module" data-accordion="element" data-collapse-item="">-->
<!--                    <h3 class="program__module-title">13Психологическая диагностика</h3>-->
<!--                    <ul class="program__module-content" data-accordion="content">-->
<!--                        <li>• Методы психодиагностики в психологическом консультировании</li>-->
<!--                        <li>• Тестовые методики: область применения и анализ</li>-->
<!--                        <li>• Наблюдение и беседа как инструменты психодиагностики</li>-->
<!--                    </ul>-->
<!--                    <button class="program__module-button" type="button" data-accordion="button" aria-label=" раскрыть/закрыть содержание модуля"></button>-->
<!--                </li>-->
<!---->
<!--                <li class="program__module" data-accordion="element" data-collapse-item="">-->
<!--                    <h3 class="program__module-title">14Психологическая диагностика</h3>-->
<!--                    <ul class="program__module-content" data-accordion="content">-->
<!--                        <li>• Методы психодиагностики в психологическом консультировании</li>-->
<!--                        <li>• Тестовые методики: область применения и анализ</li>-->
<!--                        <li>• Наблюдение и беседа как инструменты психодиагностики</li>-->
<!--                    </ul>-->
<!--                    <button class="program__module-button" type="button" data-accordion="button" aria-label=" раскрыть/закрыть содержание модуля"></button>-->
<!--                </li>-->
<!---->
<!--                <li class="program__module" data-accordion="element" data-collapse-item="">-->
<!--                    <h3 class="program__module-title">15Психологическая диагностика</h3>-->
<!--                    <ul class="program__module-content" data-accordion="content">-->
<!--                        <li>• Методы психодиагностики в психологическом консультировании</li>-->
<!--                        <li>• Тестовые методики: область применения и анализ</li>-->
<!--                        <li>• Наблюдение и беседа как инструменты психодиагностики</li>-->
<!--                    </ul>-->
<!--                    <button class="program__module-button" type="button" data-accordion="button" aria-label=" раскрыть/закрыть содержание модуля"></button>-->
<!--                </li>-->

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
                    <h3>Карьерный план</h3>
                    <ul>
<!--                        <li>Освоите новую профессию в востребованной и надежной сфере*</li>-->
                        <li>Составите сильное, конкурентное резюме и разработаете пошаговый план действий</li>
<!--                        <li> азработаете пошаговый план по развитию карьеры и выходу на желаемый заработок</li>-->
                    </ul>
                </li>
                <li class="prospects__item">
                    <h3>Документ об образовании</h3>
                    <ul>
                        <li>Получите удостоверение о повышении квалификации государственного образца</li>
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
                    <div class="steps__item-hidden">
                        <h4>Этап 1</h4>
                        <strong>Для подтверждения заявки на портале « Работа  России»:</strong>
                        <ol>
                            <li><span>1.</span> <span>Перейдите на <a href="/short-form">сайт</a> и найдите выбранную программу.</span></li>
                            <li><span>2.</span> <span>Войдите в свою учетную запись через портал «Госуслуги». Пожалуйста, помните, что подтвердить заявку на портале «Работа России» могут только пользователи с подтвержденной учетной записью на портале «Госуслуги».</span></li>
                            <li><span>3.</span> <span>Заполните карточку заявления и выберите формат обучения.</span></li>
                            <li><span>4.</span> <span>Проверьте данные и нажмите <b>«Отправить заявку»</b>.</span></li>
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
                    <div class="steps__item-hidden">
                        <h4>Этап 2</h4>
                        <p>После рассмотрения вашей заявки Центр занятости пригласит вас на профориентацию и подтверждение выбранной категории.</p>
                        <p>Вам будет дано 3 рабочих дня для посещения Центра и загрузки документов, подтверждающих вашу категорию участия, в личный кабинет гражданина.</p>
                        <b> В инструкции вы узнаете, какие документы необходимо предоставить в зависимости от вашей категории. Важно иметь эти документы при себе при посещении Центра занятости.</b>
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
                    <div class="steps__item-hidden">
                        <h4>Этап 3</h4>
                        <strong>Если вы выбрали категорию участия, отличную от "Безработные граждане, зарегистрированные в органах службы занятости", для участия в проекте вам потребуется подписать трехсторонний договор.</strong>
                        <b>Для этого выполните следующие шаги:</b>
                        <ol>
                            <li><span>1.</span> <span>Свяжитесь со своим текущим или новым работодателем и уведомите его о вашем желании проходить обучение за счет государства. Необходимо найти сотрудника компании, имеющего полномочия подписать договор об обучении от имени работодателя, <i>например, директора, руководителя, HR-специалиста или бухгалтера.</i></span></li>
                            <li><span>2.</span> <span>Уточните у работодателя, зарегистрирована ли компания на портале "Работа России". В случае отсутствия регистрации проинформируйте, что вы можете проходить обучение бесплатно только при наличии личного кабинета организации на портале. Это требуется для подписания договора.</span></li>
                            <li><span>3.</span> <span>Как только ваше участие в проекте будет одобрено, сообщите об этом работодателю.</span></li>
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
                    <div class="steps__item-hidden">
                        <h4>Этап 4</h4>
                        <p>Вам будет предложено пройти профориентацию либо в формате очного общения в Центре занятости населения, либо дистанционно в вашем личном кабинете на портале "Работа России".</p>
                        <p>Результаты профориентации позволят специалистам Центра занятости оценить вашу потребность в обучении, вашу мотивацию к приобретению новых навыков, сохранению рабочего места, улучшению карьерных перспектив или увеличению дохода.</p>
                        <p><b>Центр занятости незамедлительно сообщит вам о результатах профориентации.</b><br>В случае положительного решения, вы сможете перейти к этапу заключения договора на обучение.<br>В случае получения отказа рекомендуется учесть причины отказа и, если это возможно, подать заявку на обучение снова через нашего <a href="https://t.me/Bot" target="_blank">Telegram-бота</a>.</p>
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
                    <div class="steps__item-hidden">
                        <h4>Этап 5</h4>
                        <strong>Для зачисления в проект необходимо подписать как двусторонний, так и трехсторонний договора.</strong>
                        <b>по следующему порядку:</b>
                        <ol>
                            <li><span>1.</span> <span>Через 14 дней до начала обучения Центр занятости инициирует подписание трехстороннего договора дистанционно в вашем личном кабинете на портале "Работа России".</span>
                                <span>Необходимо помнить о жестких сроках подписания:<br>- В течение 3 рабочих дней после генерации договора:<br>- Работодатель или Центр занятости подписывают договор, если вы зарегистрированы в качестве безработного;<br>- Образовательная организация также подписывает договор.</span>
                                <span>- В течение 2 рабочих дней после подписания работодателем/Центром занятости и образовательной организацией:<br>- Вы, как гражданин, должны подписать договор. Важно успеть выполнить это условие в указанные сроки, иначе договор будет аннулирован, и вам придется переподавать заявку заново через Telegram-бот.</span>
                            </li>
                            <li><span>2.</span> <span>Этап подписания двустороннего договора в личном кабинете Flow:</span>
                                <span>- Договор подписывает гражданин. Если вы не успеете подписать в указанные сроки, договор будет аннулирован и вам придется переподать заявку заново в нашем- <a href="https://t.me/Bot" target="_blank">Telegram-боте</a>. После проверки документов в личном кабинете Flow скачайте договор, распечатайте его в двух экземплярах и подпишите;</span>
                                <span>- Затем сделайте скан или фото договора хорошего качества и загрузите их в свой личный кабинет на платформе Flow;</span>
                                <span>- Дождитесь подписания договора образовательной организацией.</span></li>
                        </ol>
                        <p>Помните, что отслеживать все этапы подписания договоров можно будет в вашем личном кабинете на портале "Работа России".</p>
                        <ol>
                            <li>• Загрузите вторичные документы для зачисления: заявление, согласие на обработку персональных данных.</li>
                            <li>• Отправьте оригиналы документов в образовательную организацию.</li>
                        </ol>
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
                                    <img src="images/photo13.png" loading="lazy" alt="Отзыв Ирины">
                                    <h4>Ирина, 34 года</h4>
<!--                                    <p>Выпускница программы</p>-->
<!--                                    <p><span>«Аналитик данных — с нуля до разработки прикладных решений для бизнеса»</span></p>-->
                                </div>
                                <div class="cases__slide-text">
                                    <p>То, что такой качественный курс может быть бесплатным - стало для меня настоящим открытием! Я давно хотела перепрофилироваться из оператора колл-центра в более живую работу, и сейчас полна решимости в самореализации!</p>
                                </div>
<!--                                <div class="cases__slide-btn">-->
<!--                                    <button type="button" data-modal-id="cases-modal--8" data-modal-open=""> азвернуть кейс</button>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div class="cases__slide swiper-slide">
                            <div class="cases__slide-content">
                                <div class="cases__slide-info">
                                    <img src="images/photo14.jpg" loading="lazy" alt="Алла">
                                    <h4>Алла, 22 года</h4>
<!--                                    <p>Выпускница программы</p>-->
<!--                                    <p><span>«Графический дизайнер: старт карьеры»</span></p>-->
                                </div>
                                <div class="cases__slide-text">
                                    <p>Это именно то, что мне было нужно для профессионального роста. Отдельное спасибо Александру, все подробно объяснял и всегда был в ресурсе.</p>
                                </div>
<!--                                <div class="cases__slide-btn">-->
<!--                                    <button type="button" data-modal-id="cases-modal--9" data-modal-open=""> азвернуть кейс</button>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div class="cases__slide swiper-slide">
                            <div class="cases__slide-content">
                                <div class="cases__slide-info">
                                    <img src="images/photo15.png" loading="lazy" alt="Сергей">
                                    <h4>Сергей, 39 лет</h4>
<!--                                    <p>Выпускник программы</p>-->
<!--                                    <p><span>«Программист 1С»</span></p>-->
                                </div>
                                <div class="cases__slide-text">
                                    <p>Иногда мне не хватало ориганизации, но мне сразу сказали, что наш поток первый, и для первого потока все было великолепно! Надеюсь моя обратная связь поможет вам еще эффективнее обучать ребят</p>
                                </div>
<!--                                <div class="cases__slide-btn">-->
<!--                                    <button type="button" data-modal-id="cases-modal--6" data-modal-open=""> азвернуть кейс</button>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div class="cases__slide swiper-slide">
                            <div class="cases__slide-content">
                                <div class="cases__slide-info">
                                    <img src="images/photo16.png" loading="lazy" alt="Илона">
                                    <h4>Илона, 40 лет</h4>
<!--                                    <p>Выпускница программы</p>-->
<!--                                    <p><span>«HR-специалист»</span></p>-->
                                </div>
                                <div class="cases__slide-text">
                                    <p>Спасибо команде академии Космос за основательное и при этом бесплатное обучение!</p>
                                </div>
<!--                                <div class="cases__slide-btn">-->
<!--                                    <button type="button" data-modal-id="cases-modal--7" data-modal-open=""> азвернуть кейс</button>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div class="cases__slide swiper-slide">
                            <div class="cases__slide-content">
                                <img src="images/photo17.jpg" loading="lazy" alt="Игорь">
                                <div class="cases__slide-info">
                                    <h4>Игорь</h4>
<!--                                    <p>Выпускница программы</p>-->
<!--                                    <p><span>«Педагог дополнительного образования»</span></p>-->
                                </div>
                                <div class="cases__slide-text">
                                    <p>Многое слышал про содействие занятости, не самые лестные отзывы, но решил проверить на себе - и не прогадал, спасибо за действительно качественный материал, который явно разрабатывался для коммерческих проектов, и это безусловно чувствуется, очень высокий уровень и материала, и преподавания.</p>
                                </div>
<!--                                <div class="cases__slide-btn">-->
<!--                                    <button type="button" data-modal-id="cases-modal--4" data-modal-open=""> азвернуть кейс</button>-->
<!--                                </div>-->
                            </div>
                        </div>
<!--                        <div class="cases__slide swiper-slide">-->
<!--                            <div class="cases__slide-content">-->
<!--                                <img src="images/" loading="lazy" alt="отзыв">-->
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
                <div class="other__item">
                    <img src="images/icon13.svg" loading="lazy" alt="">
                    <h5>Супервайзер службы приема и размещения</h5>
                    <div class="other__description">
                        <p class="other__description-item">144 часа</p>
                        <p class="other__description-item">7 недель</p>
                        <p class="other__description-item">з/п от 100 тыс. руб</p>
                    </div>
                </div>
                <div class="other__item">
                    <img src="images/icon14.svg" loading="lazy" alt="">
                    <h5>Специалист по пищевой безопасности и общей гигиене в гостиничной и ресторанной сфере</h5>
                    <div class="other__description">
                        <p class="other__description-item">256 часов</p>
                        <p class="other__description-item">12 недель</p>
                        <p class="other__description-item">з/п от 80 тыс. руб</p>
                    </div>
                </div>

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
                <p class="form__lead"><strong>Окончание набора: 29 апреля 23:59 Количество мест: 31</strong></p>
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
                            <input class="form__input" type="tel" name="Phone" id="phone" placeholder="+7 (___) ___-__-__">
                            <span class="form-required">*</span>
                        </div>
                        <div class="form__field">
                            <input type="email" name="Email" class="form__input" id="email" placeholder="Email">
                            <span class="form-required">*</span>
                        </div>
                        <input type="hidden" name="LastName" value="-">
                        <div class="form__field form-tooltip">
                            <select class="form__select" id="Category" name="category">
                                <option value="12">Ваша категория</option>
                                <option value="4">Трудоустроены или ищите работу</option>
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
                                <option value="1">Среднее (школьное)</option>
                                <option value="2">Получаю среднее профессиональное</option>
                                <option value="3">Среднее профессиональное (колледж, техникум и т.д.)</option>
                                <option value="4">Получаю высшее образование</option>
                                <option value="5">Высшее (оконченное)</option>
                            </select>
                            <span class="form-required">*</span>
                        </div>
                        <div class="form__field">
                            <select class="form__select" name="Region" id="Regions"></select>
                            <span class="form-required">*</span>
                        </div>

                        <input type="hidden" class="direction-hidden" name="Direction" value="">
                        <input type="hidden" class="program-hidden" name="Program" value="Психолог-консультант: с нуля до первого клиента">

                        <p class="form__mandatory"><span class="purple">*</span> <strong>— Обязательные поля для заполнения</strong></p>
                        <div class="form__checkboxs">
                            <div class="form__checkbox">
                                <input type="checkbox" id="form-check" checked="">
                                <label for="form-check">Я принимаю <a href="/files/documents/PD_Policy.pdf" target="blank">условия соглашения</a> об обработке персональных данных</label>
                            </div>
                            <div class="form__checkbox">
                                <input type="checkbox" id="form-check--pd" checked="">
                                <label for="form-check--pd">Я даю <a href="/files/documents/Consent_to_the_processing_of_personal_data.pdf" target="blank">согласие на обработку персональных данных</a></label>
                            </div>
                        </div>
                        <div class="form__btn">
                            <button class="btn" id="form-btn" type="submit">Учиться бесплатно</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>


</main>



<?php include 'footer.php'; ?>
<?php include 'modal.php'; ?>
