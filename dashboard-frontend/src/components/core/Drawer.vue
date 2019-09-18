<template>
  <v-navigation-drawer 
    id="app-drawer"
    v-model="primaryDrawer.model"
    :permanent="primaryDrawer.type === 'permanent'"
    :temporary="primaryDrawer.type === 'temporary'"
    :clipped="primaryDrawer.clipped"
    :floating="primaryDrawer.floating"
    :mini-variant="primaryDrawer.mini"
    absolute
    overflow
    app
    dark
    mobile-break-point="991"
    width="260"
  >
    <v-list>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="logo">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Vue Dashboard</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list two-line subheader>
        <v-divider></v-divider>

        <v-list-tile v-if="responsive">
          <v-text-field class="blue-input search-input" label="Search..." color="blue" />
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-list-tile 
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    logo: './img/logo.png',
    links: [
      {
        to: '/',
        icon: 'dashboard',
        text: 'Dashboard'
      },
      {
        to: '/users',
        icon: 'person',
        text: 'Users'
      },
      {
        to: '/roles',
        icon: 'person_pin',
        text: 'Role'
      }
    ],
    responsive: true
  }),
  computed : {
    ...mapState('toolbar', ['primaryDrawer']),
  },
}
</script>
