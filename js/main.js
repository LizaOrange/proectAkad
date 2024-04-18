// меняет бургер на кретстик
t = document.querySelector(".header-btn"),
    n = document.querySelector(".popup-menu"),
    r = document.querySelector(".popup-mob"),
    i = document.querySelector(".header"),
    o = document.body, t && (t.addEventListener("click", (function () {
    t.classList.contains("active") ? (t.classList.remove("active"),
        innerWidth < 767 ? (r.classList.remove("active"),
    o.style.overflow = "visible", i.style.zIndex = "unset") : n.classList.remove("active")) : (t.classList.add("active"),
        innerWidth < 767 ? (r.classList.add("active"), o.style.overflow = "hidden", i.style.zIndex = "100000") : n.classList.add("active"))
})));


//выпадающий список
document.addEventListener("DOMContentLoaded", function() {
    let moduleButtons = document.querySelectorAll('.program__module-button');

    moduleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let moduleContent = this.previousElementSibling;

            // Переключаем класс active и плавно показываем/скрываем содержимое модуля
            if (moduleContent.style.maxHeight) {
                moduleContent.style.maxHeight = null;
                this.classList.remove('active');
            } else {
                moduleContent.style.maxHeight = moduleContent.scrollHeight + "px";
                this.classList.add('active');
            }
        });
    });
});

//кнопка "показать еще"
document.addEventListener("DOMContentLoaded", function() {
    let modules = document.querySelectorAll('.program__module');
    let showButton = document.querySelector('.show-button');
    let numToShow = 4; // Количество модулей для отображения при первой загрузке
    let numToIncrement = 4; // Количество модулей для добавления при каждом нажатии на кнопку
    let totalModules = modules.length;

    // Показать только первые модули
    for (let i = 0; i < totalModules; i++) {
        if (i < numToShow) {
            modules[i].style.display = 'block';
        } else {
            modules[i].style.display = 'none';
        }
    }

    // Обработчик клика на кнопку "Показать еще" или "Свернуть"
    showButton.addEventListener('click', function() {
        let currentlyShown = document.querySelectorAll('.program__module[style="display: block;"]');
        let numCurrentlyShown = currentlyShown.length;

        if (this.textContent === 'Показать еще') {
            // Если есть еще модули для показа
            if (numCurrentlyShown < totalModules) {
                for (let i = numCurrentlyShown; i < numCurrentlyShown + numToIncrement && i < totalModules; i++) {
                    modules[i].style.display = 'block';
                }
                // Если показаны все модули
                if (numCurrentlyShown + numToIncrement >= totalModules) {
                    this.textContent = 'Свернуть';
                }
            }
        } else {
            // Скрыть дополнительные модули
            for (let i = numToShow; i < totalModules; i++) {
                modules[i].style.display = 'none';
            }
            this.textContent = 'Показать еще';
            // Прокрутить страницу к началу блока с модулями
            document.getElementById('program_start').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//форма заявки
document.addEventListener("DOMContentLoaded", function() {
    // Получите ссылки на ваши элементы select
    let categorySelect = document.getElementById('Category');
    let employmentFormatSelect = document.getElementById('EmploymentFormat');
    let regionsSelect = document.getElementById('Regions');
    let educationSelect = document.getElementById('Education');

    // Инициализация Select2 для каждого элемента select
    if (categorySelect) {
        $(categorySelect).select2();
    }

    if (employmentFormatSelect) {
        $(employmentFormatSelect).select2();
    }

    if (regionsSelect) {
        $(regionsSelect).select2();
    }

    if (educationSelect) {
        $(educationSelect).select2();
    }
});

// подробнее слайдер
document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для модального окна
    let modalManager = new ModalManager();
    modalManager.createModal();
    // Находим все кнопки "Подробнее"
    var buttons = document.querySelectorAll('[data-modal-id="participation-modal"][data-modal-open=""]');

    // Находим элемент модального окна
    var modal = document.getElementById('participation-modal');

    // Проходимся по каждой кнопке и добавляем обработчик события клика
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {

            // Находим родительский элемент кнопки, который содержит модальное окно
            var parentSlide = button.closest('.participation__slide');
            var rulesList = parentSlide.querySelector('.participation__slide-rules');
            var documentsList = parentSlide.querySelector('.participation__slide-documents');

            if (rulesList && documentsList) {
                // Находим элементы, в которые будем вставлять данные в модальном окне
                var rulesListContainer = modal.querySelector('.participation__rules-list--participate');
                var documentsListContainer = modal.querySelector('.participation__rules-list--documents');

                if (rulesListContainer && documentsListContainer) {


                    // Очищаем контейнеры перед вставкой новых данных
                    rulesListContainer.innerHTML = '';
                    documentsListContainer.innerHTML = '';

                    // Копируем элементы из текущего блока в модальное окно
                    rulesList.querySelectorAll('li').forEach(function(rule) {
                        rulesListContainer.appendChild(rule.cloneNode(true));
                    });
                    documentsList.querySelectorAll('li').forEach(function(document) {
                        documentsListContainer.appendChild(document.cloneNode(true));
                    });

                    // Вставляем текст из <p> в <h2> модального окна
                    let slideContentText = parentSlide.querySelector('.participation__slide-content p').textContent;
                    let modalTitle = modal.querySelector('h2');
                    modalTitle.textContent = slideContentText;

                    // Показываем модальное окно
                    modal.classList.remove('custom-modal__hidden');
                }
            }

        });
    });

});

