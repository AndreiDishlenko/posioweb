<template>

	<!-- <HeaderLine 
		@onSignin="openLogin" 
		@setLanguage="(locale) => switchLocale(locale)"
		/> -->
	
	<main class="main-page px-0">
		<slot></slot>
	</main>

	<!-- <div id="LoginForm" class="modal top-0 fade" data-bs-keyboard="true" tabindex='-1'>
		<LoginForm ref="LoginForm"
			:action="currentAction"
			@onSignup="openSignup()"
			@onSignupSent="openSignup('signup_sent')"
			@onRestore="openRestore()"
			@closeModals="closeModals()"
			/>
	</div>
	<div id="SignupForm" class="modal top-0 fade"  data-bs-keyboard="true" tabindex='-1'>
		<SignupForm ref="SignupForm"
			:action="currentAction"
			@onLogin="openLogin()"
			@closeModals="closeModals()"
			/>
	</div>
	<div id="RestoreForm" class="modal top-0 fade"  data-bs-keyboard="true" tabindex='-1'>
		<RestoreForm ref="RestoreForm"
			:action="currentAction"
			@onLogin="openLogin"
			@closeModals="closeModals()"
			/>
	</div> -->

</template>

<script>
	// import HeaderLine from './_header'
	// import FooterLine from './_footer'
	// import LoginForm from './auth/login'
	// import SignupForm from './auth/signup'
	// import RestoreForm from './auth/restore'

	export default {
		props: ['locale'],
		components: {
			// HeaderLine, FooterLine, LoginForm, SignupForm, RestoreForm
		},
		data: function() {
			return {
				currentLink: '',
				currentAction: '',
				modal_login: '',
				modal_signup: '',
				show_waiting_screen: false,
				waiting_text: ''
			}
		},
		created: function () {
			
		},
		mounted: function() {
			// this.modal_login = new bootstrap.Modal('#LoginForm', {"focus": true})
			// this.modal_signup = new bootstrap.Modal('#SignupForm', {"focus": true})
			// this.modal_restore = new bootstrap.Modal('#RestoreForm', {"focus": true})
			// window.addEventListener('load', this.route());

			// this.emitter.on( "showWaitingScreen", (text) => { this.showWaitingScreen(text); } );
			// this.emitter.on( "hideWaitingScreen", () => { this.hideWaitingScreen(); } );			
		},
		methods: {
			route: function() {			
				this.currentLink = document.querySelectorAll('body')[0].getAttribute('link');				
				this.currentAction = document.querySelectorAll('body')[0].getAttribute('action');		
				// console.log('route', this.currentLink, this.currentAction);	
				if (this.currentLink=='login')
					this.openLogin(this.currentAction);
				if (this.currentLink=='signup')
					this.openSignup(this.currentAction);
				if (this.currentLink=='restore')
					this.openRestore(this.currentAction);
			},
			switchLocale: function(new_locale) {
				return this.forwardLocaleUrl(new_locale);
			},
			forwardLocaleUrl: function(new_locale) {
				// console.log('flu', new_locale);

				// Check locale
				if ( !$config['locales'].includes(new_locale) )
					return false;

				let paths = document.location.href.split('/');
					
				// Switch to default locale
				if (new_locale===$config['default_locale'] && $config['locales'].includes(paths[3])) {
					paths.splice(3, 1);
					localStorage.setItem('locale', $config['default_locale']);
					document.location.href = paths.join('/');
					return true;
				}

				// Switch to custom locale from default
				if (new_locale!==$config['default_locale'] && (!paths[3] || !$config['locales'].includes(paths[3])) ) {
					paths.splice(3, 0, new_locale);
					localStorage.setItem('locale', new_locale);
					document.location.href = paths.join('/');
					return true;
				}

				// Switch to custom locale from another
				if ( new_locale!==$config['default_locale'] && paths[3] && $config['locales'].includes(paths[3]) ) {
					paths[3] = new_locale;
					localStorage.setItem('locale', new_locale);
					document.location.href = paths.join('/');
					return true;					
				}

				return false;
			},		
			redirectMainLocale: function() {
				let paths = document.location.href.split('/');
				if (paths[3] && paths[3]===$config['default_locale']) {
					paths.splice(3, 1);
					document.location.href = paths.join('/');
				}
			},
			restoreLocale: function() {
				let paths = document.location.href.split('/');
				let saved_locale = localStorage.getItem('locale');
				let current_locale = paths[3] && $config['locales'].includes(paths[3]) ? paths[3] : $config['default_locale'];
				
				// Requested locale is no equal saved
				if (saved_locale && saved_locale!==current_locale)
					this.forwardLocaleUrl(saved_locale);
			},
			// currentUrlLanguage: function() {
			// 	let paths = document.location.href.split('/');

			// 	if ( ['en', 'ua'].includes(paths[3]) )
			// 		return paths[3];

			// 	return '';
			// },
			// detectLanguage: function() {
			// 	let dict_languages = ['ua', 'en'];
			// 	let current_lang = localStorage.getItem('language');
			// 	let current_url_lang = this.currentUrlLanguage();

			// 	// Lang setted by URL	
			// 	if ( current_url_lang ) {
			// 		localStorage.setItem('language', current_url_lang);
			// 		window.language = current_url_lang;
			// 		return true;
			// 	}

			// 	// Lang setted by localStorage
			// 	// if ( current_lang && dict_languages.includes(current_lang)) {
			// 	// 	window.language = current_lang;
			// 	// 	this.forwardLangUrl(current_lang);
			// 	// 	return true;
			// 	// }

			// 	// Auto-detect
			// 	// let result = 'en';
			// 	// let chrome_locale = navigator.language || navigator.userLanguage; 
			// 	// if ( chrome_locale.includes('ru-') ) 
			// 	// 	result = 'ua';
			// 	// localStorage.setItem('language', result);
			// 	// window.language = result;
			// 	// this.forwardLangUrl(result);	
			// 	return true;
				
			// },
			
			openLogin: function(def_state='') {
				// console.log('openLogin');
				this.closeModals();
				this.$refs.LoginForm.state=def_state; 
				this.$refs.LoginForm.resetForm();
				this.modal_login.show();
			},
			openSignup: function(def_state='') {
				// console.log('openSignup');
				this.closeModals();		
				this.$refs.SignupForm.state=def_state;
				this.modal_signup.show();
			},
			openRestore: function(def_state='') {
				// console.log('openRestore');
				this.closeModals();		
				this.$refs.RestoreForm.state=def_state;
				this.modal_restore.show();
			},

			closeModals: function() {
				this.modal_login.hide();
				this.modal_signup.hide();
				this.modal_restore.hide();
			},

			showWaitingScreen: function(message) {
				// console.log('ShowWS');				
				this.waiting_text = message ? message : '';			
				this.show_waiting_screen = true;
			},
			hideWaitingScreen: function() {
				// console.log('HideWS');
				this.waiting_text = '';
				this.show_waiting_screen = false;
			}
		}
	}
</script>

<style>
	.main-page {
		.screen-shot {
			max-width:75%;
			border-radius:10px;
		}
	}

	footer {
		/* border: 1px solid green; */
	}
	
</style>