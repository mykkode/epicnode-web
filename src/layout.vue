<template>
    <v-app id="layout" >
        <v-navigation-drawer v-model="model" absolute overflow app>
            <v-list>
                <v-list-tile avatar @click="">
                    <v-list-tile-avatar>
                        <img :src="`https://randomuser.me/api/portraits/men/1.jpg`" alt="">
                    </v-list-tile-avatar>
                    <v-list-tile-title v-text="">Hello, Arnold</v-list-tile-title>
                    <v-btn flat icon @click.stop="model = !model">
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-list-tile>
            </v-list>
            <v-list-tile v-for="dashItem in dashItems" :key="dashItem.text" @click="">
                <v-list-tile-action>
                    <v-icon>{{ dashItem.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title> {{ dashItem.text }} </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-divider dark class="my-3" ></v-divider>
            <v-list-tile v-for="exItem in exItems" :key="exItem.text" @click="">
                    <router-link tag="v-list-tile-action" :to=exItem.link >
                        <v-icon>{{ exItem.icon }}</v-icon>
                    </router-link>
                <router-link tag="v-list-tile-content" :to=exItem.link >
                    <v-list-tile-title> {{ exItem.text }} </v-list-tile-title>
                </router-link>
            </v-list-tile>
            <v-divider dark class="my-3" ></v-divider>
            <v-list-tile v-for="aboutItem in aboutItems" :key="aboutItem.text" @click="">
                <v-list-tile-action>
                    <v-icon>{{ aboutItem.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title> {{ aboutItem.text }} </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

        </v-navigation-drawer>
        <v-toolbar align-center justify-center app absolute >
            <v-layout position-absolute>
                <v-toolbar-side-icon @click.stop="model = !model" ></v-toolbar-side-icon>
            </v-layout>

            <v-layout align-center justify-center>
                <v-toolbar-title>Dashboard</v-toolbar-title>
            </v-layout>
            <v-layout position-absolute position-right overlap>
                <v-btn flat icon color="pink">
                    <v-icon>notifications</v-icon>
                </v-btn>
            </v-layout>
        </v-toolbar>
        <v-content>
            <v-container fluid :class="{'px-0': $vuetify.breakpoint.smAndDown}">
                <v-layout align-center justify-center >
                    <v-flex xs12>
                        <v-card>
                            <v-card-text>
                                <router-view></router-view>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer :inset="true" app>
            <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            model: null,
            dashItems: [
                { icon: 'dashboard', text: 'Dashboard' , link: ""},
                { icon: 'stars', text: 'Stats' , link: ""},
                { icon: 'fingerprint', text: 'Account' , link: ""},
            ],
            exItems: [
                { icon: 'subject', text: 'Exercises' , link: "/exercises"},
                { icon: 'input', text: 'Queue' , link: "/queue"},
                { icon: 'trending_up', text: 'Top' , link: "/top"},
                { icon: 'list', text: 'Theory' , link: "/theory"},
            ],
            aboutItems: [
                { icon: 'desktop_mac', text: 'About' , link: ""},
                { icon: 'send', text: 'Contact' , link: ""},
                { icon: 'bug_report', text: 'Bug Report' , link: ""},
            ],
        })
    }
</script>
