
<div class="custom-modal__hidden formModal__modal" id="modal-main-form">
    <div class="formModal__modal-wrap">
        <h4>Оставьте заявку</h4>
        <form class="form formModal__modal-form" id="modal-main">
            <div class="form__group">
                <div class="form__field">
                    <input type="text" name="FirstName" class="form__input" placeholder="Имя">
                    <span class="form-required">*</span>
                </div>
                <input type="hidden" value="-" name="LastName">
                <div class="form__field">
                    <input class="form__input" type="tel" name="Phone" id="phone-modal" placeholder="+7 (___) ___-__-__">
                    <span class="form-required">*</span>
                </div>
                <div class="form__field">
                    <input type="email" name="Email" class="form__input" id="email" placeholder="Email">
                    <span class="form-required">*</span>
                </div>
                <div class="form__field form-tooltip">
                    <select class="form__select" id="Category-modal" name="category">
                        <option value="12">Граждане, ищущие работу (или трудоустроенные)</option>
                        <option value="4">Граждане, находящиеся в отпуске по уходу за ребенком в возрасте до 3 лет</option>
                        <option value="11"> аботники, находящиеся под риском увольнения</option>
                        <option value="5">Женщины, имеющие детей дошкольного возраста, не состоящие в трудовых отношениях</option>
                        <option value="2">Лица в возрасте 50-ти лет и старше</option>
                        <option value="3">Гражданин предпенсионного возраста</option>
                        <option value="1">Безработные граждане, зарегистрированные в органах службы занятости</option>
                        <option value="7">Граждане до 35 лет включительно, не имеющие среднего профессионального и высшего образования</option>
                        <option value="8">Граждане до 35 лет включительно, не занятые по истечении 4 месяцев с даты выдачи им документа об образовании и о квалификации</option>
                        <option value="6">Граждане до 35 лет включительно, не занятые по истечении 4 месяцев с даты окончания военной службы по призыву</option>
                    </select>
                    <span class="form-required">*</span>
                    <span class="form-tooltip__text">Если вы не уверены, к какой категории относитесь, или уже трудоустроены — выберите категорию «Граждане, ищущие работу (или трудоустроенные)»</span>
                    <button class="form-tooltip__btn" type="button"><img src="images/info-form.svg" alt=""></button>
                </div>
                <div class="form__field form-tooltip">
                    <select class="form__select" id="EmploymentFormat-modal" name="EmploymentFormat">
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
                    <select class="form__select" name="Education" id="Education-modal">
                        <option value="1">Среднее (школьное)</option>
                        <option value="2">Получаю среднее профессиональное</option>
                        <option value="3">Среднее профессиональное (колледж, техникум и т.д.)</option>
                        <option value="4">Получаю высшее образование</option>
                        <option value="5">Высшее (оконченное)</option>
                    </select>
                    <span class="form-required">*</span>
                </div>
                <div class="form__field">
                    <select class="form__select" name="Region" id="Regions-modal"></select>
                    <span class="form-required">*</span>
                </div>
                <input type="hidden" class="direction-hidden" name="Direction" value="">
                <input type="hidden" class="program-hidden" name="Program" value="Психолог-консультант: с нуля до первого клиента">
                <p class="form__mandatory"><span class="purple">*</span> <strong>— Обязательные поля для заполнения</strong></p>
                <div class="form__checkboxs-modal">
                    <div class="form__checkbox">
                        <input type="checkbox" id="form-check-modal" checked="">
                        <label for="form-check-modal">Я принимаю <a href="/files/documents/PD_Policy.pdf" target="blank" rel="noopener noreferrer">условия соглашения</a> об обработке персональных данных</label>
                    </div>
                    <div class="form__checkbox">
                        <input type="checkbox" id="form-check-modal--pd" checked="">
                        <label for="form-check-modal--pd">Я даю <a href="/files/documents/Consent_to_the_processing_of_personal_data.pdf" target="blank" rel="noopener noreferrer">согласие на обработку персональных данных</a></label>
                    </div>
                </div>
                <div class="form__btn">
                    <button class="btn formModal__modal-btn" id="form-btn-modal" type="submit">Отправить</button>
                </div>
            </div>
        </form>
    </div>
</div>



<div class="scroll-to-top">
    <div class="container">
        <a class="scroll-to-top__button" href="#header" aria-label="Кнопка наверх"></a>
    </div>
</div>



</div>

<script src="js/jquery.min.js"></script>
<script src="js/select2.min.js"></script>
<script src="js/slider.js"></script>
<script src="js/main.js"></script>
</body>
</html>
