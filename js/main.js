function closeModal(n,t){n.classList.remove("active");document.body.classList.remove("modal-open");t&&t.remove()}function showLoader(){$("#loader-wrapper").css("display","flex");$("#loader").css("display","block")}function hideLoader(){$("#loader-wrapper").css("display","none");$("#loader").css("display","none")}function validatePhone(n){return/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(n)}function validateEmail(n){return/.+@.+\..+/.test(n)}document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".header-btn"),t=document.querySelector(".popup-menu"),i=document.querySelector(".popup-mob"),r=document.querySelector(".header"),u=document.body;n&&n.addEventListener("click",function(){n.classList.contains("active")?(n.classList.remove("active"),innerWidth<1070?(i.classList.remove("active"),u.style.overflow="visible",r.style.zIndex="unset"):t.classList.remove("active")):(n.classList.add("active"),innerWidth<1070?(i.classList.add("active"),u.style.overflow="hidden",r.style.zIndex="100000"):t.classList.add("active"))})});document.addEventListener("DOMContentLoaded",function(){let n=document.querySelectorAll(".program__module-button");n.forEach(function(n){n.addEventListener("click",function(){let n=this.previousElementSibling;n.style.maxHeight?(n.style.maxHeight=null,this.classList.remove("active")):(n.style.maxHeight=n.scrollHeight+"px",this.classList.add("active"))})})});document.addEventListener("DOMContentLoaded",function(){let n=document.querySelectorAll(".program__module"),u=document.querySelector(".show-button"),i=4,r=4,t=n.length;for(let r=0;r<t;r++)n[r].style.display=r<i?"block":"none";u.addEventListener("click",function(){let f=document.querySelectorAll('.program__module[style="display: block;"]'),u=f.length;if(this.textContent==="Показать еще"){if(u<t){for(let i=u;i<u+r&&i<t;i++)n[i].style.display="block";u+r>=t&&(this.textContent="Свернуть")}}else{for(let r=i;r<t;r++)n[r].style.display="none";this.textContent="Показать еще";document.getElementById("program_start").scrollIntoView({behavior:"smooth"})}})});document.addEventListener("DOMContentLoaded",function(){let n=document.getElementById("Category"),t=document.getElementById("EmploymentFormat"),i=document.getElementById("Regions"),r=document.getElementById("RegionsSupervizor"),u=document.getElementById("RegionFoodSafety"),f=document.getElementById("Education");n&&$(n).select2();t&&$(t).select2();i&&$(i).select2();r&&$(r).select2();u&&$(u).select2();f&&$(f).select2()});document.addEventListener("DOMContentLoaded",function(){let t=new ModalManager;t.createModal();let i=document.querySelectorAll('[data-modal-id="participation-modal"][data-modal-open=""]'),n=document.getElementById("participation-modal"),r=document.querySelectorAll('.steps__item-buttons button[data-modal-id="steps-modal"][data-modal-open=""]');i.forEach(function(t){t.addEventListener("click",function(){let i=t.closest(".participation__slide"),r=i.querySelector(".participation__slide-rules"),u=i.querySelector(".participation__slide-documents");if(r&&u){let t=n.querySelector(".participation__rules-list--participate"),f=n.querySelector(".participation__rules-list--documents");if(t&&f){t.innerHTML="";f.innerHTML="";r.querySelectorAll("li").forEach(function(n){t.appendChild(n.cloneNode(!0))});u.querySelectorAll("li").forEach(function(n){f.appendChild(n.cloneNode(!0))});let e=i.querySelector(".participation__slide-content p").textContent,o=n.querySelector("h2");o.textContent=e;n.classList.remove("custom-modal__hidden")}}})});r.forEach(function(n){n.addEventListener("click",function(){let i=n.closest(".steps__item"),t=i.querySelector(".steps__item-hidden");if(t){let n=document.getElementById("steps-modal");if(n){n.innerHTML="";n.appendChild(t.cloneNode(!0));let i=n.querySelector(".steps__item-hidden");i&&i.classList.remove("steps__item-hidden")}}})})});document.addEventListener("click",function(n){var t=document.querySelector(".custom-modal.active"),i=n.target.closest(".custom-modal__overlay[data-modal-close]");t&&i&&modalManager.closeModal()});var ModalManager=function(){function n(){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function");this.modal=null;this.modalInset=null;this.modalContent=null;this.documentClickHandler=this.documentClickHandler.bind(this);this.body=document.body;this.init()}return n.prototype.init=function(){this.createModal();document.addEventListener("click",this.documentClickHandler)},n.prototype.documentClickHandler=function(n){var t=n.target,i;t.closest("[data-modal-close]")&&t.closest("[data-modal-open]")?(this.closeModal(),i=this,setTimeout(function(){i.modalInset.innerHTML="";i.openModal(t)},50)):t.closest("[data-modal-close]")?this.closeModal():t.closest("[data-modal-open]")&&(n.preventDefault(),i=this,setTimeout(function(){i.modalInset.innerHTML="";i.openModal(t)},50))},n.prototype.openModal=function(n){let t=n.closest("[data-modal-open]").getAttribute("data-modal-id");this.modalContent=document.getElementById(t);this.modalInset.append(this.modalContent);this.modal.classList.add("active");this.body.classList.add("scroll-lock")},n.prototype.closeModal=function(){if(this.modal){this.modal.classList.remove("active");let n=document.createElement("section");n.classList.add("d-none");this.modalContent.classList.add("custom-modal__hidden");n.appendChild(this.modalContent);this.body.append(n)}this.body.classList.remove("scroll-lock")},n.prototype.createModal=function(){this.modal||(this.modal=document.createElement("div"),this.modal.classList.add("custom-modal"),document.body.append(this.modal),this.modal.innerHTML='                <div class="custom-modal__wrapper">                    <div class="custom-modal__overlay" data-modal-close><\/div>                        <div class="custom-modal__content">                            <div class="custom-modal__inset"><\/div>                            <button type="button" class="custom-modal-close" data-modal-close><\/button>                        <\/div>                <\/div>            ',this.modalInset=document.querySelector(".custom-modal__inset"))},n}();document.getElementById("form-btn").addEventListener("click",function(n){n.preventDefault();showLoader();let i=document.querySelector('input[name="FirstName"]').value,r=document.querySelector('input[name="Phone"]').value,u=document.querySelector('input[name="Email"]').value;if(!validatePhone(r)){alert("Некорректный номер телефона");hideLoader();return}if(!validateEmail(u)){alert("Некорректный email");hideLoader();return}if(i.length<2){alert("Имя должно содержать не менее 2 символов");hideLoader();return}let f=$("#Category").select2("data")[0].text,e=$("#EmploymentFormat").select2("data")[0].text,o=$("#Education").select2("data")[0].text,s=$(".region_class").select2("data")[0].text,h=document.querySelector('input[name="Program"]').value;if(f=="Ваша категория"){alert("Выберите категорию");hideLoader();return}if(e=="Трудоустройство"){alert("Выберите трудоустройство");hideLoader();return}if(o=="Ваше образование"){alert("Выберите образование");hideLoader();return}const c=document.getElementById("form-check--pd"),l=document.getElementById("form-check--pk");if(!c.checked){alert("Чтобы продолжить, нужно дать согласие на обработку персональных данных");hideLoader();return}if(!l.checked){alert("Чтобы продолжить, нужно согласиться с политикой конфиденциальности");hideLoader();return}if(s=="Ваш регион"){alert("Выберите регион");hideLoader();return}hideLoader();let t=document.querySelector(".appearing-modal.custom-modal__hidden");if(t){t.classList.add("active");let n=document.createElement("div");n.className="modal-overlay";document.body.appendChild(n);document.body.classList.add("modal-open");let i=t.querySelector(".modal-close");i.addEventListener("click",function(){closeModal(t,n)});n.addEventListener("click",function(){closeModal(t,n)})}else console.error('Элемент с классом "appearing-modal custom-modal__hidden" не найден.');fetch("write_log_data_to_file.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:i,phone:r,email:u,category:f,employment:e,education:o,region:s,program:h})}).then(n=>{n.ok&&(hideLoader(),console.log("Данные успешно записаны в файл"))}).catch(n=>{console.error("Произошла ошибка:",n)});let a=this.dataset.success,v=document.querySelector('.region_class').value,y={FIELDS:{TITLE:"Новая форма с лендинга",NAME:i,EMAIL:[{VALUE:u,VALUE_TYPE:"WORK"}],PHONE:[{VALUE:r,VALUE_TYPE:"WORK"}],UF_CRM_1714128589:f,UF_CRM_1714128570:e,UF_CRM_1714128542:o,UF_CRM_1714128525:s,UF_CRM_1714144900:h,SOURCE_ID:"WEB"}},p=JSON.stringify(y);fetch("https://szcosmosacademy.bitrix24.ru/rest/6/3mecasiz0mskt99g/crm.lead.add.json",{method:"POST",headers:{"Content-Type":"application/json"},body:p}).then(n=>{n.ok&&console.log("success")}).catch(n=>{hideLoader(),alert("Ошибка отправки формы: "+n)});setTimeout(function(){window.location.href=a==="true"?"https://cosmos-academy.ru/success.php":v},7e3)});document.getElementById("phone").addEventListener("input",function(n){let i=n.target.value,t=i.replace(/\D/g,"");if(/^(7|8|\+7)/.test(t)){let i="+7 ("+t.slice(1,4)+") "+t.slice(4,7)+"-"+t.slice(7,9)+"-"+t.slice(9,11);n.target.value=i}else if(/^(1|2|3|4|5|6|9)/.test(t)){let i="+7 (9"+t.slice(1,4)+") "+t.slice(4,7)+"-"+t.slice(7,9)+"-"+t.slice(9,11);n.target.value=i}else n.target.value=t});const Regions=document.getElementById("Regions");Regions&&fetch("region.json").then(n=>n.json()).then(n=>{const t=document.getElementById("Regions");n.forEach(n=>{const t=document.createElement("option");t.value=n.link;t.textContent=n.region;Regions.appendChild(t)})}).catch(n=>console.error("Ошибка загрузки данных:",n));const RegionFoodSafety=document.getElementById("RegionFoodSafety");RegionFoodSafety&&fetch("regionfoodsafety.json").then(n=>n.json()).then(n=>{n.forEach(n=>{const t=document.createElement("option");t.value=n.link;t.textContent=n.region;RegionFoodSafety.appendChild(t)})}).catch(n=>console.error("Ошибка загрузки данных:",n));const RegionsSupervizor=document.getElementById("RegionsSupervizor");RegionsSupervizor&&fetch("supervisor.json").then(n=>n.json()).then(n=>{n.forEach(n=>{const t=document.createElement("option");t.value=n.link;t.textContent=n.region;RegionsSupervizor.appendChild(t)})}).catch(n=>console.error("Ошибка загрузки данных:",n));