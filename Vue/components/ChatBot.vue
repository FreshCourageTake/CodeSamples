<template>
    <div id="chat-bot">
        <div class="form-bottom">
            <div id="messages">
                <div v-for="message in messages" :class="{sentMsg: message.origin === 'sent', rcvdMsg: message.origin === 'rcvd'}">
                    <p>{{ message.message }}</p>
                </div>
            </div>
            <form @submit="askQuestion">
                <input type="text" :value="activeText" @keyup="updateActiveText" class="form-control"
                       :placeholder="placeholder" autofocus/>
                <br/>
                <button type="submit" class="btn btn-primary btn-block fat-btn">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {askQuestion, updateActiveText} from '../vuex/actions'

    export default {
        vuex: {
            getters: {
                messages: state => state.messages,
                activeText: state => state.activeText,
                placeholder: state => state.placeholder
            },
            actions: {
                askQuestion,
                updateActiveText
            }
        }
    }
</script>