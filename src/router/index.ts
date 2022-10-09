import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LeagueList from "@/pages/LeagueList.vue";
import TeamList from "@/pages/TeamList.vue";
import TeamCalendar from "@/pages/TeamCalendar.vue";
import LeagueCalendar from "@/pages/LeagueCalendar.vue";
import NotFoundPage from "@/pages/404.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
    name: "NotFoundPage",
  },
  {
    path: "/",
    component: LeagueList,
    name: "LeagueList",
    meta: {
      text: "league list",
    },
  },
  {
    path: "/team/:leagueTitle/:leagueId/:code",
    component: TeamList,
    name: "TeamList",
    props: true,
    meta: {
      breadCrumb(route: any) {
        const titleToTeamList = route.params.leagueTitle;
        const leagueId = route.params.leagueId;
        const code = route.params.code;
        return [
          {
            text: "league list",
            to: { name: "LeagueList" },
          },
          {
            text: titleToTeamList,
            to: {
              name: "TeamList",
              params: {
                leagueTitle: titleToTeamList,
                id: leagueId,
                code: code,
              },
            },
          },
        ];
      },
    },
  },
  {
    path: "/team/team-calendar/:leagueTitle/:leagueId/:code/:teamName/:id",
    component: TeamCalendar,
    name: "TeamCalendar",
    props: true,
    meta: {
      breadCrumb(route: any) {
        const titleToTeamCalendar = route.params.teamName;
        const teamId = route.params.id;
        const titleLeague = route.params.leagueTitle;
        const idLeague = route.params.id;
        const code = route.params.code;
        return [
          {
            text: "league list",
            to: { name: "LeagueList" },
          },
          {
            text: "Team List",
            to: {
              name: "TeamList",
              params: {
                id: idLeague,
                leagueTitle: titleLeague,
              },
            },
          },
          {
            text: titleToTeamCalendar,
            to: {
              name: "TeamCalendar",
              params: {
                title: titleToTeamCalendar,
                teamId: teamId,
              },
            },
          },
        ];
      },
    },
  },
  {
    path: "/team/league-calendar/:leagueTitle/:leagueId/:code",
    component: LeagueCalendar,
    name: "LeagueCalendar",
    props: true,
    meta: {
      breadCrumb(route: any) {
        const titleToCalendarLeague = route.params.leagueTitle;
        const calendarLegueId = route.params.leagueId;
        const code = route.params.code;
        return [
          {
            text: "league list",
            to: { name: "LeagueList" },
          },
          {
            text: titleToCalendarLeague,
            to: {
              name: "LeagueCalendar",
              params: {
                leagueTitle: titleToCalendarLeague,
                leagueId: calendarLegueId,
                code: code,
              },
            },
          },
        ];
      },
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
