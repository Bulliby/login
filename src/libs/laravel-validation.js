// ************************************************************************** //
//                                                                            //
//                                                                            //
//   laravel-validation.js                                                    //
//                                                        ________            //
//   By: bulliby <wellsguillaume+at+gmail.com>           /   ____/_  _  __    //
//                                                      /    \  _\ \/ \/ /    //
//   Created: 2020/06/10 23:37:15 by bulliby            \     \_\ \     /     //
//   Updated: 2020/07/24 15:48:07 by bulliby             \________/\/\_/      //
//                                                                            //
// ************************************************************************** //

import alert from 'G/alert.vue'

const laravelValidationMixin = {
    methods: {
        laravelErros: function(errors) {
            if (errors.response.status === 422) {
                Object.entries(errors.response.data.errors).forEach((entry) => {
                    const [e_index, error] = entry;
                    this.applyRules(e_index);
                    this[e_index+'Error'] = error.shift();
                });
            } else {
                throw new Error("Something bad happened");
            }
        },
        applyRules: function(e_index) {
            if (typeof this.specialRules !== 'undefined') {
                this.specialRules.forEach((sRule) => {
                    if (sRule.rule == e_index) {
                        if (typeof this[sRule['action']] !== 'function') {
                            throw new Error(`You must provide a ${sRule['action']} function`);
                        }
                        this[sRule['action']]();

                        return;
                    }
                });
            }
        }
    },
}

export default laravelValidationMixin;
