<template>

    <!-- <PopupMenu :content="mainMenu"/> -->

    <!-- <div class="wrapper"> -->

    <MainTemplate>

        <!-- Main block -->
        <article class="main-block">	
            <div class="abstract abstract1"></div>

            <!-- Main screen -->
            <div class="main-div container flex-lg-row  mb-lg-0">
                <div class="main-text h-50 col-12 col-md-6">
                    <div class="col-8">
                        <h1 class="text-uppercase">{{ $t('Хмарний додаток для роздрібної торгівлі') }}</h1>
                        <div class="py-1 lightgrey text-center"><em>{{ $t('POSIO - сучасне рішення для автоматизації торгівлі в точках продажу товарів і послуг із підтримкою ПРРО')}}</em></div>
                    </div>
                    <div class="d-none d-lg-flex justify-content-center py-3">
                        <button class="fab-button main-button big me-3"><span>{{ $t('Try now') }}</span></button>
                        <button class="fab-button outline-button big"><span>{{ $t('Discover functions') }}</span></button>
                    </div>
                </div>

                <div class="main-image align-items-start align-items-lg-center h-50 col-6">
                    <img src="/img/main_equip.png" alt="POS software for any device">
                </div>
            </div>	

            <!-- Buisneses icons -->
            <div class="app-block container bottom col-11 col-sm-12 mb-5 mb-lg-2 py-4 py-lg-1">
                <div class="block-header col-11 d-lg-none">
                    <div class="h3  yellow">{{ $t('Suitable for most formats')}}</div>
                    <h2>{{ $t('Application')}}</h2>
                </div> 
                <div class="block-text col-11 lightgrey d-lg-none">
                    <!-- {{ $t('catchphrase') }} -->
                </div>
                <!-- <div class="sub-label d-none d-lg-block lightgrey  px-3 pb-4">
                    {{ $t('Suitable for') }}:
                </div> -->
                <div class="business-icons  m-auto p-1 gap-2 text-2">
                    <div class="labled-icon">
                        <!-- <Icon src="/main-assets/icons/mug-saucer.svg" class="icon pb-2"/> -->
                        {{ $t('Сoffee shop') }}
                    </div>
                    <div class="labled-icon">
                        <!-- <Icon src="/main-assets/icons/pie.svg" class="icon pb-2"/> -->
                        {{ $t('Bakery') }}
                    </div>
                    <div class="labled-icon">
                        <!-- <Icon src="/main-assets/icons/scissors.svg" class="icon pb-2"/> -->
                        {{ $t('Beauty salon') }}
                    </div>
                    <div class="labled-icon">
                        <!-- <Icon src="/main-assets/icons/camera.svg" class="icon pb-2"/> -->
                        {{ $t('Photo studio') }}
                    </div>
                    <div class="labled-icon">
                        <!-- <Icon src="/main-assets/icons/shirt.svg" class="icon pb-2"/> -->
                        {{ $t('Sewing shop') }}
                    </div>
                    <div class="labled-icon">
                        <!-- <Icon src="/main-assets/icons/flower-tulip.svg" class="icon pb-2"/> -->
                        {{ $t('Flower store') }}
                    </div>
                    <div class="labled-icon">
                        <!-- <Icon src="/main-assets/icons/mobile-button.svg" class="icon pb-2"/> -->
                        {{ $t('Accessories sale') }}
                    </div>
                    <div class="labled-icon">
                        <!-- <Icon src="/main-assets/icons/repeat.svg" class="icon pb-2"/> -->
                        {{ $t('Rent equipment') }}
                    </div>
                    <div class="labled-icon d-sm-none d-lg-flex">
                        <!-- <Icon src="/main-assets/icons/screwdriver.svg" class="icon pb-2"/> -->
                        {{ $t('Repair workshop') }}
                    </div>
                </div>

            </div>
        </article>

        <!-- Call to action -->
        <section class="action-block container p-5 p-md-5 mb-5">
            <article class="col-12 col-lg-6 py-5">
                <h2 class="text-center pb-2">{{ $t('Say goodbye to the old, heavy sales systems')}}</h2>
                <p class="text-center lightgrey">{{ $t('Stop wasting time and energy on setting up accounting. Posio simplifies the process, allowing you to focus on what really matters - improving service quality and increasing profits.')}}</p>
                <div class="d-flex d-lg-none flex-column justify-content-center py-3">
                    <button class="fab-button main-button big mb-2"><span>{{ $t('Try now') }}</span></button>
                    <button class="fab-button outline-button big"><span>{{ $t('Discover functions') }}</span></button>
                </div>
            </article>
        </section>

        <!-- Front interface -->
        <section class="container mb-5">
            <div class="front-block card">
                <div class="block-header col-11 col-lg-8">
                    <div v-if="language=='en'" class="h3 text-end yellow">SIMPLE, FAST, FUNCTIONAL</div>
                    <div v-if="language=='ua'" class="h3 text-end yellow">ПРОСТО, ШВИДКО, ФУНКЦІОНАЛЬНО</div>
                    <h2 v-if="language=='en'" class="text-end">Seller interface</h2>
                    <h2 v-if="language=='ua'" class="text-end">Інтерфейс продавця</h2>
                </div>
                <div class="block-image mb-5 w-lg-75">
                    <!-- <div class="w-100  p-0"> -->
                        <img class="w-100 object-fit-contain rounded" src="/img/main_screenshot.png" alt="POSIO front software for quick sales">						
                    <!-- </div> -->
                </div>
                <div v-if="language=='en'" class="block-text col-11 col-lg-8">
                    <div class="li-block">
                        <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                        <div class="">
                            <div class="li-title">Quick ordering</div>
                            <div class="li-text">We have optimised sales business processes so that you can create an order in 5 clicks.</div>
                        </div>
                    </div>
                    <div class="li-block">
                        <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                        <div class="">
                            <div class="li-title">Multiple orders at the same time</div>
                            <div class="li-text">Serve your customers without delays with deferred cheque technology.</div>
                        </div>
                    </div>
                    <div class="li-block">
                        <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                        <div class="">
                            <div class="li-title">Easy learning</div>
                            <div class="li-text">All settings are made once. The seller only has to switch on the device and use it.</div>
                        </div>
                    </div>
                    <div class="li-block">
                        <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                        <div class="">
                            <div class="li-title">All the tools at your fingertips</div>
                            <div class="li-text">The maximum use of screen space allows you to find the function you need in an instant.</div>
                        </div>
                    </div>										
                </div>
                <div v-if="language=='ua'" class="block-text col-11 col-lg-8">
                    <div class="li-block">
                        <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                        <div class="">
                            <div class="li-title">Швидке замовлення</div>
                            <div class="li-text">Ми оптимізували бізнес-процеси продажу таким чином, що ви маєте можливість створити замовлення в 5 кликів.</div>
                        </div>
                    </div>
                    <div class="li-block">
                        <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                        <div class="">
                            <div class="li-title">Декілька замовлень одночасно</div>
                            <div class="li-text">Обслуговуйте ваших клієнтів без затримок за допомогою технології відкладеного чека.</div>
                        </div>
                    </div>
                    <div class="li-block">
                        <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                        <div class="">
                            <div class="li-title">Легке навчання</div>
                            <div class="li-text">Усі налаштування здійснюються одноразово. Продавцю залишається тільки ввімкнути пристрій і користуватися.</div>
                        </div>
                    </div>
                    <div class="li-block">
                        <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                        <div class="">
                            <div class="li-title">Усі інструменти під рукою</div>
                            <div class="li-text">Максимальне використання екранного простору дозволяє вам миттево знаходити потрібну функцію.</div>
                        </div>
                    </div>										
                </div>
            </div>
            <!-- <div class="w-75 w-lg-50 py-3 text-center lightgrey">
                Встановіть програмне забезпечення на мобільні телефони співробітників для більш гнучкого обслуговування.  
                Будьте мобільними!<br>
            </div> -->
        </section>

        <!-- Mobile devices -->
        <section class="devices-block container flex-lg-row my-5">
            <!-- Left -->
            <div class="column-1of2 pe-lg-4">
                <!-- Header -->
                <div class="block-header col-11">
                    <div v-if="language=='en'" class="h3 yellow">Windows, ANDROID or iOS</div>
                    <div v-if="language=='ua'" class="h3 yellow">Windows, ANDROID чи iOS</div>
                    <h2 v-if="language=='en'">Supports operation from most mobile and stationary devices</h2>
                    <h2 v-if="language=='ua'">Підтримка мобільних пристроїв</h2>
                </div>

                <!-- Secondary text -->
                <div v-if="language=='en'" class="block-text lightgrey col-11" style="text-align: justify">
                    <div class="text-item">
                        <p>With POSIO, you don't have to worry about where to get the equipment for your cashier's work. Our app supports most touchscreen devices.</p> 
                        <p>Any smartphone or tablet with Android or iOS installed is enough. However, if you already have a Windows-based desktop device, you won't have any problems.</p>
                    </div>
                </div>
                <div v-if="language=='ua'" class="block-text lightgrey mb-2 col-11" style="text-align: justify">	
                    <div class="text-item">
                        <p>З POSIO вам не потрібно замислюватись де взяти обладнання для роботи вашого касиру. Наш додаток підтримує більшість пристроїв з сенсорним екраном.</p> 
                        <p>Достатньо будь якого смартфону або планшету з встановленим Android або iOS. Але, якщо ви вже маєте стаціонарний пристрій на базі Windows - проблем не виникне.</p>
                    </div>				
                </div>	

                <!-- Img left -->
                <div class="block-image">
                    <img class="w-100 object-fit-contain rounded" src="/img/draft_horizontal.svg" alt="POS software for tablets">
                </div>
            </div>
            
            <!-- Right -->
            <div class="column-1of2 align-items-center ps-lg-4">
                <!-- Img right -->
                <div class="block-image col-7 d-none d-lg-block">
                    <img class="center-block w-100 object-fit-contain rounded" src="/img/draft_vertical.svg" alt="POS software for mobile">						
                </div>
                <!-- Devices -->
                <div v-if="language=='en'" class="block-text col-11">			
                    <div class="li-block">
                        <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                        <div class="">
                            <div class="li-title">Touch terminal</div>
                            <div class="li-text">Works on laptops and specialised terminals without any size restrictions</div>
                        </div>
                    </div>
                    <div class="li-block">
                        <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                        <div class="">
                            <div class="li-title">Tablet</div>
                            <div class="li-text">The optimal choice</div>
                        </div>
                    </div>
                    <div class="li-block">
                        <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                        <div class="">
                            <div class="li-title">Smartphone</div>
                            <div class="li-text">POSIO is adapted for a smartphone, but remember - the bigger the screen, the more comfortable the work!</div>
                        </div>
                    </div>
                </div>
                <div v-if="language=='ua'" class="block-text col-11">			
                    <div class="li-block">
                        <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                        <div class="">
                            <div class="li-title">Сенсорний термінал</div>
                            <div class="li-text">Працює на ноутбуках та спеціалізованих терміналах без обмежень по розміру</div>
                        </div>
                    </div>
                    <div class="li-block">
                        <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                        <div class="">
                            <div class="li-title">Планшет</div>
                            <div class="li-text">Оптимальний вибір</div>
                        </div>
                    </div>
                    <div class="li-block">
                        <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                        <div class="">
                            <div class="li-title">Смартфон</div>
                            <div class="li-text">POSIO адаптовано під смартфон, але слід пам'ятати - чим більше екран, тим комфортніша робота!</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Cabinet -->
        <section class="cabinet-block side__section right__section mb-5">
            <div class="left"></div>
            <div class="section_container container pe-0">
                <div class="section_content card flex-lg-row">
                    <div class="mx-auto col-11 col-sm-8 col-lg-5">						
                        <div class="block-header">
                            <div v-if="language=='en'" class="h3  yellow">User-friendly administration area</div>
                            <div v-if="language=='ua'" class="h3  yellow">Зручний кабінет адміністрування</div>
                            <h2 v-if="language=='en'" class="">CONTROL PANEL</h2>
                            <h2 v-if="language=='ua'" class="">ПАНЕЛЬ КЕРУВАННЯ</h2>
                        </div>

                        <div v-if="language=='en'" class="block-text">
                            <div class="li-block">
                                <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                                <div class="">
                                    <div class="li-title">Fast registration</div>
                                    <div class="li-text">Sign up and get the opportunity to set up your first point of sale in 5 minutes</div>
                                </div>
                            </div>
                            <div class="li-block">
                                <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                                <div class="">
                                    <div class="li-title">Remote management</div>
                                    <div class="li-text">Manage your trading with your mobile device from anywhere in the world</div>
                                </div>
                            </div>
                            <div class="li-block">
                                <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                                <div class="">
                                    <div class="li-title">Collaborative working</div>
                                    <div class="li-text">Add your managers and administrators to share the service</div>
                                </div>
                            </div>
                            <div class="li-block">
                                <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                                <div class="">
                                    <div class="li-title">Reporting</div>
                                    <div class="li-text">Different levels of reporting detail. From transactional control to reporting and analysing metrics</div>
                                </div>
                            </div>
                        </div>
                        <div v-if="language=='ua'" class="block-text">
                            <div class="li-block">
                                <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                                <div class="">
                                    <div class="li-title">Швидка реєстрація</div>
                                    <div class="li-text">Зареєструйтеся та отримайте можливість налаштувати вашу першу точку продажу за 5 хвилин</div>
                                </div>
                            </div>
                            <div class="li-block">
                                <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                                <div class="">
                                    <div class="li-title">Віддалене керування</div>
                                    <div class="li-text">Керуйте торгівлею за допомогою Вашого мобільного пристрою з будь-якої точки світу</div>
                                </div>
                            </div>
                            <div class="li-block">
                                <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                                <div class="">
                                    <div class="li-title">Спільна робота</div>
                                    <div class="li-text">Додавайте ваших менеджерів і адміністраторів для спільного використання сервісу</div>
                                </div>
                            </div>
                            <div class="li-block">
                                <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                                <div class="">
                                    <div class="li-title">Звітність</div>
                                    <div class="li-text">Різні рівні деталізації звітності. Від транзакційного контролю, до звітності та аналізу показників. </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="block-image d-block col-8 col-lg-5 mb-sm-0">
                        <img class="" src="/img/cabinet.png" alt="Cloud POS management">						
                        <!-- <img class="d-md-none w-100" src="/img/cabinet_mobile.png"> -->
                    </div>
                </div>
            </div>
            <div class="right"></div>
        </section>

        <!-- Network trading-->
        <section class="container mb-5">
            <div class="network-block">
                <div class="col-10 col-lg-5">	
                    <div class="block-header">
                        <div v-if="language=='en'" class="h3 yellow">Ability to manage a network of point of sales</div>
                        <div v-if="language=='ua'" class="h3 yellow">В будь-який час, в будь якому місці</div>
                        <h2 v-if="language=='en'">Network management</h2>
                        <h2 v-if="language=='ua'">Керування мережею</h2>
                    </div>		
                    <div v-if="language=='en'" class="block-text">
                        <div class="li-block">
                            <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                            <div class="">
                                <div class="li-title">Online access</div>
                                <div class="li-text">Get round-the-clock access to trading results. Monitor the performance of both the selected cash desk and all outlets in general.</div>
                            </div>
                        </div>
                        <div class="li-block">
                            <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                            <div class="">
                                <div class="li-title">Range and prices</div>
                                <div class="li-text">Individual settings for different points of sale. Automate the process of setting product prices and running promotions, taking into account competitive prices and demand.</div>
                            </div>
                        </div>
                        <div class="li-block">
                            <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                            <div class="">
                                <div class="li-title">Manage your franchise</div>
                                <div class="li-text">Adapt your corporate standards to the needs of a particular outlet.</div>
                            </div>
                        </div>
                    </div>	
                    <div v-if="language=='ua'" class="block-text">
                        <div class="li-block">
                            <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                            <div class="">
                                <div class="li-title">Онлайн доступ</div>
                                <div class="li-text">Отримайте цілодобовий доступ до результатів торгівлі. Контролюйте показники як по обраній касі, так і по всім закладам загалом.</div>
                            </div>
                        </div>
                        <div class="li-block">
                            <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                            <div class="">
                                <div class="li-title">Асортимент та ціни</div>
                                <div class="li-text">Індивідуальні налаштування для різноманітних точок продажу. Автоматизуйте процес встановлення цін на товари та проведення акцій,  з огляду на конкурентні ціни та попит.</div>
                            </div>
                        </div>
                        <div class="li-block">
                            <!-- <Icon class="icon icon-success" src="/main-assets/icons/circle-check.svg"/> -->
                            <div class="">
                                <div class="li-title">Керуйте франшизою.</div>
                                <div class="li-text">Адаптируйте ваши корпоративніе стандарты под потребности конкретной торговой точки.</div>
                            </div>
                        </div>
                    </div>			

                </div>
            </div>
        </section>

        <!-- Printers && Offline-->
        <section class="functions-block container d-flex flex-column flex-lg-row gap-4 mb-4">
            <!-- POS devices -->
            <div class="column-1of2 card">			
                <div class="mx-auto col-11">
                    <div class="block-header">
                        <div v-if="language=='en'" class="h3 yellow">POS equipment</div>
                        <div v-if="language=='ua'" class="h3 yellow">POS обладнання</div>
                        <h2 v-if="language=='en'" class="">Connecting specialised devices</h2>
                        <h2 v-if="language=='ua'" class="">Підключення спеціалізованих пристроїв</h2>
                        <div class="text-center pt-3 d-md-none">
                            <!-- <Icon src="/main-assets/icons/print.svg" class="icon big-icon"/> -->
                        </div>
                    </div>	
                    <div v-if="language=='en'" class="block-text" style="text-align: justify">
                        <p>We support the following devices:</p>
                        <p>- USB thermal printer (50, 80 mm.)</p>
                        <p>- Bluetooth thermal printer (50, 80mm.)</p>
                        <p>- KDS kitchen display</p>
                    </div>
                    <div v-if="language=='ua'" class="block-text" style="text-align: justify">	
                        <p>Пропонуємо підтримку наступних пристроїв:</p>
                        <p>- USB принтер термодруку (50, 80мм.)</p>
                        <p>- Bluetooth принтер термодруку (50, 80мм.)</p>
                        <p>- KDS кухонний дисплей</p>
                    </div>
                </div>
            </div>
            <!-- Offline mode -->
            <div class="column-1of2 card">
                <div class="mx-auto col-11">
                    <div class="block-header">
                        <div v-if="language=='en'" class="h3 yellow">Offline mode</div>
                        <div v-if="language=='ua'" class="h3 yellow">Офлайн режим</div>
                        <h2 v-if="language=='en'">Continuous operation in the absence of communication</h2>
                        <h2 v-if="language=='ua'">Безперервна робота в умовах відсутності зв'язку</h2>
                        <div class="text-center pt-3 d-md-none">
                            <!-- <Icon src="/main-assets/icons/wifi-slash.svg" class="icon big-icon"/> -->
                        </div>
                    </div>	
                    <div v-if="language=='en'" class="block-text" style="text-align: justify">
                        <p>Do you have an unstable internet connection and are worried that your data will disappear? Don't worry.</p>
                        <p>All operations performed by the cashier are saved on the device from which he/she is working. As soon as the connection is restored, they will be synchronised with the POSIO server.</p>
                    </div>
                    <div v-if="language=='ua'" class="block-text" style="text-align: justify">	
                        <p>Маєте нестабільне підключення до мережі Інтернет і хвилюєтесь, що ваші дані зникнуть? Не турбуйтесь.</p>
                        <p>Усі операції, які виконує касир зберігаються на пристрої з якого він працює. Як тількі з'єднання відновиться, вони будуть синхронізовані з сервером POSIO.</p>
                    </div>
                </div>
            </div>
        </section>		

        <!-- Fiscalizetion -->
        <section class="fiscalization-block container">
            <div class="card">
                <div class="mx-auto col-11 col-lg-6">
                    <div class="block-header">
                        <div v-if="language=='en'" class="h3 yellow">Fiscalization</div>
                        <div v-if="language=='ua'" class="h3 yellow">Фіскалізація</div>
                        <h2 v-if="language=='en'" class="">Registration of trading operations in tax services</h2>
                        <h2 v-if="language=='ua'" class="">Реєстрація торгових операцій в налогових сервісах (ПРРО)</h2>
                        <div class="text-center pt-3 d-md-none">
                            <!-- <Icon src="/main-assets/icons/user-police.svg" class="icon big-icon"/> -->
                        </div>
                    </div>	
                    <div v-if="language=='en'" class="block-text" style="text-align: justify">
                        <p>Register your cash transactions in accordance with the laws of Ukraine on the servers of the tax inspectorate.</p>
                        <p>If you already have the popular Checkbox service connected, we've taken care of it and created a corresponding integration.</p>
                        <p>This will only make your work more convenient.</p>
                    </div>
                    <div v-if="language=='ua'" class="block-text" style="text-align: justify">	
                        <p>Реєструйте ваші касові операції у відповідності із законодавством України на серверах налогогової інспекції.</p>
                        <p>Якщо ви вже маєте підключений популярний севіс Checkbox, ми потурбувалися і створили відповідну інтеграцію.</p>
                        <p>Отже ваша робота стане тількі зручніше.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Fast deployment -->
        <section class="deploy-block container justify-content-center align-item">
            <div class="block-header mb-5">
                <div v-if="language=='en'" class="h3 yellow">CONNECT CASHBOX in 4 steps</div>
                <div v-if="language=='ua'" class="h3 yellow">ПІДКЛЮЧИ КАСУ в 4 дії</div>
                <h2 v-if="language=='en'">Fast deployment</h2>
                <h2 v-if="language=='ua'">Швидке розгортання</h2>
            </div>	
            <div v-if="language=='en'" class="block-text steps-block">
                <div class="circle-block">
                    <div class="circle text-7">1</div>
                    <div class="">
                        <div class="li-title">Create a point of sale</div>
                        <div class="li-text">or choose an existing one</div>
                    </div>
                </div>
                <div class="circle-block">
                    <div class="circle text-7">2</div>
                    <div class="">
                        <div class="li-title">Create a cash box</div>
                        <div class="li-text">and automatically receive a code</div>
                    </div>
                </div>
                <div class="circle-block">
                    <div class="circle text-7">3</div>
                    <div class="">
                        <div class="li-title">Install the app on your device</div>
                        <div class="li-text">follow the link</div>
                    </div>
                </div>
                <div class="circle-block">
                    <div class="circle text-7">4</div>
                    <div class="">
                        <div class="li-title">Add the code</div>
                        <div class="li-text">all data will be downloaded automatically</div>
                    </div>
                </div>
            </div>	
            <div v-if="language=='ua'" class="block-text steps-block">
                <div class="circle-block">
                    <div class="circle text-7">1</div>
                    <div class="">
                        <div class="li-title">Створи точку продажу</div>
                        <div class="li-text">або обери існуючу</div>
                    </div>
                </div>
                <div class="circle-block">
                    <div class="circle text-7">2</div>
                    <div class="">
                        <div class="li-title">Створи касу</div>
                        <div class="li-text">та автоматично отримай код</div>
                    </div>
                </div>
                <div class="circle-block">
                    <div class="circle text-7">3</div>
                    <div class="">
                        <div class="li-title">Встанови додаток на пристрої</div>
                        <div class="li-text">перейди за посиланням</div>
                    </div>
                </div>
                <div class="circle-block">
                    <div class="circle text-7">4</div>
                    <div class="">
                        <div class="li-title">Додай отриманий код</div>
                        <div class="li-text">всі данні завантажаться автоматично</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Try for free -->
        <section class="container">
            <div class="try-block card">
                <div class="block-header col-12 col-md-8 col-lg-6 text-center">
                    <h2 v-if="language=='en'">Free to use</h2>
                    <h2 v-if="language=='ua'">Безкоштовне використання</h2>
                    <div v-if="language=='en'" class="sub-title lightgrey my-3">Register now and get the opportunity to use the POSIO app without time limits</div>
                    <div v-if="language=='ua'" class="sub-title lightgrey my-3">Зареєструйся зараз і отримай можливість використовувати додаток POSIO без обмежень по часу</div>
                </div>

                <div class="block-text w-100 w-sm-75 w-md-50 mb-3">
                    <!-- email  -->
                    <div class="input-group input-group-big filled">
                        <input ref="email" type="text" class="form-control form-input" :placeholder="$t('E-mail')" required>
                        <label ref="error_email" class="error-label d-none"></label>
                    </div>
                    <!-- phone  -->
                    <div class="input-group input-group-big filled">
                        <input ref="email" type="text" class="form-control form-input" :placeholder="$t('Phone')" required>
                        <label ref="error_email" class="error-label d-none"></label>
                    </div>
                    <!-- business name  -->
                    <div class="input-group input-group-big filled">
                        <input ref="email" type="text" class="form-control form-input" :placeholder="$t('Your business name')" required>
                        <label ref="error_email" class="error-label d-none"></label>
                    </div>
                    <div class="fab-button main-button big m-auto mt-4 mt-md-5 w-50"><span>{{ $t('Start now') }}</span></div>
                </div>
            </div>
        </section>

        <footer class="footer container p-5">
            Copyright © 2020-2024 Personal solutions Ltd., All Rights Reserved
        </footer>

    </MainTemplate>

        <!-- Main block -->
        <!-- <div class="d-center vh-height bg-dark text-light">
            <MainBlock :header="mainMenu"/>
        </div> -->

        <!-- About -->
        <!-- <div id="about" class="about-block vh-height py-5">

            <div class="container px-5 pt-5">
                <div class="v-flex align-items-center align-items-lg-start d-md-flex pb-5">
                    <div class="v-flex w-100 w-md-50 pe-md-3">
                        <h2>{{ $t('О компанії') }}</h2>
                        
                        <div class="text-justify">
                            <p>{{ $t('about1') }}</p>
                            <p>{{ $t('about2') }}</p>
                            <p>{{ $t('about3') }}</p>
                            <p>{{ $t('about4') }}</p>
                        </div>

                    </div>
                    <div class="ps-3 w-100 p-3 p-md-0 w-md-50 ps-md-3">
                        <NuxtImg src="/img/mainpage_collage.png" alt="About ТБК1 Image" class="w-100"/>
                    </div>
                </div>

                <div class="v-flex pb-5">
                    <div class="d-block d-md-flex pb-md-5">
                        <div class="rectangle-header w-md-50 pe-md-3">
                            <h4 class="bold-6 text-black-50 py-2">{{ $t('МАТЕРІАЛИ') }}</h4>
                            <p>{{ $t('У роботі використовуємо тільки перевірені і якісні матеріали. Перевірені роками постачальники забезпечують максимально швидке постачання.')}}</p>
                        </div>
                        <div class="rectangle-header  w-md-50 ps-md-3">
                            <h4 class="bold-6 text-black-50 py-2">{{ $t('ПРОЦЕС') }}</h4>
                            <p>{{ $t('Маємо власне виробництво: від різання і складання, до доставки та монтажу. Ми повністю керуємо всіма процесами, даємо гарантію і особисто відповідаємо за якість своїх робіт.')}}</p>
                        </div>
                    </div>
                    <div class="d-block d-md-flex">
                        <div class="rectangle-header w-md-50 w-md-50 pe-md-3">
                            <h4 class="bold-6 text-black-50 py-2">{{ $t('18 РОКІВ НА РИНКУ') }}</h4>
                            <p>{{ $t('Ми створюємо металоконструкції з 2006 р. За цей час ми намагалися зарекомендувати себе тільки з хорошого боку і завжди знаходити підхід до клієнта.')}}</p>
                        </div>
                        <div class="rectangle-header  w-md-50 ps-md-3">
                            <h4 class="bold-6 text-black-50 py-2">{{ $t('500+ ОБ\'ЄКТІВ') }}</h4>
                            <p>{{ $t('Наші вироби з металу радують око не тільки в приватних будинках, а й на літніх майданчики, комерційних підприємствах, виробничих приміщеннях та багатоквартирних будинках.')}}</p>
                        </div>
                    </div>
                </div>

                <div class="d-center flex-grow-1 text-center pb-4">
                    <button class="action-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">{{ $t('Замовити дзвінок') }}</button>
                </div>
            </div>

        </div> -->

        <!-- Our works - photos -->
        <!-- <div id="ourworks" class="ourworks py-5">
            <div class="container px-4 py-5">
                <Collage/>
            </div>
        </div>     -->

        <!-- Our services -->
        <!-- <div id="services" class="services vh-height d-center v-center py-5">
            <div class="container px-4 py-5 v-flex align-items-center">
                <div class="pb-4">
                    <h2>{{ $t('Що ми робимо?')}}</h2>
                </div>
                <div class="v-flex">
                    <div class="v-flex d-lg-flex">
                        <div class="w-100 w-lg-50 pe-lg-4 d-flex pb-4">
                            <div class="pe-4"><NuxtImg src="/img/services/facades.png" layout="intrinsic"/></div>
                            <div class="text-justify">
                                <h3>{{ $t('Скляні, вентильовані фасади')}}</h3>
                                {{ $t('facades_desc') }}
                            </div>
                        </div>
                        <div class="w-100 w-lg-50 ps-lg-4 d-flex pb-4">
                            <div class="pe-4"><NuxtImg src="/img/services/autotents.png" layout="intrinsic"/></div>
                            <div class="text-justify">
                                <h3>{{ $t('Автомобільні навіси')}}</h3>
                                {{ $t('navesi_desc') }}
                            </div>
                        </div>
                    </div>
                    <div class="v-flex d-lg-flex">
                        <div class="w-100 w-lg-50 pe-lg-4 d-flex pb-4">
                            <div class="pe-4"><NuxtImg src="/img/services/parkan.png" layout="intrinsic"/></div>
                            <div class="text-justify">
                                <h3>{{ $t('Паркани, огорожі')}}</h3>
                                {{ $t('parkani_desk') }}
                            </div>
                        </div>
                        <div class="w-100 w-lg-50 ps-lg-4 d-flex pb-4">
                            <div class="pe-4"><NuxtImg src="/img/services/stairs.png" layout="intrinsic"/></div>
                            <div class="text-justify">
                                <h3>{{ $t('Сходи, майданчики')}}</h3>
                                {{ $t('shodi_desc') }}
                            </div>
                        </div>
                    </div>
                    <div class="v-flex d-lg-flex">
                        <div class="d-flex w-lg-50 pe-lg-4 pb-4">
                            <div class="pe-4"><NuxtImg src="/img/services/vorota.png" layout="intrinsic"/></div>
                            <div class="text-justify">
                                <h3>{{ $t('Розсувні ворота')}}</h3>
                                {{ $t('vorota_desc') }}
                            </div>
                        </div>
                        <div class=" d-flex w-lg-50 ps-lg-4 pb-4">
                            <div class="pe-4"><NuxtImg src="/img/services/doors.png" layout="intrinsic"/></div>
                            <div class="text-justify">
                                <h3>{{ $t('Двері, хвіртки')}}</h3>
                                {{ $t('dveri_desc') }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- Project now -->
        <!-- <div class="projecting-block py-5">
            <div class="container px-4 w-100 w-sm-75 ">
                <h2>{{ $t('Спроектувати нестандартну металеву конструкцію')}}</h2>
                <p class="">{{ $t('* Надайте швидкий опис необхідної металевої конструкції')}}</p>
                <textarea id="big-text" name="big-text" rows="5" cols="50" class="w-100 mb-3"></textarea><br>
                <button class="action-button bold-2">{{ $t('Розрахувати')}}</button>
            </div>
        </div> -->

        <!-- Our technologies -->
        <!-- <div id="product" class="technologies-block vh-height d-center v-center  py-5">
            <div class="container px-4 pt-5 v-flex align-items-center">
                <div class="pb-4">
                    <h2>{{ $t('Технології')}}</h2>
                </div>
                <Technologies />
            </div>
        </div> -->

        <!-- Our clients -->
        <!-- <div id="clients" class="bg-white">
            <div class="container py-5 my-4 px-0 px-md-5 v-flex align-items-center ">
                <div class="pb-4">
                    <h2>{{ $t('Нам довіряють')}}</h2>
                </div>           
                <Carousel />
            </div>
        </div> -->

        <!-- Work order -->
        <!-- <div class="workorder py-5">
            <div class="container px-4 py-5">
                <div class="pb-4">
                    <h2>{{ $t('Співпраця')}}</h2>
                </div>  
                <WorkOrderBlock />
            </div>
        </div> -->

        <!-- Footer -->
        <!-- <div class="footer v-flex justify-content-between align-items-center vh-height-75 bg-dark pt-5"> -->

            <!-- squeeze -->
            <!-- <div id="project" class="container w-100 w-sm-75 px-4 my-5">
                <SqueezeBlock/>
            </div> -->

            <!-- Contacts -->
            <!-- <div class="container d-flex transformer justify-content-between align-items-center align-items-md-start main-color-darkmode border-bottom border-grey pt-4 pb-5 pb-md-3"> -->
                <!-- Phones -->
                <!-- <div class="v-flex align-items-center align-items-md-start pe-md-5">
                    <div class="d-flex">
                        <a :href="'tel:'+useRuntimeConfig().public.phone" class="dark pb-0 f3 bold-3 pe-3">{{ useRuntimeConfig().public.phone }}</a>
                        <a :href="'tg://resolve?domain='+useRuntimeConfig().public.tg" target="_blank" class="lh-1">
                            <Icon class="" name="logos:telegram"/>
                        </a>
                    </div>
                    <p class="f-3 text-white-50">Всі дзвінки згідно тарифного<br> плану вашого оператора</p>
                </div> -->
                <!-- Email -->
                <!-- <div class="v-flex align-items-center align-items-md-start pe-md-5">
                    <a :href="'mailto:'+useRuntimeConfig().public.email" class="dark pb-0 f3 bold-3">{{ useRuntimeConfig().public.email }}</a>
                    <p class="f-3 text-white-50">Написати нам</p>
                </div>
                <div class="v-flex align-items-center align-items-md-start pe-md-5">
                    <p class="dark pb-0 mb-0 f3 bold-3">Пн-Пт з 9:00 до 19:00</p>
                    <p class="f-3 text-white-50">Графік роботи</p>
                </div>
                <div class="d-flex transformer align-items-center mb-3">
                    <p class="pe-0 pe-md-3 mb-2 mb-md-0">Маєте запитання?</p>
                    <button class="text-uppercase f-4 bold-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">{{ $t('Залишити заявку')}}</button>
                </div>
            </div> -->

            <!-- Copyrights -->
            <!-- <div class="container d-flex transformer align-items-center w-100">
                <div class="logo mt-4 mt-md-0">
                    <NuxtImg src="/img/logo_sm1_darkmode.png" alt="ТБК1 логотип" height="15px"/> 
                </div>
                <div class="f-3 text-center container py-4 text-white-50 text-light">
                    {{ $t('Усі права захищені © 2016-2022 ТОВ «ТБК-1» - виготовлення мтеалоконструкцій на замовлення в Києві')}}<br>
                    {{ $t('Розробка та створення сайту - Personal Solutions Ltd')}}
                </div>
            </div> -->

        <!-- </div> -->
        
    <!-- </div> -->

</template>

<script setup>
    definePageMeta({
        layout: 'mainpage'
    });
    const i18nHead = useLocaleHead({
        addSeoAttributes: {
            // canonicalQueries: ['foo']
        }
    });

    const { t } = useI18n();

    useHead({
        title: t('main_title'),
        htmlAttrs: {
            lang: i18nHead.value.htmlAttrs.lang
        },
        link: [...(i18nHead.value.link || [])],
        meta: [...(i18nHead.value.meta || [])]
    //     meta: [
    //         { name: 'description', content: 'Это описание главной страницы моего сайта.' },
    //         { name: 'keywords', content: 'сайт, главная, nuxt 3' },
    //     ],
    });

</script>

<script>
    import MainTemplate from './_maintemplate.vue'
    // import PopupMenu from '~/components/popupmenu.vue'
    // import MainBlock from '~/blocks/main.vue'
    // import Collage from '~/components/collage.vue'
    // import Technologies from '~/blocks/main_technologies.vue'
    // import Carousel from '~/components/carousel.vue'
    // import WorkOrderBlock from '~/blocks/main_workorder.vue'
    // import SqueezeBlock from '~/blocks/main_squeeze.vue'
    
    export default {
        components: {
            MainTemplate, // MainBlock, PopupMenu, Collage, Technologies, Carousel, WorkOrderBlock, SqueezeBlock
        },
        data: function() {
            return {
                // mainMenu: [
                //     {text: 'О компанії', href: '#about'},
                //     {text: 'Послуги', href: '#services'},
                //     {text: 'Виробництво', href: '#product'},
                //     {text: 'Проектування', href: '#project'},
                // ],
				// isMenuVisible : false,
            }
        },
        mounted: function() {
        },
        unmounted: function() {
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    .wrapper {
        border-radius: variables.$wrapper-radius;
        margin: variables.$wrapper-spacing;
    }

    .about-block {
        background: transparent linear-gradient(180deg,#fff,#f6f6f6) 0 0 no-repeat padding-box;
    }

    .rectangle-header h4 {
        background-image: url('/img/bg_rectangle.png');
        background-size: 50px;
        // background-position: center;
        background-repeat: no-repeat;
        height: 50px;
    }

    .services img {
        width: calc(63px + 30 * (100vw - 320px) / 1600);
    }

    .ourworks {
        border: 0px solid #e7e7e7;
        border-top-width: 1px;
        border-bottom-width: 1px;
        background-color: white;
        
    }

    .projecting-block {
        background-image: url('/img/background_projecting.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat; /* отключить повторение изображения */
    }

    .technologies-block {
        .background-image {
            height:150px; 
            background-repeat: no-repeat; 
            background-size:100%;
            color: white;
        }
        
    }

    .footer {
        border-radius: variables.$blocks-radius variables.$blocks-radius variables.$wrapper-radius variables.$wrapper-radius;
    }
    
</style>
