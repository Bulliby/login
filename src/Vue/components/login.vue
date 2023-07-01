<template>
    <pageContainer>
        <template v-slot:alert>
            <alert v-if="alert.type != null" @flush-error="alert.type = null" :alert="alert"/>
        </template>
        <template v-slot:title>
            <span class="title-slot">Belote en Ligne</span>
        </template>
        <template v-slot:form>
            <v-form>
                <v-text-field v-model="email" label="Email" @input="emailError = ''" required :error-messages="emailError" />
                <v-text-field v-model="password" label="Password" v-on:keyup.enter="submit" @input="passwordError = ''" type="password" required :error-messages="passwordError"/>
                <v-btn @click="submit">Submit</v-btn>
            </v-form>
        </template>
    </pageContainer>
</template>

<script>
import pageContainer from 'T/page.vue'
import alert from 'G/alert.vue'
import laravelValidationMixin from 'L/laravel-validation.js'

export default {
    name: 'login',
    mixins: [laravelValidationMixin],
    components: {
        pageContainer,
        alert
    },
    data() {
        return {
            alert: {
                type: null,
                msg: null,
            },
            email: "",
            password: "",
            emailError: "",
            passwordError: "",
            specialRules: [
                {
                    action: 'wrongCredentials',
                    rule: 'wrong_credentials',
                },
            ]
        }
    },
    methods: {
        submit: function () {
            this.$apiRequester.login({
                'email' : this.email,
                'password' : this.password
            })
            .then((response) => {
                if (response.status == 204) {
                    this.alert = {
                        type: 'success',
                        msg: "Vous etes auhtentifie"
                    }
                }
            })
            .catch((errors) => this.laravelErros(errors));
        },
        wrongCredentials: function() {
            this.alert = {
                type: 'error',
                msg: "Wrong credentials"
            }
        }
    },
}
</script>
<style scoped>

</style>
