<template>
    <pageContainer>
        <template v-slot:alert>
            <alert :alert="alert"/>
        </template>
        <template v-slot:title>
            <span class="title-slot">Belote en Ligne (Inscription)</span>
        </template>
        <template v-slot:form>
         <v-form>
            <v-text-field v-model="name" label="Login" @input="loginError = ''" required :error-messages="loginError" />
            <v-text-field v-model="email" label="Email" @input="emailError = ''" required :error-messages="emailError" />
            <v-text-field v-model="password" label="Password" @input="passwordError = ''" type="password" required :error-messages="passwordError"/>
            <v-text-field v-model="password_confirmation" v-on:keyup.enter="submit" @input="password_confirmationError = ''" label="Password" type="password" required :error-messages="password_confirmationError" />
            <v-btn @click="submit">Submit</v-btn>
        </v-form>
        </template>
    </pageContainer>
</template>

<script>
import pageContainer from 'T/page.vue'
import ApiRequester from 'L/ApiRequester'
import alert from 'G/alert.vue'
import laravelValidationMixin from 'L/laravel-validation.js'

export default {
    name: 'signup',
    mixins: [laravelValidationMixin],
    components: {
        pageContainer,
        alert
    },
    data() {
        return {
            ApiRequester: null,
            alert: {
                type: null,
                msg: null,
            },
            name: '',
            loginError: '',
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            password_confirmation: '',
            password_confirmationError: '',
        }
    },
    methods: {
        submit: function() {
            this.$apiRequester.register({
                'email' : this.email,
                'name' : this.name,
                'password' : this.password,
                'password_confirmation' : this.password_confirmation,
            })
            .then((response) => {
                if (response.status === 201) {
                    this.alert = {
                        type: 'success',
                        msg: "Votre compte a bien ete créé"
                    }
                } else {
                    throw new Error("Something bad happened");
                }
            })
            .catch((errors) => this.laravelErros(errors));
        },
    },
}
</script>

<style scoped>
</style>
