import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/programmation',
    name: 'Programmation',
    component: () => import(/* webpackChunkName: "about" */ '../views/Programmation.vue'),
    children: [
        {
          path:'new',
          name: 'NewCollecte',
          component: () => import(/* webpackChunkName: "about" */ '../views/CollecteNew.vue')
        }
    ]
  },
  {
    path:'/programmation/:id',
    name: 'CollectesByType',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProgrammationCollectes.vue'),
    children: [
        {
          path:':idCollecte/edit',
          name: 'EditCollecte',
          component: () => import(/* webpackChunkName: "about" */ '../views/CollecteEdit.vue')
        }
    ]
  },

  {
    path: '/collecte',
    name: 'collecte', 
    component: () => import(/* webpackChunkName: "about" */ '../views/Collecte.vue'),
    children: [
      {
        path:'new',
        name: 'UnexpectedCollecte',
        component: () => import(/* webpackChunkName: "about" */ '../views/CollecteNewUnexpected.vue')
      }
    ]
  },

  {
    path:'/collecte/:id',
    name:'collecteKN',
    component: () => import(/* webpackChunkName: "about" */ '../views/CollecteKN.vue'),
    children: [
      {
        path: 'bloc/:bloc',
        name: 'collecteKnBloc',
        component: () => import('../views/Bloc.vue')
      },
      {
        path:'collecte-end',
        name: 'CollectKnEnd',
        component: () => import('../views/CollecteKNEnd.vue'),
        // children: [
        //   {
        //     path:'collecte-Control',
        //     name: 'CollecteControl',
        //     component: () => import('../views/CollecteControl.vue')
        //   },
        // ],
      },
      {
        path:'collecte-verif',
        name: 'CollecteVerif',
        component: () => import('../views/CollecteVerif.vue')
      },
      {
        path:'next',
        name: 'CollecteNext',
        component: () => import('../views/CollecteNext.vue')
      },

    ]
  },

  {
    path: '/consultation',
    name: 'consultation',
    component: () => import("../views/Consultation.vue"),
  },

  {
    path: '/consultation/:idCollecte',
    name: 'consultationCollecte',
    component: () => import("../views/ConsultationCollecte.vue")
  },

  {
    path: '/consultation/projet',
    name: 'consultationProjet',
    component: () => import("../views/ConsultationProjet.vue"),
  },
    {
    path:'/consultation/projet/:idProjet',
    name: 'consultationProjetList',
    component: () => import("../views/ConsultationProjetList.vue"),

      children: [
        {
          path:':idCollecte',
          name: 'consultationProjetCollecte',
          component: () => import(/* webpackChunkName: "about" */ '../views/ConsultationProjetCollecte.vue')
        }
      ]

  },
  
  {
    path: '/consultation/formulaire',
    name: 'consultationForm',
    component: () => import("../views/ConsultationForm.vue"),
  },
  {
    path:'/consultation/formulaire/:idFormulaire',
    name: 'consultationFormList',
    component: () => import("../views/ConsultationFormList.vue"),
    
      children: [
        {
          path:':idCollecte',
          name: 'consultationFormCollecte',
          component: () => import(/* webpackChunkName: "about" */ '../views/ConsultationFormCollecte.vue')
        }
      ]

  },
  {
    path: '/qualite_1',
    name: 'qualite_1',
    component: () => import("../views/QualiteNiveau1.vue"),
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