document.addEventListener('click', function(event) {
    // var modalManager = new ModalManager();
    var modal = document.querySelector('.custom-modal.active');
    var overlay = event.target.closest('.custom-modal__overlay[data-modal-close]');

    if (modal && overlay) {
        modalManager.closeModal();
    }
});



var ModalManager = function () {
    function ModalManager() {
        if (!(this instanceof ModalManager)) {
            throw new TypeError("Cannot call a class as a function");
        }

        this.modal = null;
        this.modalInset = null;
        this.modalContent = null;
        this.documentClickHandler = this.documentClickHandler.bind(this);
        this.body = document.body;
        this.init();
    }

    ModalManager.prototype.init = function () {
        this.createModal();
        document.addEventListener("click", this.documentClickHandler);
    };

    ModalManager.prototype.documentClickHandler = function (event) {
        var target = event.target;

        if (target.closest("[data-modal-close]") && target.closest("[data-modal-open]")) {
            this.closeModal();
            var self = this;
            setTimeout(function () {
                self.modalInset.innerHTML = "";
                self.openModal(target);
            }, 50);
        } else if (target.closest("[data-modal-close]")) {
            this.closeModal();
        } else if (target.closest("[data-modal-open]")) {
            event.preventDefault();
            var self = this;
            setTimeout(function () {
                self.modalInset.innerHTML = "";
                self.openModal(target);
            }, 50);
        }
    };

    ModalManager.prototype.openModal = function (trigger) {
        let modalId = trigger.closest("[data-modal-open]").getAttribute("data-modal-id");
        console.log(trigger)
        this.modalContent = document.getElementById(modalId);
        this.modalInset.append(this.modalContent);
        this.modal.classList.add("active");
        this.body.classList.add("scroll-lock");
    };

    ModalManager.prototype.closeModal = function () {
        if (this.modal) {
            this.modal.classList.remove("active");
            let hiddenSection = document.createElement('section');
            hiddenSection.classList.add('d-none');
            this.modalContent.classList.add("custom-modal__hidden");
            hiddenSection.appendChild(this.modalContent);
            this.body.append(hiddenSection);
        }
        this.body.classList.remove("scroll-lock");
    };


    ModalManager.prototype.createModal = function () {
        if (!this.modal) {
            // this.body.classList.add("scroll-lock");
            this.modal = document.createElement("div");
            this.modal.classList.add("custom-modal");
            document.body.append(this.modal);
            this.modal.innerHTML = '\
                <div class="custom-modal__wrapper">\
                    <div class="custom-modal__overlay" data-modal-close></div>\
                        <div class="custom-modal__content">\
                            <div class="custom-modal__inset"></div>\
                            <button type="button" class="custom-modal-close" data-modal-close></button>\
                        </div>\
                </div>\
            ';
            this.modalInset = document.querySelector(".custom-modal__inset");
        }
    };

    return ModalManager;
}();






