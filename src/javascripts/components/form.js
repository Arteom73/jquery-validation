import $ from 'jquery';
import 'jquery-validation';
import 'jquery-validation/dist/additional-methods.js';

/*
 * Example plugin used to demonstrate how to create a plugin which
 * will handle init / destroy events
 */

$.validator.addMethod(
	"phone",
	function(value, element) {
		return this.optional( element ) || new RegExp(/^[\+][0-9]+$/im).test( value );
	},
	window.validationMessages.phone
);

$.fn.form = function (data) {
    if (data === 'destroy') {
		$(this).data('validator').destroy();
    } else {
		const $module = $(this);
		const rules = {
			phone: {
				phone: true,
				minlength: 6,
				messages: {
					minlength: window.validationMessages.phone
				}
			}
		};
		$.extend($.validator.messages, {
			required: window.validationMessages.required,
		});
		const validator = $module.validate({
			lang: 'ru',
			messages: {
				required: window.validationMessages.required,
			},
			submitHandler(form) {
				$module.find('button[type="submit"]').prop('disabled', true);
				setTimeout(() => {
					$module.addClass('is-sended');
				}, 1000);
			},
		});
		$module.find('[data-rule]').each((index, item) => {
			if (rules[$(item).data('rule')]) {
				$(item).rules('add', rules[$(item).data('rule')]);
			}
		});
		$module.data('validator', validator);
    }
};
